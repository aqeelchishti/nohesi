import { BASE_URL } from '$env/static/private';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { client } from '$lib/server/auth.js';
import { generateVerificationEmail } from '$lib/utils/index.js';
import { Prisma } from '@prisma/client';
import { error, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';

export const actions = {
	signup: async ({ request }) => {
		const data = await request.formData();
		console.log('🚀 ~ default: ~ data:', data);
		const name = data.get('name');
		const uname = data.get('uname');
		const email = data.get('email');
		const password = data.get('password');
		const cPassword = data.get('cpassword');

		if (
			email === null ||
			email === '' ||
			password === null ||
			password === '' ||
			cPassword === null ||
			cPassword === '' ||
			name === null ||
			name === '' ||
			uname === null ||
			uname === ''
		) {
			return fail(400, { email, name, uname, error: 'Missing Values!' });
		}

		if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\S)[a-zA-Z\d\S]{8,16}$/.test(password.toString()) &&
			!/[^a-zA-Z\d\s]/.test(password.toString())
		) {
			return fail(400, { email, name, uname, error: 'Invalid password!' });
		}

		if (password !== cPassword) {
			return fail(400, { email, name, uname, error: 'Password mismatch!' });
		}

		if (
			!/^[a-z][a-z0-9_]*$/.test(uname.toString()) ||
			uname.toString().length < 5 ||
			uname.toString().length > 25
		) {
			return fail(400, { email, name, uname, error: 'Invalid username!' });
		}
		try {
			const existingUser = await client.user.findUnique({ where: { email: email.toString() } });

			if (existingUser) {
				return fail(400, { email, name, uname, error: 'Email already registered!' });
			} else {
				const hashedPassword = await new Argon2id().hash(password.toString());
				const newUser = await client.user.create({
					data: {
						email: email.toString(),
						name: uname.toString(),
						password: hashedPassword,
						email_verified: false
					}
				});

				const tokenResp = await fetch('/api/verification-token', {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ userId: newUser.id, email: email.toString() })
				});

				const { token } = await tokenResp.json();
				const verificationLink = `${BASE_URL}/email-verification?code=${token}`;

				await fetch(`${PUBLIC_BACKEND_URL}/functions/send-email`, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({
						name: newUser.name,
						sender: email,
						body: generateVerificationEmail(newUser.name!, verificationLink),
						subject: `Verify Your Email Address for NoHesi`
					})
				});
			}
		} catch (e) {
			console.log(e);
			if (e instanceof Prisma.PrismaClientKnownRequestError) {
				return fail(401, { email, name, uname, error: 'Failed to create user!' });
			}
			error(500, 'unknown error');
		}
		redirect(303, `/verify-email?mail=${email}`);
	}
};

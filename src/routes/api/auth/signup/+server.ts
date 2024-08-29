import { BASE_URL } from '$env/static/private';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { client } from '$lib/server/auth.js';
import { generateVerificationEmail } from '$lib/utils/index.js';
import { Prisma } from '@prisma/client';
import { type RequestHandler } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';


export const POST: RequestHandler = async ({ request }) => {
	const data = await request.json();
	console.log('🚀 ~ default: ~ data:', data);
	const name = data.name;
	const uname = data.uname;
	const email = data.email;
	const password = data.password;
	const cPassword = data.cpassword;

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
		return new Response(
			JSON.stringify({
				email,
				name,
				uname,
				error: 'Missing Values!'
			}),
			{
				status: 400
			}
		);
	}

	if (
		!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\S)[a-zA-Z\d\S]{8,16}$/.test(password.toString()) &&
		!/[^a-zA-Z\d\s]/.test(password.toString())
	) {
		return new Response(
			JSON.stringify({
				email,
				name,
				uname,
				error: 'Invalid password!'
			}),
			{
				status: 400
			}
		);
	}

	if (password !== cPassword) {
		return new Response(
			JSON.stringify({
				email,
				name,
				uname,
				error: 'Password mismatch!'
			}),
			{
				status: 400
			}
		);
	}

	if (
		!/^[a-z][a-z0-9_]*$/.test(uname.toString()) ||
		uname.toString().length < 5 ||
		uname.toString().length > 25
	) {
		return new Response(
			JSON.stringify({
				email,
				name,
				uname,
				error: 'Invalid username!'
			}),
			{
				status: 400
			}
		);
	}
	try {
		const existingUser = await client.user.findUnique({ where: { email: email.toString() } });

		if (existingUser) {
			return new Response(
				JSON.stringify({
					email,
					name,
					uname,
					error: 'Email already registered!'
				}),
				{
					status: 400
				}
			);
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
			return new Response(
				JSON.stringify({
					email,
					name,
					uname,
					error: 'Failed to create user!'
				}),
				{
					status: 401
				}
			);
		}
		return new Response(
			JSON.stringify({
				email,
				name,
				uname,
				error: 'Unknown error!'
			}),
			{
				status: 500
			}
		);
	}
	console.log('successfull');
	return new Response(
		JSON.stringify({
			email,
			name,
			uname,
			error: null
		}),
		{
			status: 200
		}
	);
};

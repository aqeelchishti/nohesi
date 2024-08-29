import { client, lucia } from '$lib/server/auth.js';
import { error, fail } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';

export const load = async ({ cookies, url }) => {
	const error = url.searchParams.get('error');
	const sid = cookies.get(lucia.sessionCookieName);
	return {
		sid,
		error
	};
};

export const actions = {
	'change-password': async ({ request, cookies }) => {
		const sid = cookies.get(lucia.sessionCookieName);

		if (!sid) {
			error(403, 'Unauthorized request!');
		}

		const { user } = await lucia.validateSession(sid);

		if (!user) {
			await lucia.invalidateSession(sid);
			const sessionCookie = lucia.createBlankSessionCookie();
			cookies.set(sessionCookie.name, sessionCookie.value, {
				path: '.',
				...sessionCookie.attributes
			});

			error(403, 'Unauthorized request!');
		}

		const data = await request.formData();
		const oldPsassword = data.get('oldPassword');
		const password = data.get('password');
		const cPassword = data.get('cpassword');

		if (
			password === null ||
			password === '' ||
			cPassword === null ||
			cPassword === '' ||
			oldPsassword === null
		) {
			return fail(400, { error: 'Missing Values!' });
		}

		if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\S)[a-zA-Z\d\S]{8,16}$/.test(password.toString()) &&
			!/[^a-zA-Z\d\s]/.test(password.toString())
		) {
			return fail(400, { error: 'Invalid password!' });
		}
		if (password.toString() === oldPsassword.toString()) {
			return fail(400, { error: 'Passwoord cannot be same as old password!' });
		}

		if (password.toString() !== cPassword.toString()) {
			return fail(400, { error: 'Password mismatch!' });
		}

		try {
			const existingUser = await client.user.findUnique({ where: { id: user.id } });

			if (existingUser) {
				if (existingUser.password) {
					if (!(await new Argon2id().verify(existingUser.password, oldPsassword.toString()))) {
						return fail(400, { error: 'Old password did not match!' });
					}
				}

				const hashedPassword = await new Argon2id().hash(password.toString());
				await client.user.update({ where: { id: user.id }, data: { password: hashedPassword } });
				return { success: true };
			}
		} catch (e) {
			console.log(e);

			return error(500, 'Unknown error!');
		}
	}
};

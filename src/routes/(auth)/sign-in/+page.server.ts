import { client, lucia } from '$lib/server/auth.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';

export const load = async ({ url }) => {
	const error = url.searchParams.get('error');
	return {
		error
	};
};

export const actions = {
	default: async ({ request, cookies }) => {
		let verified = true;
		const data = await request.formData();
		const email = data.get('email');
		const password = data.get('password');

		if (email === null || email === '' || password === null || password === '') {
			return fail(400, { email, error: 'Missing Values!' });
		}
		try {
			const user = await client.user.findUnique({
				where: { email: email.toString(), password: { not: null } }
			});

			if (user) {
				if (await new Argon2id().verify(user.password!, password!.toString())) {
					if (user.email_verified) {
						const session = await lucia.createSession(user.id, {});
						const sessionCookie = lucia.createSessionCookie(session.id);
						cookies.set(sessionCookie.name, sessionCookie.value, {
							path: '/',
							...sessionCookie.attributes
						});
					} else {
						verified = false;
					}
				} else {
					return fail(400, { email, error: 'Email or password is incorrect!' });
				}
			} else {
				return fail(400, { email, error: 'Email or password is incorrect!' });
			}
		} catch (e) {
			console.log(e);
			error(500, 'unknown error');
		} finally {
		}

		if (verified) {
			const launcher_auth = cookies.get('launcher-auth')
			return {
				success: true,
				launcher_auth
			}
		} else {
			redirect(302, `/verify-email?mail=${email}`);
		}
	}
};

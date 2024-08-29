import { client } from '$lib/server/auth.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { isWithinExpirationDate } from 'oslo';
import { Argon2id } from 'oslo/password';

export const load = async ({ request }) => {
	const url = new URL(request.url);
	const code = url.searchParams.get('code');

	if (!code) {
		const params = new URLSearchParams({
			error: 'Invalid request'
		});
		redirect(302, `/sign-in?${params.toString()}`);
	}

	try {
		const resetToken = await client.password_reset_token.findUnique({ where: { id: code } });

		if (resetToken) {
			await client.password_reset_token.delete({ where: { id: code } });

			if (!isWithinExpirationDate(resetToken.expires_at)) {
				const params = new URLSearchParams({
					error: 'Invalid token'
				});
				redirect(302, `/sign-in?${params.toString()}`);
			}

			const user = await client.user.findUnique({ where: { email: resetToken.email } });

			if (user) {

				return {
					id: user.id,
					email: user.email
				};
			} else {
				const params = new URLSearchParams({
					error: 'Invalid token'
				});
				redirect(302, `/sign-in?${params.toString()}`);
			}
		} else {
			const params = new URLSearchParams({
				error: 'Invalid token'
			});
			redirect(302, `/sign-in?${params.toString()}`);
		}
	} catch (e) {
		console.log('🚀 ~ constGET:RequestHandler= ~ e:', e);
		error(500, 'unknown error');
	}
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const pass = data.get('password');
		const cPass = data.get('cpassword');
		const uid = data.get('id');

		if (pass === '' || pass === null || cPass === null || cPass === '') {
			return fail(400, { msg: 'Empty Password!' });
		}

		if (
			!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\S)[a-zA-Z\d\S]{8,16}$/.test(pass.toString()) &&
			!/[^a-zA-Z\d\s]/.test(pass.toString())
		) {
			return fail(400, { error: 'Invalid password!' });
		}

		if (pass !== cPass) {
			return fail(400, { msg: 'Password mismatch!' });
		}

		try {
			const hashedPassword = await new Argon2id().hash(pass.toString());

			const updatedUser = await client.user.update({
				where: { id: uid!.toString() },
				data: { password: hashedPassword }
			});
		} catch (e) {
			console.log('🚀 ~ default: ~ error:', e);
			error(500, 'unknown error');
		}
		redirect(303, '/sign-in');
	}
};

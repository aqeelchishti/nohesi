import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { client, lucia } from '$lib/server/auth.js';
import { redirect } from '@sveltejs/kit';

export const load = async ({ cookies, locals }) => {
	const token = cookies.get('launcher-auth');
	const sid = cookies.get(lucia.sessionCookieName);

	if (!token) {
		redirect(302, '/');
	}

	if (!sid) {
		redirect(302, '/');
	}

	if (locals.user) {
		const { id: userId, email } = locals.user;
		const { data: auth_token } = await (
			await fetch(`${PUBLIC_BACKEND_URL}/functions/generate-token`)
		).json();
		await client.launcher_auth_token.updateMany({
			where: { launcher_token: token },
			data: { user_id: userId, auth_token: auth_token }
		});

		const { data: encrypted_token } = await (
			await fetch(`${PUBLIC_BACKEND_URL}/functions/encrypt-token`, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({text: `${token}:${auth_token}`})
			})
		).json();

		return {
			auth_token: encrypted_token,
			email
		};
	}
};

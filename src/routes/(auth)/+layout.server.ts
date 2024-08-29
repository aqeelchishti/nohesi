import { redirect } from '@sveltejs/kit';
import { client, lucia } from '$lib/server/auth.js';
import { isWithinExpirationDate } from 'oslo';

export const load = async ({ cookies, url }) => {
	const launcher = url.searchParams.get('auth_device');
	const code = url.searchParams.get('auth_challenge');
	const sid = cookies.get(lucia.sessionCookieName);
	let validToken = false;

	if (launcher && launcher === 'launcher' && code) {
		const token = await client.launcher_auth_token.findFirst({ where: { launcher_token: code } });

		if (token) {
			if (isWithinExpirationDate(token.expires_at)) {
				validToken = true;
				cookies.set('launcher-auth', token.launcher_token, {
					httpOnly: true,
					path: '/',
					expires: token.expires_at
				});
			}
		}
	}
	if (sid && validToken) {
		redirect(302, '/redirect');
	} else if (sid) {
		redirect(302, '/user/home');
	}
};

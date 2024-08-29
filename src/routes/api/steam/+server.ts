import { lucia, steam } from '$lib/server/auth';
import { fail, redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ cookies }) => {
	const sid = cookies.get(lucia.sessionCookieName);

	if (sid) {
		const { session, user } = await lucia.validateSession(sid);
		if (user) {
			const redirectUrl = await steam.getRedirectUrl();
			redirect(302, redirectUrl);
		}
		throw fail(403);
	}

	throw fail(403);
};

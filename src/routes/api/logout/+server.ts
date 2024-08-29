import { lucia } from '$lib/server/auth';
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ locals }) => {
	const session = locals.session;
	if (!session) {
		return new Response(null, { status: 400 });
	}
	try {
		await lucia.invalidateSession(session.id);
	} catch (error) {}
	const sessionCookie = lucia.createBlankSessionCookie();
	return new Response(null, {
		status: 302,
		headers: {
			'Set-Cookie': sessionCookie.serialize(),
			'Referrer-Policy': 'no-referrer'
		}
	});
};

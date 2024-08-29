import { lucia, client } from '$lib/server/auth';
import { error, type RequestHandler } from '@sveltejs/kit';
import { isWithinExpirationDate } from 'oslo';

export const GET: RequestHandler = async ({ url, cookies }) => {
	const code = url.searchParams.get('code');

	if (!code) {
		return new Response(null, {
			status: 400
		});
	}
	try {
		const magicToken = await client.magic_link.findUnique({ where: { id: code } });

		if (!magicToken) {
			return new Response(null, {
				status: 400
			});
		} else {
			await client.magic_link.delete({ where: { id: code } });
		}

		if (!isWithinExpirationDate(magicToken.expires_at!)) {
			return new Response(null, {
				status: 400
			});
		}

		const user = await client.user.findUnique({ where: { email: magicToken.email! } });

		if (!user) {
			return new Response(null, {
				status: 400
			});
		}

		// await lucia.invalidateUserSessions(user.id);

		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		const launcher_auth = cookies.get('launcher-auth');

		if (launcher_auth) {
			return new Response(null, {
				status: 302,
				headers: {
					Location: '/redirect',
					'Set-Cookie': sessionCookie.serialize(),
					'Referrer-Policy': 'no-referrer'
				}
			});
		}
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/user/home',
				'Set-Cookie': sessionCookie.serialize(),
				'Referrer-Policy': 'no-referrer'
			}
		});
	} catch (e) {
		console.log('🚀 ~ constGET:RequestHandler= ~ e:', e);
		error(500, 'unknown error');
	}
};

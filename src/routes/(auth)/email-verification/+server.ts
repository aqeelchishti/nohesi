import { lucia, client } from '$lib/server/auth';
import type { RequestHandler } from '@sveltejs/kit';
import { isWithinExpirationDate } from 'oslo';

export const GET: RequestHandler = async ({ url }) => {
	const code = url.searchParams.get('code');

	if (!code) {
		return new Response(null, {
			status: 400
		});
	}
	try {
		

		const verificationToken = await client.email_verification_token.findUnique({where: {id: code}})
	
		if (!verificationToken) {
			return new Response(null, {
				status: 400
			});
		} else {
			await client.email_verification_token.delete({where: {id: code}})
		}
	
		if (!isWithinExpirationDate(verificationToken.expires_at)) {
			return new Response(null, {
				status: 400
			});
		}


		const user = await client.user.findUnique({where: {id: verificationToken.user_id}}) 
		
		if (!user) {
			return new Response(null, {
				status: 400
			});
		} 
	
		if (user.email !== verificationToken.email) {
			return new Response(null, {
				status: 400
			});
		}
	
		// await lucia.invalidateUserSessions(user.id);

		await client.user.update({where: {id: user.id}, data: {email_verified: true}})
	
		const session = await lucia.createSession(user.id, {});
		const sessionCookie = lucia.createSessionCookie(session.id);
		return new Response(null, {
			status: 302,
			headers: {
				Location: '/user/home',
				'Set-Cookie': sessionCookie.serialize(),
				'Referrer-Policy': 'no-referrer'
			}
		});
	} catch (error) {
		console.log("🚀 ~ constGET:RequestHandler= ~ error:", error)
		return new Response(null, {
			status: 500
		});
	}
};

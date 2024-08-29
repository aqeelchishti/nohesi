import { BASE_URL } from '$env/static/private';
import { client } from '$lib/server/auth';
import type { RequestHandler } from '@sveltejs/kit';
import { generateId } from 'lucia';
import { createDate, TimeSpan } from 'oslo';

export const POST: RequestHandler = async ({ request }) => {
	const { userId, email } = await request.json();

	try {
		try {
			await client.email_verification_token.delete({ where: { user_id: userId } });
		} catch (error) {
			// pass
		}
		const tokenId = generateId(40);

		await client.email_verification_token.create({
			data: {
				id: tokenId,
				user_id: userId,
				email: email,
				expires_at: createDate(new TimeSpan(1, 'h')).toISOString()
			}
		});

		const verificationUrl = `${BASE_URL}/email-verification?code=${tokenId}`;

		return new Response(JSON.stringify({ token: tokenId, verificationUrl }), {
			status: 200
		});
	} catch (error) {
		console.log(error);
		return new Response('', {
			status: 400
		});
	}
};

import { client, lucia, steam } from '$lib/server/auth';
import { fail, redirect, type RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = async ({ request, cookies }) => {
	const sid = cookies.get(lucia.sessionCookieName);

	if (sid) {
		const { session, user } = await lucia.validateSession(sid);

		if (user) {
			const steamDetails = await steam.authenticate(request);

			const alreadyConnected = await client.oauth_account.findUnique({
				where: {
					provider_id_provider_user_id: {
						provider_id: 'steam',
						provider_user_id: steamDetails.steamid
					}
				}
			});

			if (!alreadyConnected) {
				await client.oauth_account.create({
					data: {
						provider_id: 'steam',
						provider_user_id: steamDetails.steamid,
						user_id: user.id,
						provider_metadata: steamDetails._json
					}
				});

				await client.user.update({
					where: {
						id: user.id
					},
					data: {
						tries_left: { decrement: 1 }
					}
				});

				redirect(302, '/user/edit-profile');
			} else {
				const searchParams = new URLSearchParams({
					error: 'Already associated with another account!'
				});
				return new Response(null, {
					status: 302,
					headers: {
						Location: `/user/edit-profile?${searchParams.toString()}`
					}
				});
			}
		}

		throw fail(403);
	}

	throw fail(403);
};

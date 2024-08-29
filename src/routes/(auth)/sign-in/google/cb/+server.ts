import { client, google, lucia } from '$lib/server/auth';
import { error, type RequestHandler } from '@sveltejs/kit';
import { OAuth2RequestError } from 'arctic';

export const GET: RequestHandler = async ({ request, cookies }) => {
	const sid = cookies.get(lucia.sessionCookieName);
	const stateCookie = cookies.get('google_oauth_state') ?? null;
	const codeVerifier = cookies.get('code_verifier') ?? null;

	const url = new URL(request.url);
	const state = url.searchParams.get('state');
	const code = url.searchParams.get('code');

	if (!state || !stateCookie || !code || stateCookie !== state || !codeVerifier) {
		return new Response(null, {
			status: 400
		});
	}

	try {
		const tokens = await google.validateAuthorizationCode(code, codeVerifier);

		const response = await fetch('https://openidconnect.googleapis.com/v1/userinfo', {
			headers: {
				Authorization: `Bearer ${tokens.accessToken}`
			}
		});
		const user = await response.json();

		const existingUser = await client.oauth_account.findFirst({
			where: { provider_user_id: user.sub }
		});

		if (sid) {
			const { user: currentUser, session } = await lucia.validateSession(sid);
			if (currentUser) {
				if (existingUser) {
					const searchParams = new URLSearchParams({
						error: 'Already associated with another account!'
					});
					return new Response(null, {
						status: 302,
						headers: {
							Location: `/user/edit-profile?${searchParams.toString()}`
						}
					});
				} else {
					await client.oauth_account.create({
						data: {
							provider_id: 'google',
							provider_user_id: user.sub,
							user_id: currentUser.id,
							provider_metadata: user
						}
					});

					return new Response(null, {
						status: 302,
						statusText: 'Account connected successfully!',
						headers: {
							Location: '/user/edit-profile'
						}
					});
				}
			} else {
				const sessionCookie = lucia.createBlankSessionCookie();
				return new Response(null, {
					status: 403,
					statusText: 'Unauthorized access!',
					headers: {
						Location: '/',
						'Set-Cookie': sessionCookie.serialize(),
						'Referrer-Policy': 'no-referrer'
					}
				});
			}
		} else {
			if (existingUser) {
				if (existingUser.user_id) {
					const session = await lucia.createSession(existingUser.user_id, {});
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
				} else {
					const urlParams = new URLSearchParams({
						pid: user.sub,
						p: 'google',
						email: user.email || ''
					});

					const params = Buffer.from(urlParams.toString()).toString('base64');
					return new Response(null, {
						status: 302,
						headers: {
							Location: `/create-username?p=${params}`,
							'Referrer-Policy': 'no-referrer'
						}
					});
				}
			} else {
				const existingUser2 = await client.user.findUnique({
					where: { email: user.email },
					include: { oauth_account: true }
				});

				if (existingUser2 && !existingUser2.oauth_account.find((e) => e.provider_id === 'google')) {
					const uid = existingUser2.id;

					await client.oauth_account.create({
						data: {
							provider_id: 'google',
							provider_user_id: user.sub,
							user_id: uid,
							provider_metadata: user
						}
					});

					const session = await lucia.createSession(uid, {});
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
				} else if (!existingUser2) {
					await client.oauth_account.create({
						data: {
							provider_id: 'google',
							provider_user_id: user.sub,
							provider_metadata: user
						}
					});

					const urlParams = new URLSearchParams({
						pid: user.sub,
						p: 'google',
						email: user.email || ''
					});

					const params = Buffer.from(urlParams.toString()).toString('base64');
					return new Response(null, {
						status: 302,
						headers: {
							Location: `/create-username?p=${params}`,
							'Referrer-Policy': 'no-referrer'
						}
					});
				} else {
					const searchParams = new URLSearchParams({
						error:
							'The email with your google account is already registered with some other account!'
					});
					return new Response(null, {
						status: 302,
						headers: {
							Location: `/sign-in?${searchParams.toString()}`
						}
					});
				}
			}
		}
	} catch (e) {
		console.log('🚀 ~ constGET:RequestHandler= ~ e:', e);
		if (e instanceof OAuth2RequestError) {
			// bad verification code, invalid credentials, etc
			return new Response(null, {
				status: 400
			});
		}

		console.log(Object.keys(e as Object), Object.values(e as Object));
		error(500, 'unknown error');
	}
};

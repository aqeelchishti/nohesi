import { client, lucia } from '$lib/server/auth.js';
import { type RequestHandler } from '@sveltejs/kit';
import { Argon2id } from 'oslo/password';

export const POST: RequestHandler = async ({ request, cookies }) => {
	const data = await request.json();
	console.log('🚀 ~ default: ~ data:', data);
	const email = data.email;
	const password = data.password;
	let verified = true;

	if (email === null || email === '' || password === null || password === '') {
		return new Response(
			JSON.stringify({
				email,
				launcher_auth: null,
				success: false,
				error: 'Missing Values!'
			}),
			{
				status: 400
			}
		);
	}

	try {
		const user = await client.user.findUnique({
			where: { email: email.toString(), password: { not: null } }
		});

		if (user) {
			if (await new Argon2id().verify(user.password!, password!.toString())) {
				if (user.email_verified) {
					const session = await lucia.createSession(user.id, {});
					const sessionCookie = lucia.createSessionCookie(session.id);
					cookies.set(sessionCookie.name, sessionCookie.value, {
						path: '/',
						...sessionCookie.attributes
					});
				} else {
					verified = false;
				}
			} else {
				return new Response(
					JSON.stringify({
						email,
						launcher_auth: null,
						success: false,
						error: 'Email or password is incorrect!'
					}),
					{
						status: 400
					}
				);
			}
		} else {
			return new Response(
				JSON.stringify({
					email,
					launcher_auth: null,
					success: false,
					error: 'Email or password is incorrect!'
				}),
				{
					status: 400
				}
			);
		}
	} catch (e) {
		console.log(e);
		return new Response(
			JSON.stringify({
				email,
				launcher_auth: null,
				success: false,
				error: 'Unknown error!'
			}),
			{
				status: 500
			}
		);
	}

	console.log('successfull');
	if (verified) {
		const launcher_auth = cookies.get('launcher-auth');
		return new Response(
			JSON.stringify({
				email: undefined,
				launcher_auth,
				success: true,
				error: null
			}),
			{
				status: 200
			}
		);
	} else {
		return new Response(
			JSON.stringify({
				email,
				launcher_auth: null,
				success: true,
				error: null
			}),
			{
				status: 200
			}
		);
	}
};

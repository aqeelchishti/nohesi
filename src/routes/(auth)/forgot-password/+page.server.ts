import { BASE_URL } from '$env/static/private';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { client } from '$lib/server/auth.js';
import { generateResetEmail } from '$lib/utils/index.js';
import { error, fail, redirect } from '@sveltejs/kit';
import { generateId } from 'lucia';
import { TimeSpan, createDate } from 'oslo';

const createResetPassToken = async (email: string): Promise<string> => {
	try {
		try {
			await client.password_reset_token.delete({ where: { email: email } });
		} catch (error) {
			// pass
		}
		const tokenId = generateId(40);
		await client.password_reset_token.create({
			data: {
				id: tokenId,
				email: email,
				expires_at: createDate(new TimeSpan(1, 'd')).toISOString()
			}
		});

		return tokenId;
	} catch (error) {
		console.log(error);
		return '';
	}
};

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('mail');

		if (email === null || email === '') {
			return fail(400, { email, error: 'Missing Values!' });
		}

		try {
			const user = await client.user.findUnique({ where: { email: email.toString() } });

			if (user) {
				const token = await createResetPassToken(email.toString());
				const verificationLink = `${BASE_URL}/reset-password?code=${token}`;
				const name = user.name;
				await fetch(`${PUBLIC_BACKEND_URL}/functions/send-email`, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({
						name,
						sender: email,
						body: generateResetEmail(name!, verificationLink),
						subject: `Reset Your NoHesi Account Password`
					})
				});
			} else {
				return fail(400, { email, error: 'No user is found associated with the email address!' });
			}
		} catch (e) {
			console.log('🚀 ~ constGET:RequestHandler= ~ e:', e);
			error(500, 'unknown error');
		}

		redirect(303, `/verify-email?mail=${email}`);
	}
};

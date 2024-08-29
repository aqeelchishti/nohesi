import { BASE_URL } from '$env/static/private';
import { PUBLIC_BACKEND_URL } from '$env/static/public';
import { client } from '$lib/server/auth';
import { generateMagicEmail } from '$lib/utils';
import { error, type RequestHandler } from '@sveltejs/kit';
import { generateId } from 'lucia';
import { createDate, TimeSpan } from 'oslo';

const createMagicLinkToken = async (email: string): Promise<string> => {
	try {
		try {
			await client.magic_link.delete({ where: { email: email } });
		} catch (error) {
			// pass
		}
		const tokenId = generateId(40);

		await client.magic_link.create({
			data: {
				id: tokenId,
				email: email,
				expires_at: createDate(new TimeSpan(15, 'm')).toISOString()
			}
		});
		return tokenId;
	} catch (error) {
		console.log(error);
		return '';
	}
};

export const GET: RequestHandler = async ({ request }) => {
	const url = new URL(request.url);
	const mail = url.searchParams.get('mail');

	if (!mail) {
		return new Response(null, {
			status: 400
		});
	}

	try {
		const user = await client.user.findUnique({ where: { email: mail } });

		let name = '';

		if (user) {
			name = user.name!;
		} else {
			const newUser = await client.user.create({ data: { email: mail, name: mail.split('@')[0] } });
			name = newUser.name!;
		}

		const token = await createMagicLinkToken(mail);
		const verificationLink = `${BASE_URL}/sign-in/magic/cb?code=${token}`;

		await fetch(`${PUBLIC_BACKEND_URL}/functions/send-email`, {
			method: 'POST',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({
				sender: mail,
				body: generateMagicEmail(name, verificationLink),
				subject: `Your Magic Link to Access NoHesi`
			})
		});

		return new Response(null, {
			status: 200
		});
	} catch (e) {
		console.log('🚀 ~ constGET:RequestHandler= ~ e:', e);
		error(500, 'unknown error');
	}
};

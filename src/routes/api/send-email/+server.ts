import type { RequestHandler } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals }) => {
	const data = await request.json();

	const { data: res, error } = await locals.resend.emails.send({
		from: 'NoHesi <team@nohesi.gg>',
		to: [data.sender],
		subject: data.subject,
		html: data.body
	});

	return new Response(JSON.stringify(res), {
		status: 200
	});
};

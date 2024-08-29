import { redirect } from '@sveltejs/kit';

export const load = async ({ request }) => {
	const searchParams = new URLSearchParams(request.url.split('?')[1]);
	const mail = searchParams.get('mail');

	if (mail) return { mail };

	redirect(303, '/sign-in');
};

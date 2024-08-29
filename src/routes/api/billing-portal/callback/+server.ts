import { redirect } from '@sveltejs/kit';

export const GET = async () => {
	redirect(303, '/user/subscriptions');
};

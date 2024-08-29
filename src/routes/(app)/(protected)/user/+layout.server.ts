import { lucia } from '$lib/server/auth.js';

export const load = async ({ cookies }) => {
	const sid = cookies.get(lucia.sessionCookieName);
	console.log(sid);
	return {
		sid
	};
};

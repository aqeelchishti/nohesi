import { lucia } from '$lib/server/auth.js';

export const load = ({ cookies }) => {
	const sid = cookies.get(lucia.sessionCookieName);
	return { sid };
};

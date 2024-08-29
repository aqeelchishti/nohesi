import { lucia } from '$lib/server/auth.js';

// src/routes/+layout.server.ts
export const load = async ({ cookies }) => {
	const sid = cookies.get(lucia.sessionCookieName);

	return {
		sid
	};
};

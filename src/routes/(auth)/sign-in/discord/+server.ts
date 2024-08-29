import { dev } from '$app/environment';
import { discord } from '$lib/server/auth';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import { generateState } from 'arctic';

export const GET: RequestHandler = async ({ cookies }) => {
	const state = generateState();

	const url = await discord.createAuthorizationURL(state, {
		scopes: ['identify', 'email']
	});

	cookies.set('discord_oauth_state', state, {
		httpOnly: true,
		secure: !dev, // set `Secure` flag in HTTPS
		maxAge: 60 * 10, // 10 minutes
		path: '/'
	});

	redirect(302, url.toString());
};

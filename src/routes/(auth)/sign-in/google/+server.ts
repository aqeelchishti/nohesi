import { dev } from '$app/environment';
import { google } from '$lib/server/auth';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import { generateCodeVerifier, generateState } from 'arctic';

export const GET: RequestHandler = async ({ cookies }) => {
	const state = generateState();
	const verifier = generateCodeVerifier();

	const url = await google.createAuthorizationURL(state, verifier, {
		scopes: ['profile', 'email']
	});

	cookies.set('google_oauth_state', state, {
		httpOnly: true,
		secure: !dev, // set `Secure` flag in HTTPS
		maxAge: 60 * 10, // 10 minutes
		path: '/'
	});

	cookies.set('code_verifier', verifier, {
		httpOnly: true,
		secure: !dev, // set `Secure` flag in HTTPS
		maxAge: 60 * 10, // 10 minutes
		path: '/'
	});

	redirect(302, url.toString());
};

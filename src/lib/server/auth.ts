import { dev } from '$app/environment';
import SteamAuth from 'node-steam-openid'
import {
	BASE_URL,
	DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET,
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	STEAM_API_KEY
} from '$env/static/private';
import { Discord, Google } from 'arctic';
import { Lucia } from 'lucia';

import { PrismaAdapter } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';

export const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);

export const lucia = new Lucia(adapter, {
	sessionCookie: {
		attributes: {
			// set to `true` when using HTTPS
			secure: !dev
		}
	},
	getUserAttributes: (attributes) => {
		return {
			// attributes has the type of DatabaseUserAttributes
			email: attributes.email,
		};
	}
});

declare module 'lucia' {
	interface Register {
		Lucia: typeof lucia;
		DatabaseUserAttributes: DatabaseUserAttributes;
	}
}

interface DatabaseUserAttributes {
	email: string;
}

export const google = new Google(
	GOOGLE_CLIENT_ID,
	GOOGLE_CLIENT_SECRET,
	`${BASE_URL}/sign-in/google/cb`
);
export const discord = new Discord(
	DISCORD_CLIENT_ID,
	DISCORD_CLIENT_SECRET,
	`${BASE_URL}/sign-in/discord/cb`
);


export const steam = new SteamAuth({
    realm: BASE_URL,
    returnUrl: `${BASE_URL}/api/steam/cb`,
    apiKey: STEAM_API_KEY,
})
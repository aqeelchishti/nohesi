import { writable } from 'svelte/store';
import type { Car, LeaderboardInterface, Server } from './interfaces';

export const mobileMenu = writable(false);
export const scrollPage = writable(false);
export const userLoggedIn = writable(false);
export const currentPlan = writable(0);
export const notificationsToggle = writable(false);
export const profileMenuToggle = writable(false);

// export const isEmailSent = writable(false);
// export const isEmailVerified = writable(false);

export const discordConnected = writable(false);
export const toastMsg = writable({
	msg: '',
	desc: '',
	icon: 'Success'
});
export const toastIcon = writable('Success');

interface UserData {
	authenticated: boolean;
	email: string;
	username: string;
	displayPicture: string;
	discordId: string;
	customerId: string | null;
	country: string;
	level: number;
	connectedProviders: { provider: string; id: string, username:string }[] | null;
	triesLeft: number;
}
export const user = writable<UserData>({
	authenticated: false,
	email: '',
	username: '',
	displayPicture: '',
	discordId: '',
	customerId: null,
	country: '',
	level: 0,
	connectedProviders: null,
	triesLeft: 0
});

export const subscription = writable<App.Subscription | null>();

export const changeEmail = writable({
	loading: false,
	error: '',
	display: false
});

export const verifyOtpStore = writable({
	loading: false,
	error: '',
	changeRequested: false
});

export const discord = writable<any>({});

export const footerToggle = writable('');

interface _Role {
	role_id: string | null;
	name: string;
	level: number;
	tiers: any;
}

export const roles = writable<_Role[]>([]);

interface Trial {
	price_id: string;
	days: number;
}

export const trials = writable<Trial[]>([]);

export const subscriptionPlanLoading = writable('');
export const cars = writable<Car[]>([]);
export const servers = writable<Server[] | null>(null);
export const trending_servers = writable<Server[] | null>(null);
export const servers_pages = writable(0);
export const referal = writable('');
export const steamDetails = writable<string | null | LeaderboardInterface>(null);
export const websiteLoading = writable(true);
export const plans = writable<any | null>(null);
export const socialConnecting = writable<string | null>(null)
export const server_images = writable<string[] | null>(null);

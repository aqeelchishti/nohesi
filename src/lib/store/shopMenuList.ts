import { writable } from 'svelte/store';

export const shopMenuList = writable([
	{ title: 'Main', active: true },
	{ title: 'Collections', active: false },
	{ title: 'Bundles', active: false },
	{ title: 'Avatars', active: false },
	{ title: 'Driver tags', active: false },
	{ title: 'Badges', active: false }
]);

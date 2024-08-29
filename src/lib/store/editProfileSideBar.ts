import { writable } from 'svelte/store';

export const menuItems = writable([
	{ name: 'Profile decorations', isActive: true },
	{ name: 'Basic information', isActive: false },
	{ name: 'Privacy', isActive: false },
	{ name: 'Social links', isActive: false },
	{ name: 'Other settings', isActive: false }
]);

// +layout.ts
import { browser } from '$app/environment';
import '$lib/i18n'; // Import to initialize. Important :)
import { locale, waitLocale } from 'svelte-i18n';

export const load = async ({ fetch, data, depends }) => {
	if (browser) {
		locale.set(window.navigator.language);
	}
	await waitLocale();

	return { sid: data.sid };
};

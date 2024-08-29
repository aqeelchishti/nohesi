<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { toastMsg } from '$lib/stores';
	import Login from '../../../components/auth/login.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Toast from '../../../components/shared/toast.svelte';
	import type { ActionData } from './$types.js';

	export let data;
	$: ({ error } = data);

	export let form;

	const handleForm = async (form: ActionData) => {
		if (form!.error) {
			toastMsg.set({
				msg: form!.error,
				icon: 'Warning',
				desc: ''
			});
		} else if (form!.success && form?.launcher_auth) {
			goto('/redirect', { invalidateAll: true });
		} else if (form!.success) {
			goto('/user/home', { invalidateAll: true });
		}
	};

	$: if (form) handleForm(form);
	let redirect = $page.url.searchParams.get('redirect');

	const handleDiscord = async () => {
		goto('/sign-in/discord');
	};

	const handleGoogle = async () => {
		goto('/sign-in/google');
	};

	const handleSignup = async () => {
		goto('/signup');
	};

	const handleMagicLink = async (event: any) => {
		const email = event.detail.email;
		let resp = await fetch(`/sign-in/magic?mail=${email}`);

		if (resp.status === 200) {
			toastMsg.set({
				msg: 'Magic link sent!',
				desc: 'Please check your email for the link! Make sure to check your spam emails if you do not receive it. Contact support if you’re still having issues',
				icon: 'Success'
			});
		} else {
			toastMsg.set({
				msg: 'Internal Error',
				desc: 'Some error encountered, Try again in some time. If the error does not resolve try contacting us.',
				icon: 'Warning'
			});
		}
	};

	$: if (error) {
		toastMsg.set({
			icon: 'Warning',
			msg: error,
			desc: ''
		});
	}
</script>

<Seo title="SignIn" />

<Toast left="right-8 md:right-12" top="top-20" classes="z-50" />

<Login
	on:magicLink={handleMagicLink}
	on:discordLogin={handleDiscord}
	on:googleLogin={handleGoogle}
	on:signup={handleSignup}
/>

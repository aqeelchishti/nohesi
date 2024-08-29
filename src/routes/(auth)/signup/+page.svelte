<script lang="ts">
	import { goto } from '$app/navigation';
	import { toastMsg } from '$lib/stores';

	import Signup from '../../../components/auth/signup.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Toast from '../../../components/shared/toast.svelte';

	export let form;

	$: if (form?.error) {
		toastMsg.set({
			msg: form.error,
			icon: 'Warning',
			desc: ''
		});
	}

	const handleLogin = async () => {
		goto('/sign-in');
	};
</script>

<Seo title="SignUp" />

<Toast left="right-8 md:right-12" top="top-20" classes="z-50" />

<Signup on:login={handleLogin} />

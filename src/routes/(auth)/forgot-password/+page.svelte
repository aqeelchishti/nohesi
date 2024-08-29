<script>
	import { toastMsg } from '$lib/stores';
	import Passwordrecovery from '../../../components/auth/passwordrecovery.svelte';
	import Toast from '../../../components/shared/toast.svelte';

	export let form;

	$: if (form?.error) {
		toastMsg.set({
			msg: form.error,
			icon: 'Warning',
			desc: ''
		});
	}
</script>

<Toast left="right-8 md:right-12" top="top-20" classes="z-50" />

<Passwordrecovery />

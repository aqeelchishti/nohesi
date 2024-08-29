<script lang="ts">
	import { toastMsg } from '$lib/stores';
	import Resetpassword from '../../../components/auth/resetpassword.svelte';
	import Toast from '../../../components/shared/toast.svelte';

	export let data;
	export let form;

	$: if (form) {
		if (form.error) {
			toastMsg.set({
				msg: form.error,
				desc: '',
				icon: 'Warning'
			});
		}
	}

	$: ({ id } = data);
</script>

<Toast left="right-8 md:right-12" top="top-20" classes="z-50" />
<Resetpassword bind:id />

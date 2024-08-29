<script lang="ts">
	import Emailconfirm from '../../../components/auth/emailconfirm.svelte';
	export let data;

	$: ({ mail } = data);
</script>

<Emailconfirm bind:mail />

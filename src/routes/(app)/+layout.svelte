<script lang="ts">
	import { handleLogout } from '$lib/utils';
	import Footer from '../../components/nav/footer.svelte';
	import Header from '../../components/nav/header.svelte';

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<Header on:logout={handleLogout} />
<div class="w-full">
	<slot />
</div>
<Footer />

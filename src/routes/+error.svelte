<script lang="ts">
	import { goto } from '$app/navigation';
	import { footerToggle } from '$lib/stores';
	import { handleLogout } from '$lib/utils';
	import { onDestroy, onMount } from 'svelte';
	import Header from '../components/nav/header.svelte';
	import VioleteButton from '../components/shared/violeteButton.svelte';

	onMount(() => {
		footerToggle.set('hidden');
	});

	onDestroy(() => {
		footerToggle.set('');
	});

	const handleClick = () => {
		goto('/');
	};

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<Header on:logout={handleLogout} />

<div class="fixed inset-0 w-full">
	<div class="relative w-full h-full md:pl-1/10">
		{#if width >= 768}
			<img
				src="https://cdn.nohesi.gg/assets/website/images/404.webp"
				alt="Sorry, this no hesitation page is not found (404)"
				class="w-full h-full object-cover object-center"
			/>
		{:else}
			<img
				src="https://cdn.nohesi.gg/assets/website/images/404sm.webp"
				alt="Unfortunately we couldn't find this no hezee racing page."
				class="w-full absolute top-1/2 -translate-y-1/2 scale-110"
			/>
		{/if}
		<div
			class="flex flex-col gap-7 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center"
		>
			<div class="flex flex-col items-center gap-3">
				<h1 class="text-content-primary text-center">404</h1>
				<h6 class="text-content-primary">Page not found</h6>
			</div>
			<VioleteButton
				title="Go to main page"
				font="roboto"
				classes="w-max !font-bold"
				size="sm"
				on:click={handleClick}
			/>
		</div>
	</div>
</div>

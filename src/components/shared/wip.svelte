<script>
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';

	import VioleteButton from './violeteButton.svelte';
	import { footerToggle } from '$lib/stores';

	onMount(() => {
		footerToggle.set('hidden');
	});

	onDestroy(() => {
		footerToggle.set('');
	});

	const handleClick = () => {
		goto('/');
	};
</script>

<div class="fixed inset-0 w-full">
	<div class="relative w-full h-full">
		<img
			src="https://cdn.nohesi.gg/assets/website/images/work_in_progress.webp"
			alt="A group of yellow tape with black text, commonly used for traffic safety on no hesi."
			class="w-full h-full object-cover object-center"
		/>
		<div
			class="rounded-xl border border-border bg-top-dark-83 backdrop-blur-16 p-6 3xl:p-12 4xl:p-18 flex flex-col gap-10 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center"
		>
			<h1 class="text-content-primary text-center">Work in progress</h1>
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

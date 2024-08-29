<script lang="ts">
	import { onMount } from 'svelte';

	let largeImage: HTMLImageElement;
	let animation: HTMLElement;

	onMount(() => {
		if (largeImage && largeImage.complete && animation) {
			largeImage.classList.remove('opacity-0');
			animation.classList.remove('animate-pulse');
		}
	});
</script>

<main class="w-full h-screen flex justify-center items-center">
	<div
		class="bg-gray-300 animate-pulse asad bg-no-repeat bg-cover bg-center backdrop-blur-lg w-full h-screen"
		bind:this={animation}
	>
		<img
			src="/1.jpg"
			alt="Large"
			class="opacity-0 w-full h-full object-cover object-center"
			bind:this={largeImage}
		/>
	</div>
</main>

<style>
	.asad {
		background-image: url('/small.jpg');
	}
</style>

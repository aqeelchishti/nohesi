<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let question: string;
	export let answer: string;
	export let index: number;
	export let isOpen: boolean;

	$: iconColor = 'text-icon';

	let dispatch = createEventDispatcher();

	let toggleFAQ = (index: number) => {
		dispatch('message', {
			index: index
		});
	};

</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->

<div
	on:mouseenter={() => (iconColor = 'text-icon-accent')}
	on:mouseleave={() => (iconColor = 'text-icon')}
	on:click={() => toggleFAQ(index)}
	class={`cursor-pointer border border-border rounded-xl bg-top-light-2 ${
		isOpen ? '' : 'hover:bg-top-light-10 transition-all duration-500'
	} p-5 px-8`}
>
	<div class="flex justify-between items-center">
		<h5 class="text-content-primary">
			{question}
		</h5>
		<button class="flex justify-between items-center">
			{#if isOpen}
				<svg
					class={`w-5 h-5 fill-current ${iconColor}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7" />
				</svg>
			{:else}
				<svg
					class={`w-5 h-5 fill-current ${iconColor}`}
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			{/if}
		</button>
	</div>
	{#if isOpen}
		<p class="text-content-secondary font-inter text-lg mt-8">{answer}</p>
	{/if}
</div>

<script lang="ts">
	import type { filterInterface } from '$lib/interfaces';
	import { createEventDispatcher } from 'svelte';

	let dispatch = createEventDispatcher();

	export let filter: filterInterface;
	export let key: string;

	$: iconColor = 'text-icon';

	let toggleFilter = () => {
		dispatch('toggle', {
			key
		});
	};

	let setActiveFilter = (filterValue: any) => {
		dispatch('selectActive', {
			key,
			value: typeof filterValue === 'string' ? filterValue : filterValue.region
		});
	};
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="w-full">
	<div class="flex justify-between items-center px-3 cursor-pointer" on:click={toggleFilter}>
		<p class="text-content-primary font-inter font-bold">
			{filter.title}
		</p>
		<button class="flex justify-between items-center">
			{#if filter.isOpen}
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
	{#if filter.isOpen}
		<div class="flex gap-2 flex-wrap px-3 py-2 bg-background">
			{#each filter.values as value}
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					class:!bg-top-light-17={filter.active === value || filter.active === value.region}
					class:!font-medium={filter.active === value || filter.active === value.region}
					class="text-content-secondary text-sm bg-top-light-2 rounded-sm border border-border p-2 cursor-pointer"
					on:click={() => setActiveFilter(value)}
				>
					{typeof value === 'string' ? value : value.region}
				</p>
			{/each}
		</div>
	{/if}
</div>

<script lang="ts">
	import { page } from '$app/stores';
	import type { filterInterface } from '$lib/interfaces';
	import { equals } from 'ramda';
	import Filter from './filter.svelte';
	import { user } from '$lib/stores';

	export let filters: filterInterface[];
	export let filterToggler: boolean;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class:hidden={!filterToggler}
	class="flex bg-background absolute left-0 right-0 mt-2 w-full flex-col gap-3 border border-border rounded-sm py-3 z-30"
>
	{#each Object.entries(filters) as [key, filter]}
		{#if equals(key, 'favouriteServers')}
			{#if !$page.url.pathname.includes('user')}
				<Filter {key} {filter} on:toggle on:selectActive />
			{/if}
		{:else if equals(key, 'sortOptions')}
			<div class="hidden" />
		{:else}
			<Filter {key} {filter} on:toggle on:selectActive />
		{/if}
	{/each}
</div>

<script lang="ts">
	//import FavServersLoading from './favServersLoading.svelte';
	import type { Server } from '$lib/interfaces';
	import { _ } from 'svelte-i18n';
	import FavoriteServerTable from '../../servers/favoriteServerTable.svelte';
	import { onMount } from 'svelte';

	let FavServersLoading: any;
	export let serversData: Server[] | null;
	export let searchText: string;
	export let sortBy: string;
	export let loading: boolean = true;
	export let toggleStarLoading: boolean;

	onMount(async () => {
		FavServersLoading = (await import('./favServersLoading.svelte')).default;
	});
</script>

<div class="pt-10 flex flex-col gap-12">
	<h3 class="h3-inter text-content-primary">{$_('page.user.favServers.title')}</h3>
	{#if loading === true}
		<svelte:component this={FavServersLoading} />
	{:else}
		<FavoriteServerTable
			bind:searchText
			tableHeaderDisplay={true}
			bind:serversData
			bind:sortBy
			bind:loading
			bind:toggleStarLoading
			on:applyFilters
			on:applyCarsFilters
			on:clearFilters
			on:clearCarFilters
			on:toggleFavServer
		/>
	{/if}
</div>

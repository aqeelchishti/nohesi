<script lang="ts">
	import { onMount } from 'svelte';
	import ShopCard from './shopCard.svelte';

	export let shopItemsList;

	let isSkeletonLoading = true;
	let DriverTagLoading: any;

	onMount(async () => {
		DriverTagLoading = (await import('./driverTagsLoading.svelte')).default;
		setTimeout(() => (isSkeletonLoading = false), 5000);
	});
</script>

<div
	class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 {isSkeletonLoading === true
		? 'grid-rows-2'
		: 'grid-rows-4'} gap-6 justify-between"
>
	{#if isSkeletonLoading === true}
		{#each Array(6) as _}
			<svelte:component this={DriverTagLoading} />
		{/each}
	{:else}
		{#each shopItemsList as { name, price, summary, avatar, username, badge, views }}
			<ShopCard className="" {name} {price} {summary} {avatar} {username} {badge} {views} />
		{/each}
	{/if}
</div>

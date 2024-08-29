<script lang="ts">
	import { shopMenuList } from '$lib/store/shopMenuList';
	import ShopMenuItem from './shopMenuItem.svelte';

	const handleClick = (index: number) => {
		$shopMenuList.map((item: any, i: number) => {
			if (i !== index) {
				item.active = false;
			}
		});
		$shopMenuList[index].active = true;
	};

	$: console.log($shopMenuList);
</script>

<div class="flex flex-row gap-2 items-center flex-wrap justify-center w-auto overflow-x-scroll">
	{#each $shopMenuList as { title, active }, index}
		<ShopMenuItem {title} {active} on:click={() => handleClick(index)} />
	{/each}
</div>

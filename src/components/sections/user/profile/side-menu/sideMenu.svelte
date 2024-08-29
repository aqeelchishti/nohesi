<script lang="ts">
	import { menuItems } from '$lib/store/editProfileSideBar';
	import MenuItem from './menuItem.svelte';

	const handleClick = (index: number) => {
		$menuItems.map((item: any, i: number) => {
			if (i !== index) {
				item.isActive = false;
			}
		});
		$menuItems[index].isActive = true;
	};

	$: console.log($menuItems);
</script>

<ul class="flex flex-col w-full border border-border bg-top-light-2 rounded-md p-1 gap-1">
	{#each $menuItems as { name, isActive }, index}
		<MenuItem {name} {isActive} on:click={() => handleClick(index)} />
	{/each}
</ul>

<script lang="ts">
	import TierTag from './tierTag.svelte';

	export let tier: number;
	export let message: string;

	let tierIcon = '';

	if (tier === 0 || tier === 1) {
		tierIcon = 'Cube.svg';
	} else if (tier === 2) {
		tierIcon = 'CubeWhite.svg';
	} else if (tier === 3) {
		tierIcon = 'CubeOrange.svg';
	} else {
		tierIcon = 'CubeRed.svg';
	}

	let background = '';

	if (tier === 0 || tier === 1) {
		background = '!bg-top-light-2';
	} else if (tier === 2) {
		background = '!bg-top-light-17';
	} else if (tier === 3) {
		background = '!bg-primary-orange-bg-top';
	} else {
		background = '!bg-primary-red-bg-top';
	}
</script>

<div
	class="flex flex-col items-end absolute bg-transparent rounded-md bottom-8 -right-7 overflow-hidden w-[240px] sm:w-[300px]"
>
	<div
		class="p-3 pt-2 flex flex-col gap-3 bg-top-dark-83 rounded-md border border-border backdrop-blur-16 w-full"
	>
		{#if tier !== 1}
			<TierTag
				{tier}
				{tierIcon}
				classes={`w-max !p-0.5 !px-2 !pr-4 ${
					tier == 0 || tier == 1 ? '!gap-2' : '!gap-1'
				} ${background}`}
				textClasses={'!font-inter !normal-case !font-medium !text-sm !text-content-primary'}
				iconClasses={`${tier === 0 || tier == 1 ? 'h-5 w-5' : 'h-8 w-8'}`}
			/>
		{/if}
		<p class="text-sm text-content-primary font-medium w-full">{message}</p>
		<slot name="button" />
	</div>

	<div class="px-8 -mt-0.25 bg-transparent">
		<img src="/icons/Polygon-tooltip.svg" alt="cdn" class="h-2 w-6" />
	</div>
</div>

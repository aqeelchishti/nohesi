<script lang="ts">
	import { equals, has, prop } from 'ramda';
	import TierLevel from '../../shared/tierLevel.svelte';
	import { filters } from '$lib/store/favoriteServers';

	export let textClasses: string = '';
	export let type: 'searchByCar' | 'searchByRegion' = 'searchByRegion';

	$: selectedValues = Object.entries($filters.server).filter(([k, v]) => v?.length > 0);
	$: selectedCars = $filters.cars.searchByCar;

	$: selectedFilters = selectedValues
		.map(([k, v]) => v.length)
		.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

	function getLevel(item: string): number {
		const itemMap = {
			Public: 0,
			'Tier 1': 1,
			'Tier 2': 2,
			'Tier 3': 3,
			Certified: 4
		};

		const type = itemMap[item as 'Public' | 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Certified'];

		return type | 0;
	}
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
{#if type == 'searchByRegion'}
	<div class="relative flex gap-2">
		{#if selectedFilters > 0}
			<span
				class="absolute hidden max-sm:inline-flex items-center justify-center w-5 h-5 text-[12px] font-bold text-white bg-content-primary border-2 border-white rounded-full -top-4 -end-3 dark:border-gray-900"
			>
				{selectedFilters}
			</span>
		{/if}
		<img src="/icons/funnelOutline.svg" alt="cdn" class="shrink-0" />
		<div
			class={`flex items-center justify-center gap-2 font-roboto text-content-tertiary font-bold uppercase text-md slnt-10 ${textClasses}`}
		>
			<p class="whitespace-nowrap">Filter by</p>
			<div class="flex items-center justify-start flex-wrap gap-2 pr-2 max-sm:hidden">
				{#each selectedValues.filter(([k, v]) => k !== 'tier') as [k, values] (k)}
					{#if equals(k, 'tier')}
						<!-- <TierLevel
							tier={getLevel(values[0])}
							textClasses="!font-inter !text-xxs !text-normal capitalize "
							classes="!px-1 !py-0.5 !gap-1 !rounded-full "
							notificationNumber={values.length - 1}
						/> -->
					{:else}
						<div
							class="relative inline-flex bg-content-primary text-black px-2 rounded-full font-medium whitespace-nowrap"
						>
							{values[0]}
							{#if values.length > 1}
								<span
									class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
								>
									+{values.length - 1}
								</span>
							{/if}
						</div>
					{/if}
				{/each}
				{#each selectedValues.filter(([k, v]) => k == 'tier') as [k, values] (k)}
					<TierLevel
						tier={getLevel(values[0])}
						textClasses="!font-inter !text-xxs !text-normal capitalize "
						classes="!px-1 !py-0.5 !gap-1 !rounded-full "
						notificationNumber={values.length - 1}
					/>
				{/each}
			</div>
		</div>
	</div>
{:else}
	<div class="relative flex gap-2">
		{#if selectedCars.length > 0}
			<span
				class="absolute hidden max-sm:inline-flex items-center justify-center w-5 h-5 text-[12px] font-bold text-white bg-content-primary border-2 border-white rounded-full -top-4 -end-3 dark:border-gray-900"
			>
				{selectedCars.length}
			</span>
		{/if}
		<img src="/icons/Car.svg" alt="cdn" />
		<div
			class={`flex items-center justify-center gap-2 font-roboto text-content-tertiary font-bold uppercase text-md slnt-10 ${textClasses}`}
		>
			<p>Search by car</p>
			{#if selectedCars.length > 0}
				<div
					class="relative max-sm:hidden shrink inline-flex bg-content-primary text-black px-2 rounded-full max-w-[120px] font-medium capitalize"
				>
					<span class="truncate w-full">
						{selectedCars[0]
							.split('|')[0]
							.toLowerCase()
							.replace('nohesi_', '')
							.replace('nohesitunned_', '')
							.replaceAll('_', ' ')}
					</span>
					{#if selectedCars.length > 1}
						<span
							class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-white bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
						>
							+{selectedCars.length - 1}
						</span>
					{/if}
				</div>
			{/if}
		</div>
	</div>
{/if}

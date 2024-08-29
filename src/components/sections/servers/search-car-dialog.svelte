<script lang="ts">
	import { browser } from '$app/environment';
	import {
		availableCars,
		carsSort,
		filters,
		tiers,
		selectedCars,
		carSearch
	} from '$lib/store/servers';
	import { cars } from '$lib/stores';
	import * as R from 'ramda';
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { clickOutside } from '../../../actions/clickOutside';
	import Label from '../../shared/Label.svelte';
	import CarLabel from '../../shared/carLabel.svelte';
	import NewCarSort from '../../shared/newCarSort.svelte';
	import OutlinedButton from '../../shared/outlinedButton.svelte';
	import SortTeirButton from '../../shared/sortTeirButton.svelte';
	import VioleteButton from '../../shared/violeteButton.svelte';

	let confirmHandle = false;
	let labelsContainer: HTMLDivElement;

	const dispatch = createEventDispatcher();

	const debounceR = R.curry((config, fn) => {
		const { delay, initialInstant = false } = R.is(Number, config) ? { delay: config } : config;
		let timer: string | number | NodeJS.Timeout | null | undefined = null;
		let firstCall = false;
		return (...args: any) =>
			new Promise((resolve, reject) => {
				const safeCall = () => {
					try {
						resolve(fn.apply(window, args));
					} catch (e) {
						reject(e);
					}
				};
				if (!firstCall) {
					firstCall = true;
					if (initialInstant) {
						safeCall();
						return;
					}
				}
				if (!R.isNil(timer)) {
					clearTimeout(timer);
				}
				timer = setTimeout(safeCall, delay);
			});
	});

	let allCars = [
		...$cars.map((e) => ({
			...e,
			active:
				$filters.cars.searchByCar.includes(`${e.model}|${e.tier.join('|')}`) ||
				$selectedCars.find((s) => s.model === e.model)
					? true
					: false
		}))
	];

	$: filteredCars = sortCars([...allCars], $carsSort.active);

	const sortCars = (
		cars: { active: boolean; model: string; available: boolean; tier: number[] }[],
		sortOrder: string
	) => {
		const activeTiers = $tiers.filter((t) => t.active).map((e) => e.value);

		const selectedCars = cars.filter((e) => e.active);
		const remainingCars = cars.filter((e) => !e.active);

		const tempCars = activeTiers.map((e: number) => {
			return R.sort(
				(a, b) => a.tier.length - b.tier.length,
				remainingCars.filter((c) => c.tier.includes(e))
			);
		});

		if (sortOrder.toLowerCase().includes('descending')) {
			tempCars.reverse();
			return R.uniq([...selectedCars.concat(...tempCars)]);
		} else {
			return R.uniq([...selectedCars.concat(...tempCars)]);
		}
	};

	const filterCars = () => {
		if ($carSearch === '' && $tiers.every((e) => e.active) && !$availableCars) {
			filteredCars = sortCars(
				allCars.map((e) => ({
					...e,
					active:
						$filters.cars.searchByCar.includes(`${e.model}|${e.tier.join('|')}`) ||
						$selectedCars.find((s) => s.model === e.model)
							? true
							: false
				})),
				$carsSort.active
			);
		} else {
			filteredCars = sortCars(
				allCars
					.map((e) => ({
						...e,
						active:
							$filters.cars.searchByCar.includes(`${e.model}|${e.tier.join('|')}`) ||
							$selectedCars.find((s) => s.model === e.model)
								? true
								: false
					}))
					.filter(
						(car) =>
							car.model
								.toLowerCase()
								.replace('nohesi', 'nohesispec')
								.replace('nohesispectuned', 'nohesituned')
								.replaceAll('_', '')
								.includes($carSearch.toLowerCase().replaceAll(' ', '').replaceAll('_', '')) &&
							$tiers.some((tier) => car.tier.includes(tier.value) && tier.active) &&
							($availableCars ? car.available === true : true)
					),
				$carsSort.active
			);
		}
	};

	$: if (browser && $tiers) {
		filterCars();
	}

	$: if (browser && $carsSort.active) {
		filterCars();
	}

	const handleSearchInput = debounceR({ delay: 300 }, (e: { target: { value: any } }) => {
		carSearch.set(e.target.value);
		filterCars();
	});

	const handleCheckboxChange = (event: any) => {
		const { tier, model, isChecked } = event.detail;
		selectedCars;
		const obj = $selectedCars.find((e) => e.model === model);
		if (isChecked) {
			if (!obj) {
				selectedCars.update((prev) => [...prev, { model, tier }]);
			}
		} else {
			if (obj) {
				selectedCars.update((prev) => prev.filter((e) => e.model !== model));
			}
		}
	};

	const handleApply = () => {
		dispatch('apply');
	};

	function handleClearFilter() {
		confirmHandle = !confirmHandle;
		if (confirmHandle === false) {
			allCars = [];
			filteredCars = [];
			dispatch('clearCarFilters');
		}
	}

	onMount(() => {
		document.body.classList.add('overflow-hidden');
	});

	onDestroy(() => {
		document.body.classList.remove('overflow-hidden');
	});
</script>

<div class="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50 py-10">
	<div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

	<div
		class="fixed w-full md:w-[672px] flex justify-between flex-col top-1/2 mb-10 left-1/2 backdrop-blur-64 bg-transparent h-4/5 -translate-x-1/2 -translate-y-1/2 rounded-2xl text-center border border-top-light-10"
		use:clickOutside
		on:click_outside
	>
		<div class="space-y-2 pb-9 lg:h-[160px] p-6">
			<h3 class="text-content-primary font-roboto items-center text-left">Search By Car</h3>
			<div class="grid grid-cols-3 gap-2 items-center flex-wrap">
				<div class="relative col-span-3 md:col-span-2">
					<input
						type="text"
						placeholder="Search by name"
						class="w-full bg-top-light-2 rounded-sm border border-border text-content-tertiary py-2 px-6 pl-10 text-sm placeholder:text-content-tertiary active:outline focus:ring-content-primary focus:border-top-light-45"
						bind:value={$carSearch}
						on:input={handleSearchInput}
					/>
					<img
						src="/icons/MagnifyingGlass.svg"
						alt="Search"
						class="absolute left-3 top-1/2 -translate-y-1/2"
					/>
				</div>
				<div
					class="relative col-span-3 md:col-span-1 bg-top-light-2 rounded-sm border border-border px-4 py-1 text-content flex justify-start items-center"
				>
					<Label
						value="Only available cars"
						LabelClass="!text-sm "
						bind:checked={$availableCars}
						on:changeAvailable={filterCars}
					/>
				</div>
				<div class="col-span-3 md:col-span-1">
					<NewCarSort
						containerClasses={' !gap-2 !rounded-sm !border-border bg-top-light-2'}
						textClasses={'!font-inter !text-sm !font-normal !normal-case'}
					/>
				</div>
				<div class="col-span-3 md:col-span-2">
					<SortTeirButton
						options={['Public', 'Tier 1', 'Tier 2', 'Tier 3']}
						containerClasses={' !gap-2 !rounded-sm !border-border bg-top-light-2'}
						textClasses={'!font-inter !text-sm !font-normal !normal-case'}
					/>
				</div>
			</div>
		</div>

		<div
			class="space-y-2 overflow-y-auto w-full p-6 h-[60%] 2xl:h-[96%]"
			bind:this={labelsContainer}
		>
			{#if filteredCars.length > 0}
				{#each filteredCars as { model, tier, available, active } (`${model}${tier}`)}
					<CarLabel
						container={labelsContainer}
						LabelClass="!text-sm "
						{model}
						{tier}
						{active}
						on:checkBoxChange={handleCheckboxChange}
					/>
				{/each}
			{:else}
				<div class="text-center text-content-tertiary font-medium text-base py-2 font-inter">
					Nothing found :(
				</div>
			{/if}
		</div>

		<div
			class="flex justify-between items-center lg:h-[100px] py-6 border border-border-light px-6 bg-[#0f0d11] rounded-b-2xl gap-2 flex-col xs:flex-row"
		>
			<OutlinedButton
				title={confirmHandle ? 'Click again to confirm' : 'clear Filter'}
				size="lg"
				font="roboto"
				classes="bg-transparent text-content-primary border border-content-primary !py-3 !px-7 !text-md uppercase !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap uppercase"
				on:click={handleClearFilter}
			/>
			<VioleteButton
				title="Apply"
				font="roboto"
				size="lg"
				classes="bg-primary-violete text-content-primary !py-3 !px-7 !text-md uppercase !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
				on:click={handleApply}
			/>
		</div>
	</div>
</div>

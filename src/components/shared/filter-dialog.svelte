<script lang="ts">
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import { clickOutside } from '../../actions/clickOutside';
	import {
		filtersState,
		resetFiltersState,
		toFiltersState,
		filters
	} from '../../lib/store/servers';
	import Label from './Label.svelte';
	import OutlinedButton from './outlinedButton.svelte';
	import VioleteButton from './violeteButton.svelte';
	import TierLabel from './tierLabel.svelte';

	const dispatch = createEventDispatcher();

	let confirmHandle = false;
	let searchText = '';

	function handleApplyFilter() {
		dispatch('apply');
	}

	// clear the array but need modificatiuin
	function handleClearFilter() {
		confirmHandle = !confirmHandle;
		if (confirmHandle === false) {
			resetFiltersState();
			dispatch('clearFilters');
		}
	}

	const handleSearch = (search: string) => {
		if (search) {
			$filtersState = $filtersState.map((e) => {
				let isSectionSearched = false;
				let filter = {
					...e
				};
				if (e.title.toLocaleLowerCase().includes(search)) {
					filter.active = true;
					isSectionSearched = true;
				} else {
					filter.active = false;
				}

				filter.values = filter.values.map((x) => {
					if (x.value.toLocaleLowerCase().includes(search)) {
						filter.active = true;
						x.show = true;
					} else {
						if (!isSectionSearched) x.show = false;
					}

					return x;
				});

				return filter;
			});
		} else {
			$filtersState = $filtersState.map((e) => ({
				...e,
				active: true,
				values: e.values.map((v) => ({ ...v, show: true }))
			}));
		}
	};

	$: handleSearch(searchText);

	onMount(() => {
		document.body.classList.add('overflow-hidden');
		filtersState.set(toFiltersState($filters.server));
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
		<div class="space-y-2 pb-9 h-[115px] p-6 pe-7">
			<h3 class="text-content-primary font-roboto items-center text-left">Filter</h3>
			<div class="flex gap-1 items-center">
				<div class="relative w-full">
					<input
						type="text"
						name=""
						id=""
						bind:value={searchText}
						placeholder="Search Filters"
						class="w-full bg-top-light-2 rounded-sm border border-border text-content-tertiary py-2 px-6 pl-10 text-sm placeholder:text-content-tertiary active:outline focus:ring-content-primary focus:border-top-light-45"
					/>
					<img
						src="/icons/MagnifyingGlass.svg"
						alt="Search"
						class="absolute left-3 top-1/2 -translate-y-1/2"
					/>
				</div>
			</div>
		</div>

		{#if $filtersState.filter((e) => e.active).length == 0}
			<div class="text-center text-content-tertiary font-medium text-base py-2 font-inter">
				Nothing found :(
			</div>
		{/if}

		<div class="space-y-2 overflow-y-auto w-full p-6 h-[80%] 2xl:h-[96%]">
			{#each $filtersState as filter (filter.slug)}
				{#if filter.active}
					<div
						class="w-full bg-top-light-2 rounded-lg border border-border text-content-tertiary py-6 px-6"
					>
						<h2
							class="text-content-primary font-inter font-semibold text-xl text-left capitalize pb-4"
						>
							{filter.title}
						</h2>

						<div class="grid grid-cols-1 md:grid-cols-2 gap-3">
							{#if filter.slug === 'tier'}
								{#each filter.values as { active, show, ...rest } (rest.value)}
									{#if show}
										<TierLabel {...rest} bind:checked={active} />
									{/if}
								{/each}
							{:else}
								{#each filter.values as { active, show, ...rest } (rest.value)}
									{#if show}
										<Label {...rest} bind:checked={active} />
									{/if}
								{/each}
							{/if}
						</div>
					</div>
				{/if}
			{/each}
		</div>

		<div
			class="flex justify-between items-center py-6 border md:h-[100px] border-border-light px-6 bg-[#0f0d11] rounded-b-2xl gap-2 flex-col xs:flex-row"
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
				on:click={handleApplyFilter}
			/>
		</div>
	</div>
</div>

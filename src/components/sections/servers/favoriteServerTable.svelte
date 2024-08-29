<script lang="ts">
	import { filters as filtersData } from '$lib/data/index';
	import type { Server } from '$lib/interfaces';
	import { user } from '$lib/stores';
	import * as R from 'ramda';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import FavoriteFilterDialog from '../../shared/favorite-filter-dialog.svelte';
	import FavoriteSearchCarDialog from './favorite-search-car-dialog.svelte';
	import FavoriteFilterButton from './favoriteFilterButton.svelte';
	import Loader from './loader.svelte';
	import ServerCard from './serverCard.svelte';
	import ServerRow from './serverRow.svelte';
	import SortButton from './sortButton.svelte';

	export let serversData: Server[] | null;
	export let searchText: string;
	export let tableHeaderDisplay: boolean = true;
	export let sortBy: string;
	export let loading: boolean;
	export let toggleStarLoading: boolean;

	let width: number;
	let isOpen = false;
	let OpenFilter = false;
	let OpenSearchCar = false;

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

	const handleSearchInput = debounceR({ delay: 800 }, (e: { target: { value: any } }) => {
		dispatch('searchInput', {
			key: 'search',
			value: e.target.value
		});
	});

	const joinServer = ({ detail: { ip_address } }: any) => {
		// let encryptedValue = encryption(ip_address);

		if ($user.authenticated) {
			// goto(`/servers/${encryptedValue}`);
			const [ip, port] = ip_address.split(':');

			window.open(
				`acmanager://race/online/join?query=race/online/join&ip=${ip}&httpPort=${port}&password=`,
				'_self'
			);
		}
	};

	// const handleFavServer = () => {
	// 	const value = filters.favouriteServers.active === 'All' ? 'Favourite' : 'All';

	// 	dispatch('selectActive', {
	// 		key: 'favouriteServers',
	// 		value: value
	// 	});
	// };

	const openFilterDialog = () => {
		OpenFilter = true;
	};
	const openSearchCarDialog = () => {
		OpenSearchCar = true;
	};

	const openDialog = () => {
		isOpen = true;
		setTimeout(() => {
			isOpen = false;
		}, 3000);
	};

	function handleFiltersApply() {
		dispatch('applyFilters');
		OpenFilter = false;
	}

	function handleCarsApply(event: any) {
		dispatch('applyCarsFilters');
		OpenSearchCar = false;
	}

	function handleClearFilters(event: Event) {
		OpenFilter = false;
		dispatch('clearFilters');
	}

	function handleClearCarFilters(event: Event) {
		OpenSearchCar = false;
		dispatch('clearCarFilters');
	}
</script>

<svelte:window bind:innerWidth={width} />

<div class="flex flex-col gap-7">
	{#if width > 950}
		<div class="flex flex-row gap-2 2xl:flex-row justify-between 2xl:items-center">
			<div class="flex gap-1 items-center 2xl:justify-start">
				<SortButton
					bind:sortBy
					options={filtersData.sortOptions}
					containerClasses={'!px4 !gap-2 !rounded-sm !border-border bg-top-light-2'}
					textClasses={'!font-inter !text-sm !font-normal !normal-case !whitespace-nowrap'}
				/>

				<button
					class={`flex shrink-0 py-2 px-5 justify-center items-center border !px4 !gap-2 !rounded-sm !border-border bg-top-light-2`}
					on:click={openFilterDialog}
				>
					<FavoriteFilterButton
						textClasses={'!font-inter !text-sm !font-normal !normal-case'}
						type="searchByRegion"
					/>
				</button>

				<button
					class={`flex py-2 px-5 justify-center items-center border !px4 !gap-2 !rounded-sm !border-border bg-top-light-2`}
					on:click={openSearchCarDialog}
				>
					<FavoriteFilterButton
						type="searchByCar"
						textClasses={'!font-inter !text-sm !font-normal !normal-case'}
					/>
				</button>
			</div>

			<div class="flex gap-1 items-center justify-end">
				<div class="relative">
					<input
						type="text"
						name=""
						id=""
						bind:value={searchText}
						on:input={handleSearchInput}
						placeholder="Search"
						class="bg-top-light-2 rounded-sm border w-[300px] border-border text-content-tertiary py-2 px-4 pl-10 text-sm placeholder:text-content-tertiary active:outline-none focus:outline-none"
					/>
					<img
						src="/icons/MagnifyingGlass.svg"
						alt="cdn"
						class="absolute left-3 top-1/2 -translate-y-1/2"
					/>
				</div>
			</div>
		</div>
	{:else}
		<div class="flex flex-row-reverse gap-2 sm:flex-row justify-between items-start relative">
			<div
				class="flex gap-1 gap-y-2 items-center justify-between w-full md:w-max flex-wrap max-[480px]:flex-col max-[480px]:items-start"
			>
				<div class="flex gap-1 items-center justify-end">
					<div class="relative">
						<input
							type="text"
							name=""
							id=""
							bind:value={searchText}
							on:input={handleSearchInput}
							placeholder="Search"
							class="bg-top-light-2 rounded-sm border border-border text-content-tertiary py-2 px-4 pl-10 text-sm placeholder:text-content-tertiary active:outline-none focus:outline-none"
						/>
						<img
							src="/icons/MagnifyingGlass.svg"
							alt="cdn"
							class="absolute left-3 top-1/2 -translate-y-1/2"
						/>
					</div>
				</div>
				<SortButton
					bind:sortBy
					options={filtersData.sortOptions}
					containerClasses={'!px4 !gap-2 !rounded-sm !border-border bg-top-light-2'}
					textClasses={'!font-inter !text-sm !font-normal !normal-case'}
				/>

				<div class="flex flex-wrap gap-3">
					<button
						class={`flex py-2 justify-center items-center !shrink-0 border px-4 !gap-2 !rounded-sm !border-border bg-top-light-2`}
						on:click={openFilterDialog}
					>
						<FavoriteFilterButton
							textClasses={'!font-inter !text-sm !font-normal !normal-case'}
							type="searchByRegion"
						/>
					</button>

					<button
						class={`flex py-2 px-5 justify-center items-center border !px4 !gap-2 !rounded-sm !border-border bg-top-light-2`}
						on:click={openSearchCarDialog}
					>
						<FavoriteFilterButton
							type="searchByCar"
							textClasses={'!font-inter !text-sm !font-normal !normal-case'}
						/>
					</button>
				</div>
			</div>
		</div>
	{/if}
	<div class="2xl:hidden flex justify-end items-center w-full gap-3">
		<Loader time={60} />
		<div class="relative flex-wrap group">
			<div
				class="absolute p-3 text-content-primary {isOpen
					? 'inline-block'
					: 'hidden'} -top-14 right-0 gap-3 bg-top-dark-83 rounded-md border border-border backdrop-blur-16 whitespace-nowrap"
			>
				Servers updating after one minute.
			</div>

			<button on:click={openDialog} class="flex justify-center items-center">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="#ffffff"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					class="opacity-70"
				>
					<circle cx="12" cy="12" r="10" />
					<line x1="12" y1="16" x2="12" y2="12" />
					<line x1="12" y1="8" x2="12" y2="8" />
				</svg>
			</button>
		</div>
	</div>
	{#if loading}
		<div class="p-6 border border-border rounded-md sm:w-2/5 mx-auto my-40 bg-top-light-2">
			<img src="/images/logo.svg" alt="cdn" class="w-full sm:w-1/2 max-w-screen-3xl mx-auto mb-6" />
			<p class="h5-inter text-content-primary font-semibold font-inter text-center uppercase">
				Loading servers...
			</p>
		</div>
	{:else if !loading && serversData && serversData.length === 0}
		<div class="p-12 border border-border rounded-md sm:w-2/5 mx-auto my-40 bg-top-light-2">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="45"
				height="45"
				viewBox="0 0 45 45"
				fill="none"
				class="mx-auto mb-6"
			>
				<path
					d="M44.259 40.7238L34.3768 30.8379C37.3398 26.9769 38.7232 22.1334 38.2463 17.2901C37.7693 12.4467 35.4679 7.96603 31.8087 4.75706C28.1495 1.54809 23.4067 -0.148927 18.5422 0.010267C13.6778 0.169461 9.05606 2.17294 5.61455 5.61429C2.17304 9.05564 0.169469 13.6772 0.0102675 18.5414C-0.148934 23.4056 1.54816 28.1482 4.75728 31.8072C7.9664 35.4662 12.4472 37.7676 17.2909 38.2445C22.1345 38.7214 26.9781 37.3381 30.8393 34.3752L40.7298 44.2674C40.9621 44.4996 41.2379 44.6839 41.5413 44.8096C41.8448 44.9353 42.1701 45 42.4986 45C42.8271 45 43.1524 44.9353 43.4558 44.8096C43.7593 44.6839 44.0351 44.4996 44.2674 44.2674C44.4996 44.0351 44.6839 43.7594 44.8096 43.4559C44.9353 43.1524 45 42.8272 45 42.4987C45 42.1702 44.9353 41.845 44.8096 41.5415C44.6839 41.238 44.4996 40.9623 44.2674 40.73L44.259 40.7238ZM5.03614 19.1854C5.03614 16.3869 5.86603 13.6512 7.42087 11.3244C8.97571 8.99749 11.1857 7.18391 13.7712 6.11297C16.3568 5.04204 19.202 4.76183 21.9468 5.30779C24.6917 5.85375 27.213 7.20135 29.1919 9.18019C31.1708 11.159 32.5185 13.6802 33.0645 16.425C33.6105 19.1697 33.3303 22.0147 32.2593 24.6001C31.1883 27.1856 29.3746 29.3955 27.0477 30.9502C24.7207 32.505 21.9849 33.3348 19.1863 33.3348C15.4346 33.331 11.8377 31.839 9.18488 29.1863C6.53205 26.5336 5.04 22.9369 5.03614 19.1854Z"
					fill="#EEEDEE"
				/>
				<mask id="path-2-inside-1_1889_6517" fill="white">
					<path
						d="M25.705 24.2907C25.8928 24.4784 25.9983 24.7331 25.9983 24.9987C25.9983 25.2643 25.8928 25.5189 25.705 25.7067C25.5172 25.8945 25.2625 26 24.997 26C24.7314 26 24.4767 25.8945 24.2889 25.7067L19 20.4165L13.7094 25.7051C13.5216 25.8928 13.2669 25.9983 13.0014 25.9983C12.7358 25.9983 12.4811 25.8928 12.2933 25.7051C12.1055 25.5173 12 25.2626 12 24.997C12 24.7315 12.1055 24.4768 12.2933 24.289L17.5839 19.0004L12.295 13.7102C12.1072 13.5224 12.0017 13.2677 12.0017 13.0021C12.0017 12.7366 12.1072 12.4819 12.295 12.2941C12.4828 12.1063 12.7375 12.0008 13.003 12.0008C13.2686 12.0008 13.5233 12.1063 13.7111 12.2941L19 17.5844L24.2906 12.2933C24.4784 12.1055 24.7331 12 24.9986 12C25.2642 12 25.5189 12.1055 25.7067 12.2933C25.8945 12.4811 26 12.7357 26 13.0013C26 13.2669 25.8945 13.5216 25.7067 13.7093L20.4161 19.0004L25.705 24.2907Z"
					/>
				</mask>
				<path
					d="M25.705 24.2907C25.8928 24.4784 25.9983 24.7331 25.9983 24.9987C25.9983 25.2643 25.8928 25.5189 25.705 25.7067C25.5172 25.8945 25.2625 26 24.997 26C24.7314 26 24.4767 25.8945 24.2889 25.7067L19 20.4165L13.7094 25.7051C13.5216 25.8928 13.2669 25.9983 13.0014 25.9983C12.7358 25.9983 12.4811 25.8928 12.2933 25.7051C12.1055 25.5173 12 25.2626 12 24.997C12 24.7315 12.1055 24.4768 12.2933 24.289L17.5839 19.0004L12.295 13.7102C12.1072 13.5224 12.0017 13.2677 12.0017 13.0021C12.0017 12.7366 12.1072 12.4819 12.295 12.2941C12.4828 12.1063 12.7375 12.0008 13.003 12.0008C13.2686 12.0008 13.5233 12.1063 13.7111 12.2941L19 17.5844L24.2906 12.2933C24.4784 12.1055 24.7331 12 24.9986 12C25.2642 12 25.5189 12.1055 25.7067 12.2933C25.8945 12.4811 26 12.7357 26 13.0013C26 13.2669 25.8945 13.5216 25.7067 13.7093L20.4161 19.0004L25.705 24.2907Z"
					fill="white"
				/>
				<path
					d="M25.705 24.2907L22.1691 27.8257L22.1696 27.8263L25.705 24.2907ZM25.9983 24.9987H20.9983H25.9983ZM24.997 26V21V26ZM24.2889 25.7067L20.7529 29.2418L20.7535 29.2424L24.2889 25.7067ZM19 20.4165L22.536 16.8814L19.0011 13.3456L15.4651 16.8803L19 20.4165ZM13.7094 25.7051L10.1746 22.1689L10.174 22.1694L13.7094 25.7051ZM13.0014 25.9983L13.0014 20.9983L13.0014 25.9983ZM12.2933 24.289L8.75842 20.7528L8.75787 20.7534L12.2933 24.289ZM17.5839 19.0004L21.1187 22.5366L24.6551 19.0015L21.1198 15.4653L17.5839 19.0004ZM12.295 13.7102L15.8309 10.1751L15.8304 10.1745L12.295 13.7102ZM12.0017 13.0021H7.00167H12.0017ZM13.003 12.0008V17.0008V12.0008ZM13.7111 12.2941L17.2471 8.75903L17.2465 8.75847L13.7111 12.2941ZM19 17.5844L15.464 21.1194L18.9997 24.656L22.5357 21.1197L19 17.5844ZM24.2906 12.2933L20.7551 8.75764L20.7549 8.75792L24.2906 12.2933ZM25.7067 13.7093L22.1713 10.1737L22.171 10.174L25.7067 13.7093ZM20.4161 19.0004L16.8804 15.4651L13.3457 19.0001L16.8802 22.5355L20.4161 19.0004ZM22.1696 27.8263C21.4197 27.0764 20.9983 26.0593 20.9983 24.9987H30.9983C30.9983 23.4069 30.366 21.8805 29.2405 20.755L22.1696 27.8263ZM20.9983 24.9987C20.9983 23.9381 21.4197 22.921 22.1696 22.1711L29.2405 29.2424C30.366 28.1169 30.9983 26.5904 30.9983 24.9987H20.9983ZM22.1696 22.1711C22.9195 21.4212 23.9365 21 24.997 21V31C26.5886 31 28.115 30.3678 29.2405 29.2424L22.1696 22.1711ZM24.997 21C26.0574 21 27.0744 21.4212 27.8243 22.1711L20.7535 29.2424C21.879 30.3678 23.4054 31 24.997 31V21ZM27.8249 22.1716L22.536 16.8814L15.464 23.9516L20.7529 29.2418L27.8249 22.1716ZM15.4651 16.8803L10.1746 22.1689L17.2443 29.2413L22.5349 23.9527L15.4651 16.8803ZM10.174 22.1694C10.9239 21.4196 11.941 20.9983 13.0014 20.9983L13.0014 30.9983C14.5929 30.9983 16.1194 30.3661 17.2449 29.2407L10.174 22.1694ZM13.0014 20.9983C14.0618 20.9983 15.0788 21.4196 15.8287 22.1694L8.75787 29.2407C9.88336 30.3661 11.4098 30.9983 13.0014 30.9983L13.0014 20.9983ZM15.8287 22.1694C16.5786 22.9193 17 23.9364 17 24.997H7C7 26.5888 7.63236 28.1153 8.75787 29.2407L15.8287 22.1694ZM17 24.997C17 26.0576 16.5786 27.0748 15.8287 27.8246L8.75787 20.7534C7.63236 21.8788 7 23.4053 7 24.997H17ZM15.8282 27.8252L21.1187 22.5366L14.049 15.4642L8.75842 20.7528L15.8282 27.8252ZM21.1198 15.4653L15.8309 10.1751L8.75897 17.2453L14.0479 22.5355L21.1198 15.4653ZM15.8304 10.1745C16.5803 10.9244 17.0017 11.9415 17.0017 13.0021H7.00167C7.00167 14.5939 7.63402 16.1204 8.75953 17.2458L15.8304 10.1745ZM17.0017 13.0021C17.0017 14.0628 16.5803 15.0799 15.8304 15.8297L8.75953 8.75847C7.63402 9.88391 7.00167 11.4104 7.00167 13.0021H17.0017ZM15.8304 15.8297C15.0805 16.5796 14.0634 17.0008 13.003 17.0008V7.00083C11.4115 7.00083 9.88503 7.63304 8.75953 8.75847L15.8304 15.8297ZM13.003 17.0008C11.9426 17.0008 10.9256 16.5796 10.1757 15.8297L17.2465 8.75847C16.121 7.63304 14.5946 7.00083 13.003 7.00083V17.0008ZM10.1751 15.8292L15.464 21.1194L22.536 14.0493L17.2471 8.75903L10.1751 15.8292ZM22.5357 21.1197L27.8263 15.8286L20.7549 8.75792L15.4643 14.049L22.5357 21.1197ZM27.826 15.8289C27.0761 16.5788 26.059 17 24.9986 17V7C23.4071 7 21.8806 7.6322 20.7551 8.75764L27.826 15.8289ZM24.9986 17C23.9382 17 22.9212 16.5788 22.1713 15.8289L29.2421 8.75764C28.1166 7.6322 26.5902 7 24.9986 7V17ZM22.1713 15.8289C21.4214 15.079 21 14.0619 21 13.0013L31 13.0013C31 11.4096 30.3676 9.88307 29.2421 8.75764L22.1713 15.8289ZM21 13.0013C21 11.9407 21.4214 10.9236 22.1713 10.1737L29.2421 17.245C30.3676 16.1195 31 14.5931 31 13.0013L21 13.0013ZM22.171 10.174L16.8804 15.4651L23.9519 22.5358L29.2424 17.2447L22.171 10.174ZM16.8802 22.5355L22.1691 27.8257L29.241 20.7556L23.9521 15.4653L16.8802 22.5355Z"
					fill="#EEEDEE"
					mask="url(#path-2-inside-1_1889_6517)"
				/>
			</svg>
			<p class="h5-inter text-content-primary font-semibold font-inter text-center uppercase">
				Servers not found
			</p>
		</div>
	{:else if width >= 1440}
		<div class="flex flex-col gap-2">
			{#if tableHeaderDisplay}
				<div
					class="grid grid-cols-12 gap-x-3 text-base text-content-secondary font-inter w-full p-4 pl-6"
				>
					<p class="col-span-3">{$_('page.servers.tableHeaders.0')}</p>
					<p class="col-span-2 text-center">{$_('page.servers.tableHeaders.1')}</p>
					<p>{$_('page.servers.tableHeaders.2')}</p>
					<p>{$_('page.servers.tableHeaders.3')}</p>
					<p>{$_('page.servers.tableHeaders.4')}</p>
					<p class="col-span-2">{$_('page.servers.tableHeaders.5')}</p>
					<p class="text-center">{$_('page.servers.tableHeaders.6')}</p>
					<div class="flex justify-end items-start gap-2">
						<Loader time={60} />
						<div class="relative flex-wrap group pt-[2px]">
							<div
								class="absolute p-3 hidden group-hover:inline-block -top-14 right-0 gap-3 bg-top-dark-83 rounded-md border border-border backdrop-blur-16 whitespace-nowrap"
							>
								Servers updating after one minute.
							</div>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#ffffff"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round"
								class="opacity-70"
							>
								<circle cx="12" cy="12" r="10" />
								<line x1="12" y1="16" x2="12" y2="12" />
								<line x1="12" y1="8" x2="12" y2="8" />
							</svg>
						</div>
					</div>
				</div>
			{/if}
			{#if serversData}
				{#each serversData as row (row.ip_address)}
					<ServerRow
						bind:row
						bind:favorite={row.favorite}
						on:toggleFavServer
						bind:loading={toggleStarLoading}
						on:joinServer={joinServer}
					/>
				{/each}
			{/if}
		</div>
	{:else}
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#if serversData}
				{#each serversData as row (row.ip_address)}
					<ServerCard
						bind:row
						bind:favorite={row.favorite}
						on:toggleFavServer
						bind:loading={toggleStarLoading}
						on:joinServer={joinServer}
					/>
				{/each}
			{/if}
		</div>
	{/if}
</div>

{#if OpenFilter}
	<FavoriteFilterDialog
		on:apply={handleFiltersApply}
		on:clearFilters={handleClearFilters}
		on:click_outside={() => (OpenFilter = false)}
	/>
{/if}
{#if OpenSearchCar}
	<FavoriteSearchCarDialog
		on:apply={handleCarsApply}
		on:clearCarFilters={handleClearCarFilters}
		on:click_outside={() => (OpenSearchCar = false)}
	/>
{/if}

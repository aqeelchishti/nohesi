<script lang="ts">
	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import {
		applyCarFilters,
		applyFilters,
		filters,
		resetCarFilters,
		resetServerFilters,
		servers,
		servers_pages
	} from '$lib/store/servers';
	import { cars, user, websiteLoading } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import Hero from '../../../components/sections/servers/hero.svelte';
	import ServerTable from '../../../components/sections/servers/serverTable.svelte';
	import Form from '../../../components/sections/shared/form.svelte';
	import Pagination from '../../../components/sections/shared/pagination.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Spacer from '../../../components/shared/spacer.svelte';
	import Toast from '../../../components/shared/toast.svelte';

	export let data;

	$: ({ params, sid } = data);

	let ServersLoading: any;
	let loading = false;
	let toggleStarLoading = false;
	let pagesCount = 0;
	let activeStream = 0;
	let interval: NodeJS.Timeout;
	let abortController: AbortController;
	$: pagesCount = $servers_pages;
	let filtersJson: string = JSON.stringify($filters);

	const toggleFavServer = async (event: any) => {
		if ($user.authenticated) {
			toggleStarLoading = true;
			const { ip_address } = event.detail;

			const test = await Promise.all(
				$servers!.map(async (server: any) => {
					if (server.ip_address === ip_address) {
						const resp = await fetch(`${PUBLIC_BACKEND_URL}/toggle-favorite`, {
							method: 'POST',
							headers: {
								'content-type': 'application/json',
								Authorization: `Bearer ${sid}`
							},
							body: JSON.stringify({ ip_address: ip_address })
						});

						if (resp.ok) {
							const { data } = await resp.json();
							if (data === 'added') {
								return {
									...server,
									favorite: true
								};
							} else if (data === 'removed') {
								return {
									...server,
									favorite: false
								};
							}
						}

						// return {
						// 	...server,
						// 	favorite: !server.favorite
						// };
					} else {
						return {
							...server
						};
					}
				})
			);

			servers.set(test);
			toggleStarLoading = false;
		}
	};

	const setServers = async (param: URLSearchParams) => {
		if (abortController) {
			abortController.abort();
		}

		abortController = new AbortController();
		try {
			const resp = await fetch(`${PUBLIC_BACKEND_URL}/servers?${param.toString()}`, {
				method: 'GET',
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${sid}`
				},
				signal: abortController.signal
			});

			if (resp.ok) {
				const {
					data: { servers: _servers, count }
				} = await resp.json();
				console.log("🚀 ~ setServers ~ _servers:", _servers)
				servers.set(_servers);
				pagesCount = count;
				if ($filters.page > pagesCount) {
					$filters.page = 1;
				}
			}
			loading = false;
		} catch (error: any) {
			if (error.name === 'AbortError') {
				console.warn('Request Aborted!');
				return;
			}

			console.error(error);
			loading = false;
		}
	};

	const formatParams = () => {
		function mapObjectToParams(obj: any) {
			if (!obj || Object.keys(obj).length === 0) {
				return new URLSearchParams();
			}
			const params = new URLSearchParams();
			Object.entries(obj).forEach(([key, value]) => {
				if (Array.isArray(value) && value.length > 0) {
					value.forEach((val) => {
						params.append(key, val);
					});
				} else if (typeof value == 'string' && value.length > 0) {
					params.append(key, value as string);
				}
			});

			return params;
		}

		const {
			server: { tier, map, region, traffic },
			cars: { searchByCar },
			sort_by,
			search,
			page
		} = $filters;

		return mapObjectToParams({
			map: map || [],
			region: region || [],
			traffic: traffic || [],
			type: tier || [],
			sort_by: sort_by.replace(' ', '_').toLocaleLowerCase(),
			page: page.toString(),
			search: search.toLowerCase().replaceAll(' | ', ' i '),
			models: searchByCar || []
			// favourite: 'false'
		});
	};

	const refreshServers = async () => {
		try {
			const param = formatParams();
			await setServers(param as URLSearchParams);
		} catch (error) {
			console.warn(error);
		}
	};

	const fetchServers = async () => {
		try {
			loading = true;

			let param: URLSearchParams;

			param = formatParams();
			if (param.get('page') === '1') {
				param.delete('page');
			}

			if (param.get('sort_by') === 'most_players') {
				param.delete('sort_by');
			}

			goto('/servers?' + param.toString(), {
				noScroll: true,
				replaceState: false,
				keepFocus: true
			});

			await setServers(param as URLSearchParams);
		} catch (error: any) {
			console.warn(error);
			loading = false;
		}
	};

	function setFiltersByParams({ region, tier, traffic, map, models, sort_by, search, page }: any) {
		filters.update((prev) => ({
			...prev,
			sort_by: sort_by ? sort_by.replace('_', ' ') : 'Most players',
			search: search || '',
			server: {
				region: region || [],
				tier: tier || [],
				traffic: traffic || [],
				map: map || []
			},
			cars: {
				searchByCar: models || []
			},
			page: page ? Number.parseInt(page) : 1
		}));
	}

	$: if (browser && !$websiteLoading && filtersJson !== JSON.stringify($filters)) {
		fetchServers();
		filtersJson = JSON.stringify($filters);
	}

	const handleApplyFilters = () => {
		applyFilters();
	};

	const handleApplyCars = () => {
		applyCarFilters();
	};

	const handleClearFilters = () => {
		resetServerFilters();
	};

	const handleClearCarFilters = () => {
		resetCarFilters();
	};

	const setCars = async () => {
		const resp = await fetch(`${PUBLIC_BACKEND_URL}/cars`, {
			headers: { 'content-type': 'application/json' }
		});
		if (resp.ok) {
			const { data: tempCars } = await resp.json();
			cars.set([...tempCars]);
		}
	};

	const explore415 = async () => {
		filters.set({
			page: 1,
			cars: { searchByCar: [] },
			search: '',
			sort_by: 'Most players',
			server: { map: ['415'], region: [], tier: [], traffic: [] }
		});
	};

	onMount(() => {
		fetchServers();
		setCars();
		setFiltersByParams(params);
		interval = setInterval(async () => {
			await refreshServers();
			await setCars();
		}, 60000);
	});

	onMount(async () => {
		ServersLoading = (
			await import('../../../components/sections/user/fav-servers/favServersLoading.svelte')
		).default;
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<Seo title="Servers" />

<div class="pt-26">
	<Toast top="top-26" left="right-8" />
	<Hero on:setActiveStream={() => {}} {activeStream} on:selectActive={explore415} />
	<Spacer height="h-20" />
	<div class="container-section">
		{#if loading === true}
			<svelte:component this={ServersLoading} />
		{:else}
			<ServerTable
				bind:loading
				bind:serversData={$servers}
				bind:searchText={$filters.search}
				bind:sortBy={$filters.sort_by}
				bind:toggleStarLoading
				on:applyFilters={handleApplyFilters}
				on:applyCarsFilters={handleApplyCars}
				on:clearFilters={handleClearFilters}
				on:clearCarFilters={handleClearCarFilters}
				on:toggleFavServer={toggleFavServer}
			/>
			{#if pagesCount > 0 && !loading}
				<Spacer height="h-20" />
				<Pagination bind:currentPage={$filters.page} {pagesCount} />
			{/if}
		{/if}
	</div>
	<!-- <div class:hidden={activeStream === 0}>
		<ServerSection {fivemData} />
	</div> -->

	<Spacer />
	<Form />
	<Spacer height="h-20" />
</div>

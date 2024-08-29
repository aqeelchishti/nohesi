<script lang="ts">
	import { browser } from '$app/environment';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import {
		applyCarFilters,
		applyFilters,
		filters,
		resetCarFilters,
		resetServerFilters,
		servers,
		servers_pages
	} from '$lib/store/favoriteServers';
	import { cars, user, websiteLoading } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import Pagination from '../../../../../components/sections/shared/pagination.svelte';
	import FavServers from '../../../../../components/sections/user/fav-servers/favServers.svelte';
	import Seo from '../../../../../components/shared/SEO.svelte';
	import Spacer from '../../../../../components/shared/spacer.svelte';

	export let data;
	$: ({ sid } = data);

	let loading = false;
	let toggleStarLoading = false;
	let pagesCount = 0;
	let interval: NodeJS.Timeout;
	let abortController: AbortController;
	$: pagesCount = $servers_pages;
	let filtersJson: string = JSON.stringify($filters);

	const setCars = async () => {
		const resp = await fetch(`${PUBLIC_BACKEND_URL}/cars`, {
			headers: { 'content-type': 'application/json' }
		});
		if (resp.ok) {
			const { data: tempCars } = await resp.json();
			cars.set([...tempCars]);
		}
	};

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

			servers.set(test.filter((e) => e.favorite));
			toggleStarLoading = false;
		}
	};

	const setServers = async (param: URLSearchParams) => {
		if (abortController) {
			abortController.abort();
		}

		abortController = new AbortController();

		try {
			const resp = await fetch(`${PUBLIC_BACKEND_URL}/favorite-servers?${param.toString()}`, {
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
				servers.set([..._servers]);
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

		// const { servers: _servers, count } = await filtersToQueryFavorite(
		// 	param,
		// 	supabase,
		// 	$filters.page,
		// 	abortController,
		// 	session!.user.id
		// );
		// servers.set(_servers);
		// pagesCount = count;
		// if ($filters.page > pagesCount) {
		// 	$filters.page = 1;
		// }

		// loading = false;
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

			await setServers(param as URLSearchParams);
		} catch (error: any) {
			console.warn(error);
			loading = false;
		}
	};

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

	$: if (browser && !$websiteLoading && filtersJson !== JSON.stringify($filters)) {
		fetchServers();
		filtersJson = JSON.stringify($filters);
	}

	onMount(() => {
		setCars();
		fetchServers();
		interval = setInterval(async () => {
			await refreshServers();
			await setCars();
		}, 60000);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<Seo
	title="User | Servers"
	metadescription="Your hub for saved servers on No Hesi. Quickly access your favorite racing environments and never miss out on the action."
/>

<FavServers
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
<Spacer height="h-20" />

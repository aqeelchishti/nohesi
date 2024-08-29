<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { onDestroy, onMount } from 'svelte';

	import Displayboard from './displayboard.svelte';
	import Table from './table.svelte';
	import type { LeaderboardInterface } from '$lib/interfaces';
	import Pagination from '../../shared/pagination.svelte';
	import Dropdown from '../../../shared/dropdown.svelte';
	import { browser } from '$app/environment';
	import LoadingComponent from '../../../shared/loading-component.svelte';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { steamDetails, user, websiteLoading } from '$lib/stores';
	import { goto } from '$app/navigation';

	export let sid: string | undefined = undefined;

	let user_details: LeaderboardInterface | null;
	let total_count: number = 0;
	let score: number | null | undefined;
	let leaderboardData: LeaderboardInterface[] | null = null;
	let SkeletonLoading: any;
	let page = 1;
	let pageSizes = [20, 50, 100];
	let pageSize = 20;
	let loading: boolean = true;
	let firstLoad: boolean = true;
	let interval: NodeJS.Timeout;
	let controller: AbortController;
	$: pagesCount = Math.ceil(total_count! / pageSize);

	const selectActive = (event: any) => {
		const selectedPageSize = event.detail.value;
		pageSize = selectedPageSize;
	};

	const handlePageChange = (event: any) => {
		const selectedPage = event.detail.page;
		page = selectedPage;
	};
	// let activeFilter: string = 'Cut up Points';
	// let scroll = false;
	// let elementRendered = false;

	// const loadMore = async () => {
	// 	page++;
	// 	const searchParams = new URLSearchParams({
	// 		page: page.toString()
	// 	});
	// 	const data = await fetch(`/api/leaderboard-details?${searchParams.toString()}`);

	// 	leaderboardData = leaderboardData.concat(await data.json());
	// };

	// const scrollTo500 = () => {
	// 	scroll = false;
	// 	const element = document.getElementById('leaderboard-499');
	// 	element?.scrollIntoView({ behavior: 'smooth', block: 'end' });
	// };

	// const loadTop500 = async () => {
	// 	if (leaderboardData.length < 500) {
	// 		page = 5;
	// 		const searchParams = new URLSearchParams({
	// 			page: page.toString(),
	// 			top500: 'true'
	// 		});
	// 		const data = await fetch(`/api/leaderboard-details?${searchParams.toString()}`);
	// 		leaderboardData = await data.json();
	// 	}
	// 	scroll = true;
	// };

	// $: if (scroll && elementRendered) {
	// 	scrollTo500();
	// }

	const fetchData = async (loadingController = false) => {
		try {
			if (controller) {
				controller.abort();
			}

			controller = new AbortController();

			if (loadingController) {
				loading = true;
			}
			const searchParams = new URLSearchParams({
				page: page.toString(),
				pageSize: pageSize.toString()
			});

			const resp = await fetch(`${PUBLIC_BACKEND_URL}/leaderboard?${searchParams.toString()}`, {
				signal: controller.signal,
				headers: {
					'content-type': 'application/json',
					Authorization: `Bearer ${sid}`
				}
			});
			const data = await resp.json();
			leaderboardData = data.players;
			user_details = data.user;
			score = data.score;
			total_count = data.count;

			if (loadingController) {
				loading = false;
			}
		} catch (error: any) {
			if (error.name === 'AbortError') {
				console.warn('Request Aborted!');
				return;
			}

			loading = false;
			console.error(error);
		} finally {
			firstLoad = false;
		}
	};

	$: if (browser && !$websiteLoading && pageSize) {
		page = 1;
		fetchData(true);
	}

	$: if (browser && !$websiteLoading && page) {
		fetchData(true);
	}

	onMount(async () => {
		SkeletonLoading = (await import('./tableLoading.svelte')).default;
		interval = setInterval(fetchData, 30000);
	});

	onDestroy(async () => {
		if (controller) {
			controller.abort();
		}
		clearInterval(interval);
		// await channel.unsubscribe();
	});

	const handleSteamConnection = () => {
		goto('/api/steam');
	};
</script>

<div class="flex flex-col pt-10 gap-12 items-center">
	<div class="flex justify-between items-center flex-wrap gap-x-8 gap-y-2 w-full">
		<h3 class="h3-inter text-content-primary">{$_('page.user.leaderboard.title')}</h3>

		{#if !$user.connectedProviders?.find((e) => e.provider === 'steam')}
			<OutlinedButton
				title="Connect Steam"
				classes="!py-3 !px-7 whitespace-nowrap"
				size="md"
				font="roboto"
				on:click={handleSteamConnection}
			/>
		{/if}
	</div>
	{#if !leaderboardData}
		<svelte:component this={SkeletonLoading} />
	{/if}
	{#if leaderboardData}
		<div class="flex flex-col gap-7 w-full">
			<Displayboard bind:user_details bind:total_count bind:score />
			{#if loading}
				<div class="self-center">
					<svelte:component this={SkeletonLoading} />
				</div>
			{/if}
			<!--
			<Filters {activeFilter} on:message={setActiveFilter} />
			<Table {activeFilter} bind:leaderboardData on:loadMore={loadMore} bind:elementRendered />-->

			<Table bind:leaderboardData bind:page bind:pageSize bind:loading />

			{#if total_count}
				<Pagination
					bind:currentPage={page}
					small={true}
					{pagesCount}
					on:pageChange={handlePageChange}
				>
					<Dropdown
						title="Per Page"
						key=""
						options={pageSizes}
						activeOption={pageSize}
						slot="dropdown"
						on:selectActive={selectActive}
					/>
				</Pagination>
			{/if}
		</div>
	{/if}
</div>

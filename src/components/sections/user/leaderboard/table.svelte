<script lang="ts">
	_;
	// import { leaderboardData } from '$lib/data';
	import type { LeaderboardInterface } from '$lib/interfaces';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import viewport from '../../../../actions/inView';
	import Icon from '../../../shared/Icon.svelte';
	import LeaderboardRow from './leaderboard-row.svelte';

	export let leaderboardData: LeaderboardInterface[] = [];
	export let page: number;
	export let pageSize: number;
	export let loading: boolean;
	// const dispatch = createEventDispatcher();

	let tablename = 'Cut up Points';

	let icons = [
		{ name: 'Cut up Points', icon: 'NohesiLogo' },
		{ name: 'Track times', icon: 'Speedometer' },
		{ name: 'Drift', icon: 'Wheel' }
	];

	let assignedIcon: any = null;
	icons.forEach((icon) => {
		if (icon.name === tablename) {
			assignedIcon = icon.icon;
		}
	});

	// const loadMore = async () => {
	// 	dispatch('loadMore');
	// };
</script>

<div class="overflow-x-auto scroll-smooth overscroll-x-contain flex flex-nowrap" class:hidden={loading}>
	<table
		class="w-full border-spacing-y-3 text-content-secondary text-base font-inter font-medium border-separate"
	>
		<tr class="w-full">
			<td class="w-[10%] pb-3 px-3">Position</td>
			<td class="w-[10%] pb-3 px-3">Player</td>
			{#if tablename !== 'Track times'}
				<td class="w-[10%] pb-3 px-3">{tablename == 'Drift' ? 'Drift Score' : 'Points'}</td>
			{:else}
				<td class=" p-3 pr-6 border border-border rounded-r-xl border-l-0">Time</td>
			{/if}
			<!-- <td class="w-[10%] pb-3 px-3">Steam Id</td> -->
			<td class="w-[10%] pb-3 px-3">Combo</td>
			<td class="w-[10%] pb-3 px-3">Car</td>
			<td class="w-[10%] pb-3 px-3">Label</td>
			<td class="w-[10%] pb-3 px-3 whitespace-nowrap">Avg Speed</td>
			<td class="w-[10%] pb-3 px-3">Distance</td>
			{#if tablename !== 'Track times'}
				<td class="w-[10%] pb-3 px-3">Time</td>
			{/if}
			<!-- <td class="w-[10%] pb-3 px-3">Server</td> -->
		</tr>

		{#each leaderboardData as data, index}
			<LeaderboardRow {data} {index} {assignedIcon} bind:page bind:pageSize/>
		{/each}
	</table>
</div>

<!-- <div class="flex justify-center items-center" use:viewport on:enterViewport={loadMore}>
	<img src="/images/loader.gif" alt="cdn" class="w-14 h-14" />
</div> -->

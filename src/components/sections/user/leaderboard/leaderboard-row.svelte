<script lang="ts">
	import type { LeaderboardInterface } from '$lib/interfaces';
	import { onMount } from 'svelte';
	import Icon from '../../../shared/Icon.svelte';

	export let index: number;
	export let assignedIcon: string;
	export let data: LeaderboardInterface;
	export let page: number;
	export let pageSize: number;
	// export let elementRendered: boolean;

	const numberFormatter = new Intl.NumberFormat('en-US', {
		style: 'decimal',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});

	// onMount(() => {
	//     if(index === 499){
	//         elementRendered = true
	//     }
	// })
</script>

<tr class="p-3 bg-top-light-2 w-full whitespace-nowrap" id="leaderboard-{index}">
	<td class="p-3 border border-border rounded-l-xl border-r-0">
		<h6
			class:!bg-primary-red-light={(page - 1) * pageSize + index === 0}
			class:!bg-content-secondary={(page - 1) * pageSize + index === 1}
			class:!bg-primary-orange-light={(page - 1) * pageSize + index === 2}
			class:!text-background={[0, 1, 2].includes((page - 1) * pageSize + index)}
			class="text-content-secondary flex gap-1 items-center p-1 pr-2 rounded-sm bg-top-light-17 w-max"
		>
			<Icon
				name={assignedIcon}
				class={`${
					[0, 1, 2].includes((page - 1) * pageSize + index) ? 'fill-background' : 'fill-icon-accent'
				}`}
			/>
			#{(page - 1) * pageSize + index + 1}
		</h6>
	</td>
	<td class="p-3 pr-12 border border-border border-x-0">
		<div class="flex items-center gap-3">
			<img
				src={data.avatarfull
					? data.avatarfull
					: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Steam_icon_logo.svg/512px-Steam_icon_logo.svg.png'}
				alt={data.personaname ? data.personaname : 'Guest'}
				class="w-7 h-7 aspect-square rounded-full object-cover"
			/>
			<p class="flex items-center gap-2 text-lg text-content-primary">
				<span class="max-w-[150px] text-ellipsis overflow-hidden">
					{data.personaname ? data.personaname : 'Guest'}
				</span>
				<span class="text-top-light-45">{data.input}</span>
			</p>
		</div>
	</td>
	<td class="p-3 border border-border border-x-0">{numberFormatter.format(data.score)}</td>

	<!-- {#if tablename !== 'Track times'}
        <td class="p-3 border border-border border-x-0">{data.score}</td>
    {:else}
        <td class=" p-3 pr-6 border border-border rounded-r-xl border-l-0">{data.run_time}</td>
    {/if} -->
	<!-- <td class=" p-3 border border-border border-x-0">{data.stremid}</td> -->
	<td class=" p-3 border border-border border-x-0">{data.combo}x</td>
	<td class=" p-3 border border-border border-x-0 capitalize">{data.car_model}</td>
	<td class=" p-3 border border-border border-x-0">{data.label}</td>
	<td class=" p-3 border border-border border-x-0">{data.avg_speed}km/h</td>
	<td class=" p-3 border border-border border-x-0">{data.run_distance}km</td>
	<td class=" p-3 border border-border rounded-r-xl border-l-0">{data.run_time}</td>
	<!-- {#if tablename !== 'Track times'}
        <td class="p-3 pr-6 border border-border rounded-r-xl border-l-0">{data.run_time}</td>
    {/if} -->
	<!-- <td class=" p-3 border border-border border-x-0">{data.server}</td> -->
</tr>

<script lang="ts">
	import Icon from '../../../shared/Icon.svelte';
	export let statName;
	export let percent;
	export let stat;
    export let crashes
	export let unit
	let ValueExceeded = false;
	$: if (statName === 'Top Speed Achieved' && stat > 500) {
		ValueExceeded = true;
	}
	let slicedStat:any;
	
	$: if (statName === 'Most hours spent on No Hesi in one Session'){
		 slicedStat = stat.slice(0,5)
	} 
	$: if (statName === 'Total hours spent on No Hesi'){
		 slicedStat = stat.slice(0,5)
	}
	const adjustRank = (value: number) => {
		if (value > 0 && value <= 1) {
			return 1;
		} else if (value > 1 && value <= 5) {
			return 5;
		} else if (value > 5 && value <= 10) {
			return 10;
		} else if (value > 10 && value <= 50) {
			return 50;
		} else if (value > 50 && value <= 80) {
			return 80;
		} else if (value > 80) {
			return 100;
		} else {
			return value;
		}
	};
	let rank = adjustRank(percent);

	const adjustBackground = (value: number) => {
		if (value === 1) {
			return 'bg-[rgba(136,0,240,0.2)]';
		} else if (value === 5) {
			return 'bg-primary-red-bg-top';
		} else if (value === 10) {
			return 'bg-primary-orange-bg-top';
		} else if (value === 50) {
			return 'bg-green-bg-top';
		} else if (value === 80) {
			return 'bg-top-light-10';
		}
		return 'bg-top-light-10';
	};
	$: cardBgColor = adjustBackground(rank);

	const adjustBadgeColor = (value: number) => {
		if (value === 1) {
			return 'bg-[rgba(177,48,255,1)]';
		} else if (value === 5) {
			return 'bg-[rgba(221,3,85,1)]';
		} else if (value === 10) {
			return 'bg-[rgba(255,129,38,1)]';
		} else if (value === 50) {
			return 'bg-[rgba(106,255,103,1)]';
		} else if (value === 80) {
			return 'bg-top-light-10';
		}
		return 'bg-top-light-10';
	};
	let rankBgColor = adjustBadgeColor(rank);
	let IconName = statName === 'Points Record' ? 'Trophy' : 'SteeringWheel';
</script>

{#if crashes === true}
	<div
		class=" relative flex flex-col gap-3 p-4 rounded-xl self-stretch backdrop-opacity-100  bg-center bg-cover bg-no-repeat bg-[url('/images/user-profile-crashes-bg.png')] overflow-hidden"
	>
		<div class="absolute inset-0 bg-black opacity-85 rounded-xl" />

		<div class="absolute inset-0 {cardBgColor} opacity-100 rounded-xl" />
		<div class=" relative flex flex-row justify-between z-30">
			<p
				class="flex gap-1 items-center text-content-secondary text-sm font-medium font-inter text-balance content-start"
			>
				<Icon name={IconName} class="fill-icon mt-1" /><span>{statName}</span>
			</p>
			{#if rank > 80 || rank === 0}
				<div />
			{:else}
				<p
					class="{rankBgColor} px-2 py-1 rounded-sm font-inter font-medium text-sm drop-shadow-sm text-nowrap h-7"
				>
					Top {rank}%
				</p>
			{/if}
		</div>
		<h3 class=" relative title-gradient justify-center items-center py-9 z-30">{stat}</h3>
	</div>
{:else}
	<div class="flex flex-col gap-3 p-4 border border-border {ValueExceeded ? 'bg-top-light-10' : cardBgColor} rounded-xl">
		<div class="flex flex-row justify-between">
			<p
				class="flex gap-1 items-center text-content-secondary text-sm font-medium font-inter text-balance content-start"
			>
				<Icon name={IconName} class="fill-icon mt-1" />
				<span>{statName}</span>
			</p>
			{#if rank > 80 || rank === 0 || ValueExceeded}
				<div />
			{:else}
				<p
					class=" {rankBgColor} px-2 py-1 rounded-sm font-inter font-medium text-sm drop-shadow-sm text-nowrap h-7"
				>
					Top {rank}%
				</p>
			{/if}
		</div>
		<h3 class="title-gradient justify-center py-4">
			{#if ValueExceeded}
				N/A
			{:else if (slicedStat)}
				{slicedStat} 
				{:else}
				{stat}
				{#if (unit !== '')}
				<span class="lowercase text-mlg">{unit }</span>
				{/if} 
			{/if}
		</h3>
	</div>
{/if}

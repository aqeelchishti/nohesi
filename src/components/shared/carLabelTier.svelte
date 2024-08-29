<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let tier: number[];
	export let classes: string = '';
	export let iconClasses: string = '';
	export let textClasses: string = '';
	export let label: string = 'Tier';
	export let notificationNumber: number = 0;
	export let carsFilter: boolean = false;

	const dispatch = createEventDispatcher();
	const handleDeselect = () => {
		if (carsFilter) {
			dispatch('deselect', {
				tier
			});
		}
	};
</script>

{#each tier as t}
	{#if t === 0}
		<button
			class={`flex gap-2 items-center py-1 px-3 rounded-full bg-top-light-2 ${classes}`}
			on:click={handleDeselect}
		>
			<img src={`/icons/GrayCube.svg`} alt="cdn" class={`${iconClasses}`} />
			<span
				class={` text-md uppercase font-bold font-roboto slnt-10 text-content-tertiary  ${textClasses}`}
			>
				{#if carsFilter}
					{label}
				{:else}
					Tier{t}
				{/if}
			</span>
			{#if notificationNumber > 0}
				<span
					class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
				>
					+{notificationNumber}
				</span>
			{/if}
		</button>
	{:else if t === 1}
		<button
			class={`flex gap-2 items-center py-1 px-3 rounded-full bg-top-light-17 ${classes}`}
			on:click={handleDeselect}
		>
			<img src={`/icons/WhiteCube.svg`} alt="cdn" class={`${iconClasses}`} />
			<span
				class={` text-md uppercase font-bold font-roboto slnt-10 text-content-primary  ${textClasses}`}
			>
				{#if carsFilter}
					{label}
				{:else}
					Tier{t}
				{/if}
			</span>
			{#if notificationNumber > 0}
				<span
					class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
				>
					+{notificationNumber}
				</span>
			{/if}
		</button>
	{:else if t === 2}
		<button
			class={` flex gap-2 items-center py-1 px-3 rounded-full bg-yellow/40 ${classes}`}
			on:click={handleDeselect}
		>
			<img src={`/icons/YallowCube.svg`} alt="cdn" class={`${iconClasses}`} />
			<span class={` text-md uppercase font-bold font-roboto slnt-10 text-yellow  ${textClasses}`}>
				{#if carsFilter}
					{label}
				{:else}
					Tier{t}
				{/if}
			</span>
			{#if notificationNumber > 0}
				<span
					class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
				>
					+{notificationNumber}
				</span>
			{/if}
		</button>
	{:else if t === 3}
		<button
			class={`relative flex gap-2 items-center py-1 px-3 rounded-full bg-primary-red/40 ${classes}`}
			on:click={handleDeselect}
		>
			<img src={`/icons/RedCube.svg`} alt="cdn" class={`${iconClasses}`} />
			<span
				class={`relative text-md uppercase font-bold font-roboto slnt-10 text-primary-red  ${textClasses}`}
			>
				{#if carsFilter}
					{label}
				{:else}
					Tier{t}
				{/if}
			</span>
			{#if notificationNumber > 0}
				<span
					class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
				>
					+{notificationNumber}
				</span>
			{/if}
		</button>
	{/if}
{/each}

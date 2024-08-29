<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let tier: number;
	export let classes: string = '';
	export let iconClasses: string = '';
	export let textClasses: string = '';
	export let label: string = 'Tier';
	export let notificationNumber: number = 0;
	export let carsFilter: boolean = false;
	export let filterModal: boolean = false;

	const dispatch = createEventDispatcher();
	const handleDeselect = () => {
		if (carsFilter) {
			dispatch('deselect', {
				tier
			});
		}
	};
</script>

{#if tier === 0}
	<div class={`flex gap-2 relative items-center py-1 px-3 rounded-full bg-top-light-2 ${classes}`}>
		<img src={`/icons/GrayCube.svg`} alt="cdn" class={`${iconClasses}`} />
		<span
			class={` text-md uppercase font-bold font-roboto slnt-10 text-content-tertiary  ${textClasses}`}
		>
			{#if carsFilter || filterModal}
				{label}
			{:else}
				Tier{tier}
			{/if}
		</span>
		{#if carsFilter}
			<button
				class="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-[9px] font-bold text-black bg-content-primary/70 hover:bg-content-primary border-2 border-white rounded-full -top-1.5 -end-1.5 dark:border-gray-900"
				on:click={handleDeselect}
			>
				x
			</button>
		{/if}
		{#if notificationNumber > 0}
			<span
				class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
			>
				+{notificationNumber}
			</span>
		{/if}
	</div>
{:else if tier === 1}
	<div class={`flex gap-2 relative items-center py-1 px-3 rounded-full bg-top-light-17 ${classes}`}>
		<img src={`/icons/WhiteCube.svg`} alt="cdn" class={`${iconClasses}`} />
		<span
			class={` text-md uppercase font-bold font-roboto slnt-10 text-content-primary  ${textClasses}`}
		>
			{#if carsFilter || filterModal}
				{label}
			{:else}
				Tier{tier}
			{/if}
		</span>
		{#if carsFilter}
			<button
				class="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-[9px] font-bold text-black bg-content-primary/70 hover:bg-content-primary border-2 border-white rounded-full -top-1.5 -end-1.5 dark:border-gray-900"
				on:click={handleDeselect}
			>
				x
			</button>
		{/if}
		{#if notificationNumber > 0}
			<span
				class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
			>
				+{notificationNumber}
			</span>
		{/if}
	</div>
{:else if tier === 2}
	<div class={` flex gap-2 relative items-center py-1 px-3 rounded-full bg-yellow/40 ${classes}`}>
		<img src={`/icons/YallowCube.svg`} alt="cdn" class={`${iconClasses}`} />
		<span class={` text-md uppercase font-bold font-roboto slnt-10 text-yellow  ${textClasses}`}>
			{#if carsFilter || filterModal}
				{label}
			{:else}
				Tier{tier}
			{/if}
		</span>
		{#if carsFilter}
			<button
				class="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-[9px] font-bold text-black bg-content-primary/70 hover:bg-content-primary border-2 border-white rounded-full -top-1.5 -end-1.5 dark:border-gray-900"
				on:click={handleDeselect}
			>
				x
			</button>
		{/if}
		{#if notificationNumber > 0}
			<span
				class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
			>
				+{notificationNumber}
			</span>
		{/if}
	</div>
{:else if tier === 3}
	<div
		class={`relative flex gap-2 items-center py-1 px-3 rounded-full bg-primary-red/40 ${classes}`}
	>
		<img src={`/icons/RedCube.svg`} alt="cdn" class={`${iconClasses}`} />
		<span
			class={`relative text-md uppercase font-bold font-roboto slnt-10 text-primary-red  ${textClasses}`}
		>
			{#if carsFilter || filterModal}
				{label}
			{:else}
				Tier{tier}
			{/if}
		</span>
		{#if carsFilter}
			<button
				class="absolute inline-flex items-center justify-center w-3.5 h-3.5 text-[9px] font-bold text-black bg-content-primary/70 hover:bg-content-primary border-2 border-white rounded-full -top-1.5 -end-1.5 dark:border-gray-900"
				on:click={handleDeselect}
			>
				x
			</button>
		{/if}
		{#if notificationNumber > 0}
			<span
				class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
			>
				+{notificationNumber}
			</span>
		{/if}
	</div>
{:else if tier === 4}
	<div
		class={`bg-[#0e0b0f] flex gap-2 items-center py-1 px-3 rounded-full bg-top-light-2 ${classes}`}
	>
		<img src={`/icons/GrayCube.svg`} alt="cdn" class={`${iconClasses}`} />
		<span
			class={` text-md uppercase font-bold font-roboto slnt-10 text-content-primary  ${textClasses}`}
			>Certified</span
		>
		{#if notificationNumber > 0}
			<span
				class="absolute inline-flex items-center justify-center w-4 h-4 text-[9px] font-bold text-black bg-content-primary border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900"
			>
				+{notificationNumber}
			</span>
		{/if}
	</div>
{/if}

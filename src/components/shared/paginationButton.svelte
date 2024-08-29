<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let title: string;
	export let icon: string | undefined = undefined;
	export let classes: string | undefined = '';
	export let disabled: boolean = false;
	export let active: boolean = false;
	export let small: boolean = false;

	let dispatch = createEventDispatcher();

	let dispatchHandler = () => {
		dispatch('message', {
			data: title != '' ? title : icon
		});
	};
</script>

<button
	on:click={dispatchHandler}
	class:!text-background={active}
	class:!bg-content-primary={active}
	class="rounded-md flex items-center justify-center p-2 px-3 w-10 h-10 {small
		? ''
		: 'sm:w-14 sm:h-14 sm:p-4 sm:px-5'} text-md slnt-10 font-bold font-roboto bg-background text-content-primary border border-content-tertiary disabled:bg-top-light-10 disabled:border-0 hover:bg-top-light-10 transition-all duration-500 {classes}"
	{disabled}
>
	{#if icon}
		<img src="/icons/{icon}.svg" alt="cdn" />
	{/if}
	{title}
</button>

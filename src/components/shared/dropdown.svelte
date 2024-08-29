<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	export let key: string;
	export let options: string[] | any[];
	export let title: string;
	export let activeOption: string | number | undefined = undefined;

	$: icon = '';

	$: {
		if (title === 'Region' && activeOption !== 'All') {
			icon = options.find((e) => e.region === activeOption).flag;
		}else if (title === 'Region' && activeOption === 'All'){
			icon = ''
		}
	}

	const dispatch = createEventDispatcher();

	$: option = activeOption;
	$: optionsContainerToggle = false;

	const handleOptionsContainer = () => {
		optionsContainerToggle = !optionsContainerToggle;
	};

	const handleClick = (index: number) => {
		if (title === 'Region') {
			dispatch('selectActive', {
				key,
				value: options[index].region
			});
		} else {
			dispatch('selectActive', {
				key,
				value: options[index]
			});
		}
		// option = options[index];
		setTimeout(() => {
			optionsContainerToggle = false;
		}, 100);
	};
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative self-stretch h-full" on:mouseleave={() => (optionsContainerToggle = false)}>
	<button
		class="flex py-2 px-4 gap-2 justify-center items-center rounded-sm border border-border bg-top-light-2 self-stretch"
		on:click={handleOptionsContainer}
	>
		<div
			class="flex items-center justify-center gap-2 font-inter text-content-tertiary text-sm slnt-10"
		>
			<p>{title}</p>
			{#if icon}
				<img src="https://flagcdn.com/24x18/{icon}.webp" alt="flag" />
			{/if}
			<p class="text-content-primary">{option}</p>
		</div>
		<img src="/icons/CaretDown.svg" alt="cdn" />
	</button>

	<div
		class:hidden={!optionsContainerToggle}
		class="absolute left-0 text-content-secondary bg-background rounded-sm min-w-max w-full border border-border backdrop-blur-16 max-h-64 overflow-y-auto scrollbar"
		class:bottom-full={typeof activeOption === 'number'}
	>
		{#each options as tempOption, index}
			<button
				class="flex items-center gap-1 px-4 py-2 hover:bg-top-light-10 w-full text-start text-sm"
				on:click={() => handleClick(index)}
			>
				{#if typeof tempOption === 'string' || typeof tempOption === 'number'}
					{tempOption}
				{:else if tempOption.region === 'All'}
					{tempOption.region}
				{:else}
					<img src="https://flagcdn.com/24x18/{tempOption.flag}.webp" alt="flag" />
					{tempOption.region}
				{/if}
			</button>
		{/each}
	</div>
</div>

<style>
	.scrollbar {
		scrollbar-color: var(--bg-top-light-2) var(--bg-surface) !important;
		scrollbar-face-color: var(--bg-top-light-2);
		scrollbar-track-color: var(--bg-surface);
		scrollbar-width: thin;
	}
</style>

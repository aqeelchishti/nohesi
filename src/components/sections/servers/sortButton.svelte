<script lang="ts">
	import { _ } from 'svelte-i18n';

	export let containerClasses: string = '';
	export let textClasses: string = '';
	export let sortBy: string;
	export let options: string[];

	$: optionsContainerToggle = false;

	const handleOptionsContainer = () => {
		optionsContainerToggle = !optionsContainerToggle;
	};

	const handleSort = (sortOption: string) => {
		sortBy = sortOption;
	};
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative" on:mouseleave={() => (optionsContainerToggle = false)}>
	<button
		class={`flex py-2 px-5 gap-3 justify-center items-center rounded-md border border-content-tertiary ${containerClasses}`}
		on:click={handleOptionsContainer}
	>
		<img src="/icons/ArrowsDownUp.svg" alt="cdn" />
		<div
			class={`flex items-center justify-center gap-2 font-roboto text-content-tertiary font-bold uppercase text-md slnt-10 ${textClasses}`}
		>
			<p>{$_('components.sortButton.title')}</p>
			<p class="text-content-primary">{sortBy}</p>
		</div>
		<img src="/icons/CaretDown.svg" alt="cdn" />
	</button>

	<div
		class:hidden={!optionsContainerToggle}
		class={`absolute right-0 text-content-secondary rounded-md w-full border border-content-tertiary backdrop-blur-16 z-20 ${containerClasses} !bg-background`}
	>
		{#each options as sortOption}
			<button
				class={`block px-5 py-2 hover:bg-top-light-10 w-full text-start ${textClasses}`}
				on:click={() => handleSort(sortOption)}>{sortOption}</button
			>
		{/each}
	</div>
</div>

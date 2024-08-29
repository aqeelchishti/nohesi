<script lang="ts">
	import { carsSort } from '$lib/store/servers';

	$: optionsContainerToggle = false;

	export let containerClasses: string = '';
	export let textClasses: string = '';

	const handleOptionsContainer = () => {
		optionsContainerToggle = !optionsContainerToggle;
	};

	const handleClick = (tempOption: string) => {
		$carsSort.active = tempOption;

		setTimeout(() => {
			optionsContainerToggle = false;
		}, 100);
	};
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative" on:mouseleave={() => (optionsContainerToggle = false)}>
	<button
		class={`flex py-2 px-5 gap-3 justify-between items-center rounded-md border border-content-tertiary ${containerClasses}`}
		on:click={handleOptionsContainer}
	>
		<img src="/icons/ArrowsDownUp.svg" alt="cdn" />
		<div
			class={`flex items-center justify-center gap-2 font-roboto text-content-tertiary font-bold uppercase text-md whitespace-nowrap slnt-10 ${textClasses}`}
		>
			<p class="text-content-primary">{$carsSort.active}</p>
		</div>
		<img src="/icons/CaretDown.svg" alt="cdn" />
	</button>

	<div
		class:hidden={!optionsContainerToggle}
		class={`absolute right-0 text-content-secondary rounded-md w-full z-10 border border-content-tertiary backdrop-blur-16 ${containerClasses} !bg-background`}
	>
		{#each $carsSort.options as tempOption}
			<button
				class={`block px-5 py-2 hover:bg-top-light-10 w-full text-start ${textClasses}`}
				on:click={() => handleClick(tempOption)}>{tempOption}</button
			>
		{/each}
	</div>
</div>

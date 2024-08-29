<script lang="ts">
	import { tiers } from '$lib/store/servers';
	import TierLevel from './tierLevel.svelte';

	// export let options: string[] | any;
	// export let activeOption: string | undefined = undefined;

	$: optionsContainerToggle = false;

	export let containerClasses: string = '';
	export let textClasses: string = '';

	const handleOptionsContainer = () => {
		optionsContainerToggle = !optionsContainerToggle;
	};

	// const handleClick = (index: number) => {
	// 	option = options[index];
	// 	optionsContainerToggle = false;
	// };

	const handleClick = (tempOption: string) => {
		const option = tempOption;
		$tiers = $tiers.map((e) => ({ ...e, active: e.name === option ? !e.active : e.active }));
	};

	const handleDeselect = (event: any) => {
		const tier = event.detail.tier;
		$tiers = $tiers.map((e) => ({ ...e, active: e.value === tier ? false : e.active }));
		setTimeout(() => {
			optionsContainerToggle = false;
		}, 1);
	};
</script>

<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="relative" on:mouseleave={() => (optionsContainerToggle = false)}>
	<button
		class={`flex max-sm:flex-col py-2 px-5 gap-3 justify-center max-sm:items-start items-center rounded-md border border-content-tertiary ${containerClasses}`}
		on:click={handleOptionsContainer}
	>
		<div class="flex justify-center items-center gap-3">
			<div class="flex justify-center gap-1">
				<img src="/icons/GrayCube.svg" alt="cdn" />
				<p class=" text-content-tertiary text-sm font-roboto">Tier</p>
			</div>
			<div
				class={`flex max-xs:hidden items-center justify-center gap-2 font-roboto text-content-tertiary font-bold uppercase text-md slnt-10 ${textClasses}`}
			>
				{#each $tiers as tier}
					{#if tier.active}
						<TierLevel
							on:deselect={handleDeselect}
							carsFilter={true}
							tier={tier.value}
							label={tier.name}
							textClasses="!font-inter !text-xxs !text-normal capitalize "
							classes="!px-1 !py-0.5 !gap-1 !rounded-sm"
						/>
					{/if}
				{/each}
			</div>
			<img src="/icons/CaretDown.svg" alt="cdn" />
		</div>
		<div
			class={`hidden max-xs:flex items-center justify-center gap-2 font-roboto text-content-tertiary font-bold uppercase text-md slnt-10 ${textClasses}`}
		>
			{#each $tiers as tier}
				{#if tier.active}
					<TierLevel
						on:deselect={handleDeselect}
						carsFilter={true}
						tier={tier.value}
						label={tier.name}
						textClasses="!font-inter !text-xxs !text-normal capitalize "
						classes="!px-1 !py-0.5 !gap-1 !rounded-sm"
					/>
				{/if}
			{/each}
		</div>
	</button>

	<div
		class:hidden={!optionsContainerToggle}
		class={`absolute right-0 text-content-secondary rounded-md w-full z-10 border border-content-tertiary backdrop-blur-16 ${containerClasses} !bg-background`}
	>
		{#each $tiers as tempOption}
			<button
				class={`flex items-center gap-2 px-5 py-2 hover:bg-top-light-10 w-full text-start ${textClasses}`}
				on:click={() => handleClick(tempOption.name)}
			>
				<input type="checkbox" class="hidden" bind:checked={tempOption.active} />
				<div class="checkbox-container w-5 h-5 relative">
					<div class="w-full h-full border border-border rounded bg-top-light-2" />
					<svg
						width="20"
						class="tick-svg absolute inset-0 m-auto w-5 h-5 aspect-square text-primary hidden"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g clip-path="url(#clip0_3423_6388)">
							<path
								d="M0 4C0 1.79086 1.79086 0 4 0H20C22.2091 0 24 1.79086 24 4V20C24 22.2091 22.2091 24 20 24H4C1.79086 24 0 22.2091 0 20V4Z"
								fill="white"
								fill-opacity="0.1"
							/>
							<g filter="url(#filter0_d_3423_6388)">
								<path
									d="M21.7969 7.54597L9.79687 19.546C9.69236 19.6509 9.56816 19.7341 9.43142 19.7909C9.29467 19.8476 9.14806 19.8769 9 19.8769C8.85193 19.8769 8.70532 19.8476 8.56858 19.7909C8.43183 19.7341 8.30764 19.6509 8.20312 19.546L2.95312 14.296C2.84848 14.1913 2.76547 14.0671 2.70883 13.9304C2.6522 13.7936 2.62305 13.6471 2.62305 13.4991C2.62305 13.3511 2.6522 13.2046 2.70883 13.0678C2.76547 12.9311 2.84848 12.8069 2.95312 12.7022C3.05777 12.5976 3.182 12.5146 3.31873 12.4579C3.45546 12.4013 3.60201 12.3721 3.75 12.3721C3.89799 12.3721 4.04454 12.4013 4.18126 12.4579C4.31799 12.5146 4.44223 12.5976 4.54687 12.7022L9.00094 17.1563L20.205 5.9541C20.4163 5.74276 20.703 5.62402 21.0019 5.62402C21.3008 5.62402 21.5874 5.74276 21.7987 5.9541C22.0101 6.16544 22.1288 6.45209 22.1288 6.75098C22.1288 7.04986 22.0101 7.33651 21.7987 7.54785L21.7969 7.54597Z"
									fill="#B130FF"
								/>
							</g>
						</g></svg
					>
				</div>
				{tempOption.name}</button
			>
		{/each}
	</div>
</div>

<style>
	input[type='checkbox']:checked + .checkbox-container .tick-svg {
		display: block;
	}

	/* Position the tick SVG inside the checkbox */
	.tick-svg {
		left: 0;
		top: 0;
	}
</style>

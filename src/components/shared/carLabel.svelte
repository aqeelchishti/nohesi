<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import CarLabelTier from './carLabelTier.svelte';
	import Icon from './Icon.svelte';

	export let model: string = '';
	export let tier: number[] = [];
	export let active: boolean = false;
	export let LabelClass: string = '';
	export let container: HTMLDivElement;
	let width: number;

	let row: HTMLDivElement;
	let tooltip: HTMLParagraphElement;

	const showTooltip = () => {
		const rect = row.getBoundingClientRect();
		let top = rect.top - container.getBoundingClientRect().top;

		let tooltipHeight = tooltip.offsetHeight;
		if (width > 767) {
			if (top < tooltipHeight) {
				// Show tooltip below the button
				if (row.clientHeight > 40) {
					tooltip.style.bottom = '-62px';
				} else {
					tooltip.style.bottom = '-94px';
				}
			} else {
				// Show tooltip above the button
				if (row.clientHeight > 40) {
					tooltip.style.bottom = '68px';
				} else {
					tooltip.style.bottom = '38px';
				}
			}
		} else {
			tooltip.style.left = '12px';
			if (top < tooltipHeight) {
				// Show tooltip below the button
				tooltip.style.bottom = '-95%';
			} else {
				// Show tooltip above the button
				tooltip.style.bottom = '50%';
			}
		}
	};

	const dispatch = createEventDispatcher();

	const handleCheckboxChange = (event: any) => {
		const isChecked = event.target.checked;
		dispatch('checkBoxChange', {
			tier,
			model,
			isChecked
		});
	};
</script>

<svelte:window bind:innerWidth={width} />

<div
	class="hover:bg-[#2a292b] py-1.5 px-1.5 border border-border md:border-0 rounded-md transition-all duration-500 ease-in-out relative"
	bind:this={row}
>
	<label class="flex items-start justify-between flex-col md:flex-row group overflow-visible">
		<div class="flex justify-start items-center">
			<input
				type="checkbox"
				class="hidden"
				bind:checked={active}
				on:change={handleCheckboxChange}
			/>
			<div class="checkbox-container w-7 h-7 relative">
				<div class="w-full h-full border border-border rounded bg-top-light-2" />
				<svg
					width="24"
					class="tick-svg absolute inset-0 m-auto w-7 h-7 aspect-square text-primary hidden"
					height="24"
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

			<span
				class={`text-content-primary text-sm font-inter capitalize font-medium ml-2 text-left ${LabelClass}`}
				>{model
					.toLowerCase()
					.replace('nohesituned_', 'No Hesi Tuned ')
					.replace('nohesi', 'No Hesi Spec ')
					.replaceAll('_', ' ')}</span
			>
		</div>

		<div
			class="ps-8 pt-2 md:pt-0 md:ps-0 flex items-center justify-end gap-1 flex-wrap overflow-visible"
		>
			{#if tier.length > 1}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<div
					class="hidden group-hover:block cursor-pointer peer w-fit h-fit group"
					on:mouseenter={showTooltip}
				>
					<Icon
						name="Info-Colorless"
						class="fill-icon group-hover:fill-icon-accent"
						height="16"
						width="16"
					/>
				</div>
				<!-- svelte-ignore a11y-mouse-events-have-key-events -->
				<p
					bind:this={tooltip}
					class="bg-background p-3 z-[100] text-content-tertiary text-start rounded-md bottom-8 border border-border-light absolute w-4/5 right-3 invisible peer-hover:visible"
				>
					Some Tier 2 cars might be exclusively available to Tier 3 in certain Servers. VIP Cars in
					Public servers are only available to Tier 3.
				</p>
			{/if}
			<CarLabelTier {tier} textClasses="!font-inter !text-sm !text-normal capitalize shrink-0" />
		</div>
	</label>
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

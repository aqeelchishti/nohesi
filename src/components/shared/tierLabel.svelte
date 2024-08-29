<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import TierLevel from './tierLevel.svelte';

	export let checked: boolean = false;
	export let value = '';

	const dispatch = createEventDispatcher();

	function getLevel(item: string): number {
		const itemMap = {
			Public: 0,
			'Tier 1': 1,
			'Tier 2': 2,
			'Tier 3': 3,
			Certified: 4
		};

		const type = itemMap[item as 'Public' | 'Tier 1' | 'Tier 2' | 'Tier 3' | 'Certified'];

		return type | 0;
	}

	const handleChange = () => {
		dispatch('changeAvailable');
	};
</script>

<label class="flex items-start justify-between flex-col md:flex-row">
	<div class="flex justify-start items-center gap-2">
		<input type="checkbox" class="hidden" bind:checked on:change={handleChange} />
		<div class="checkbox-container w-7 h-7 relative">
			<div class="w-full h-full border border-border rounded bg-top-light-2" />
			<svg
				width="24"
				class="tick-svg absolute inset-0 m-auto w-7 h-7 text-primary hidden"
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
		<TierLevel
			tier={getLevel(value)}
			label={value}
			textClasses="!font-inter !text-normal capitalize "
			classes="!px-2 !py-1 !gap-1 !rounded-sm "
			filterModal={true}
		/>
	</div>
</label>

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

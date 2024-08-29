<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Button from '../../shared/button.svelte';
	import TierTag from '../../shared/tierTag.svelte';
	import IsLoginDialog from './is-login-dialog.svelte';

	const dispatch = createEventDispatcher();

	export let serverdata: any;
	
	const getSelectedItemId = () => {
		return serverdata.cars.findIndex((e: any) => e.availableSlots > 0)
	}
	
	let selectedItemId: number = getSelectedItemId();

	function selectItem(id: any) {
		selectedItemId = id;
	}

	let retry = false;

	function Dialog() {
		retry = !retry;
	}

	const joinServer = () => {
		dispatch('joinserver', {
			car: carData[selectedItemId].tag
		});
	};

	const carData = serverdata.cars.map(
		(e: { tag: string; name: string; availableSlots: number }, index: number) => ({
			tag: e.tag,
			name: e.name,
			icon: '',
			tierNumber: 2,
			id: index,
			available: e.availableSlots > 0
		})
	);
</script>

<div class=" ">
	<div class="grid grid-cols-12 gap-6">
		<div
			class="col-span-12 text-content-primary flex justify-start items-center font-semibold font-inter text-lg"
		>
			<p>Choose Car</p>
		</div>

		<div
			class="2xl:col-span-8 col-span-12 bg-top-dark-63 border p-2 md:p-5 border-border-light h-auto rounded-md overflow-hidden gap-1"
		>
			<div class="border border-border-light rounded-md">
				<img src="/images/fvrtCar.png" alt="" />
			</div>
			<div class="flex justify-between items-center py-2 flex-wrap">
				<div
					class="text-content-primary flex justify-start items-center p-2 gap-3 font-medium font-inter text-base capitalize"
				>
					<img src="/icons/Aston Martin.svg" alt="" />
					<p>{carData[selectedItemId].name}</p>
				</div>
				<TierTag
					tier={0}
					tierIcon="SmallCube.svg"
					classes="bg-primary-red-bg-top"
					textClasses="!text-content-primary !font-inter !text-sm !text-normal capitalize"
				/>
			</div>
		</div>

		<div
			class=" h-[615px] 2xl:col-span-4 col-span-12 bg-top-dark-63 border p-2 border-top-light-10 rounded-md text-content-primary gap-3 overflow-auto"
		>
			{#each carData as { id, icon, name, tierNumber, available } (id)}
				<button
					class="flex text-content-primary justify-start items-start flex-col lg:flex-row lg:justify-between lg:items-center p-2 rounded-md mb-2 transition-all duration-500 w-full"
					on:click={() => selectItem(id)}
					class:hover:bg-top-light-2={available}
					class:hover:border-border-light={available}
					disabled={!available}
					class:selected={selectedItemId === id}
					class:text-content-tertiary={!available}
					class:bg-icon={!available}
				>
					<div
						class="flex justify-start items-center p-2 gap-2 font-medium font-inter text-base capitalize"
					>
						<img src="/icons/Aston Martin.svg" alt="" />
						<p>{name}</p>
					</div>

					<TierTag
						tier={tierNumber}
						tierIcon="SmallCube.svg"
						classes="!	bg-black"
						textClasses="!text-primary-red-light !font-inter !text-sm !text-normal capitalize"
					/>
				</button>
			{/each}
		</div>
	</div>
	<div class="flex justify-end items-end py-5">
		<Button
			title="Let's Race"
			classes="bg-primary-violete-light text-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
			size="lg"
			font="roboto"
			on:click={joinServer}
		/>
	</div>

	{#if retry == true}
		<IsLoginDialog on:click_outside={Dialog} />
	{/if}
</div>

<style>
	.selected {
		background-color: #1a1a1a;
	}
</style>

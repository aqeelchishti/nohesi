<script lang="ts">
	import Spacer from '../shared/spacer.svelte';
	import TimeLineGenerator from './time-line-generator.svelte';

	let height: number;
	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<section class="relative overflow-hidden">
	<div class="container-section relative max-md:hidden">
		<img
			src="https://cdn.nohesi.gg/assets/website/get-started/server-bg.webp"
			alt="pillar group"
			class="absolute top-0 -z-10 right-0 object-contain"
		/>
	</div>

	<div class="container-section flex">
		<TimeLineGenerator
			imgSrc="/icons/pillar.svg"
			altText="Discord"
			gradentClass="bg-combine_violete "
		/>
		<div class="flex-1 flex flex-col gap-y-8 max-md:pt-2">
			<h4 class="text-content-primary">2. Joining Servers</h4>
			<div class="flex flex-col max-lg:gap-20 relative">
				<div bind:clientHeight={height}>
					<img
						src="https://cdn.nohesi.gg/assets/website/get-started/join-server.webp"
						alt="joining-server"
						class="w-full lg:w-10/12 h-auto -ml-6"
					/>
				</div>
				<p class="lg:max-w-[400px] lg:mt-0 h6-inter text-content-secondary font-medium">
					Sed amet vitae nec sed tempus quam vitae feugiat. Ipsum nec commodo tristique ut. Risus
					sed mauris nulla eleifend ante a ultrices.
				</p>
				<div
					class="absolute right-1/10 max-lg:right-0 lg:w-full lg:max-w-[460px] 2xl:max-w-[600px] 3xl:max-w-[720px] max-lg:-top-5 lg:bottom-0"
				>
					{#if width < 1024}
						<img
							src="https://cdn.nohesi.gg/assets/website/get-started/search-car.webp"
							alt="search-by-car"
							class="block"
							style="height: {height + 40}px; width: auto;"
						/>
					{:else}
						<img
							src="https://cdn.nohesi.gg/assets/website/get-started/search-car.webp"
							alt="search-by-car"
							class="block w-full"
						/>
					{/if}
				</div>
			</div>
			<Spacer height="h-20" />
		</div>
	</div>
</section>

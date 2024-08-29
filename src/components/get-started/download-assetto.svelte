<script>
	import DownloadAssettoCard from './download-assetto-card.svelte';
	import SystemRequirements from './system-requirements.svelte';
	import TimeLineGenerator from './time-line-generator.svelte';

	let datas = [
		{ title: 'Full game', initalPrice: '$10.49', price: '$10.49' },
		{ title: 'Season pass', initalPrice: '$10.49', price: '$10.49' },
		{ title: 'Ultimate edition', initalPrice: '$10.49', price: '$10.49' }
	];
</script>

<section class="relative overflow-hidden">
	<div class="container-section relative">
		<img src="https://cdn.nohesi.gg/assets/website/get-started/hero.webp" alt="" class="absolute -top-8 -z-10 -right-10" />
	</div>
	<div class="container-section pt-40">
		<h2 class="title-gradient h2-title mb-16">How to get <br /> started?</h2>
		<div class="flex">
			<TimeLineGenerator
				imgSrc="/icons/flag.svg"
				altText="flag"
				gradentClass="bg-combine_violete"
			/>
			<div class="flex-1 pb-[120px]">
				<h4 class="text-content-primary mb-8">1. Download <br /> Assetto Corsa</h4>
				<div class="grid xl:grid-cols-3 gap-6">
					<div class="space-y-3 max-xl:col-span-2">
						{#each datas as data (data.title)}
							<DownloadAssettoCard
								title={data.title}
								price={data.price}
								initalPrice={data.initalPrice}
							/>
						{/each}
					</div>
					<SystemRequirements />
				</div>
			</div>
		</div>
	</div>
</section>

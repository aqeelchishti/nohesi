<script>
	import TimeLineGenerator from './time-line-generator.svelte';

	const data = [
		{
			title: 'Feugiat faucibus gravida diam',
			description: 'Risus vitae est vestibulum urna. In neque eu maecenas auctor adipiscing mattis.'
		},
		{
			title: 'Non eu interdum turpis',
			description:
				'Id rutrum quis rhoncus rhoncus morbi libero nec pellentesque. Pretium non hendrerit diam enim.'
		},
		{
			title: 'Morbi sit eget sed',
			description:
				'Turpis in curabitur nulla in cursus adipiscing mi. Ut ultrices velit ante montes.'
		}
	];
</script>

<section class="container-section">
	<div class="flex">
		<TimeLineGenerator
			imgSrc="/icons/cube-shadow-blue.svg"
			altText="Discord"
			gradentClass="bg-combine_royal_blue"
		/>
		<div class="flex-1 flex flex-col gap-y-8">
			<h4 class="text-content-primary">5. Discord <br /> & Resources</h4>
			<div class="grid md:grid-cols-3 gap-6">
				{#each data as el}
					<div class="bg-top-light-5 p-5 rounded-xl flex flex-col gap-y-5">
						<img src="/icons/Copy.svg" alt={el.title} class="w-10 h-10" />
						<h3 class="h3-inter text-content-primary font-inter">{el.title}</h3>
						<p class="font-inter text-content-secondary font-medium text-base mt-auto">
							{el.description}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>

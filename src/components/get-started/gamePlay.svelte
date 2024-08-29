<script>
	import Spacer from '../shared/spacer.svelte';
import TimeLineGenerator from './time-line-generator.svelte';
</script>

<section class="flex container-section overflow-hidden">
	<TimeLineGenerator
		imgSrc="/icons/SteeringWheel.svg"
		altText="steering icon"
		gradentClass="bg-combine_red "
	/>
	<div class="flex-1 flex flex-col gap-y-8 max-md:pt-2">
		<h4 class="text-content-primary">3. Basic Gameplay</h4>
		<div class="relative">
			<img src="https://cdn.nohesi.gg/assets/website/get-started/gameplay.webp" alt="game play" class="w-4/5" />
			<div
				class="sm:backdrop-blur-[96px] p-4.5 rounded-lg w-full md:w-[504px] md:bg-top-light-10 block md:absolute mt-4 md:mt-0 right-0 top-[45%]"
			>
				<p class="h6-inter font-medium text-content-secondary">
					Eget at ut euismod elementum non. Gravida tristique aliquet pellentesque leo etiam magna
					pulvinar ullamcorper sit. Dictumst sit est ultrices pellentesque nibh. Bibendum posuere
					neque id amet gravida quisque. Semper tortor ligula tortor sollicitudin et semper eu.
				</p>
			</div>
		</div>
          <Spacer height="h-20" />
	</div>
</section>

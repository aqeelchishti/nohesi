<script>
	import Spacer from '../shared/spacer.svelte';
import TimeLineGenerator from './time-line-generator.svelte';
</script>

<section class="flex container-section">
	<TimeLineGenerator
		imgSrc="/icons/cube-shadow.svg"
		altText="steering icon"
		gradentClass="bg-combine_orange"
	/>
	<div class="flex-1 flex flex-col gap-y-8">
		<h4 class="text-content-primary">4. VIP Setup<br />& Benefits</h4>
		<div class="h-full flex flex-col gap-2">
		<!-- <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-y-4"> -->
			<!-- <div class="flex flex-col md:pb-[45px]">
				<p class="text-content-secondary h6-inter font-medium flex-1">
					Eget at ut euismod elementum non. Gravida tristique aliquet pellentesque leo etiam magna
					pulvinar ullamcorper sit.
				</p>
				{#each planData as data (data)}
					<p class="font-medium text-content-secondary text-sm flex items-center border-b border-border h-[72px] ">
						{data}
					</p>
				{/each}
			</div> -->
			<!-- <div class="pb-[35px] flex flex-col">
				<p class="text-content-secondary h6-inter font-medium flex-1">
					Eget at ut euismod elementum non. Gravida tristique aliquet pellentesque leo etiam magna
					pulvinar ullamcorper sit.
				</p>
				<img src="/images/test/get-started-vip.png" alt="" class=" w-full" />
			</div>
			<img src="/images/test/get-started-price-card-1.png" alt="" class="h-full w-full" />
			<img src="/images/test/get-started-price-card-2.png" alt="" class="h-full w-full" />
			<img src="/images/test/get-started-price-card-3.png" alt="" class="h-full ml-1 w-full" /> -->
			<p class="text-content-secondary h6-inter font-medium flex-1 lg:absolute pb-2 lg:mb-0 lg:max-w-[22%] 2xl:max-w-[18%] 3xl:max-w-[450px]">
				Eget at ut euismod elementum non. Gravida tristique aliquet pellentesque leo etiam magna
				pulvinar ullamcorper sit.
			</p>
			<img src="https://cdn.nohesi.gg/assets/website/get-started/vip-setup.webp" alt="" class="ml-1 w-full shrink-0" /> 
			
		</div>
		<Spacer height="h-20" />
	</div>
</section>

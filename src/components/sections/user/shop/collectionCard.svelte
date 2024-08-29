<script lang="ts">
	export let title, classes, cardClass;
</script>

<div class="{classes} relative flex justify-center overflow-hidden">
	<div
		class="{cardClass} absolute flex justify-center items-center before:z-30 after:z-30 before:absolute before:content-[''] before:inset-0 before:-top-16 before:bg-top before:bg-no-repeat before:bg-contain after:absolute after:content-[''] after:inset-0 after:-bottom-28 after:bg-bottom after:bg-no-repeat after:bg-contain size-full"
	>
		<span
			class="collection-title z-40 p-3 flex text-primary-violete font-superbro font-normal uppercase leading-[83.2px] text-[44px] sm:text-[112px] tracking-[-0.075em] self-center text-center"
			>{title}
		</span>
	</div>
</div>

<style>
	.collection-title {
		-webkit-text-fill: #8800f0;
		-webkit-text-stroke: 8px white;
	}
</style>

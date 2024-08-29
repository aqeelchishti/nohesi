<script lang="ts">
	export let bgImage: string;
	export let title: string;
	export let icon: string;
	export let url: string;
</script>

<a href="{url}">
	<div
		class="flex flex-col p-4 px-5 gap-5 items-start justify-end border border-border h-58 rounded-xl relative overflow-hidden hover:shadow-primary"
	>
		<div
			class="absolute -z-30 !bg-cover h-full w-full !bg-no-repeat !bg-center scale-125 -rotate-20"
			style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.6) 100%), url({bgImage});"
		/>
		<img src={`/icons/${icon}.svg`} alt="cdn" class="h-10 w-10 lg:h-13 lg:w-13" />
		<h3 class="text-content-primary">{title}</h3>
	</div>
</a>

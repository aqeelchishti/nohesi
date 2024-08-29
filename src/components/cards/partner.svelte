<script lang="ts">
	export let bgImage: string;
	export let title: string;
	export let url: string;
</script>

<a href={url} target={url === '#' ? '_self' : '_blank'}>
	<div
		class="flex flex-col p-4 px-5 gap-5 items-start justify-end border border-border h-58 rounded-xl relative overflow-hidden hover:shadow-primary"
	>
		<div
			class="absolute -z-30 inset-0 !bg-cover h-full w-full !bg-no-repeat !bg-center"
			style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.5) 100%), url({bgImage});"
		/>
		<h3 class="text-content-primary">{title}</h3>
	</div>
</a>

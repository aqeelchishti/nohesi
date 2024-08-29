<script lang="ts">
	export let ping: number;

    let color = ping < 100 ? 'green' : ping < 500 ? 'yellow' : 'red'
</script>

<div class="flex items-center gap-2 py-1 px-2 rounded-lg bg-top-dark-83 backdrop-blur-6 w-max">
	{#if ping < 100}
		<img src="/icons/ArrowsDownUpGreen.svg" alt="cdn" />
	{:else if ping < 500}
		<img src="/icons/ArrowsDownUpYellow.svg" alt="cdn" />
	{:else}
		<img src="/icons/ArrowsDownUpRed.svg" alt="cdn" />
	{/if}
	<span class="text-{color} text-sm font-roboto font-medium">{ping}ms</span>
</div>

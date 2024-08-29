<script lang="ts">
	export let height: 'h-36' | 'h-20' = 'h-36';
</script>

{#if height === 'h-36'}
	<div class={`self-stretch h-18 lg:h-36`} />
{:else}
	<div class={`self-stretch h-10 lg:h-20`} />
{/if}

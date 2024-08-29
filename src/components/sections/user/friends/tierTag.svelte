<script lang="ts">
	export let tier: number;
	export let classes: string = '';
</script>

{#if tier === 0}
	<span class={`text-content-primary rounded-sm p-0 px-1 text-sm font-medium ${classes}`}
		>Tier {tier}</span
	>
{:else if tier === 1}
	<p class={`text-content-primary rounded-sm p-0 px-1 text-sm font-medium ${classes}`}>
		Tier {tier}
	</p>
{:else if tier === 2}
	<p class={`text-content-primary rounded-sm p-0 px-1 text-sm font-medium ${classes}`}>
		Tier {tier}
	</p>
{:else}
	<p class={`text-content-primary rounded-sm p-0 px-1 text-sm font-medium ${classes}`}>
		Tier {tier}
	</p>
{/if}

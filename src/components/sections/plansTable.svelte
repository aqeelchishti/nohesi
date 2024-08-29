<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Plan from '../cards/plan.svelte';

	export let plans: any[];
	export let billingCycle: 'year' | 'month' = 'month'
	
</script>

<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
	<Plan placeFeatures={true} data={null} {billingCycle}/>
	{#each plans as data}
		<Plan {data} classes="" placeFeatures={true} {billingCycle} on:subscribe/>
	{/each}
</div>
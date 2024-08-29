<script lang="ts">
	import { trending_servers } from '$lib/stores';
	import Tier from '../cards/tier.svelte';

	// $: console.log($trending_servers)
</script>

{#if $trending_servers}
	<div class="grid md:grid-cols-2 xl:grid-cols-4 gap-6 self-stretch items-start">
		{#each $trending_servers as server}
			<Tier
				maxMembers={server.maxclients}
				members={server.clients}
				name={server.name}
				density={server.density}
				map={server.map}
				type={server.type}
				region={server.region}
				ip_address={server.ip_address}
			/>
		{/each}
	</div>
{/if}

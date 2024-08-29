<script lang="ts">
	import Icon from '../../shared/Icon.svelte';
	import regions from '$lib/data/regions.json';

	import Button from '../../shared/button.svelte';

	export let serverdata: any;
	const button = [
		{ id: 'People', label: serverdata.clients + '/' + serverdata.maxclients },
		{ id: 'Layer', label: serverdata.vip_slots + '/' + serverdata.maxclients },
		{ id: 'VecTorFlag', label: serverdata.tier3_cars + '/' + serverdata.maxclients },
		{ id: 'sk', label: serverdata.map }
	];
	const flag = regions.find((r) => r.code === serverdata.region)?.flag;
</script>

<div class=" ">
	<div class="flex flex-col gap-4 self-stretch">
		<div class="flex justify-start items-center gap-2 flex-wrap">
			<img src="https://flagcdn.com/32x24/{flag}.webp" alt="flag" />
			<h2 class="text-content-primary self-stretch text-xl">{serverdata?.name}</h2>
			<div
				class="bg-top-dark-83 gap-1 py-1 px-2 rounded-2xl flex justify-center items-center text-top-light-45 font-xxs"
			>
				<Icon name="ArrowsDownUp" class="stroke-green-secondary " width="16" height="16" />
				<p class="text-sm font-thin font-Inter text-green-secondary lowercase">8ms</p>
			</div>
		</div>
		<p class="text-base text-content-secondary font-inter md:w-2/5 text-ellipsis line-clamp-2">
			{serverdata?.density}
		</p>
		<div class="flex justify-between items-center flex-wrap">
			<div class="flex justify-start gap-9 items-center flex-wrap">
				{#each button as { id, label }}
					<div class="flex justify-center items-center gap-2">
						<Icon name={id} class="" width="24" height="24" />
						<p class="text-content-secondary self-stretch text-md font-inter">
							{label}
						</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

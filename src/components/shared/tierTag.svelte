<script lang="ts">
	export let tier: number;
	export let tierIcon: string;
	export let classes: string = '';
	export let iconClasses: string = '';
	export let textClasses: string = '';
</script>

{#if tier === 0}
	<div class={`bg-background-light flex gap-2 items-center py-2 px-3 rounded-full ${classes}`}>
		<img src={`/icons/${tierIcon}`} alt="cdn" class={`${iconClasses}`} />
		<span class={`text-background text-md uppercase font-bold font-roboto slnt-10 ${textClasses}`}
			>Tier {tier}</span
		>
	</div>
{:else if tier === 1}
	<div class={`bg-background-light flex gap-2 items-center py-2 px-3 rounded-full ${classes}`}>
		<img src={`/icons/${tierIcon}`} alt="cdn" class={`${iconClasses}`} />
		<span class={`text-background text-md uppercase font-bold font-roboto slnt-10 ${textClasses}`}
			>Certified</span
		>
	</div>
{:else if tier === 2}
	<div class={`bg-background-light flex gap-2 items-center py-2 px-3 rounded-full ${classes}`}>
		<img src={`/icons/${tierIcon}`} alt="cdn" class={`${iconClasses}`} />
		<span class={`text-background text-md uppercase font-bold font-roboto slnt-10 ${textClasses}`}
			>Tier {tier - 1}</span
		>
	</div>
{:else if tier === 3}
	<div class={`bg-primary-orange flex gap-2 items-center py-2 px-3 rounded-full ${classes}`}>
		<img src={`/icons/${tierIcon}`} alt="cdn" class={`${iconClasses}`} />
		<span
			class={`text-background-light text-md uppercase font-bold font-roboto slnt-10 ${textClasses}`}
			>Tier {tier - 1}</span
		>
	</div>
{:else}
	<div class={`bg-primary-red flex gap-2 items-center py-2 px-3 rounded-full ${classes}`}>
		<img src={`/icons/${tierIcon}`} alt="cdn" class={`${iconClasses}`} />
		<span
			class={`text-background-light text-md uppercase font-bold font-roboto slnt-10 ${textClasses}`}
			>Tier {tier - 1}</span
		>
	</div>	
{/if}

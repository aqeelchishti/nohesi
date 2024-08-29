<script lang="ts">
	export let icon: string;
	export let color: string;
	export let title: string;
	export let description: string;
	export let active: boolean = false;
</script>

<div
	class:shadow={active}
	class={'p-6 gap-12 flex flex-col items-start self-stretch border border-border rounded-xl bg-top-light-2'}
>
	<img src="/icons/{icon}.svg" alt="cdn" />
	<div class="gap-6 flex flex-col items-start self-stretch">
		<h3 class="text-{color}">{title}</h3>
		<p class="text-content-secondary text-base">
			{description}
		</p>
	</div>
</div>

<style lang="postcss">
	.shadow {
		box-shadow: 0px 8px 48px 4px rgba(106, 255, 103, 0.1);
	}
</style>

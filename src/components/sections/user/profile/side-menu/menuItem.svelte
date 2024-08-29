<script lang="ts">
	export let name: string, isActive: boolean;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<li
	on:click
	class="{isActive === true
		? 'bg-top-light-10 border border-border'
		: ''} rounded-sm py-2 px-4 text-sm font-medium text-content-primary font-inter border border-top-light-2 cursor-pointer hover:bg-top-light-10 hover:border-border"
>
	{name}
</li>

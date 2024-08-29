<script lang="ts">
	export let title: string, active: boolean;
</script>

<div
	on:click
	class="{active === true
		? 'border-border-light bg-top-light-10'
		: 'border-transparent'} py-3 px-10 rounded-sm font-roboto slnt-10 font-medium text-md text-content-secondary uppercase border hover:border-border-light hover:bg-top-light-10 cursor-pointer"
>
	{title}
</div>

<script>
	import Button from '../shared/button.svelte';
	import Icon from '../shared/Icon.svelte';
	import VioleteButton from '../shared/violeteButton.svelte';

	export let title;
	export let initalPrice;
	export let price;
</script>

<div class="bg-top-light-10 px-5 py-4.5 rounded-2xl">
	<div class="flex items-center gap-3 pb-3">
		<Icon name="WindowsLogo32" height="32" width="32" />
		<h4 class="h4-inter text-content-primary">{title}</h4>
	</div>
	<div class="text-base text-content-surface flex gap-x-1.5 items-center">
		<span class="text-content-primary font-medium">{initalPrice}</span>
		<Button classes="bg-green text-bg-surface !py-2 !font-medium " size="md" title={price} />
		<VioleteButton
			title="Buy"
			size="sm"
			font="roboto"
			style="italic"
			classes="ml-auto !font-bold !py-2"
		/>
	</div>
</div>

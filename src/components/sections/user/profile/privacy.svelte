<script>
	import Switch from '../../../shared/switch.svelte';
</script>

<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
	<h4 class="text-content-primary h4-inter font-inter">Privacy</h4>
	<div class="flex flex-col w-full">
		<div class="flex justify-between w-full">
			<h6 class="h6-inter text-content-secondary">Private my page</h6>
			<Switch />
		</div>
        <p class="text-content-secondary font-inter font-normal">If you use this function, no one will see your stats.</p>
	</div>
</div>
<script lang="ts">
	export let checked: boolean = false;

	export let pillSize: 'sm' | 'lg' = 'lg';
</script>

{#if pillSize === 'lg'}
	<label class={`relative inline-block h-8 w-14`}>
		<input type="checkbox" name="" id="" class="w-0 h-0 opacity-0 peer" {checked} />
		<span
			class={`absolute cursor-pointer top-0 bottom-0 left-0 right-0 bg-top-light-2 border-2 rounded-full border-border transition-all duration-500 before:absolute before:content-[''] before:h-6 before:w-6 before:bg-icon before:rounded-full before:bottom-0.5 before:left-1 before:transition-all before:duration-500 peer-checked:border-border-light peer-checked:bg-top-light-10 peer-checked:before:bg-primary-violete-light peer-checked:before:translate-x-5 peer-checked:before:shadow-voileteSwitch`}
		/>
	</label>
{:else}
	<label class={`relative inline-block h-3 w-5`}>
		<input type="checkbox" name="" id="" class="w-0 h-0 opacity-0 peer" {checked} />
		<span
			class={`absolute cursor-pointer top-0 bottom-0 left-0 right-0 bg-top-light-2 border-2 rounded-full border-border transition-all duration-500 before:absolute before:content-[''] before:h-2 before:w-2 before:bg-icon before:rounded-full before:bottom-[6.25%] before:left-[12.5%] before:transition-all before:duration-500 peer-checked:border-border-light peer-checked:bg-top-light-10 peer-checked:before:bg-primary-violete-light peer-checked:before:translate-x-1 peer-checked:before:shadow-voileteSwitch`}
		/>
	</label>
{/if}

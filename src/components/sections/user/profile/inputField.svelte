<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import Icon from '../../../shared/Icon.svelte';

	export let label: string;
	export let placeholder: string;
	export let icon: string;
	export let type: string = 'text';
	export let required: boolean = false;
	export let error: string = '';
	export let value: string = '';
	export let showValue: boolean = false;
	export let disabled: boolean = false;

	let field: HTMLInputElement;

	const dispatch = createEventDispatcher();

	const handleChange = (event: any) => {
		dispatch('change', {
			email: event.target.value
		});
	};

	$: if (field && value === '') {
		field.value = '';
	}

	$: if (field && showValue) {
		field.value = value;
	}
</script>

<div class="flex flex-col gap-1.5 w-full">
	<div class="flex items-center justify-between px-2 text-content-secondary font-inter text-sm">
		<div class="flex-1 flex gap-0.5 items-end">
			<p>{label}</p>
			{#if error != ''}
				<small class="text-red px-2">{error}</small>
			{/if}
		</div>
		<slot name="label2" />
	</div>
	<div class="relative w-full">
		<input
			bind:this={field}
			on:input={handleChange}
			{required}
			{type}
			{placeholder}
			{disabled}
			class={`p-3.5 px-12 rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary text-content-primary w-full`}
		/>
		<Icon name={icon} class="fill-icon absolute top-1/2 -translate-y-1/2 left-4" />

		<div class="absolute top-1/2 -translate-y-1/2 right-4">
			<slot name="btn" />
		</div>
	</div>
</div>

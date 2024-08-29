<script lang="ts">
	import Button from './button.svelte';

	export let size: 'sm' | 'md' | 'lg' | 'full' | undefined = 'sm';
	export let icon: string | undefined = undefined;
	export let iconClasses: string | undefined = undefined;
	export let font: 'roboto' | 'inter' | undefined = 'inter';
	export let style: 'italic' | 'non-italic' | undefined = 'non-italic';
	export let classes: string | undefined = '';
	export let title: string;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let type: 'button' | 'reset' | 'submit' | null | undefined = 'button';
	export let value: string | undefined = undefined;
	export let name: string | undefined = undefined;
	export let loaderSize: string = '24';
	export let loaderColor: string = 'stroke-background';

	classes = `border border-content-tertiary text-content-primary !text-md uppercase slnt-10 !p-4 disabled:border-transparent disabled:bg-top-light-10 disabled:text-content-tertiary !px-7 hover:!border-content-secondary hover:bg-top-light-17 ${classes}`;
</script>

<Button
	{type}
	{title}
	{size}
	{icon}
	{iconClasses}
	{font}
	{style}
	{classes}
	{disabled}
	{loading}
	{value}
	{name}
	{loaderSize}
	{loaderColor}
	on:click
/>

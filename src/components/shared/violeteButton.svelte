<script lang="ts">
	import Button from './button.svelte';

	export let size: 'sm' | 'md' | 'lg' | 'full' | undefined = 'sm';
	export let icon: string | undefined = undefined;
	export let iconClasses: string | undefined = undefined;
	export let iconSize: string = '15px';
	export let font: 'roboto' | 'inter' | undefined = 'inter';
	export let style: 'italic' | 'non-italic' | undefined = 'non-italic';
	export let classes: string | undefined = '';
	export let title: string;
	export let disabled: boolean = false;
	export let loading: boolean = false;
	export let type: 'button' | 'reset' | 'submit' | null | undefined = 'button';
	export let value: string | undefined = undefined;
	export let name: string | undefined = undefined;

	classes = `!bg-primary-violete text-content-primary shadow-violete1 !text-md uppercase slnt-10 py-4 px-7 hover:shadow-violete2 hover:violete-gradient ${classes}`;
</script>

<Button
	{type}
	{title}
	{size}
	{icon}
	{iconClasses}
	{iconSize}
	{font}
	{style}
	{classes}
	{disabled}
	{loading}
	{value}
	{name}
	on:click
/>

<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '../../../shared/Icon.svelte';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';
	import { socialConnecting } from '$lib/stores';

	export let icon: string;
	export let title: string;
	export let id: string | undefined = undefined;
	export let disabled: boolean = false;
</script>

<div class="flex flex-col gap-4 p-2 border border-border-light rounded-md w-full">

	<div class="flex flex-col xs:flex-row justify-between xs:items-center gap-2 xs:w-full">
		<div class="flex gap-3 items-center">
			<Icon
				name={icon}
				class={`${!id ? 'fill-icon' : 'fill-content-primary'}`}
				height="44"
				width="44"
				viewBox="0 0 44 44"
			/>
			<div class="flex flex-col justify-center">
				<p class="font-roboto slnt-10 text-content-primary font-bold text-md uppercase">{title}</p>
				{#if id}
					<p class="font-inter text-content-tertiary font-medium">{id}</p>
				{/if}
			</div>
		</div>
		<OutlinedButton
			title={id ? 'De-Link' : 'Link'}
			size="sm"
			classes="!py-2 !px-7 !w-35 !font-bold"
			font="roboto"
			loaderColor="!stroke-icon-accent"
			disabled={disabled || $socialConnecting !== null}
			loading={$socialConnecting === title}
			on:click
		/>
	</div>

	<slot />
</div>

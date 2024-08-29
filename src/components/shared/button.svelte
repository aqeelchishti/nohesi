<script lang="ts">
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
	export let loaderSize: string = '24';
	export let loaderColor: string = 'stroke-background';
</script>

{#if size == 'sm'}
	<button
		class="flex btn-xs font-{font} {classes} {style}  transition-all duration-300 justify-center whitespace-nowrap"
		disabled={disabled || loading}
		on:click
		{type}
		{value}
		{name}
	>
		{#if icon}
			<img
				width={iconSize}
				height={iconSize}
				src="/icons/{icon}.svg"
				alt="cdn"
				class={iconClasses}
			/>
		{/if}
		{#if loading}
			<svg
				width={loaderSize}
				height={loaderSize}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				class="{loaderColor} "
				><style>
					.spinner_V8m1 {
						transform-origin: center;
						animation: spinner_zKoa 2s linear infinite;
					}
					.spinner_V8m1 circle {
						stroke-linecap: round;
						animation: spinner_YpZS 1.5s ease-in-out infinite;
					}
					@keyframes spinner_zKoa {
						100% {
							transform: rotate(360deg);
						}
					}
					@keyframes spinner_YpZS {
						0% {
							stroke-dasharray: 0 150;
							stroke-dashoffset: 0;
						}
						47.5% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -16;
						}
						95%,
						100% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -59;
						}
					}
				</style><g class="spinner_V8m1"
					><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" /></g
				></svg
			>
		{:else}
			{title}
		{/if}
	</button>
{:else if size == 'md'}
	<button
		class="flex btn-md font-{font} {classes} {style}  transition-all duration-300 justify-center whitespace-nowrap"
		disabled={disabled || loading}
		on:click
		{type}
		{value}
		{name}
	>
		{#if icon}
			<img src="/icons/{icon}.svg" alt="cdn" class={iconClasses} />
		{/if}
		{#if loading}
			<svg
				width={loaderSize}
				height={loaderSize}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				class="{loaderColor} "
				><style>
					.spinner_V8m1 {
						transform-origin: center;
						animation: spinner_zKoa 2s linear infinite;
					}
					.spinner_V8m1 circle {
						stroke-linecap: round;
						animation: spinner_YpZS 1.5s ease-in-out infinite;
					}
					@keyframes spinner_zKoa {
						100% {
							transform: rotate(360deg);
						}
					}
					@keyframes spinner_YpZS {
						0% {
							stroke-dasharray: 0 150;
							stroke-dashoffset: 0;
						}
						47.5% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -16;
						}
						95%,
						100% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -59;
						}
					}
				</style><g class="spinner_V8m1"
					><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" /></g
				></svg
			>
		{:else}
			{title}
		{/if}
	</button>
{:else if size == 'lg'}
	<button
		class="flex btn-lg font-{font} {classes} {style}  transition-all duration-300 justify-center whitespace-nowrap"
		disabled={disabled || loading}
		on:click
		{type}
		{value}
		{name}
	>
		{#if icon}
			<img src="/icons/{icon}.svg" alt="cdn" class={iconClasses} />
		{/if}
		{#if loading}
			<svg
				width={loaderSize}
				height={loaderSize}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				class="{loaderColor} "
				><style>
					.spinner_V8m1 {
						transform-origin: center;
						animation: spinner_zKoa 2s linear infinite;
					}
					.spinner_V8m1 circle {
						stroke-linecap: round;
						animation: spinner_YpZS 1.5s ease-in-out infinite;
					}
					@keyframes spinner_zKoa {
						100% {
							transform: rotate(360deg);
						}
					}
					@keyframes spinner_YpZS {
						0% {
							stroke-dasharray: 0 150;
							stroke-dashoffset: 0;
						}
						47.5% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -16;
						}
						95%,
						100% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -59;
						}
					}
				</style><g class="spinner_V8m1"
					><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" /></g
				></svg
			>
		{:else}
			{title}
		{/if}
	</button>
{:else}
	<button
		class="flex btn-full font-{font} {classes} {style} transition-all duration-300 justify-center whitespace-nowrap"
		disabled={disabled || loading}
		on:click
		{type}
		{value}
		{name}
	>
		{#if icon}
			<img src="/icons/{icon}.svg" alt="cdn" class={iconClasses} />
		{/if}
		{#if loading}
			<svg
				width={loaderSize}
				height={loaderSize}
				viewBox="0 0 24 24"
				xmlns="http://www.w3.org/2000/svg"
				class="{loaderColor} "
				><style>
					.spinner_V8m1 {
						transform-origin: center;
						animation: spinner_zKoa 2s linear infinite;
					}
					.spinner_V8m1 circle {
						stroke-linecap: round;
						animation: spinner_YpZS 1.5s ease-in-out infinite;
					}
					@keyframes spinner_zKoa {
						100% {
							transform: rotate(360deg);
						}
					}
					@keyframes spinner_YpZS {
						0% {
							stroke-dasharray: 0 150;
							stroke-dashoffset: 0;
						}
						47.5% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -16;
						}
						95%,
						100% {
							stroke-dasharray: 42 150;
							stroke-dashoffset: -59;
						}
					}
				</style><g class="spinner_V8m1"
					><circle cx="12" cy="12" r="9.5" fill="none" stroke-width="3" /></g
				></svg
			>
		{:else}
			{title}
		{/if}
	</button>
{/if}

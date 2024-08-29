<script lang="ts">
	import { _ } from 'svelte-i18n';
	import OutlinedButton from '../../shared/outlinedButton.svelte';

	$: active = 1;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="px-3 lg:px-9 pb-5 pt-93 rounded-xl bg-gradient">
	<div class="flex flex-col gap-10">
		<h1 class="text-content-primary self-stretch">{$_('page.shop.banner.title')}</h1>
		<div class="flex justify-between items-center">
			<OutlinedButton
				title={$_('page.shop.banner.btn')}
				font="roboto"
				size="md"
			/>
			<div class="flex gap-2">
				<div
					class:!bg-content-primary={active === 0}
					class="h-4 w-4 bg-content-tertiary rounded-full hover:cursor-pointer"
					on:click={() => (active = 0)}
				/>
				<div
					class:!bg-content-primary={active === 1}
					class="h-4 w-4 bg-content-tertiary rounded-full hover:cursor-pointer"
					on:click={() => (active = 1)}
				/>
				<div
					class:!bg-content-primary={active === 2}
					class="h-4 w-4 bg-content-tertiary rounded-full hover:cursor-pointer"
					on:click={() => (active = 2)}
				/>
				<div
					class:!bg-content-primary={active === 3}
					class="h-4 w-4 bg-content-tertiary rounded-full hover:cursor-pointer"
					on:click={() => (active = 3)}
				/>
			</div>
		</div>
	</div>
</div>

<style lang="postcss">
	.bg-gradient {
		background: linear-gradient(180deg, var(--bg-top-dark-0) 0%, var(--bg-surface) 100%),
			linear-gradient(0deg, var(--bg-top-dark-20) 0%, var(--bg-top-dark-20) 100%),
			url('/images/merch-bg.png');
		background-size: cover;
		background-repeat: no-repeat;
	}
</style>

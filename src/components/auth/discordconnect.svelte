<script lang="ts">
	import OutlinedButton from '../../components/shared/outlinedButton.svelte';
	import { goto } from '$app/navigation';
	import { userLoggedIn } from '$lib/stores';
	import { _ } from 'svelte-i18n';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher()
	const handleConnectButton = () => {
		userLoggedIn.set(true);
		goto('/');
	};
</script>

<div class="flex items-center justify-center md:justify-start">
	<a href="/">
		<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
	</a>
</div>
<div class=" flex items-center justify-center">
	<div
		class="w-full md:w-2/5 px-5 gap-8 py-7 flex flex-col justify-center bg-top-light-2 rounded-xl border border-border"
	>
		<form action="" class="flex flex-col gap-5">
			<h4 class="h4 title-gradient">
				{@html $_('auth.connectDiscord.title').replaceAll('\n', '<br>')}
			</h4>
			<label for="" class="text-sm text-content-secondary">{$_('auth.connectDiscord.msg')}</label>
		</form>
		<OutlinedButton
			icon="Discord"
			iconClasses="h-6 w-6 2xl:w-8 2xl:h-8 opacity-100"
			title={$_('auth.connectDiscord.btn')}
			size="md"
			font="roboto"
			classes="place-content-center"
			on:click={handleConnectButton}
		/>
	</div>
</div>

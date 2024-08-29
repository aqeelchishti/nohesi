<script lang="ts">
	import { user } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import SocialLink from './socialLink.svelte';
	import Switch from '../../../shared/switch.svelte';

	const dispatch = createEventDispatcher();

	const handleDiscord = async (id: string | undefined) => {
		dispatch('handleDiscord', {
			id
		});
	};
	const handleGoogle = async (id: string | undefined) => {
		dispatch('handleGoogle', {
			id
		});
	};
	const handleSteam = async (id: string | undefined) => {
		dispatch('handleSteam', {
			id
		});
	};
</script>

<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
	<h4 class="h4-inter text-content-primary">Social Links</h4>
	<div class="flex flex-col w-full mx-auto xs:w-full xs:items-start gap-5 self-stretch">
		<SocialLink
			icon="Discord44"
			title="discord"
			id={$user.connectedProviders?.find((e) => e.provider === 'discord')?.username}
			on:click={() =>
				handleDiscord($user.connectedProviders?.find((e) => e.provider === 'discord')?.id)}
		>
			<div
				class="flex lg:flex-row md:flex-row sm:flex-row max-[470px]:flex-col gap-2 justify-between"
			>
				<h6 class="h6-inter text-content-secondary">Show on profile page</h6>
				<Switch />
			</div>
		</SocialLink>
		<SocialLink
			icon="Steam44"
			title="steam"
			id={$user.connectedProviders?.find((e) => e.provider === 'steam')?.username}
			on:click={() =>
				handleSteam($user.connectedProviders?.find((e) => e.provider === 'steam')?.id)}
			disabled={$user.triesLeft === 0}
		>
			<div
				class="flex lg:flex-row md:flex-row sm:flex-row max-[470px]:flex-col gap-2 justify-between"
			>
				<h6 class="h6-inter text-content-secondary">Show on profile page</h6>
				<Switch />
			</div>
		</SocialLink>
		<SocialLink
			icon="Google44"
			title="google"
			id={$user.connectedProviders?.find((e) => e.provider === 'google')?.username}
			on:click={() =>
				handleGoogle($user.connectedProviders?.find((e) => e.provider === 'google')?.id)}
		/>
	</div>
</div>

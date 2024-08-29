<!-- <script lang="ts">
	import Profile from '../../../../../../components/sections/user/home/profile.svelte';
	import Spacer from '../../../../../../components/shared/spacer.svelte';
</script>

<Profile personalProfile={false} />
<Spacer height="h-20" /> -->

<script lang="ts">
	import { footerToggle } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';
	import { goto } from '$app/navigation';
	import VioleteButton from '../../../../../../components/shared/violeteButton.svelte';

	onMount(() => {
		footerToggle.set('hidden');
	});

	onDestroy(() => {
		footerToggle.set('');
	});

	const handleClick = () => {
		goto('/');
	};
</script>

<div
	class="rounded-xl mt-6 border border-border bg-top-dark-83 backdrop-blur-16 p-6 3xl:p-12 4xl:p-18 flex flex-col gap-10 items-center"
>
	<h1 class="text-content-primary text-center">Work in progress</h1>
	<VioleteButton
		title="Go to main page"
		font="roboto"
		classes="w-max !font-bold"
		size="sm"
		on:click={handleClick}
	/>
</div>

<script lang="ts">
	import { goto } from '$app/navigation';
	import { onMount } from 'svelte';

	import Badges from './badges.svelte';
	import Profile from './profile.svelte';
	import Stats from './stats.svelte';
	//import ProfileLoading from './profileLoading.svelte';
	//import StatsLoading from './statsLoading.svelte';

	import type { userProfileInterface } from '$lib/interfaces';
	import { user } from '$lib/stores';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	
	let ProfileLoading: any;
	let StatsLoading: any;
	let interval: NodeJS.Timeout;
	let _userData: userProfileInterface;
	let statsAvailable = false
	let stats:any = null
	let steamId: any;
	$: uid = steamId;
	$: providers = $user.connectedProviders ? $user.connectedProviders : null;
	$: steamProvider = providers?.find((item) => item.provider === 'steam');
	$ : if($user.authenticated === true) statsAvailable = true
	$ : console.log($user)
	export let personalProfile: boolean = true;

	const handleSteamConnection = async () => {
		goto('/api/steam');
	};

	let isSkeletonLoading = false;
	const provider = $user.connectedProviders?.find((item) => item.provider === 'steam');
	$: console.log(provider);

	// const uid = '76561199522266940'
	const fetchStats = async () => {
		if (providers) {
			if (steamProvider) {
				uid = steamProvider.id;
			}
		}
		if (uid) {
			isSkeletonLoading = true;
			const result = await fetch(`${PUBLIC_BACKEND_URL}/user-stats`, {
				method: 'POST',
				headers: { 'content-type': 'application/json' },
				body: JSON.stringify({ uid })
			});
			try {
				const data = await result.json();
				stats = data.data
				console.log(data);
			} catch (error) {
				console.log('error');
			} finally {
				isSkeletonLoading = false;
			}
		}
	};
	$: if ($user.authenticated) fetchStats();

	onMount(async () => {
		ProfileLoading = (await import('./profileLoading.svelte')).default;
		StatsLoading = (await import('./statsLoading.svelte')).default;
	});
</script>

<div class="flex flex-col gap-14 md:gap-20 pt-10 mx-2">
	{#if $user.authenticated === false}
		<svelte:component this={ProfileLoading} />
	{:else}
		<Profile on:click={handleSteamConnection} />
	{/if}

	<Badges />

	{#if isSkeletonLoading === true}
		<svelte:component this={StatsLoading} />
	{:else if personalProfile}
		<div class={ !statsAvailable ? "hidden" : ""}><Stats on:click {personalProfile} {stats} /></div>
	{:else}
		<div class={ !statsAvailable ? "hidden" : ""}>
			<Stats
				on:click
				{personalProfile}
				{stats}
			/>
		</div>
	{/if}
</div>

<script lang="ts">
	import 'skeleton-elements/css';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import {
		discord,
		plans,
		roles,
		subscription,
		trending_servers,
		user,
		websiteLoading
	} from '$lib/stores';
	import { getTimezone } from '$lib/timezones';
	import { handleLogout, getLevel } from '$lib/utils';
	import { onMount } from 'svelte';
	import '../app.css';
	import Loading from '../components/shared/loading.svelte';

	export let data;

	$: ({ sid } = data);

	const setStores = async () => {
		websiteLoading.set(true);
		const res = await fetch(`${PUBLIC_BACKEND_URL}/user-details`, {
			headers: {
				Authorization: `Bearer ${sid}`
			}
		});

		const { data, error } = await res.json();

		if (error) {
			await handleLogout();
		} else {
			const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
			const country = getTimezone(timezone);

			if (data.connected_providers.find((e: any) => e.provider === 'discord') && data.roles) {
				const level = getLevel($roles, data.roles);
				$discord.level = level;
				$discord.joinedAt = data.joinedAt;
			}

			subscription.set({
				...data.subscriptionDetails,
				cancel_at: data.subscriptionDetails.cancel_at
					? new Date((data.subscriptionDetails.cancel_at as number) * 1000)
					: null,
				current_period_end: new Date((data.subscriptionDetails.current_period_end as number) * 1000)
			});

			user.set({
				authenticated: true,
				email: data.email as string,
				username: data?.name,
				displayPicture: data?.avatar,
				discordId: data?.discord_uid,
				customerId: data?.stripe_customer_id,
				country: country,
				level: 0,
				connectedProviders: data.connected_providers,
				triesLeft: data.triesLeft
			});

			websiteLoading.set(false);
		}
	};

	const resetStores = async () => {
		$discord = {};
		subscription.set(null);
		user.set({
			authenticated: false,
			email: '',
			username: '',
			displayPicture: '',
			discordId: '',
			customerId: null,
			country: '',
			level: 0,
			connectedProviders: null,
			triesLeft: 0
		});
	};

	// const setStores = async (
	// 	customerId: string | undefined,
	// 	discordId: string,
	// 	subscriptionId: string | undefined
	// ) => {
	// 	try {
	// 		const { discord: _discord, subscription: _subscription } = await fetcUserDetails(
	// 			customerId,
	// 			discordId,
	// 			subscriptionId
	// 		);
	// 		const res = await fetch('/api/steam-record').then((data) => data.json());
	// 		steamDetails.set(res);
	// 		subscription.set({
	// 			..._subscription,
	// 			cancel_at: _subscription.cancel_at
	// 				? new Date((_subscription.cancel_at as number) * 1000)
	// 				: null,
	// 			current_period_end: new Date((_subscription.current_period_end as number) * 1000)
	// 		});
	// 		if (_discord.roles && _discord.roles.length > 0) {
	// 			if (_roles) {
	// 				const level = getLevel(_roles, _discord.roles);
	// 				$discord.level = level;
	// 				$discord.joinedAt = _discord.joinedAt;
	// 				// console.log('after setting store', $discord)

	// 				roles.set(_roles);
	// 			} else {
	// 			}
	// 		} else {
	// 			// TODO: toast user is not a member of a server
	// 		}
	// 	} catch (error) {
	// 		console.log(error);
	// 		subscription.set(null);
	// 	}
	// };

	onMount(async () => {
		websiteLoading.set(true);
		const _roles = await (await fetch(`${PUBLIC_BACKEND_URL}/roles`)).json();
		roles.set(_roles.data || []);
		const _trending_servers = await (await fetch(`${PUBLIC_BACKEND_URL}/trending-servers`)).json();
		trending_servers.set(_trending_servers.data || null);
		const _plans = await (await fetch(`${PUBLIC_BACKEND_URL}/plans`)).json();
		plans.set(_plans.data || null);

		if (sid && !$user.authenticated) {
			await setStores();
		}

		websiteLoading.set(false);
	});

	$: if (!sid && $user.authenticated) {
		resetStores();
	}
</script>

{#if $websiteLoading}
	<Loading />
{/if}
<slot />

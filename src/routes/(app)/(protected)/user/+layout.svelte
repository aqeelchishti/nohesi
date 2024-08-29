<script lang="ts">
	import { goto } from '$app/navigation';
	import { user, websiteLoading, roles, discord, subscription } from '$lib/stores';
	import { onMount } from 'svelte';
	import UserProfileNav from '../../../../components/nav/user-profile-nav.svelte';
	import OutlinedButton from '../../../../components/shared/outlinedButton.svelte';
	import Toast from '../../../../components/shared/toast.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { handleLogout, getLevel } from '$lib/utils';
	import { getTimezone } from '$lib/timezones';

	export let data;

	const setStores = async () => {
		websiteLoading.set(true);
		const res = await fetch(`${PUBLIC_BACKEND_URL}/user-details`, {
			headers: {
				Authorization: `Bearer ${sid}`
			}
		});

		const { data, error } = await res.json();

		if (error) {
			console.log(error);
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

	$: ({ sid } = data);

	onMount(async () => {
		if (sid && !$user.authenticated) {
			await setStores();
		}
	});

	const handleClick = () => {
		goto('/sign-in');
	};

	import { page } from '$app/stores';

	$: isShopPageUrl = $page.url.pathname.match('/user/shop');
</script>

<div class="pt-32 container-section">
	{#if isShopPageUrl}
		<div
			class="before:h-[800px] after:h-[800px] before:z-0 after:z-0 before:absolute before:content-[''] before:inset-0 before:bg-local before:bg-cover before:bg-left-top before:bg-no-repeat before:bg-[url('/images/shop-ellipse-1.png')] after:absolute after:content-[''] after:inset-0 after:bg-local after:bg-cover after:bg-right-top after:bg-no-repeat after:bg-[url('/images/shop-ellipse-2.png')]"
		/>
	{/if}
	{#if $user.authenticated}
		<UserProfileNav />
		<div class="relative">
			<Toast left="right-8" top="top-16 md:top-24" classes="z-50" />

			<slot />
		</div>
	{:else}
		<div
			class="flex flex-col gap-6 w-full items-center justify-center bg-background backdrop-blur-16 py-12"
		>
			<img src="/images/logo.svg" alt="cdn" class="w-1/2 max-w-screen-3xl" />
			<OutlinedButton
				title="Login"
				font="roboto"
				size="lg"
				on:click={handleClick}
				classes="md:-mt-12 lg:-mt-20"
			/>
			<a href="/" class="text-content-secondary text-center underline">Back to home</a>
		</div>
	{/if}
</div>

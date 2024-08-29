<script lang="ts">
	import { goto } from '$app/navigation';
	import regions from '$lib/data/regions.json';
	import type { Server } from '$lib/interfaces';
	import { discord, roles, socialConnecting, toastMsg, user } from '$lib/stores';
	import { gte } from 'ramda';
	import { createEventDispatcher } from 'svelte';
	import { clickOutside } from '../../../actions/clickOutside';
	import Icon from '../../shared/Icon.svelte';
	import Button from '../../shared/button.svelte';

	export let row: Server;
	export let loading: boolean;
	export let favorite: boolean | undefined;

	const flag = regions.find((r) => r.code === row.region)?.flag;

	const dispatch = createEventDispatcher();

	let tier = $roles.find((role) => role.name.toLowerCase() === row.type.toLowerCase())?.level || 0;

	$: starContainer = row.favorite ? 'block' : 'hidden';

	let iconsContainer = 'hidden';
	let tooltipToggle = false;
	let steamTooltipToggle = false;

	const handleMouseEnter = () => {
		iconsContainer = 'block';
		starContainer = 'block';
		translate = 'translate-x-8 transition duration-1000';
	};

	const handleMouseLeave = () => {
		iconsContainer = 'hidden';
		if (!favorite) {
			starContainer = 'hidden';
		}
		translate = 'translate-x-0 transition duration-1000 ';
	};

	$: translate = 'translate-x-0';

	const borderColors = [
		'border-top-light-10',
		'border-top-light-17',
		'border-top-light-38',
		'border-primary-orange',
		'border-primary-red'
	];

	const toggleFavServer = () => {
		if ($user.authenticated) {
			dispatch('toggleFavServer', {
				ip_address: row.ip_address
			});
		} else {
			tooltipToggle = true;
		}
	};

	const joinServer = () => {
		if ($user.authenticated) {
			if (
				tier > 0 &&
				$user.connectedProviders &&
				$user.connectedProviders.filter((e) => e.provider === 'steam').length === 0
			) {
				steamTooltipToggle = true;
			} else {
				dispatch('joinServer', {
					ip_address: row.ip_address
				});
			}
		} else {
			tooltipToggle = true;
		}
	};

	const handleSteam = async () => {
		dispatch('handleSteam');
	};

	// const handleSubscribe = async ({ detail: { price_id } }: any) => {
	// 	await fetch('/api/subscribe', {
	// 		method: 'POST',
	// 		headers: {
	// 			'content-type': 'application/json'
	// 		},
	// 		body: JSON.stringify({
	// 			price_id
	// 		})
	// 	})
	// 		.then((data) => data.json())
	// 		.then((data: any) => {
	// 			if (data.url) window.location.replace(data.url);
	// 			else if (data.message) {
	// 				toastMsg.set({
	// 					icon: 'Warning',
	// 					msg: data.message,
	// 					desc: ''
	// 				});
	// 			}
	// 		});
	// };
</script>

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class={`grid grid-cols-12 gap-x-3 text-base text-content-secondary font-inter w-full rounded-lg p-4 pl-6 bg-top-light-2 border-l-8 ${borderColors[tier]} hover:bg-top-light-10 transition-colors duration-1000`}
	on:mouseover={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click={joinServer}
>
	<h6 class="col-span-3 h6-inter line-clamp-1 text-ellipsis text-content-primary">
		{row.name}
	</h6>
	<p class={`${translate} col-span-2 text-center -z-10`}>{row.density}</p>
	<p class={`flex gap-2 items-center ${translate} -z-10`}>
		<Icon name="UsersThree" class="fill-icon" />
		{row.clients === null ? '--' : row.clients}/{row.maxclients === null ? '--' : row.maxclients}
	</p>
	<p class={`flex gap-2 items-center ${translate} -z-10`}>
		<Icon name="NohesiLogo" class="fill-icon" />
		{row.vip_slots === null ? '--' : row.vip_slots}/{row.max_vip_slots === null
			? '--'
			: row.max_vip_slots}
	</p>
	<p class={`flex gap-2 items-center ${translate} -z-10`}>
		<Icon name="FlagCheckered" class="fill-icon" />
		{row.tier3_cars === null ? '--' : row.tier3_cars}
	</p>
	<p class={`col-span-2 flex gap-2 items-center ${translate} -z-10`}>
		<Icon name="Alien" class="fill-icon" />
		{row.map}
	</p>
	<p class={`flex items-center justify-center ${translate} -z-10`}>
		<img src="https://flagcdn.com/24x18/{flag}.webp" alt="flag" />
	</p>
	<div class="justify-self-end self-center flex gap-2 items-center h-[120%]">
		<!-- <div class="relative h-full flex items-center" on:mouseleave={() => (shareToggle = '')}>
			<button
				class={`${iconsContainer} hover:bg-top-light-10 rounded-sm p-1`}
				on:click={handleShare}
			>
				<img src="/icons/ShareNetwork.svg" alt="cdn" class="opacity-30 hover:opacity-60 h-5 w-5" />
			</button>
			{#if shareToggle != ''}
				<div
					class="flex flex-col items-end absolute bg-transparent rounded-md bottom-8 -right-7 overflow-hidden w-max max-w-[250px]"
				>
					<div
						class="p-3 pt-2 flex flex-col gap-3 bg-top-dark-83 rounded-md border border-border backdrop-blur-16"
					>
						<p class="text-sm text-content-primary font-medium">{shareToggle}</p>
					</div>

					<div class="px-8 -mt-0.25 bg-transparent">
						<img src="/icons/Polygon-tooltip.svg" alt="cdn" class="h-2 w-6" />
					</div>
				</div>
			{/if}
		</div> -->
		<div class="relative h-full flex items-center" on:mouseleave={() => (tooltipToggle = false)}>
			<button
				on:click={joinServer}
				class={`${iconsContainer} hover:bg-top-light-10 rounded-sm p-1`}
			>
				<img src="/icons/SignIn.svg" alt="cdn" class="opacity-30 hover:opacity-60 h-5 w-5" />
			</button>
			{#if tooltipToggle && !$user.authenticated}
				<!-- <Tooltip
					{tier}
					message="You don't have a permissions to join this server{tier === 1
						? ' Certified only!'
						: ''}"
				>
					<svelte:fragment slot="button">
						{#if tier !== 1}
							<Button
								on:click={() => handleSubscribe({ detail: { price_id } })}
								title="Upgrade my subscription"
								font="inter"
								classes={'!py-2 !px-7 rounded-sm bg-top-light-10 text-content-secondary !text-sm hover:bg-top-light-17 '}
							/>
						{/if}
					</svelte:fragment>
				</Tooltip> -->
				<!-- {:else if tooltipToggle} -->
				<div class="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50">
					<div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

					<div
						class="fixed w-full md:w-[600px] top-1/2 left-1/2 backdrop-blur-64 bg-transparent -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 text-center border border-top-light-10"
						use:clickOutside
						on:click_outside={() => (tooltipToggle = false)}
					>
						<div
							class="border border-yellow bg-yellow-bg-top text-yellow-secondary px-4 py-3 rounded font-medium font-base font-inter text-left"
							role="alert"
						>
							<span class="block sm:inline">You aren’t logged in, please login or register</span>
						</div>
						<div class="flex justify-between items-center pt-12">
							<Button
								title="Sign Up"
								classes="bg-transparent text-content-primary border border-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
								size="lg"
								font="roboto"
								on:click={() => goto('/sign-in')}
							/>
							<Button
								title="log in"
								classes="bg-primary-violete-light bg-content-primary text-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
								size="lg"
								font="roboto"
								on:click={() => goto('/sign-in')}
							/>
						</div>
					</div>
				</div>
			{/if}

			{#if steamTooltipToggle}
				<div class="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50">
					<div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

					<div
						class="fixed w-full md:w-[600px] top-1/2 left-1/2 backdrop-blur-64 bg-transparent -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 text-center border border-top-light-10"
						use:clickOutside
						on:click_outside={() => (steamTooltipToggle = false)}
					>
						<div
							class="border border-yellow bg-yellow-bg-top text-yellow-secondary px-4 py-3 rounded font-medium font-base font-inter text-left"
							role="alert"
						>
							<span class="block sm:inline"
								>Steam account not connected. Please connect your Steam account to join vip servers.</span
							>
						</div>
						<div class="flex justify-end items-center pt-12">
							<Button
								title="Connect Steam"
								classes="self-end bg-transparent text-content-primary border border-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
								size="lg"
								font="roboto"
								disabled={$socialConnecting !== null}
								on:click={handleSteam}
							/>
						</div>
					</div>
				</div>
			{/if}
		</div>
		<div class="relative h-full flex items-center">
			{#if favorite}
				<button
					class={`${starContainer} hover:bg-top-light-10 rounded-sm p-1`}
					on:click={toggleFavServer}
					disabled={loading}
				>
					<img src="/icons/StarYellow.svg" alt="cdn" class="h-5 w-5" />
				</button>
			{:else}
				<button
					class={`${starContainer} hover:bg-top-light-10 rounded-sm p-1`}
					on:click={toggleFavServer}
					disabled={loading}
				>
					<img src="/icons/Star.svg" alt="cdn" class="opacity-30 hover:opacity-60 h-5 w-5" />
				</button>
			{/if}
		</div>
	</div>
</div>

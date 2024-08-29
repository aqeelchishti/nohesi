<script lang="ts">
	// Imports
	import regions from '$lib/data/regions.json';
	import type { Server } from '$lib/interfaces';
	import { discord, roles, socialConnecting, toastMsg, user } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import TierTag from '../../shared/tierTag.svelte';
	// import roles from '$lib/data/roles.json';
	import { goto } from '$app/navigation';
	import { gte } from 'ramda';
	import { clickOutside } from '../../../actions/clickOutside';
	import Button from '../../shared/button.svelte';
	import Tooltip from '../../shared/tooltip.svelte';

	export let row: Server;
	export let loading: boolean;
	export let favorite: boolean | undefined;

	const flag = regions.find((r) => r.code === row.region)?.flag;

	const dispatch = createEventDispatcher();
	let tier = $roles.find((role) => role.name.toLowerCase() === row.type.toLowerCase())?.level || 0;
	const price_id = $roles.find((role) => role.tiers && role.level === tier)?.tiers.price_month;

	let tooltipToggle = false;
	let steamTooltipToggle = false;
	let iconsContainer = 'hidden';
	let starContainer = row.favorite ? 'block' : 'hidden';

	const handleMouseEnter = () => {
		iconsContainer = 'block';
		starContainer = 'block';
	};

	const handleMouseLeave = () => {
		iconsContainer = 'hidden';
		if (!favorite) {
			starContainer = 'hidden';
		}
	};

	const handleTooltip = () => {
		tooltipToggle = true;
		setTimeout(() => {
			tooltipToggle = false;
		}, 1500);
	};

	let tierIcon = '';

	if (tier === 0 || tier === 1) {
		tierIcon = 'Cube.svg';
	} else if (tier === 2) {
		tierIcon = 'CubeWhite.svg';
	} else if (tier === 3) {
		tierIcon = 'CubeOrange.svg';
	} else {
		tierIcon = 'CubeRed.svg';
	}

	let background = '';

	if (tier === 0 || tier === 1) {
		background = '!bg-top-light-2';
	} else if (tier === 2) {
		background = '!bg-top-light-17';
	} else if (tier === 3) {
		background = '!bg-primary-orange-bg-top';
	} else {
		background = '!bg-primary-red-bg-top';
	}

	const toggleFavServer = () => {
		if ($user.authenticated) {
			dispatch('toggleFavServer', {
				ip_address: row.ip_address
			});
		} else {
			tooltipToggle = true;
		}
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

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->

<div
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click={joinServer}
	class="flex flex-col gap-3 pt-4 rounded-xl border border-border bg-top-light-2 hover:bg-top-light-10 transition-colors duration-1000 cursor-pointer"
>
	<div class="flex justify-between items-center mx-4">
		<TierTag
			{tier}
			{tierIcon}
			classes={`w-max !p-0.5 !px-2 !pr-4 ${
				tier == 0 || tier === 1 ? '!gap-2 !p-2' : '!gap-1'
			} ${background}`}
			textClasses={'!font-inter !normal-case !font-medium !text-sm !text-content-primary'}
			iconClasses={`${tier === 0 || tier === 1 ? 'h-5 w-5' : 'h-8 w-8'} !backdrop-invert-0`}
		/>

		<div class="flex items-center gap-2">
			{#if width >= 1024}
				<!-- <div
					class="relative h-full flex items-center"
					on:mouseleave={() => (shareToggle = '')}
					use:clickOutside
					on:click_outside={() => (shareToggle = '')}
				>
					<button
						class={`${iconsContainer} hover:bg-top-light-10 rounded-sm p-1`}
						on:click={handleShare}
					>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-icon hover:fill-icon-accent"
						>
							<g id="ShareNetwork">
								<path
									id="Vector"
									d="M13.7498 12.1877C12.9126 12.1864 12.104 12.4921 11.4771 13.0471L8.28885 11.0002C8.48674 10.3482 8.48674 9.6522 8.28885 9.00022L11.4771 6.95334C12.0977 7.49873 12.8946 7.80136 13.7207 7.80543C14.5469 7.80949 15.3467 7.51472 15.9726 6.97547C16.5985 6.43621 17.0084 5.68884 17.1266 4.87116C17.2448 4.05348 17.0634 3.22063 16.6158 2.52619C16.1682 1.83175 15.4846 1.32255 14.6911 1.09248C13.8976 0.862413 13.0477 0.92699 12.2981 1.27431C11.5484 1.62162 10.9497 2.22825 10.6121 2.98234C10.2746 3.73643 10.2211 4.58713 10.4615 5.37756L7.27244 7.42209C6.77651 6.98382 6.16461 6.69802 5.51021 6.59904C4.85581 6.50005 4.18676 6.59208 3.58339 6.86408C2.98002 7.13608 2.46801 7.57647 2.10883 8.13237C1.74965 8.68827 1.55859 9.33604 1.55859 9.99788C1.55859 10.6597 1.74965 11.3075 2.10883 11.8634C2.46801 12.4193 2.98002 12.8597 3.58339 13.1317C4.18676 13.4037 4.85581 13.4957 5.51021 13.3967C6.16461 13.2977 6.77651 13.0119 7.27244 12.5737L10.4607 14.6252C10.2504 15.3171 10.2635 16.0577 10.4984 16.7416C10.7332 17.4255 11.1778 18.018 11.7688 18.4347C12.3598 18.8513 13.0672 19.071 13.7902 19.0625C14.5133 19.0539 15.2153 18.8175 15.7963 18.387C16.3773 17.9564 16.8077 17.3536 17.0262 16.6643C17.2448 15.975 17.2405 15.2343 17.0138 14.5476C16.7871 13.861 16.3496 13.2632 15.7636 12.8396C15.1776 12.4159 14.4729 12.1878 13.7498 12.1877ZM13.7498 2.81272C14.0588 2.81272 14.3609 2.90436 14.6179 3.07605C14.8748 3.24774 15.0751 3.49177 15.1933 3.77728C15.3116 4.06279 15.3426 4.37695 15.2823 4.68005C15.222 4.98314 15.0732 5.26155 14.8546 5.48007C14.6361 5.69859 14.3577 5.84741 14.0546 5.9077C13.7515 5.96799 13.4374 5.93704 13.1518 5.81878C12.8663 5.70052 12.6223 5.50025 12.4506 5.2433C12.2789 4.98635 12.1873 4.68425 12.1873 4.37522C12.1873 3.96082 12.3519 3.56339 12.6449 3.27037C12.938 2.97734 13.3354 2.81272 13.7498 2.81272ZM4.99978 11.5627C4.69075 11.5627 4.38866 11.4711 4.13171 11.2994C3.87475 11.1277 3.67448 10.8837 3.55622 10.5982C3.43796 10.3127 3.40702 9.99849 3.46731 9.69539C3.5276 9.39229 3.67641 9.11388 3.89493 8.89536C4.11345 8.67685 4.39186 8.52803 4.69496 8.46774C4.99805 8.40745 5.31222 8.4384 5.59773 8.55666C5.88324 8.67492 6.12727 8.87519 6.29896 9.13214C6.47065 9.38909 6.56228 9.69119 6.56228 10.0002C6.56228 10.4146 6.39766 10.812 6.10464 11.1051C5.81161 11.3981 5.41419 11.5627 4.99978 11.5627ZM13.7498 17.1877C13.4408 17.1877 13.1387 17.0961 12.8817 16.9244C12.6248 16.7527 12.4245 16.5087 12.3062 16.2232C12.188 15.9377 12.157 15.6235 12.2173 15.3204C12.2776 15.0173 12.4264 14.7389 12.6449 14.5204C12.8635 14.3018 13.1419 14.153 13.445 14.0927C13.7481 14.0325 14.0622 14.0634 14.3477 14.1817C14.6332 14.2999 14.8773 14.5002 15.049 14.7571C15.2206 15.0141 15.3123 15.3162 15.3123 15.6252C15.3123 16.0396 15.1477 16.437 14.8546 16.7301C14.5616 17.0231 14.1642 17.1877 13.7498 17.1877Z"
								/>
							</g>
						</svg>
					</button>
					{#if shareToggle != ''}
						<div
							class="flex flex-col items-end absolute bg-transparent rounded-md bottom-8 -right-7 overflow-hidden w-max"
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
				<div
					class="relative h-full flex items-center"
					use:clickOutside
					on:click_outside={() => (tooltipToggle = false)}
				>
					<button
						on:click={joinServer}
						class={`${iconsContainer} hover:bg-top-light-10 rounded-sm p-1`}
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-icon hover:fill-icon-accent"
						>
							<g id="SignIn">
								<path
									id="Vector"
									d="M18.0613 17.0613L13.0612 22.0613C12.7795 22.343 12.3973 22.5014 11.9987 22.5014C11.6002 22.5014 11.218 22.343 10.9362 22.0613C10.6545 21.7795 10.4961 21.3973 10.4961 20.9988C10.4961 20.6002 10.6545 20.218 10.9362 19.9363L13.375 17.5H3C2.60218 17.5 2.22064 17.342 1.93934 17.0607C1.65804 16.7794 1.5 16.3978 1.5 16C1.5 15.6022 1.65804 15.2206 1.93934 14.9393C2.22064 14.658 2.60218 14.5 3 14.5H13.375L10.9388 12.0612C10.7992 11.9217 10.6885 11.7561 10.613 11.5738C10.5375 11.3915 10.4986 11.1961 10.4986 10.9987C10.4986 10.6002 10.657 10.218 10.9388 9.93625C11.2205 9.65446 11.6027 9.49615 12.0013 9.49615C12.3998 9.49615 12.782 9.65446 13.0638 9.93625L18.0637 14.9362C18.2034 15.0758 18.3142 15.2415 18.3897 15.4239C18.4652 15.6063 18.5039 15.8018 18.5037 15.9993C18.5035 16.1967 18.4642 16.3921 18.3883 16.5744C18.3124 16.7566 18.2013 16.9221 18.0613 17.0613ZM24 3.5H17C16.6022 3.5 16.2206 3.65804 15.9393 3.93934C15.658 4.22064 15.5 4.60218 15.5 5C15.5 5.39782 15.658 5.77936 15.9393 6.06066C16.2206 6.34196 16.6022 6.5 17 6.5H23.5V25.5H17C16.6022 25.5 16.2206 25.658 15.9393 25.9393C15.658 26.2206 15.5 26.6022 15.5 27C15.5 27.3978 15.658 27.7794 15.9393 28.0607C16.2206 28.342 16.6022 28.5 17 28.5H24C24.663 28.5 25.2989 28.2366 25.7678 27.7678C26.2366 27.2989 26.5 26.663 26.5 26V6C26.5 5.33696 26.2366 4.70107 25.7678 4.23223C25.2989 3.76339 24.663 3.5 24 3.5Z"
								/>
							</g>
						</svg>
					</button>

					{#if tooltipToggle && $user.authenticated}
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
					{:else if tooltipToggle}
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
									<span class="block sm:inline">You aren’t logged in, please login or register</span
									>
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
										>Steam account not connected. Please connect your Steam account to join vip
										servers.</span
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
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-icon hover:fill-icon-accent"
						>
							<g id="Star">
								<path
									id="Vector"
									d="M29.3125 14.2975L23.675 19.2175L25.3637 26.5425C25.4531 26.9254 25.4276 27.3262 25.2904 27.6947C25.1533 28.0632 24.9105 28.3831 24.5925 28.6144C24.2745 28.8457 23.8954 28.9782 23.5025 28.9951C23.1097 29.0121 22.7205 28.913 22.3837 28.71L15.995 24.835L9.61999 28.71C9.2832 28.913 8.89406 29.0121 8.50121 28.9951C8.10836 28.9782 7.72923 28.8457 7.41123 28.6144C7.09324 28.3831 6.85047 28.0632 6.7133 27.6947C6.57613 27.3262 6.55063 26.9254 6.63999 26.5425L8.32624 19.225L2.68749 14.2975C2.38925 14.0403 2.17359 13.7007 2.06756 13.3214C1.96153 12.9421 1.96984 12.54 2.09146 12.1654C2.21307 11.7908 2.44258 11.4604 2.75119 11.2158C3.0598 10.9711 3.43379 10.823 3.82624 10.79L11.2587 10.1462L14.16 3.22624C14.3115 2.86314 14.5671 2.55298 14.8945 2.33482C15.2219 2.11665 15.6065 2.00024 16 2.00024C16.3934 2.00024 16.7781 2.11665 17.1055 2.33482C17.4329 2.55298 17.6885 2.86314 17.84 3.22624L20.75 10.1462L28.18 10.79C28.5724 10.823 28.9464 10.9711 29.255 11.2158C29.5637 11.4604 29.7932 11.7908 29.9148 12.1654C30.0364 12.54 30.0447 12.9421 29.9387 13.3214C29.8326 13.7007 29.617 14.0403 29.3187 14.2975H29.3125Z"
								/>
							</g>
						</svg>
					</button>
				{/if}
			{:else}
				<!-- <div
					class="relative h-full flex items-center"
					on:mouseleave={() => (shareToggle = '')}
					use:clickOutside
					on:click_outside={() => (shareToggle = '')}
				>
					<button class={`hover:bg-top-light-10 rounded-sm p-1`} on:click={handleShare}>
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-icon hover:fill-icon-accent"
						>
							<g id="ShareNetwork">
								<path
									id="Vector"
									d="M13.7498 12.1877C12.9126 12.1864 12.104 12.4921 11.4771 13.0471L8.28885 11.0002C8.48674 10.3482 8.48674 9.6522 8.28885 9.00022L11.4771 6.95334C12.0977 7.49873 12.8946 7.80136 13.7207 7.80543C14.5469 7.80949 15.3467 7.51472 15.9726 6.97547C16.5985 6.43621 17.0084 5.68884 17.1266 4.87116C17.2448 4.05348 17.0634 3.22063 16.6158 2.52619C16.1682 1.83175 15.4846 1.32255 14.6911 1.09248C13.8976 0.862413 13.0477 0.92699 12.2981 1.27431C11.5484 1.62162 10.9497 2.22825 10.6121 2.98234C10.2746 3.73643 10.2211 4.58713 10.4615 5.37756L7.27244 7.42209C6.77651 6.98382 6.16461 6.69802 5.51021 6.59904C4.85581 6.50005 4.18676 6.59208 3.58339 6.86408C2.98002 7.13608 2.46801 7.57647 2.10883 8.13237C1.74965 8.68827 1.55859 9.33604 1.55859 9.99788C1.55859 10.6597 1.74965 11.3075 2.10883 11.8634C2.46801 12.4193 2.98002 12.8597 3.58339 13.1317C4.18676 13.4037 4.85581 13.4957 5.51021 13.3967C6.16461 13.2977 6.77651 13.0119 7.27244 12.5737L10.4607 14.6252C10.2504 15.3171 10.2635 16.0577 10.4984 16.7416C10.7332 17.4255 11.1778 18.018 11.7688 18.4347C12.3598 18.8513 13.0672 19.071 13.7902 19.0625C14.5133 19.0539 15.2153 18.8175 15.7963 18.387C16.3773 17.9564 16.8077 17.3536 17.0262 16.6643C17.2448 15.975 17.2405 15.2343 17.0138 14.5476C16.7871 13.861 16.3496 13.2632 15.7636 12.8396C15.1776 12.4159 14.4729 12.1878 13.7498 12.1877ZM13.7498 2.81272C14.0588 2.81272 14.3609 2.90436 14.6179 3.07605C14.8748 3.24774 15.0751 3.49177 15.1933 3.77728C15.3116 4.06279 15.3426 4.37695 15.2823 4.68005C15.222 4.98314 15.0732 5.26155 14.8546 5.48007C14.6361 5.69859 14.3577 5.84741 14.0546 5.9077C13.7515 5.96799 13.4374 5.93704 13.1518 5.81878C12.8663 5.70052 12.6223 5.50025 12.4506 5.2433C12.2789 4.98635 12.1873 4.68425 12.1873 4.37522C12.1873 3.96082 12.3519 3.56339 12.6449 3.27037C12.938 2.97734 13.3354 2.81272 13.7498 2.81272ZM4.99978 11.5627C4.69075 11.5627 4.38866 11.4711 4.13171 11.2994C3.87475 11.1277 3.67448 10.8837 3.55622 10.5982C3.43796 10.3127 3.40702 9.99849 3.46731 9.69539C3.5276 9.39229 3.67641 9.11388 3.89493 8.89536C4.11345 8.67685 4.39186 8.52803 4.69496 8.46774C4.99805 8.40745 5.31222 8.4384 5.59773 8.55666C5.88324 8.67492 6.12727 8.87519 6.29896 9.13214C6.47065 9.38909 6.56228 9.69119 6.56228 10.0002C6.56228 10.4146 6.39766 10.812 6.10464 11.1051C5.81161 11.3981 5.41419 11.5627 4.99978 11.5627ZM13.7498 17.1877C13.4408 17.1877 13.1387 17.0961 12.8817 16.9244C12.6248 16.7527 12.4245 16.5087 12.3062 16.2232C12.188 15.9377 12.157 15.6235 12.2173 15.3204C12.2776 15.0173 12.4264 14.7389 12.6449 14.5204C12.8635 14.3018 13.1419 14.153 13.445 14.0927C13.7481 14.0325 14.0622 14.0634 14.3477 14.1817C14.6332 14.2999 14.8773 14.5002 15.049 14.7571C15.2206 15.0141 15.3123 15.3162 15.3123 15.6252C15.3123 16.0396 15.1477 16.437 14.8546 16.7301C14.5616 17.0231 14.1642 17.1877 13.7498 17.1877Z"
								/>
							</g>
						</svg>
					</button>
					{#if shareToggle != ''}
						<div
							class="flex flex-col items-end absolute bg-transparent rounded-md bottom-8 -right-7 overflow-hidden w-max max-w-[220px]"
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
				<div
					class="relative h-full flex items-center"
					on:mouseleave={() => (tooltipToggle = false)}
					use:clickOutside
					on:click_outside={() => (tooltipToggle = false)}
				>
					{#if tooltipToggle && $user.authenticated}
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
					{:else if tooltipToggle}
						<div
							class="flex flex-col items-end absolute bg-transparent rounded-md bottom-8 -right-7 overflow-hidden w-max"
						>
							<div
								class="p-3 pt-2 flex flex-col justify-start gap-3 bg-top-dark-83 rounded-md border border-border backdrop-blur-16"
							>
								<p class="text-sm text-content-primary font-medium">You need to login first!</p>
								<!-- <VioleteButton title="Login" size="sm" font="inter" classes="!text-sm !p-0" /> -->
								<a
									href="/sign-in"
									class="cursor-pointer text-sm w-max px-2 py-0.5 border border-border rounded-sm bg-top-light-2 font-semibold font-inter hover:bg-top-light-10"
								>
									Login
								</a>
							</div>

							<div class="px-8 -mt-0.25 bg-transparent">
								<img src="/icons/Polygon-tooltip.svg" alt="cdn" class="h-2 w-6" />
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
										>Steam account not connected. Please connect your Steam account to join vip
										servers.</span
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
					<button on:click={joinServer} class={`hover:bg-top-light-10 rounded-sm p-1`}>
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-icon hover:fill-icon-accent"
						>
							<g id="SignIn">
								<path
									id="Vector"
									d="M18.0613 17.0613L13.0612 22.0613C12.7795 22.343 12.3973 22.5014 11.9987 22.5014C11.6002 22.5014 11.218 22.343 10.9362 22.0613C10.6545 21.7795 10.4961 21.3973 10.4961 20.9988C10.4961 20.6002 10.6545 20.218 10.9362 19.9363L13.375 17.5H3C2.60218 17.5 2.22064 17.342 1.93934 17.0607C1.65804 16.7794 1.5 16.3978 1.5 16C1.5 15.6022 1.65804 15.2206 1.93934 14.9393C2.22064 14.658 2.60218 14.5 3 14.5H13.375L10.9388 12.0612C10.7992 11.9217 10.6885 11.7561 10.613 11.5738C10.5375 11.3915 10.4986 11.1961 10.4986 10.9987C10.4986 10.6002 10.657 10.218 10.9388 9.93625C11.2205 9.65446 11.6027 9.49615 12.0013 9.49615C12.3998 9.49615 12.782 9.65446 13.0638 9.93625L18.0637 14.9362C18.2034 15.0758 18.3142 15.2415 18.3897 15.4239C18.4652 15.6063 18.5039 15.8018 18.5037 15.9993C18.5035 16.1967 18.4642 16.3921 18.3883 16.5744C18.3124 16.7566 18.2013 16.9221 18.0613 17.0613ZM24 3.5H17C16.6022 3.5 16.2206 3.65804 15.9393 3.93934C15.658 4.22064 15.5 4.60218 15.5 5C15.5 5.39782 15.658 5.77936 15.9393 6.06066C16.2206 6.34196 16.6022 6.5 17 6.5H23.5V25.5H17C16.6022 25.5 16.2206 25.658 15.9393 25.9393C15.658 26.2206 15.5 26.6022 15.5 27C15.5 27.3978 15.658 27.7794 15.9393 28.0607C16.2206 28.342 16.6022 28.5 17 28.5H24C24.663 28.5 25.2989 28.2366 25.7678 27.7678C26.2366 27.2989 26.5 26.663 26.5 26V6C26.5 5.33696 26.2366 4.70107 25.7678 4.23223C25.2989 3.76339 24.663 3.5 24 3.5Z"
								/>
							</g>
						</svg>
					</button>
				</div>
				{#if favorite}
					<button
						class={`hover:bg-top-light-10 rounded-sm p-1`}
						on:click={toggleFavServer}
						disabled={loading}
					>
						<img src="/icons/StarYellow.svg" alt="cdn" class="h-5 w-5" />
					</button>
				{:else}
					<button
						class={`hover:bg-top-light-10 rounded-sm p-1`}
						on:click={toggleFavServer}
						disabled={loading}
					>
						<svg
							width="32"
							height="32"
							viewBox="0 0 32 32"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 fill-icon hover:fill-icon-accent"
						>
							<g id="Star">
								<path
									id="Vector"
									d="M29.3125 14.2975L23.675 19.2175L25.3637 26.5425C25.4531 26.9254 25.4276 27.3262 25.2904 27.6947C25.1533 28.0632 24.9105 28.3831 24.5925 28.6144C24.2745 28.8457 23.8954 28.9782 23.5025 28.9951C23.1097 29.0121 22.7205 28.913 22.3837 28.71L15.995 24.835L9.61999 28.71C9.2832 28.913 8.89406 29.0121 8.50121 28.9951C8.10836 28.9782 7.72923 28.8457 7.41123 28.6144C7.09324 28.3831 6.85047 28.0632 6.7133 27.6947C6.57613 27.3262 6.55063 26.9254 6.63999 26.5425L8.32624 19.225L2.68749 14.2975C2.38925 14.0403 2.17359 13.7007 2.06756 13.3214C1.96153 12.9421 1.96984 12.54 2.09146 12.1654C2.21307 11.7908 2.44258 11.4604 2.75119 11.2158C3.0598 10.9711 3.43379 10.823 3.82624 10.79L11.2587 10.1462L14.16 3.22624C14.3115 2.86314 14.5671 2.55298 14.8945 2.33482C15.2219 2.11665 15.6065 2.00024 16 2.00024C16.3934 2.00024 16.7781 2.11665 17.1055 2.33482C17.4329 2.55298 17.6885 2.86314 17.84 3.22624L20.75 10.1462L28.18 10.79C28.5724 10.823 28.9464 10.9711 29.255 11.2158C29.5637 11.4604 29.7932 11.7908 29.9148 12.1654C30.0364 12.54 30.0447 12.9421 29.9387 13.3214C29.8326 13.7007 29.617 14.0403 29.3187 14.2975H29.3125Z"
								/>
							</g>
						</svg>
					</button>
				{/if}
			{/if}
		</div>
	</div>

	<div
		class="flex flex-col rounded-b-xl h-full px-4 pt-2 pb-globalGutter justify-between items-start gap-4"
	>
		<div class="flex flex-col gap-4 self-stretch">
			<img src="https://flagcdn.com/24x18/{flag}.webp" alt="flag" class="w-6 h-[18px]" />

			<h5 class="text-content-primary self-stretch text-ellipsis line-clamp-2 w-full">
				{row.name}
			</h5>
			<p class="font-inter text-content-secondary font-medium text-base">{row.density}</p>
		</div>

		<div class="flex flex-col gap-2 items-start text-content-secondary">
			<div class="flex flex-wrap gap-6">
				<div class="flex items-center self-stretch gap-2">
					<img src="/icons/UsersThree.svg" alt="cdn" />
					<span
						>{row.clients === null ? '--' : row.clients}/{row.maxclients === null
							? '--'
							: row.maxclients}</span
					>
				</div>
				<div class="flex items-center self-stretch gap-2">
					<img src="/icons/list-icon.svg" alt="cdn" />
					<span
						>{row.vip_slots === null ? '--' : row.vip_slots}/{row.max_vip_slots === null
							? '--'
							: row.max_vip_slots}</span
					>
				</div>
				<div class="flex items-center self-stretch gap-2">
					<img src="/icons/FlagCheckered.svg" alt="cdn" />
					<span>{row.tier3_cars === null ? '--' : row.tier3_cars}</span>
				</div>
			</div>
			<div class="flex items-center self-stretch gap-2">
				<img src="/icons/Alien.svg" alt="cdn" />
				<span>{row.map}</span>
			</div>
		</div>
	</div>
</div>

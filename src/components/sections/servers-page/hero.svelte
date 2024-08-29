<script lang="ts">
	import regions from '$lib/data/regions.json';
	import { discord, roles, toastMsg, user } from '$lib/stores';
	import { gte } from 'ramda';
	import { createEventDispatcher } from 'svelte';
	import Icon from '../../shared/Icon.svelte';
	import Button from '../../shared/button.svelte';
	import Tooltip from '../../shared/tooltip.svelte';

	let iconsContainer = 'hidden';
	let tooltipToggle = false;

	const dispatch = createEventDispatcher();

	export let serverdata: any;

	const flag = regions.find((r) => r.code === serverdata.region)?.flag;

	const joinServer = () => {
		if ($user.authenticated) {
			dispatch('joinServer', {
				ip_address: serverdata.ip_address
			});
		} else {
			tooltipToggle = true;
		}
	};

	let tier =
		$roles.find((role) => role.name.toLowerCase() === serverdata.type.toLowerCase())?.level || 0;
	const price_id = $roles.find((role) => role.tiers && role.level === tier)?.tiers.price_month;

	let isLogin = false;

	const button = [
		{ id: 'People', label: serverdata.clients + '/' + serverdata.maxclients },
		{ id: 'Layer', label: serverdata.vip_slots + '/' + serverdata.maxclients },
		{ id: 'VecTorFlag', label: serverdata.tier3_cars + '/' + serverdata.maxclients },
		{ id: 'sk', label: serverdata.map }
	];

	function openDialog() {
		isLogin = !isLogin;
	}

	const handleSubscribe = async ({ detail: { price_id } }: any) => {
		await fetch('/api/subscribe', {
			method: 'POST',
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				price_id
			})
		})
			.then((data) => data.json())
			.then((data: any) => {
				if (data.url) window.location.replace(data.url);
				else if (data.message) {
					toastMsg.set({
						icon: 'Warning',
						msg: data.message,
						desc: ''
					});
				}
			});
	};
</script>

<div class=" rounded-xl">
	<div class="w-full h-[550px] sm:h-[400px] relative">
		<img
			src="/images/car.png"
			alt="assetto-corsa background"
			class="w-full h-full object-cover blur-[40px] absolute inset-0 -z-20 opacity-70"
		/>
		<div
			class="w-full h-[550px] sm:h-[400px] border border-border rounded-xl flex flex-col relative overflow-hidden"
		>
			<img
				src="/images/car.png"
				alt="assetto-corsa"
				class="w-full h-full object-cover -z-10 absolute inset-0"
			/>
			<div
				class="rounded-md p-4 md:p-10 sm:pt-20 bg-gradient-to-b justify-center sm:justify-end from-top-dark-0 to-background flex flex-col shrink-0 gap-6 self-stretch bg-primary shadow-2xl h-full"
			>
				<div class="flex flex-col gap-4 self-stretch">
					<div class="flex justify-start items-center">
						<div
							class="bg-top-dark-83 gap-1 py-1 px-2 rounded-2xl flex justify-center items-center text-top-light-45 font-xxs"
						>
							<Icon name="ArrowsDownUp" class="stroke-green-secondary " width="16" height="16" />
							<p class="text-sm font-thin font-Inter text-green-secondary lowercase">8ms</p>
						</div>
					</div>
					<div class="flex justify-start items-center gap-2 flex-wrap">
						<img src="https://flagcdn.com/32x24/{flag}.webp" alt="flag" />
						<h2 class="text-content-primary self-stretch text-2xl max-sm:line-clamp-3">{serverdata.name}</h2>
						<div class="flex justify-center items-center gap-1">
							<Icon name="Dot" class="" width="6" height="6" />
							<p class="text-green-secondary self-stretch text-md font-inter lowercase">Online</p>
						</div>
					</div>
					<p
						class="text-base text-content-secondary font-inter md:w-2/5 text-ellipsis line-clamp-2"
					>
						{serverdata.density}
					</p>
					<div class="flex justify-between items-center flex-wrap">
						<div class="flex justify-start gap-9 items-center flex-wrap">
							{#each button as { id, label }}
								<div class="flex justify-start items-center gap-2">
									<Icon name={id} class="" width="24" height="24" />
									<p class="text-content-secondary self-stretch text-md font-inter">
										{label}
									</p>
								</div>
							{/each}
						</div>
						<div class="justify-self-end self-center flex gap-2 items-center h-[120%]">
							<div class="relative h-full flex items-center justify-end gap-3 py-3 flex-wrap">
								{#if isLogin == true}
									<div class="absolute right-7">
										<Tooltip
											{tier}
											message="You don't have permission to join this server{tier === 1
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
										</Tooltip>
									</div>
								{/if}
								<Icon name="StarIcon" class="" width="24" height="24" />
								<Button
									title="Enter Server"
									classes="bg-primary-violete-light text-content-primary !py-3 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-sm transition-all duration-500 justify-center whitespace-nowrap {gte(
										$discord.level
									)(tier)
										? ''
										: 'hidden'}"
									size="lg"
									font="roboto"
									on:click={joinServer}
								/>
								<Button
									title="Enter Server"
									classes="bg-top-light-10 text-content-tertiary font-roboto !py-3 !px-7 !text-md uppercase hover:shadow-black !font-medium !rounded-sm transition-all duration-500 justify-center whitespace-nowrap {!gte(
										$discord.level
									)(tier)
										? ''
										: 'hidden'}"
									size="lg"
									font="roboto"
									on:click={openDialog}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

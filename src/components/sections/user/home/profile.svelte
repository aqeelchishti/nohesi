<script lang="ts">
	import { goto } from '$app/navigation';
	import type { userProfileInterface } from '$lib/interfaces';
	import { discord, roles, user } from '$lib/stores';
	import { _ } from 'svelte-i18n';
	import Button from '../../../shared/button.svelte';
	import Icon from '../../../shared/Icon.svelte';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';

	export let personalProfile: boolean = true;
	let _userData: userProfileInterface;

	let connectedToSteam = false;
	$: providers = $user.connectedProviders ? $user.connectedProviders : null;
	$: steamProvider = providers?.find((item) => item.provider === 'steam');
	$: steamUsername = steamProvider?.username;
	$: discordProvider = providers?.find((item) => item.provider === 'discord');
	$: discordUsername = discordProvider?.username;
	const handleBack = () => {
		goto('/user/friends');
	};
	$: {
		{
			_userData = {
				username: 'boobbafett12554',
				region: 'eu',
				dateCreated: '8/16/2017',
				driftPosition: 3,
				cutUpPointsPosition: 1,
				tier: 3,
				profilePicture: '/images/ProfileImage.jpeg',
				cover: '/images/user-profile-cover.png',
				fvrtCar: 'Porsche gt3 RS',
				fvrtCarImage: '/images/fvrtCar.png',
				milesDriven: 8644,
				points: 85146375,
				hiddenStats: false,
				trackPosition: 64
			};
		}
		dateCreated = new Date(_userData.dateCreated);
	}

	let tierBackground = '!bg-top-light-2';
	let tierBorder = '!border-top-light-2';
	let tierText = '!text-content-primary';
	let tier = 'Public';
	let dateCreated: Date;
	let role: string = '';

	const getRole = (discord: any) => {
		if (discord && Object.keys(discord).length > 0) {
			dateCreated = discord.createdAt;
			const filteredRole = $roles.find((r) => r.level === discord.level);

			if (!filteredRole) {
				role = 'Driver';
				tierBackground = '!bg-top-light-2';
				tierText = '!text-content-primary';
				tierBorder = '!border-top-light-2';
				tier = 'Public';
			} else if (filteredRole.name.toLowerCase() === 'tier1') {
				role = filteredRole.tiers.type;
				tierBackground = '!bg-top-light-17';
				tierBorder = '!border-top-light-17';
				tierText = '!text-content-primary';
				tier = 'Public+';
			} else if (filteredRole.name.toLowerCase() === 'tier2') {
				role = filteredRole.tiers.type;
				tierBackground = '!bg-primary-orange-bg-top';
				tierBorder = '!border-primary-orange-bg-top';
				tierText = '!text-primary-orange-light';
				tier = 'Midnight';
			} else if (filteredRole.name.toLowerCase() === 'tier3') {
				role = filteredRole.tiers.type;
				tierBackground = '!bg-primary-orange-bg-top';
				tierBorder = '!border-primary-orange-bg-top';
				tierText = '!text-primary-orange-light';
				tier = 'Midnight';
			} else {
				role = filteredRole?.name;
				tierBackground = '!bg-primary-red-bg-top';
				tierBorder = '!border-primary-red-bg-top';
				tierText = '!text-primary-red-light';
				tier = 'Underground';
			}
		}
	};

	$: if ($discord && $discord.level) {
		getRole($discord);
	} else {
		role = 'Driver';
	}

	const formatDate = (date: Date) => {
		let months = [
			'Jan',
			'Feb',
			'Mar',
			'Apr',
			'May',
			'Jun',
			'Jul',
			'Aug',
			'Sep',
			'Oct',
			'Nov',
			'Dec'
		];
		return `${months[date.getMonth()] || '--'}. ${date.getDate() || '--'}, ${
			date.getFullYear() || '----'
		}`;
	};

	let screenWidth = 0;
	let isLessThan424 = false;
	let isLessThan388 = false;
	let isLessThan371 = false;

	$: if (screenWidth < 424) {
		isLessThan424 = true;
	} else {
		isLessThan424 = false;
	}

	$: if (screenWidth < 388) {
		isLessThan388 = true;
	} else {
		isLessThan388 = false;
	}

	$: if (screenWidth < 371) {
		isLessThan371 = true;
	} else {
		isLessThan371 = false;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div
	class="flex flex-col group/cover {isLessThan371 === true
		? 'h-[625px]'
		: isLessThan388 === true
		? 'h-[525px]'
		: 'h-[475px]'} md:h-64 overflow-hidden rounded-xl border border-border bg-top-light-2 cursor-default before:absolute before:content-[''] before:inset-0 before:bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.54))] {isLessThan371 ===
	true
		? 'before:h-[625px]'
		: isLessThan388 === true
		? 'before:h-[525px]'
		: 'before:h-[475px]'} before:md:h-64 before:mt-10 before:mx-2"
>
	<img
		src={_userData.cover}
		alt="cdn"
		class="object-cover {isLessThan371 === true
			? 'h-[625px]'
			: isLessThan388 === true
			? 'h-[525px]'
			: 'h-[475px]'} md:h-64 w-full"
	/>
	<div
		class="absolute flex flex-col left-0 right-0 justify-stretch md:justify-normal gap-8 md:gap-2 {isLessThan371 ===
		true
			? 'h-[625px]'
			: isLessThan388 === true
			? 'h-[525px]'
			: 'h-[475px]'} md:h-64 overflow-hidden mx-2 px-3 pt-3 pb-6"
	>
		<div
			class="relative flex {isLessThan424
				? 'flex-row justify-end'
				: 'flex-row-reverse justify-start'} flex-wrap md:flex-nowrap gap-2 md:gap-5"
		>
			<div class="flex flex-row gap-2">
				<button
					class="flex flex-row gap-2 rounded-sm py-2 px-3 h-9 w-[126px] justify-center backdrop-blur-16 text-content-secondary bg-top-dark-44"
				>
					<img
						src="/icons/user-profile-share.svg"
						class="mt-[2px]"
						width="16px"
						height="16px"
						alt="share"
					/>
					<p class="text-content-primary whitespace-nowrap font-medium text-sm font-inter">
						Share profile
					</p>
				</button>
			</div>
			<!--{#if $discord.joinedAt}-->
			<p
				class="flex items-center text-content-secondary gap-2 font-inter text-sm md:text-base font-medium ml-2"
			>
				<img src="https://flagcdn.com/24x18/{$user.country.toLowerCase()}.webp" alt="cdn" />
				Participated from Aug. 16, 2024
				<!--{$_('page.user.home.participated')} {formatDate(new Date($discord.joinedAt || ''))}-->
			</p>
		</div>

		<div class="relative flex flex-col md:flex-row gap-8 pl-2 md:pl-8">
			<div class="group relative w-max cursor-default mt-4 justify-center">
				{#if $user.displayPicture}
					<img
						src={$user.displayPicture}
						alt="cdn"
						class="rounded-full w-[156px] h-[156px] border-4 border-primary-red justify-center md:justify-normal"
					/>
				{:else}
					<div
						class="rounded-full w-[156px] h-[156px] object-cover object-center border-4 border-primary-red flex lg:justify-center md:justify-center sm:justify-center items-center bg-background"
					>
						<p class="text-content-primary text-3xl font-bold font-roboto text-center">
							{$user.username.charAt(0)}
						</p>
					</div>
				{/if}
			</div>

			<div class="relative flex flex-col gap-3">
				<div class="flex flex-row gap-2 items-center flex-wrap justify-start self-stretch">
					<h6
						class:!bg-primary-red-light={_userData.cutUpPointsPosition === 1}
						class:!bg-content-secondary={_userData.cutUpPointsPosition === 2}
						class:!bg-primary-orange-light={_userData.cutUpPointsPosition === 3}
						class:!text-background={[1, 2, 3].includes(_userData.cutUpPointsPosition)}
						class="flex p-1 pr-2 items-center gap-1 rounded-sm text-content-secondary bg-top-light-17 font-roboto font-[740] tracking-wide"
					>
						<Icon
							name="NohesiLogo"
							class={`${
								[1, 2, 3].includes(_userData.cutUpPointsPosition)
									? 'fill-background'
									: 'fill-icon-accent'
							}`}
						/>
						#{_userData.cutUpPointsPosition}
					</h6>
					<h6
						class:!bg-primary-red-light={_userData.driftPosition === 1}
						class:!bg-content-secondary={_userData.driftPosition === 2}
						class:!bg-primary-orange-light={_userData.driftPosition === 3}
						class:!text-background={[1, 2, 3].includes(_userData.driftPosition)}
						class="flex p-1 pr-2 items-center gap-1 rounded-sm text-content-secondary bg-top-light-17 font-roboto font-[740] tracking-wide"
					>
						<Icon name="Wheel" class="fill-top-dark-83" />
						#{_userData.driftPosition}
					</h6>
					{#if personalProfile}
						<h6
							class:!bg-primary-red-light={_userData.trackPosition === 1}
							class:!bg-content-secondary={_userData.trackPosition === 2}
							class:!bg-primary-orange-light={_userData.trackPosition === 3}
							class:!text-background={[1, 2, 3].includes(_userData.trackPosition)}
							class="flex p-1 pr-2 items-center gap-1 rounded-sm text-content-secondary bg-top-light-17 font-roboto font-[740] tracking-wide"
						>
							<Icon
								name="Speedometer"
								class={`${
									[1, 2, 3].includes(_userData.trackPosition)
										? 'fill-background'
										: 'fill-icon-accent'
								}`}
							/>
							#{_userData.trackPosition}
							<span class="text-top-light-38">{'Track name'}</span>
						</h6>
					{/if}
				</div>
				<div class="flex flex-row gap-3 flex-wrap items-center justify-start self-stretch">
					<h4 class="text-content-primary mt-1">
						{$user.username}
					</h4>
					<h6
						class="text-primary-red uppercase border-2 rounded-sm px-2 py-1 bg-[rgb(238,237,238)] shadow-[3px_3px_0px_0px_rgb(155,0,58)]"
					>
						oj legend
					</h6>
				</div>
				<div class="flex flex-row gap-2 flex-wrap items-center justify-start self-stretch">
					{#if discordUsername}
						<div
							class="flex flex-row gap-1 rounded-sm py-1 px-3 backdrop-blur-16 text-content-primary bg-top-dark-63"
						>
							<!--<Icon name="Speedometer" class="fill-content-primary" />-->
							<img
								src="/icons/user-profile-discord.svg"
								class=""
								width="24px"
								height="24px"
								alt="discord"
							/>
							<p class="text-content-primary whitespace-nowrap font-normal font-inter">
								{discordUsername}
							</p>
						</div>
					{/if}

					{#if steamUsername}
						<div
							class="flex flex-row gap-2 rounded-sm py-1 px-3 backdrop-blur-16 text-content-primary bg-top-dark-63"
						>
							<img
								src="/icons/user-profile-steam.svg"
								class=""
								width="22px"
								height="22px"
								alt="steam"
							/>
							<p class="text-content-primary whitespace-nowrap font-normal font-inter">
								{steamUsername}
							</p>
						</div>
					{/if}
				</div>
				{#if role}
					<div class="flex flex-row gap-2 items-center justify-start self-stretch">
						<h6
							class=" {tierText} {tierBackground} {tierBorder} font-roboto w-max py-1 px-3 font-bold h6-inter uppercase border rounded-md"
						>
							{role}
						</h6>
					</div>
				{/if}
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import { notifications } from '$lib/data';
	import { notificationsToggle, profileMenuToggle, user } from '$lib/stores';
	import { clickOutside } from '../../actions/clickOutside';
	import Switch from '../sections/user/profile/switch.svelte';
	import Icon from '../shared/Icon.svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let open = false;

	const closeMenu = () => {
		document.body.classList.remove('overflow-hidden');
		open = false;
	};

	const openMenu = () => {
		document.body.classList.add('overflow-hidden');
		profileMenuToggle.set(false);
		notificationsToggle.set(false);
		open = true;
	};

	const handleClick = (index: number) => {
		const url = links2[index].url;
		gotoLink(url);
	};

	const gotoLink = (url: string) => {
		document.body.classList.remove('overflow-hidden');

		if (url === $page.url.pathname) {
			open = false;
		}
		goto(url);
	};

	const handleLogin = () => {
		goto('/sign-in');
	};

	const toggleNotification = () => {
		if (!$notificationsToggle) {
			profileMenuToggle.set(false);
			notificationsToggle.set(true);
		}
	};

	const toggleProfileMenu = () => {
		if (!$profileMenuToggle) {
			notificationsToggle.set(false);
			profileMenuToggle.set(true);
		}
	};

	const handleBtnClick = (index: number) => {
		profileMenuToggle.set(false);
		goto(links3[index].url);
	};

	const handleLogout = () => {
		dispatch('logout');
		profileMenuToggle.set(false);
	};

	$: $page.url && (open = false);

	const links = [
		{
			name: 'Get started',
			url: '/get-started'
		},
		{
			name: $_('nav.header.leftPages.0'),
			url: 'https://nohesi.shop/'
		},
		{
			name: 'About Us',
			url: '/about'
		},
		{
			name: 'Partners',
			url: '/partners'
		},
		// {
		// 	name: $_('nav.header.leftPages.2'),
		// 	url: '/news'
		// },
		{
			name: $_('nav.header.leftPages.3'),
			url: '/contact'
		}
		// {
		// 	name: $_('nav.header.leftPages.4'),
		// 	url: '/faq'
		// }
	];

	const links2 = [
		{
			name: $_('nav.header.rightPages.0'),
			url: '/live'
		},
		{
			name: $_('nav.header.rightPages.1'),
			url: '/subscriptions'
		},
		{
			name: $_('nav.header.rightPages.2'),
			url: '/servers'
		},
		{
			name: 'Leaderboard',
			url: '/leaderboard'
		}
	];

	const links3 = [
		{
			name: $_('nav.profile.links.0'),
			url: '/user/home',
			iconName: 'House'
		},
		{
			name: $_('nav.profile.links.1'),
			url: '/user/leaderboard',
			iconName: 'Crown'
		},
		{
			name: $_('nav.profile.links.2'),
			url: '/user/friends',
			iconName: 'Users'
		},
		{
			name: $_('nav.profile.links.3'),
			url: '/user/fav-servers',
			iconName: 'Star'
		},
		{
			name: $_('nav.profile.links.4'),
			url: '/user/edit-profile',
			iconName: 'PencilSimple'
		},
		{
			name: $_('nav.profile.links.5'),
			url: '/user/subscriptions',
			iconName: 'Cube'
		}
	];
</script>

<div class="fixed top-0 left-0 right-0 z-50 h-8 p-2 flex flex-col gap-1">
	<div
		class="bg-top-dark-83 backdrop-blur-16 border border-border rounded-lg w-full flex items-center justify-between p-2"
	>
		<a href="/" class="bg-border p-2 px-4 h-7 rounded-sm flex items-center">
			<img src="/icons/NoHesiLogo.svg" alt="cdn" />
		</a>

		<div class="flex items-center gap-2">
			{#if $user.authenticated}
				<button
					class="p-1.5 rounded-sm border border-border-light ${$notificationsToggle
						? 'bg-top-light-17'
						: 'bg-top-light-2'}"
					on:click={toggleNotification}
				>
					<img src="/icons/Bell.svg" alt="cdn" />
				</button>

				<button on:click={toggleProfileMenu}>
					{#if $user.displayPicture}
						<img src={$user.displayPicture} alt="cdn" class="w-7 h-7 object-cover rounded-full" />
					{:else}
						<div
							class="rounded-full w-7 h-7 border border-primary-red flex justify-center items-center bg-background"
						>
							<p class="text-content-primary text-base font-bold font-roboto text-center">
								{$user.username.charAt(0)}
							</p>
						</div>
					{/if}
				</button>
			{:else}
				<button
					class="bg-primary-violete-light h-7 text-content-primary font-inter text-xs p-2 px-4 rounded-sm flex items-center box-border"
					on:click={handleLogin}
				>
					<img src="/icons/UserCircle.svg" alt="cdn" />
					{$_('nav.header.btn')}
				</button>
			{/if}

			{#if open}
				<button on:click={closeMenu}>
					<img src="/icons/closeMenu.svg" alt="menu" class="h-7 w-7" />
				</button>
			{:else}
				<button on:click={openMenu}>
					<img src="/icons/hamburger.svg" alt="menu" class="h-7 w-7" />
				</button>
			{/if}
		</div>
	</div>

	{#if open}
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div
			class="bg-top-dark-83 backdrop-blur-16 border border-border rounded-lg w-full flex flex-col justify-stretch items-center p-2 gap-6"
			use:clickOutside
			on:click_outside={closeMenu}
		>
			{#each links as { name, url }}
				<button
					class="font-inter text-base text-content-secondary w-full px-2 text-left"
					on:click={() => gotoLink(url)}>{name}</button
				>
			{/each}

			<div class="f-col-center gap-1 bg-top-light-2 p-1 rounded-md w-full">
				<!-- <button
					class="btn-sm border bg-top-light-2 border-border text-content-secondary hover:bg-top-light-17 f-center self-stretch transition-all duration-500 font-inter"
					on:click={() => handleClick(0)}
				>
					<img src="/icons/Ellipse.svg" alt="cdn" />
					{links2[0].name}
				</button> -->

				<button
					class="btn-sm border bg-top-light-2 border-border text-content-secondary hover:bg-top-light-17 f-center self-stretch transition-all duration-500 font-inter"
					on:click={() => handleClick(1)}
				>
					<img class="opacity-30 h-4 w-4" src="/icons/Star.svg" alt="cdn" />
					{links2[1].name}
				</button>

				<button
					class="btn-sm border bg-top-light-2 border-border text-content-secondary hover:bg-top-light-17 f-center self-stretch transition-all duration-500 font-inter"
					on:click={() => handleClick(2)}
				>
					<img class="opacity-30" src="/icons/Database.svg" alt="cdn" />
					{links2[2].name}
				</button>

				<button
					class="btn-sm border bg-top-light-2 border-border text-content-secondary hover:bg-top-light-17 f-center self-stretch transition-all duration-500 font-inter"
					on:click={() => handleClick(3)}
				>
					<img class="opacity-30 h-4 w-auto" src="/icons/Crown.svg" alt="cdn" />
					{links2[3].name}
				</button>
			</div>
		</div>
	{/if}
	{#if $notificationsToggle}
		<div
			class="flex flex-col gap-3 self-end p-2 rounded-md backdrop-blur-16 shadow-tooltip bg-background border border-border w-4/5 sm:w-2/5"
			use:clickOutside
			on:click_outside={() => setTimeout(() => notificationsToggle.set(false), 10)}
		>
			<div class="flex justify-between items-center">
				<div class="px-2 flex gap-1 items-center">
					<p class="text-sm font-medium font-inter text-content-secondary w-max">Unread</p>
					<Switch pillSize="sm" />
				</div>
				<button class="p-2 rounded-sm text-sm font-medium font-inter text-content-secondary w-max">
					Mark all as read
				</button>
			</div>
			<div class="flex flex-col gap-2 self-stretch overflow-y-auto max-h-[21rem]">
				{#each notifications as notification}
					<div
						class={`group rounded-md bg-top-light-2 hover:bg-top-light-10 cursor-pointer transition-colors duration-500 border-l-8 ${
							notification.unread ? 'border-primary-violete-light' : 'border-top-light-38'
						} flex flex-col gap-2 py-2 px-3`}
					>
						<div class="flex gap-2">
							<div
								class={`p-0.5 rounded-sm h-max ${
									notification.type === 'Success'
										? 'bg-green-bg-surface'
										: notification.type === 'Info'
										? 'bg-primary-violete-bg-surface'
										: 'bg-yellow-bg-surface'
								}`}
							>
								<Icon name={notification.type} width="16" height="16" />
							</div>
							<p class="text-sm text-content-primary font-medium font-inter">
								{notification.title}
							</p>
						</div>
						<p class="text-sm font-inter text-content-secondary">{notification.desc}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}
	{#if $profileMenuToggle}
		<div
			class="flex flex-col self-end p-2 gap-4 rounded-md border border-border backdrop-blur-16 bg-background shadow-tooltip w-max"
			use:clickOutside
			on:click_outside={() => setTimeout(() => profileMenuToggle.set(false), 10)}
		>
			<div class="flex flex-col gap-1 self-stretch">
				{#each links3 as link, index}
					<button
						class="group flex p-2 px-3 gap-3 items-center w-full hover:bg-top-light-17"
						on:click={() => handleBtnClick(index)}
					>
						<Icon name={link.iconName} class={'fill-icon'} />
						<p class="text-content-primary uppercase font-roboto text-md font-bold slnt-10">
							{link.name}
						</p>
					</button>
				{/each}
			</div>
			<hr />
			<button
				class="flex gap-3 p-2 px-3 items-center w-full hover:bg-top-light-17"
				on:click={handleLogout}
			>
				<Icon name="SignOut" class="fill-icon" />
				<p class="text-content-secondary font-roboto slnt-10 text-md font-bold uppercase">
					{$_('nav.profile.logout')}
				</p>
			</button>
		</div>
	{/if}
</div>

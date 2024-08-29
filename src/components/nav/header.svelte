<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Button from '../shared/button.svelte';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';
	import MobileHeader from './mobile-header.svelte';
	import { user } from '$lib/stores';
	import ProfileButtons from './profileButtons.svelte';

	const handleClick = (linkIndex: number) => {
		const url = links2[linkIndex].url;
		goto(url);
	};

	const handleLogin = () => {
		goto('/sign-in');
	};

	const links = [
		{
			name: 'Get started',
			url: '/get-started'
		},
		{
			name: 'About Us',
			url: '/about'
		},
		{
			name: 'Partners',
			url: '/partners'
		},
		{
			name: $_('nav.header.leftPages.3'),
			url: '/contact'
		}
	];

	const links2 = [
		{
			name: $_('nav.header.rightPages.1'),
			url: '/subscriptions',
			icon: 'Star'
		},
		{
			name: $_('nav.header.rightPages.2'),
			url: '/servers',
			icon: 'Database'
		},
		{
			name: 'Leaderboard',
			url: '/leaderboard',
			icon: 'Crown'
		}
	];

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div class="fixed top-0 right-0 left-0 z-[100] w-full">
	{#if width < 1280}
		<MobileHeader on:logout />
	{:else if width >= 1920}
		<header
			class="sticky left-0 top-5 bg-top-dark-83 backdrop-blur-16 flex justify-between items-center border border-border rounded-xl p-2 my-5 container-section"
		>
			<div class="flex items-center lg:gap-2 xl:gap-4 2xl:gap-6">
				<a href="/" class="flex items-center font-roboto bg-border p-2 px-5 rounded-md gap-2">
					<img width="150px" src="/icons/NoHesiLogo.svg" alt="cdn" />
				</a>
				<div class="hidden md:flex items-center lg-gap-2 xl:gap-4 2xl:gap-6">
					{#each links as { name, url, newTab }}
						{#if newTab}
							<a
								target="_blank"
								rel="noopener noreferrer"
								class:bg-top-light-17={url === $page.url.pathname}
								class="text-lg font-inter lg:p-1 xl:p-2 2xl:p-3 lg:font-normal xl:font-medium rounded-sm text-content-secondary hover:bg-top-light-17 transition-all duration-500"
								href={url}>{name}</a
							>
						{:else}
							<a
								class:bg-top-light-17={url === $page.url.pathname}
								class="text-lg font-inter lg:p-1 xl:p-2 2xl:p-3 lg:font-normal xl:font-medium rounded-sm text-content-secondary hover:bg-top-light-17 transition-all duration-500"
								href={url}>{name}</a
							>
						{/if}
					{/each}
				</div>
			</div>
			<div class="hidden xl:flex items-center gap-4">
				<div class="flex items-center gap-2 bg-top-light-2 p-1 rounded-md">
					{#each links2 as btn_link, index}
						<Button
							title={btn_link.name}
							classes={`border bg-top-light-2 border-border text-content-secondary hover:bg-top-light-17 2xl:!py-3 2xl:text-lg !font-medium !rounded-sm ${
								$page.url.pathname === btn_link.url ? '!bg-top-light-10' : ''
							}`}
							size="md"
							icon={btn_link.icon}
							iconClasses={`w-6 ${index != 0 ? 'opacity-30' : ''}`}
							on:click={() => handleClick(index)}
						/>
					{/each}
				</div>
				{#if $user.authenticated}
					<ProfileButtons on:logout />
				{:else}
					<Button
						title={$_('nav.header.btn')}
						classes="bg-primary-violete-light text-content-primary 2xl:!py-3 2xl:text-lg !font-medium !rounded-sm"
						size="md"
						icon="UserCircle"
						iconClasses="w-6"
						on:click={handleLogin}
					/>
				{/if}
			</div>
		</header>
	{:else}
		<header
			class="sticky left-9 right-9 top-5 bg-top-dark-83 backdrop-blur-16 flex justify-between items-center border border-border rounded-xl p-2 my-2 md:my-5 container-section"
		>
			<div class="flex items-center lg:gap-2 xl:gap-4 2xl:gap-6">
				<a href="/" class="flex items-center font-roboto bg-border p-3 px-5 rounded-md gap-2">
					<img src="/icons/NoHesiLogo.svg" alt="cdn" />
				</a>
				<div class="hidden md:flex items-center lg-gap-2 xl:gap-4 2xl:gap-6">
					{#each links as { name, url, newTab }}
						{#if newTab}
							<a
								target="_blank"
								rel="noopener noreferrer"
								class:bg-top-light-17={url === $page.url.pathname}
								class="text-sm lg:p-1 xl:p-2 lg:font-normal xl:font-medium 2xl:font-semibold rounded-sm text-content-secondary hover:bg-top-light-17 transition-all duration-500"
								href={url}>{name}</a
							>
						{:else}
							<a
								class:bg-top-light-17={url === $page.url.pathname}
								class="text-sm lg:p-1 xl:p-2 lg:font-normal xl:font-medium 2xl:font-semibold rounded-sm text-content-secondary hover:bg-top-light-17 transition-all duration-500"
								href={url}>{name}</a
							>
						{/if}
					{/each}
				</div>
			</div>
			<div class="hidden xl:flex items-center gap-4">
				<div class="flex items-center gap-2 bg-top-light-2 p-1 rounded-md">
					{#each links2 as btn_link, index}
						<Button
							title={btn_link.name}
							classes={`border bg-top-light-2 lg:!p-1 xl:!p-2 !text-sm border-border text-content-secondary hover:bg-top-light-17 !font-medium !rounded-sm ${
								$page.url.pathname === btn_link.url ? '!bg-top-light-10' : ''
							}`}
							size="sm"
							icon={btn_link.icon}
							iconClasses={`${btn_link.url != '/live' ? 'opacity-30' : ''}`}
							on:click={() => handleClick(index)}
						/>
					{/each}
				</div>
				{#if $user.authenticated}
					<ProfileButtons on:logout />
				{:else}
					<Button
						title={$_('nav.header.btn')}
						classes="bg-primary-violete-light text-content-primary lg:!p-1 xl:!p-2 !text-sm !font-medium !rounded-sm"
						size="sm"
						icon="UserCircle"
						on:click={handleLogin}
					/>
				{/if}
			</div>
		</header>
	{/if}
</div>

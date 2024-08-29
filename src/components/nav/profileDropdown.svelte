<script lang="ts">
	import { goto } from '$app/navigation';
	import { notificationsToggle, profileMenuToggle, user } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { clickOutside } from '../../actions/clickOutside';
	import Icon from '../shared/Icon.svelte';

	const dispatch = createEventDispatcher();

	const handleToggle = () => {
		if (!$profileMenuToggle) {
			notificationsToggle.set(false);
			profileMenuToggle.set(true);
		} else {
			profileMenuToggle.set(false);
		}
	};

	const handleBtnClick = (index: number) => {
		profileMenuToggle.set(false);
		goto(links[index].url);
	};

	const handleLogout = () => {
		dispatch('logout');
		profileMenuToggle.set(false);
	};

	const links = [
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

<!-- svelte-ignore a11y-no-static-element-interactions -->
<!-- svelte-ignore a11y-mouse-events-have-key-events -->
<div
	class="relative"
	use:clickOutside
	on:click_outside={() => setTimeout(() => profileMenuToggle.set(false), 10)}
>
	<button
		on:click={handleToggle}
		class="group flex gap-1.5 btn-sm 3xl:!btn-md 3xl:!text-lg 3xl:!py-3 !px-3 bg-primary-violete-tertiary hover:bg-primary-violete transition-all duration-500"
	>
		{#if $user.displayPicture}
			<img src={$user.displayPicture} alt="cdn" class="w-7 h-7 rounded-full object-cover" />
		{:else}
			<div
				class="rounded-full w-7 h-7 border border-primary-red flex justify-center items-center bg-background"
			>
				<p class="text-content-primary text-base font-bold font-roboto text-center">
					{$user.username.charAt(0)}
				</p>
			</div>
		{/if}

		<p class="font-inter text-content-secondary">{$user.username}</p>
		<Icon name="CaretDown" class="fill-icon" height="16" width="16" />
	</button>
	{#if $profileMenuToggle}
		<div
			class="flex flex-col p-2 gap-4 rounded-md border border-border backdrop-blur-16 bg-background shadow-tooltip absolute right-0 mt-1 w-max"
		>
			<div class="flex flex-col gap-1 self-stretch">
				{#each links as link, index}
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

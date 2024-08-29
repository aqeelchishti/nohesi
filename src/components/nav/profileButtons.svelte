<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { notifications } from '$lib/data';
	import { notificationsToggle, profileMenuToggle } from '$lib/stores';
	import { clickOutside } from '../../actions/clickOutside';
	import Switch from '../sections/user/profile/switch.svelte';
	import Icon from '../shared/Icon.svelte';
	import Button from '../shared/button.svelte';
	import ProfileDropdown from './profileDropdown.svelte';

	let width: number;

	const toggleNotification = () => {
		if (!$notificationsToggle) {
			

			profileMenuToggle.set(false);
			notificationsToggle.set(true);
		} else {
			notificationsToggle.set(false);
		}
	};
</script>

<svelte:window bind:innerWidth={width} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="flex items-center gap-1 rounded-md p-1 bg-top-light-2">
	{#if width >= 1920}
		<div
			class="relative"
			use:clickOutside
			on:click_outside={() => setTimeout(() => notificationsToggle.set(false), 10)}
		>
			<Button
				title=""
				classes={`border border-border text-content-secondary hover:bg-top-light-17 ${
					$notificationsToggle ? 'bg-top-light-17' : 'bg-top-light-2'
				} 2xl:!py-3 2xl:text-lg z-10`}
				size="md"
				icon="Bell"
				iconClasses={'w-7'}
				on:click={toggleNotification}
			/>
			{#if $notificationsToggle}
				<div
					class="flex flex-col gap-3 p-2 rounded-md backdrop-blur-16 shadow-tooltip bg-background border border-border absolute right-0 mt-1 w-[22.5rem]"
				>
					<div class="flex justify-between items-center">
						<div class="px-2 flex gap-1 items-center">
							<p class="text-sm font-medium font-inter text-content-secondary w-max">
								{$_('nav.notificationBox.unread')}
							</p>
							<Switch pillSize="sm" />
						</div>
						<button
							class="p-2 rounded-sm text-sm font-medium font-inter text-content-secondary w-max"
						>
							{$_('nav.notificationBox.read')}
						</button>
					</div>
					<div class="flex flex-col gap-2 self-stretch overflow-y-auto h-[21rem]">
						<div class="flex justify-center items-center h-full w-full">
							<p class="text-content-secondary text-sm">No notifications yet</p>
						</div>
						<!-- {#each notifications as notification}
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
						{/each} -->
					</div>
				</div>
			{/if}
		</div>
		<ProfileDropdown on:logout />
	{:else}
		<div
			class="relative"
			use:clickOutside
			on:click_outside={() => setTimeout(() => notificationsToggle.set(false), 10)}
		>
			<Button
				title=""
				classes={`border ${
					$notificationsToggle ? 'bg-top-light-17' : 'bg-top-light-2'
				} lg:!p-1 xl:!p-2 !text-md border-border text-content-secondary hover:bg-top-light-17 z-10`}
				size="sm"
				icon="Bell"
				iconClasses={'w-5'}
				on:click={toggleNotification}
			/>
			{#if $notificationsToggle}
				<div
					class="flex flex-col gap-3 p-2 rounded-md backdrop-blur-16 shadow-tooltip bg-background border border-border absolute right-0 mt-1 w-[22.5rem]"
				>
					<div class="flex justify-between items-center">
						<div class="px-2 flex gap-1 items-center">
							<p class="text-sm font-medium font-inter text-content-secondary w-max">
								{$_('nav.notificationBox.unread')}
							</p>
							<Switch pillSize="sm" />
						</div>
						<button
							class="p-2 rounded-sm text-sm font-medium font-inter text-content-secondary w-max"
						>
							{$_('nav.notificationBox.read')}
						</button>
					</div>
					<div class="flex flex-col gap-2 self-stretch overflow-y-auto h-[21rem]">
						<div class="flex justify-center items-center h-full w-full">
							<p class="text-content-secondary text-sm">No notifications yet</p>
						</div>
						<!-- {#each notifications as notification}
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
						{/each} -->
					</div>
				</div>
			{/if}
		</div>
		<ProfileDropdown on:logout />
	{/if}
</div>

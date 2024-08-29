<script lang="ts">
	import { onDestroy } from 'svelte';
	import { shopMenuList } from '$lib/store/shopMenuList';

	import ShopMenu from './../../../../../components/sections/user/shop/shopMenu.svelte';
	import Main from '../../../../../components/sections/user/shop/main.svelte';
	import DriverTags from '../../../../../components/sections/user/shop/driverTags.svelte';
	import Collections from '../../../../../components/sections/user/shop/collections.svelte';
	import Bundles from '../../../../../components/sections/user/shop/bundles.svelte';
	import Avatars from '../../../../../components/sections/user/shop/avatars.svelte';
	import Badges from '../../../../../components/sections/user/shop/badges.svelte';

	const shopItemsList = [
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username1',
			badge: 'Owner',
			views: '500K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username2',
			badge: 'Owner',
			views: '600K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username3',
			badge: 'Owner',
			views: '700K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username1',
			badge: 'Owner',
			views: '500K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username2',
			badge: 'Owner',
			views: '600K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username3',
			badge: 'Owner',
			views: '700K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username1',
			badge: 'Owner',
			views: '500K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username2',
			badge: 'Owner',
			views: '600K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username3',
			badge: 'Owner',
			views: '700K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username1',
			badge: 'Owner',
			views: '500K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username2',
			badge: 'Owner',
			views: '600K'
		},
		{
			name: 'Heading 1',
			summary: 'Personalize your avatar with unique decorations to stand out in the crowd.',
			price: 12.99,
			avatar: '/images/ProfileImage.jpeg',
			username: 'username3',
			badge: 'Owner',
			views: '700K'
		}
	];

	onDestroy(() => {
		$shopMenuList.map((item: any, i: number) => {
			if (item.active === true) {
				item.active = false;
			}
		});
		$shopMenuList[0].active = true;
	});
</script>

<div class="flex flex-col gap-12 pt-14 pb-16 mx-2">
	<div class="flex flex-col gap-5 justify-center">
		<div class="flex flex-col gap-2 justify-center">
			<div class="flex flex-row justify-center">
				<img src="/icons/NoHesiLogo.svg" class="w-44 h-auto" alt="no-hesi-logo" />
			</div>
			<div class="flex flex-row justify-center">
				<img src="/icons/shop-logo.svg" alt="shop-logo" />
			</div>
		</div>
		<div class="flex flex-col gap-4 justify-center">
			<div class="flex flex-row justify-center">
				<div class="relative">
					<input
						type="text"
						name=""
						id=""
						placeholder="Search"
						class="bg-top-light-2 font-inter font-normal rounded-sm border w-full xs:w-[400px] border-border text-content-tertiary py-3 px-4 pl-10 text-md placeholder:text-content-tertiary active:outline-none focus:outline-none"
					/>
					<img
						src="/icons/MagnifyingGlass.svg"
						alt="cdn"
						class="absolute left-3 top-1/2 -translate-y-1/2"
					/>
				</div>
			</div>
			<ShopMenu />
		</div>
	</div>
	{#each $shopMenuList as item}
		{#if item.active === true}
			{#if item.title === 'Main'}
				<Main />
			{:else if item.title === 'Collections'}
				<Collections />
			{:else if item.title === 'Bundles'}
				<Bundles />
			{:else if item.title === 'Avatars'}
				<Avatars />
			{:else if item.title === 'Driver tags'}
				<DriverTags {shopItemsList} />
			{:else if item.title === 'Badges'}
				<Badges />
			{/if}
		{/if}
	{/each}
</div>

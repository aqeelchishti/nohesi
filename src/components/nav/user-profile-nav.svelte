<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import Icon from '../shared/Icon.svelte';

	const links = [
		{
			name: $_('nav.profile.links.0'),
			url: '/user/home',
			urlExp: new RegExp('/user/home'),
			iconName: 'House'
		},
		{
			name: $_('nav.profile.links.1'),
			url: '/user/leaderboard',
			urlExp: new RegExp('/user/leaderboard'),
			iconName: 'Crown'
		},
		{
			name: $_('nav.profile.links.2'),
			url: '/user/friends',
			urlExp: new RegExp('/user/friends(/\\S+)*'),
			iconName: 'Users'
		},
		{
			name: $_('nav.profile.links.3'),
			url: '/user/fav-servers',
			urlExp: new RegExp('/user/fav-servers'),
			iconName: 'Star'
		},
		{
			name: $_('nav.profile.links.4'),
			url: '/user/edit-profile',
			urlExp: new RegExp('/user/edit-profile'),
			iconName: 'PencilSimple'
		},
		{
			name: $_('nav.profile.links.5'),
			url: '/user/subscriptions',
			urlExp: new RegExp('/user/subscriptions'),
			iconName: 'Cube'
		},
		{
			name: 'Settings',
			url: '/user/settings',
			urlExp: new RegExp('/user/settings'),
			iconName: 'GearSixSettings'
		},
		{
			name: 'Shop',
			url: '/user/shop',
			urlExp: new RegExp('/user/shop'),
			iconName: 'ShoppingBag'
		}
	];

	let width: number;

	$: activePage = links.filter((p) => p.urlExp.test(String($page.route.id)))[0];
	let linksToggle: boolean = false;

	const handleLinksToggle = () => {
		linksToggle = !linksToggle;
	};

	const handleLink = (url: string) => {
		goto(url);
	};

	$: $page.url && (linksToggle = false);
</script>

<svelte:window bind:innerWidth={width} />

<div class="relative flex flex-row gap-6 mx-2">
	{#if width >= 1200}
		<div
			class="flex flex-row p-2 gap-2 rounded-xl border border-border bg-top-light-2 w-fit justify-between"
		>
			<!--class:border={urlExp.test(String($page.route.id))}-->
			{#each links.slice(0, 7) as { name, url, iconName, urlExp }}
				<a
					href={url}
					class:bg-top-light-2={urlExp.test(String($page.route.id))}
					class="{urlExp.test(String($page.route.id))
						? 'border-border'
						: 'border-transparent'} flex flex-row items-center py-[6px] px-2 gap-2 rounded-md border text-content-primary font-inter normal-case slnt-10 font-medium text-md"
				>
					<Icon
						width="20"
						height="20"
						viewBox="0 0 24 24"
						name={iconName}
						class={urlExp.test(String($page.route.id)) ? 'fill-primary-violete-light' : 'fill-icon'}
					/>
					{name}
				</a>
			{/each}
		</div>
		<div
			class="flex flex-row p-2 gap-2 rounded-xl border border-border bg-top-light-2 w-fit justify-between"
		>
			<!--class:border={links[7].urlExp.test(String($page.route.id))}-->
			<a
				href={links[7].url}
				class:bg-top-light-2={links[7].urlExp.test(String($page.route.id))}
				class="{links[7].urlExp.test(String($page.route.id))
					? 'border-border'
					: 'border-transparent'} flex flex-row items-center py-[6px] px-2 gap-2 rounded-md border text-content-primary font-inter normal-case slnt-10 font-medium text-md"
			>
				<Icon
					width="20"
					height="20"
					viewBox="0 0 20 20"
					name={links[7].iconName}
					class={links[7].urlExp.test(String($page.route.id))
						? 'fill-primary-violete-light'
						: 'fill-icon'}
				/>
				{links[7].name}
				<span
					class="rounded-md bg-primary-violete text-content-primary py-[0.5px] px-[6px] font-inter font-semibold uppercase text-sm"
					>New</span
				>
			</a>
		</div>
	{:else}
		<div class="flex gap-5 p-2 rounded-xl border border-border bg-top-light-2 w-max">
			<button
				class="flex relative items-center py-[6px] px-2 gap-2 rounded-md border-border text-content-primary font-inter normal-case slnt-10 font-medium text-md bg-top-light-2 border"
				on:click={handleLinksToggle}
			>
				<Icon
					width="20"
					height="20"
					viewBox={activePage.url === '/user/shop' ? '0 0 20 20' : '0 0 24 24'}
					name={activePage.iconName}
					class={'fill-primary-violete-light'}
				/>
				{activePage.name}
				{#if linksToggle}
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="fill-content-secondary"
					>
						<g id="CaretUp">
							<path
								id="Vector"
								d="M13.5306 10.5307C13.4609 10.6006 13.3781 10.656 13.287 10.6939C13.1958 10.7318 13.0981 10.7512 12.9993 10.7512C12.9006 10.7512 12.8029 10.7318 12.7117 10.6939C12.6206 10.656 12.5378 10.6006 12.4681 10.5307L7.99997 6.06252L3.5306 10.5307C3.3897 10.6715 3.19861 10.7507 2.99935 10.7507C2.80009 10.7507 2.60899 10.6715 2.4681 10.5307C2.3272 10.3898 2.24805 10.1987 2.24805 9.9994C2.24805 9.80014 2.3272 9.60905 2.4681 9.46815L7.4681 4.46815C7.53778 4.39823 7.62057 4.34275 7.71173 4.3049C7.8029 4.26704 7.90064 4.24756 7.99935 4.24756C8.09806 4.24756 8.1958 4.26704 8.28696 4.3049C8.37813 4.34275 8.46092 4.39823 8.5306 4.46815L13.5306 9.46815C13.6005 9.53783 13.656 9.62062 13.6938 9.71179C13.7317 9.80295 13.7512 9.90069 13.7512 9.9994C13.7512 10.0981 13.7317 10.1959 13.6938 10.287C13.656 10.3782 13.6005 10.461 13.5306 10.5307Z"
							/>
						</g>
					</svg>
				{:else}
					<svg
						width="16"
						height="16"
						viewBox="0 0 16 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
						class="fill-content-secondary"
					>
						<g id="CaretDown">
							<path
								id="Vector"
								d="M13.5306 6.53073L8.5306 11.5307C8.46092 11.6007 8.37813 11.6561 8.28696 11.694C8.1958 11.7318 8.09806 11.7513 7.99935 11.7513C7.90064 11.7513 7.8029 11.7318 7.71173 11.694C7.62057 11.6561 7.53778 11.6007 7.4681 11.5307L2.4681 6.53073C2.3272 6.38984 2.24805 6.19874 2.24805 5.99948C2.24805 5.80023 2.3272 5.60913 2.4681 5.46823C2.60899 5.32734 2.80009 5.24818 2.99935 5.24818C3.19861 5.24818 3.3897 5.32734 3.5306 5.46823L7.99997 9.93761L12.4693 5.46761C12.6102 5.32671 12.8013 5.24756 13.0006 5.24756C13.1999 5.24756 13.391 5.32671 13.5318 5.46761C13.6727 5.60851 13.7519 5.7996 13.7519 5.99886C13.7519 6.19812 13.6727 6.38921 13.5318 6.53011L13.5306 6.53073Z"
							/>
						</g>
					</svg>
				{/if}

				{#if linksToggle}
					<div class="absolute left-0 top-12 z-10 bg-background rounded-md p-2 w-max">
						{#each links as { name, url, iconName }}
							<button
								class="flex items-center py-2 px-3 gap-3 rounded-md border-border text-content-primary font-inter normal-case slnt-10 font-medium text-md border-b hover:bg-top-light-10 w-full"
								on:click={() => handleLink(url)}
							>
								<Icon
									width="20"
									height="20"
									viewBox={url === '/user/shop' ? '0 0 20 20' : '0 0 24 24'}
									name={iconName}
									class={'fill-icon'}
								/>
								{name}
								{#if url === '/user/shop'}
									<span
										class="rounded-md bg-primary-violete text-content-primary py-[0.5px] px-[6px] font-inter font-semibold uppercase text-sm"
										>New</span
									>
								{/if}
							</button>
						{/each}
					</div>
				{/if}
			</button>
		</div>
	{/if}
</div>

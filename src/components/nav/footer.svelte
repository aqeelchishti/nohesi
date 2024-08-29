<script lang="ts">
	import { footerToggle } from '$lib/stores';
	import { _ } from 'svelte-i18n';
	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<footer
	class="border border-border container-section rounded-xl px-6 py-5 bg-top-light-2 text-content-secondary {$footerToggle}"
>
	{#if width <= 768}
		<div class="grid grid-cols-2 gap-4 text-sm">
			<div class="col-span-2 justify-self-center">
				<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
			</div>
			<div class="flex flex-col gap-1">
				<a
					href="/about"
					class="text-xs p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>About Us</a
				>
				<a
					href="/contact"
					class="text-xs p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>{$_('nav.footer.links.3')}</a
				>
				<a
					href="/subscriptions"
					class="text-xs p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>{$_('nav.footer.links.5')}</a
				>
			</div>
			<div class="flex flex-col gap-1">
				<a
					href="/servers"
					class="text-xs p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>{$_('nav.footer.links.6')}</a
				>
				<a
					href="/leaderboard"
					class="text-xs p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>Leaderboard</a
				>
			</div>
			<div class="col-span-2 mt-4 flex items-center justify-self-center gap-4.5">
				<a href="https://www.youtube.com/@NoHesiGG">
					<img class="h-6 w-6 opacity-50" src="/icons/YoutubeLogo.svg" alt="cdn" />
				</a>
				<a href="https://discord.gg/nohesitation">
					<img class="h-6 w-6 opacity-50" src="/icons/DiscordLogo.svg" alt="cdn" />
				</a>
				<a href="https://www.instagram.com/nohesigg/">
					<img class="h-6 w-6 opacity-50" src="/icons/InstagramLogo.svg" alt="cdn" />
				</a>
				<a href="https://www.tiktok.com/@nohesigg">
					<img class="h-6 w-6 opacity-50" src="/icons/TiktokLogo.svg" alt="cdn" />
				</a>
			</div>
		</div>
		<div class="continer-section">
			<a href="/terms-of-use" class="border-t mt-5 pt-5 w-full block border-border text-xs"
				>{$_('nav.footer.copyright')}</a
			>
		</div>
	{:else}
		<div class="grid grid-cols-5 text-sm">
			<div class="">
				<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
			</div>
			<div class="flex flex-col gap-1">
				<a
					href="/about"
					class="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>About Us</a
				>
				<a
					href="/contact"
					class="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>{$_('nav.footer.links.3')}</a
				>
			</div>
			<div class="flex flex-col gap-1">
				<a
					href="/subscriptions"
					class="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>{$_('nav.footer.links.5')}</a
				>
				<a
					href="/servers"
					class="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>{$_('nav.footer.links.6')}</a
				>
				<a
					href="/leaderboard"
					class="text-sm p-2 rounded-sm font-medium text-content-secondary hover:bg-top-light-17 transition-all duration-500"
					>Leaderboard</a
				>
			</div>
			<div class="col-span-2 flex items-start justify-end gap-4.5">
				<a href="https://www.youtube.com/@NoHesiGG">
					<img class="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50" src="/icons/YoutubeLogo.svg" alt="cdn" />
				</a>
				<a href="https://discord.gg/nohesitation">
					<img class="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50" src="/icons/DiscordLogo.svg" alt="cdn" />
				</a>
				<a href="https://www.instagram.com/nohesigg/">
					<img
						class="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50"
						src="/icons/InstagramLogo.svg"
						alt="cdn"
					/>
				</a>
				<a href="https://www.tiktok.com/@nohesigg">
					<img class="h-6 w-6 2xl:w-8 2xl:h-8 opacity-50" src="/icons/TiktokLogo.svg" alt="cdn" />
				</a>
			</div>
		</div>
		<div class="container-section">
			<a
				href="/terms-of-use"
				class="border-t mt-5 pt-5 w-full block max-w-screen-3xl mx-auto border-border text-sm"
			>
				NoHesi<span>&trade;</span> 2024. All rights reserved.
			</a>
		</div>
	{/if}
</footer>

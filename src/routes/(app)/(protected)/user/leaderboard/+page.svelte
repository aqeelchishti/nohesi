<script lang="ts">
	import Leaderboard from '../../../../../components/sections/user/leaderboard/leaderboard.svelte';
	import Seo from '../../../../../components/shared/SEO.svelte';
	import Spacer from '../../../../../components/shared/spacer.svelte';

	// const handleClick = () => {
	// 	goto('/');
	// };

	export let data;

	$: ({ sid } = data);

	let showScrollBtn: boolean = false;

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	const scrollContainer = () => {
		return document.documentElement || document.body;
	};

	const handleOnScroll = () => {
		if (!scrollContainer()) {
			return;
		}

		if (scrollContainer().scrollTop > 100) {
			showScrollBtn = true;
		} else {
			showScrollBtn = false;
		}
	};
</script>

<svelte:window on:scroll={handleOnScroll} />

<Seo title="User | Leaderboard" />
<!-- <Leaderboard bind:leaderboardClient/> -->
<Leaderboard bind:sid />
<Spacer height="h-20" />

<button
	class="fixed bottom-8 right-5 rounded-full bg-primary-violete border border-border p-2 z-50 invisible opacity-0 transition-all duration-300"
	class:!visible={showScrollBtn}
	class:!opacity-100={showScrollBtn}
	on:click={scrollToTop}
>
	<img src="/icons/ArrowUp.svg" alt="up arrow" class="w-5 h-5" />
</button>

<!-- <div
	class="rounded-xl mt-6 border border-border bg-top-dark-83 backdrop-blur-16 p-6 3xl:p-12 4xl:p-18 flex flex-col gap-10 items-center"
>
	<h1 class="text-content-primary text-center">Work in progress</h1>
	<VioleteButton
		title="Go to main page"
		font="roboto"
		classes="w-max !font-bold"
		size="sm"
		on:click={handleClick}
	/>
</div> -->

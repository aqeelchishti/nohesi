<script lang="ts">
	import Leaderboard from '../../../components/sections/user/leaderboard/leaderboard.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Spacer from '../../../components/shared/spacer.svelte';

	export let data;

	$: ({ sid } = data);

	// const handleClick = () => {
	// 	goto('/');
	// };

	let showScrollBtn: boolean = false;

	// export let data;

	// $: ({ user, count, score, players } = data);

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
<Seo title="Leaderboard" />

<div class="pt-26 container-section">
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
</div>

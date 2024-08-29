<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';

	import { footerToggle } from '$lib/stores';
	import VioleteButton from './violeteButton.svelte';
	import { clickOutside } from '../../actions/clickOutside';

	const dispatch = createEventDispatcher();

	onMount(() => {
		document.body.classList.add('overflow-hidden');
		footerToggle.set('hidden');
	});

	onDestroy(() => {
		document.body.classList.remove('overflow-hidden');
		footerToggle.set('');
	});

	const handleClick = () => {
		window.open('https://discord.gg/nohesitation', '_blank');
	};

	const closeModal = () => {
		dispatch('closeModal');
	};
</script>

<div class="modal max-w-screen-3xl mx-auto">
	<div
		class="p-6 rounded-xl border border-border bg-top-dark-63 backdrop-blur-128 shadow-tooltip flex flex-col gap-4 w-full xs:w-4/5 2xl:w-2/5 mx-auto"
		use:clickOutside
		on:click_outside={closeModal}
	>
		<div class="flex flex-col gap-7">
			<h4 class="text-content-primary text-center">Join Discord Server</h4>

			<div class="flex flex-col items-center gap-4">
				<p class="font-inter text-content-primary text-center text-base">
					Make sure you are a verified member of our discord server
				</p>
				<!-- <h5 class="h5-inter text-content-primary text-center">Or</h5> -->
				<div class="inline-flex items-center justify-center w-full">
					<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-17" />
					<span class="text-content-secondary px-3 font-semibold">OR</span>
					<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-17" />
				</div>
				<!-- <h6 class="text-content-primary text-center">Join server</h6> -->
			</div>
		</div>
		<VioleteButton
			title="Join Server"
			font="roboto"
			classes="w-max !font-bold self-center"
			size="sm"
			on:click={handleClick}
		/>
	</div>
</div>

<style lang="postcss">
	.modal {
		@apply h-full w-screen bg-top-dark-44 backdrop-blur-4 flex justify-center items-center z-50 fixed top-0 left-0 bottom-0 right-0;
	}
</style>

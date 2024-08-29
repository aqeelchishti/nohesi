<script>
	import { createEventDispatcher, onDestroy, onMount } from 'svelte';
	import Button from '../../shared/button.svelte';
	import { clickOutside } from '../../../actions/clickOutside';

	const dispatch = createEventDispatcher()

	onMount(() => {
		document.body.classList.add('overflow-hidden');
	});
	onDestroy(() => {
		document.body.classList.add('overflow-y-auto');
	});

	const _clickOutside = () => {
		dispatch('click_outside')
	}
</script>

<div class="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50">
	<div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

	<div
		class="fixed w-full  md:w-[600px] top-1/2 left-1/2 backdrop-blur-64 bg-transparent -translate-x-1/2 -translate-y-1/2 rounded-2xl p-6 text-center border border-top-light-10"
		use:clickOutside
		on:click_outside
	>
		<div
			class="border border-yellow bg-yellow-bg-top text-yellow-secondary px-4 py-3 rounded font-medium font-base font-inter text-left"
			role="alert"
		>
			<span class="block sm:inline"
				>We can’t find the game on your computer. Please, download the game. If you have the game,
				please, <a href="/contact" class="underline underline-offset-2">contact us</a></span
			>
		</div>
		<div class="flex justify-between items-center pt-12">
			<Button
				title="cancel"
				classes="bg-transparent text-content-primary border border-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap uppercase"
				size="lg"
				font="roboto"
				on:click={_clickOutside}
			/>
			<Button
				title="try again"
				classes="bg-content-primary text-black !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
				size="lg"
				font="roboto"
			/>
		</div>
	</div>
</div>

<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { clickOutside } from '../../actions/clickOutside';
	import Button from './button.svelte';

	export let message: string;
	export let btn1: string;
	export let btn2: string;

	onMount(() => {
		document.body.classList.add('overflow-hidden');
	});
	onDestroy(() => {
		document.body.classList.add('overflow-y-auto');
	});
</script>

<div class="fixed top-0 left-0 right-0 bottom-0 bg-black/60 z-50">
	<div class="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />

	<div
		class="fixed w-full  md:w-[600px] top-1/2 left-1/2 backdrop-blur-128 bg-top-dark-83 -translate-x-1/2 -translate-y-1/2 rounded-2xl p-4 text-center border border-top-light-10"
		use:clickOutside
		on:click_outside



	>
		<div
			class="border border-yellow bg-yellow-bg-top text-yellow-secondary px-4 py-3 rounded font-medium font-base font-inter text-left"
			role="alert"
		>
			<span class="block sm:inline">{message}</span>
		</div>
		<div class="flex justify-between items-center pt-12">
			<Button
				title={btn1}
				classes="bg-transparent text-content-primary border border-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
				size="lg"
				font="roboto"
			/>
			<Button
				title={btn2}
				classes="bg-primary-violete-light bg-content-primary text-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white !font-medium !rounded-md transition-all duration-500 justify-center whitespace-nowrap"
				size="lg"
				font="roboto"
			/>
		</div>
	</div>
</div>

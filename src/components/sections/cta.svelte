<script lang="ts">
	// import { sendOtp } from '$lib/nodemail';
	import { onMount } from 'svelte';
	import { _ } from 'svelte-i18n';

	// onMount(async () => {
	// 	let resp = await sendOtp("khanhuzaifa207@gmail.com", 123456)
	// 	
		
	// })
</script>

<div class="container-section bg-no-repeat bg-contain bg-center bg-cta1_mobile lg:bg-cta1">
	<div
		class="flex flex-col gap-12 items-center px-4 lg:px-0 py-16 lg:py-52 xl:w-3/5 mx-auto max-w-screen-3xl"
	>
		<h1 class="title-gradient text-center">{$_('page.home.cta1.heading')}</h1>

		<!-- <p class="font-inter text-center text-content-secondary text-base w-full lg:w-1/2">
			{$_('page.home.cta1.desc', {default: ''})}
		</p> -->
	</div>
</div>

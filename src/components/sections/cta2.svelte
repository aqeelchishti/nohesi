<script lang="ts">
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';

	const handleJoinDiscord = () => {
		goto('https://discord.gg/nohesitation');
	};
</script>

<div
	class="py-8 px-2 lg:px-9 bg-cover bg-no-repeat bg-right bg-primary-violete md:bg-cta2 scroll-mt-16"
	id="discord"
>
	<div
		class="container-section flex flex-col gap-16 items-center md:items-start w-full lg:w-3/5 3xl:w-full"
	>
		<h1 class="text-content-primary max-md:text-center">{$_('page.home.cta2.heading')}</h1>
		<h2 class="text-content-secondary w-full max-md:text-center lg:text-start lg:w-3/5">
			{$_('page.home.cta2.subHeading')}
		</h2>
		<a
			href="https://discord.gg/nohesitation"
			target="_blank"
			rel="noopener noreferrer"
			class="btn-md font-roboto bg-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white transition-all duration-500 justify-center whitespace-nowrap"
		>
			{$_('page.home.cta2.btn')}
		</a>
		<!-- <Button
			title={$_('page.home.cta2.btn')}
			size="md"
			classes="bg-content-primary !py-4 !px-7 !text-md uppercase hover:shadow-white"
			font="roboto"
		/> -->
	</div>
</div>

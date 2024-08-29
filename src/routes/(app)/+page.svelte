<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { browser } from '$app/environment';
	import { goto } from '$app/navigation';
	import Cta from '../../components/sections/cta.svelte';
	import Cta2 from '../../components/sections/cta2.svelte';
	import Plans from '../../components/sections/plans.svelte';
	import Section from '../../components/sections/section.svelte';
	import Servers from '../../components/sections/servers.svelte';
	import Features from '../../components/sections/shared/features.svelte';
	import Form from '../../components/sections/shared/form.svelte';
	import Seo from '../../components/shared/SEO.svelte';
	import OutlinedButton from '../../components/shared/outlinedButton.svelte';
	import Spacer from '../../components/shared/spacer.svelte';
	import { server_images } from '$lib/stores';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	let width: number;

	// const handleNewsButton = () => {
	// 	goto('/news');
	// };
	const handleServersButton = () => {
		goto('/servers');
	};
	const handleAboutButton = () => {
		goto('/about');
	};

	// const map415 = () => {
	// 	goto('servers?map=415');
	// };

	export let data;

	const fetchServerImages = async () => {
		const { data, error } = await (await fetch(`${PUBLIC_BACKEND_URL}/server-images`)).json();
		if (data) {
			server_images.set(data);
		}
	};

	$: if (browser && $server_images === null) {
		fetchServerImages();
	}
</script>

<Seo />

<svelte:window bind:innerWidth={width} />

<div class="relative h-[100svh] md:h-max overflow-hidden" id="banner">
	<div
		class="relative before:z-10 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-hero_gradient"
	>
		<video
			class="!h-[100svh] object-cover md:!w-full md:!h-[550px] lg:!h-auto relative blur-6"
			width="100%"
			height="auto"
			autoplay
			loop
			muted
		>
			<source type="video/webm" src="https://cdn.nohesi.gg/assets/website/videos/intro-1.webm" />
			<source type="video/mp4" src="https://cdn.nohesi.gg/assets/website/videos/intro-1.mp4" />
		</video>
	</div>
	<div
		class="container-section absolute z-20 top-0 left-0 right-0 h-full p-4 md:p-12 !pt-32 flex flex-col items-stretch gap-16 2xl:gap-28 3xl:gap-32"
	>
		<h2 class="title-gradient h2-title">
			{@html $_('page.home.hero.h1').replaceAll('\n', '<br>')}
		</h2>
		<div class="flex flex-col items-start justify-between h-full md:h-max md:justify-normal gap-6">
			<h3 class="text-primary-violete-light h3-title">
				{@html $_('page.home.hero.h2').replaceAll('\n', '<br>')}
			</h3>
			<OutlinedButton
				title={$_('page.home.hero.btn')}
				size="md"
				font="roboto"
				classes={'w-full md:!w-max'}
				on:click={handleServersButton}
			/>
		</div>
	</div>
</div>

<Spacer height="h-20" />

<!-- Map 415 -->
<!-- <div
	class="bg-map_415 w-full rounded-xl bg-cover bg-center flex flex-col gap-16 h-[600px] container-section px-6 pt-8 items-center scroll-mt-16"
	id="415"
>
	<div class="flex flex-col text-content-primary font-roboto items-center">
		<h2 class="h1-title">415</h2>
		<h3 class="h2-title">by no hesi</h3>
	</div>
	<div class="flex flex-col items-center gap-8">
		<h3 class="text-content-primary text-center">Highway perfection</h3>
		<VioleteButton title="Explore the map" font="roboto" size="md" on:click={map415} />
	</div>
</div>

<Spacer height="h-20" /> -->

<Section
	heading={$_('components.features.heading')}
	headingFont="inter"
	headingClasses={`title-gradient !normal-case`}
	id="about"
>
	<svelte:fragment slot="buttons">
		<OutlinedButton
			classes="self-start md:self-end"
			title={$_('components.features.btn')}
			size="md"
			font="roboto"
			on:click={handleAboutButton}
		/>
	</svelte:fragment>
	<svelte:fragment slot="grid">
		<Features />
	</svelte:fragment>
</Section>

<Spacer />

<Section
	heading={$_('components.servers.heading')}
	headingFont="inter"
	headingClasses={`title-gradient !normal-case`}
>
	<svelte:fragment slot="buttons">
		<OutlinedButton
			classes="self-start md:self-end"
			title={$_('components.servers.btn')}
			size="md"
			font="roboto"
			on:click={handleServersButton}
		/>
	</svelte:fragment>
	<svelte:fragment slot="grid">
		<Servers />
	</svelte:fragment>
</Section>

<Spacer />

<Cta />

<!-- <Spacer />

<Merch /> -->

<Spacer />

<Plans bind:sid={data.sid} />

<Spacer />

<Cta2 />

<Spacer />

<!-- <Section
	heading={$_('page.home.news.title')}
	headingFont="inter"
	headingClasses={`title-gradient !normal-case`}
>
	<svelte:fragment slot="buttons">
		<OutlinedButton
			classes="self-start md:self-end"
			title={$_('page.home.news.btn')}
			size="md"
			font="roboto"
			on:click={handleNewsButton}
		/>
	</svelte:fragment>
	<svelte:fragment slot="grid">
		<News />
	</svelte:fragment>
</Section>

<Spacer /> -->

<Form />

<Spacer />

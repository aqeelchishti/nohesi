<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Hero from '../../../components/sections/about/hero.svelte';
	import Spacer from '../../../components/shared/spacer.svelte';
	import Hero2 from '../../../components/sections/about/hero2.svelte';
	import Section from '../../../components/sections/section.svelte';
	import Features from '../../../components/sections/shared/features.svelte';
	import Button from '../../../components/shared/button.svelte';
	import Testimonials from '../../../components/sections/about/testimonials.svelte';
	import OutlinedButton from '../../../components/shared/outlinedButton.svelte';
	import Youtube from '../../../components/sections/about/youtube.svelte';
	import Form from '../../../components/sections/shared/form.svelte';
	import { goto } from '$app/navigation';
	import Seo from '../../../components/shared/SEO.svelte';

	let width: number;
</script>

<Seo title="About" />

<svelte:window bind:innerWidth={width} />

<div class="pt-26">
	<Hero />
	<Spacer height="h-20" />
	<Hero2 />
	<Spacer />
	<Section
		heading={`No Hesi is a \nGlobal Community`}
		headingFont="inter"
		headingClasses={`title-gradient !normal-case`}
	>
		<svelte:fragment slot="grid">
			<Features />
		</svelte:fragment>
	</Section>
	<!-- <Spacer />
	<Section
		heading={$_('page.about.testimonials.title')}
		headingFont="roboto"
		headingClasses={`title-gradient`}
	>
		<svelte:fragment slot="buttons">
			<div class="hidden lg:flex gap-3">
				<Button
					title={''}
					icon={'ArrowLeft'}
					classes={'border border-border hover:border-border-light !rounded-full !p-2 !px-5'}
					iconClasses={'w-16'}
				/>
				<Button
					title={''}
					icon={'ArrowRight'}
					classes={'border border-border hover:border-border-light !rounded-full !p-2 !px-5'}
					iconClasses={'w-16'}
				/>
			</div>
		</svelte:fragment>
		<svelte:fragment slot="grid">
			<Testimonials />
		</svelte:fragment>
	</Section> -->
	<Spacer />
	<Section
		heading={$_('page.about.social.title')}
		headingFont="roboto"
		headingClasses={`title-gradient`}
	>
		<svelte:fragment slot="buttons">
			<OutlinedButton
				size="md"
				title={$_('page.about.social.btn')}
				font="roboto"
				on:click={() => goto('https://www.youtube.com/@NoHesiGG')}
			/>
		</svelte:fragment>
		<svelte:fragment slot="grid">
			<Youtube />
		</svelte:fragment>
	</Section>
	<Spacer />
	<Form />
	<Spacer height="h-20" />
</div>

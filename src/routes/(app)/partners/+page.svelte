<script>
	import Partner from '../../../components/cards/partner.svelte';
	import Section from '../../../components/sections/section.svelte';
	import Form from '../../../components/sections/shared/form.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Spacer from '../../../components/shared/spacer.svelte';
</script>

<Seo title="Partners" />

<div class="pt-26">
	<Section heading="Partners" headingFont="roboto" headingClasses={'title-gradient'}>
		<svelte:fragment slot="grid">
			<div class="grid lg:grid-cols-2 gap-6">
				<Partner
					title="Adro"
					bgImage={'https://cdn.nohesi.gg/assets/website/images/adro.webp'}
					url="#"
				/>
				<Partner
					title="Moza Racing"
					bgImage={'https://cdn.nohesi.gg/assets/website/images/moza.webp'}
					url="https://mozaracing.com/?ref=IMvfPjlX0n7-fF"
				/>
			</div>
		</svelte:fragment>
	</Section>
	<Spacer />
	<Form />
	<Spacer height="h-20" />
</div>

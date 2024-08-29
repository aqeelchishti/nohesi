<script>
	import Contact from '../../../components/cards/contact.svelte';
	import Section from '../../../components/sections/section.svelte';
	import Form from '../../../components/sections/shared/form.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Spacer from '../../../components/shared/spacer.svelte';
</script>

<Seo title="Contact" />

<div class="pt-26">
	<Section heading="Contacts" headingFont="roboto" headingClasses={'title-gradient'}>
		<svelte:fragment slot="grid">
			<div class="grid lg:grid-cols-2 gap-6">
				<Contact
					title="YouTube channel"
					icon={'YoutubeLogo'}
					bgImage={'https://cdn.nohesi.gg/assets/website/images/contact.webp'}
					url="https://www.youtube.com/@NoHesiGG"
				/>
				<Contact
					title="Discord"
					icon={'DiscordLogo'}
					bgImage={'https://cdn.nohesi.gg/assets/website/images/contact.webp'}
					url="https://discord.gg/nohesitation"
				/>
				<Contact
					title="Instagram"
					icon={'InstagramLogo'}
					bgImage={'https://cdn.nohesi.gg/assets/website/images/contact.webp'}
					url="https://www.instagram.com/nohesigg/"
				/>
				<Contact
					title="Tiktok"
					icon={'TiktokLogo'}
					bgImage={'https://cdn.nohesi.gg/assets/website/images/contact.webp'}
					url="https://www.tiktok.com/@nohesigg"
				/>
			</div>
		</svelte:fragment>
	</Section>
	<Spacer />
	<Form />
	<Spacer height="h-20" />
</div>

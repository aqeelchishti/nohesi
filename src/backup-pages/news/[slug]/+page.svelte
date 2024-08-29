<script>

	import Seo from "../../../../components/shared/SEO.svelte";
	import Wip from "../../../../components/shared/wip.svelte";

</script>
<!-- <script lang="ts">
	import Content from "../../../../components/sections/article/content.svelte";
	import Hero from "../../../../components/sections/article/hero.svelte";
	import Recommended from "../../../../components/sections/article/recommended.svelte";
	import Section from "../../../../components/sections/section.svelte";
	import Spacer from "../../../../components/shared/spacer.svelte";


	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div class="pt-26">
	<Hero title="Large heading example" date="2023.07.08" tags={['Porta', 'Mollis', 'Pulvinar']} />
	<Spacer height="h-20" />
	<Content />
	<Spacer />
	<Section heading="You also may like this" headingFont="roboto" headingClasses="title-gradient">
		<svelte:fragment slot="grid">
			<Recommended />
		</svelte:fragment>
	</Section>

	<Spacer height="h-20" />
</div> -->


<Seo title="News" />

<Wip />
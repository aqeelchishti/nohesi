<script lang="ts">
	import Grid from '../../../components/sections/news/grid.svelte';
	import Hero from '../../../components/sections/news/hero.svelte';
	import Form from '../../../components/sections/shared/form.svelte';
	import Pagination from '../../../components/sections/shared/pagination.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Spacer from '../../../components/shared/spacer.svelte';
	import Wip from '../../../components/shared/wip.svelte';

	let width: number;
</script>

<Seo title="News" />

<Wip />

<!-- <svelte:window bind:innerWidth={width} />

<div class="pt-26">
	<Hero
		title="Large heading example"
		desc="Elit at felis nullam turpis. Odio amet augue blandit nibh. Euismod enim eget duis adipiscing tortor dui risus viverra sit."
        date="2023.07.08"
        tags={["Porta", "Mollis", "Pulvinar"]}
	/>
	<Spacer height="h-20"/>
	<Grid />
	<Spacer height="h-20"/>
	<Pagination />
	<Spacer />
	<Form />
	<Spacer height="h-20" />
</div> -->

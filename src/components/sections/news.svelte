<script lang="ts">
	import { newsData } from "$lib/data";


	import Article from "../cards/article.svelte";

	let width: number;

</script>

<svelte:window bind:innerWidth={width}/>

<div class="grid grid-cols-10 gap-6 w-full text-content-tertiary">
	<Article
		cardSize="lg"
		classes={'col-span-10 xl:col-span-6 xl:row-span-2'}
		image={newsData[0].image}
		title={newsData[0].title}
		tags={newsData[0].tags}
		date={newsData[0].date}
		desc={newsData[0].desc}
	/>
	{#if width < 768}
	<Article
		cardSize="md"
		classes={'col-span-10 xl:col-span-4'}
		image={newsData[1].image}
		title={newsData[1].title}
		tags={newsData[1].tags}
		date={newsData[1].date}
		desc={newsData[1].desc}
	/>
	<Article
		cardSize="md"
		classes={'col-span-10 xl:col-span-4'}
		image={newsData[2].image}
		title={newsData[2].title}
		tags={newsData[2].tags}
		date={newsData[2].date}
		desc={newsData[2].desc}
	/>
	{:else}
	<Article
		cardSize="sm"
		classes={'col-span-10 xl:col-span-4'}
		image={newsData[1].image}
		title={newsData[1].title}
		tags={newsData[1].tags}
		date={newsData[1].date}
		desc={newsData[1].desc}
	/>
	<Article
		cardSize="sm"
		classes={'col-span-10 xl:col-span-4'}
		image={newsData[2].image}
		title={newsData[2].title}
		tags={newsData[2].tags}
		date={newsData[2].date}
		desc={newsData[2].desc}
	/>
		
	{/if}
</div>
<script lang="ts">
	import { newsData } from "$lib/data";

	import Article from "../../cards/article.svelte";

</script>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
    {#each newsData.slice(0, 3) as article}
        <Article 
            title={article.title}
            desc={article.desc}
            image={article.image}
            tags={article.tags}
            date={article.date}
        />
    {/each}
</div>
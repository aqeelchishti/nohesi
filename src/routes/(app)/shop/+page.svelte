<script lang="ts">
	import Form from "../../../components/sections/shared/form.svelte";
	import Pagination from "../../../components/sections/shared/pagination.svelte";
	import Banner from "../../../components/sections/shop/banner.svelte";
	import Products from "../../../components/sections/shop/products.svelte";
	import Spacer from "../../../components/shared/spacer.svelte";



	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div class="pt-26">
	<Banner />
	<Spacer height="h-20" />
	<Products />
	<Spacer height="h-20" />
	<Pagination />
	<Spacer />
	<Form />
	<Spacer height="h-20" />
</div>

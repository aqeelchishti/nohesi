<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Button from '../../shared/button.svelte';
	import SortButton from '../../shared/sortButton.svelte';
	import ProductsGrid from './productsGrid.svelte';
</script>

<div class="flex flex-col gap-8 container-section">
	<div class="flex flex-col gap-6 self-stretch">
		<h4 class="text-content-primary">Collections</h4>
		<div
			class="flex gap-4 flex-col lg:flex-row justify-start items-start lg:items-center self-stretch"
		>
			<div class="flex flex-1 items-center flex-wrap">
				{#each $_('page.shop.categories') as category}
					<Button
						title={category}
						size="full"
						classes={'px-7 border uppercase border-content-tertiary text-content-primary'}
						font="roboto"
					/>
				{/each}
			</div>
			<SortButton options={$_('page.shop.sortOptions')} />
		</div>
	</div>
	<ProductsGrid />
</div>

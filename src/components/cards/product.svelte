<script lang="ts">
	import OutlinedButton from '../shared/outlinedButton.svelte';

	export let image: string;
	export let price: number;
	export let desc: string;
	export let title: string;
	export let discountedPrice: number = 0;
	export let inStock: boolean = true;
</script>

<div class="flex flex-col bg-top-light-2 rounded-xl overflow-hidden">
	<img src={image} alt="cdn" class="self-stretch bg-black py-4 border border-top-dark-63 border-b-0" />
	<div
		class="flex flex-col p-4 pb-6 self-stretch gap-9.5 justify-between border border-border border-t-0 h-full"
	>
		<div class="flex flex-col gap-4">
			<h5 class="text-content-primary text-ellipsis line-clamp-2">{title}</h5>
			<p class="font-inter text-base text-ellipsis line-clamp-2 text-content-secondary">{desc}</p>
		</div>
		<div class="flex flex-col gap-9.5">
			{#if discountedPrice === 0 && inStock === true}
				<h4 class="text-content-primary">${price}</h4>
			{:else if discountedPrice === 0 && inStock === false}
				<h4 class="text-content-tertiary">${price}</h4>
			{:else}
				<div class="flex flex-wrap gap-3 self-stretch items-end">
					<h6 class="text-content-tertiary">
						${price.toLocaleString('en', {
							useGrouping: false,
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
					</h6>
					<h4 class="text-green">
						${discountedPrice.toLocaleString('en', {
							useGrouping: false,
							minimumFractionDigits: 2,
							maximumFractionDigits: 2
						})}
					</h4>
				</div>
			{/if}
			{#if inStock === true}
				<OutlinedButton
					title={'Buy now'}
					on:click={() => {
						window.open('https://nohesi.shop/');
					}}
					classes={'uppercase border border-content-tertiary py-4 px-7 text-content-primary'}
					size="md"
					font="roboto"
				/>
			{:else}
				<OutlinedButton
					title={'Out of Stock'}
					classes={'uppercase py-4 px-7 text-content-tertiary bg-top-light-10'}
					size="md"
					font="roboto"
					disabled={true}
				/>
			{/if}
		</div>
	</div>
</div>

<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { goto } from '$app/navigation';
	import Product from '../cards/product.svelte';
	import VioleteButton from '../shared/violeteButton.svelte';

	const handleShopButton = () => {
		window.open('https://nohesi.shop/');
	};
</script>

<div class="container-section">
	<div
		class="-z-10 rounded-xl pt-10 pb-55 flex justify-center bg-shop_mobile md:bg-shop bg-cover bg-no-repeat"
	>
		<div class="flex flex-col justify-center items-center gap-8 w-1/2 xs:w-2/5">
			<h2 class="text-green text-center">{$_('page.home.merch.title')}</h2>
			<VioleteButton
				title={$_('page.home.merch.btn')}
				size="md"
				font="roboto"
				classes={'w-max'}
				on:click={handleShopButton}
			/>
		</div>
	</div>
	<div
		class="grid grid-cols-1 md:grid-cols-3 gap-6 w-full xl:w-11/12 mx-auto -mt-41 z-50 max-w-screen-3xl"
	>
		<Product
			image={'/images/product1.png'}
			price={229.99}
			desc={'Nec leo consequat tincidunt nulla scelerisque egestas aliquam malesuada. Pellentesque neque cursus convallis lectus.'}
			title={'Maecenas faucibus viverra'}
		/>
		<Product
			image={'/images/product1.png'}
			price={400.0}
			discountedPrice={229.99}
			desc={'Nec leo consequat tincidunt nulla scelerisque egestas aliquam malesuada. Pellentesque neque cursus convallis lectus.'}
			title={'Maecenas faucibus viverra'}
		/>
		<Product
			image={'/images/product1.png'}
			price={229.99}
			desc={'Nec leo consequat tincidunt nulla scelerisque egestas aliquam malesuada. Pellentesque neque cursus convallis lectus.'}
			title={'Maecenas faucibus viverra'}
		/>
	</div>
</div>

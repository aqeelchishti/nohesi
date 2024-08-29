<script lang="ts">
	import Icon from './../../../shared/Icon.svelte';
	import { shopMenuList } from '$lib/store/shopMenuList';

	import VioleteButton from '../../../shared/violeteButton.svelte';

	import CollectionCard from './collectionCard.svelte';
	import ShopCard from './shopCard.svelte';

	import { onMount } from 'svelte';

	export let shopItemsList;

	let isSkeletonLoading = true;
	let MainLoading: any;

	onMount(async () => {
		MainLoading = (await import('./mainLoading.svelte')).default;
		setTimeout(() => (isSkeletonLoading = false), 5000);
	});

	const handleCollectionsClick = (index: number) => {
		$shopMenuList.map((item: any, i: number) => {
			if (i !== index) {
				item.active = false;
			}
		});
		$shopMenuList[index].active = true;
	};
</script>

<div class="relative flex flex-col gap-16">
	{#if isSkeletonLoading === true}
		<svelte:component this={MainLoading} />
	{:else}
		<div class="grid grid-rows-4 grid-col-2 lg:grid-rows-2 lg:grid-cols-4 gap-6 justify-between">
			<CollectionCard
				title="New Collection Title"
				classes="col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl border border-border-light"
				cardClass="bg-[rgba(221,3,85,1)] before:bg-[url('/images/collection-1-art-1.svg')] after:bg-[url('/images/collection-1-art-2.svg')]"
			/>
			<ShopCard
				className="col-span-2 md:col-span-1 md:lg:row-span-1 justify-between"
				name="Heading 1"
				summary="Personalize your avatar with unique decorations to stand out in the crowd."
				price={12.99}
				avatar="/images/ProfileImage.jpeg"
				username="username1"
				badge="Owner"
				views="500K"
			/>
			<ShopCard
				className="col-span-2 md:col-span-1 md:lg:row-span-1 justify-between"
				name="Heading 1"
				summary="Personalize your avatar with unique decorations to stand out in the crowd."
				price={12.99}
				avatar="/images/ProfileImage.jpeg"
				username="username1"
				badge="Owner"
				views="500K"
			/>
			<ShopCard
				className="col-span-2 lg:col-span-2 lg:row-span-1 justify-between"
				name="Heading 1"
				summary="Personalize your avatar with unique decorations to stand out in the crowd."
				price={12.99}
				avatar="/images/ProfileImage.jpeg"
				username="username1"
				badge="Owner"
				views="500K"
			/>
		</div>
		<div class="flex flex-col justify-between gap-8">
			<h3 class="text-content-primary">Best Sellers</h3>
			<div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-6">
				<div
					class="flex flex-col sm:flex-row justify-between gap-2 p-5 rounded-3xl border border-border-light bg-top-light-10 overflow-hidden"
				>
					<div class="flex flex-col gap-4 w-full sm:w-[55%] justify-between">
						<div class="flex flex-col gap-2">
							<h3 class="text-content-primary">Bundle long title</h3>
							<p class="font-inter font-normal text-sm text-content-secondary tracking-normal">
								Personalize your avatar with unique decorations to stand out in the crowd.
							</p>
							<VioleteButton
								title="Explore"
								classes="!font-semibold !w-max !rounded-sm !py-2 !px-7"
								font="roboto"
							/>
						</div>
						<div
							class="flex flex-row justify-between sm:justify-normal lg:justify-between gap-0 sm:gap-12 lg:gap-0"
						>
							<h5 class="h5-inter title-gradient">$29.99</h5>
							<div class="flex flex-col justify-center">
								<span
									class="flex flex-row gap-[6px] !py-0.5 !pl-1 !pr-2.5 rounded-md bg-content-primary"
								>
									<Icon name="Cube" class="fill-[rgba(8,6,10,1)] size-4 self-center" />
									<p class="font-inter font-medium text-sm text-[rgba(8,6,10,1)] self-center">
										$9,99 with Tier 1
									</p>
								</span>
							</div>
						</div>
					</div>
					<div
						class="relative flex flex-row gap-0 w-full sm:w-[45%] justify-end mr-[-58px] mb-[-50px]"
					>
						<img
							src="/images/collection1.svg"
							class="mt-2.5 mb-[-50px] mx-[-63px] w-[258px] rotate-[-16.5deg]"
							alt="collection1"
						/>
						<img
							src="/images/collection2.svg"
							class="mt-2.5 mb-[-50px] mx-[-63px] w-[258px] rotate-[16.5deg]"
							alt="collection2"
						/>
					</div>
				</div>
				<div
					class="flex flex-col sm:flex-row justify-between gap-2 p-5 rounded-3xl border border-border-light bg-top-light-2 overflow-hidden"
				>
					<div class="flex flex-col gap-4 w-full sm:w-[55%] justify-between">
						<div class="flex flex-col gap-2">
							<h3 class="text-content-primary">Bundle long title</h3>
							<p class="font-inter font-normal text-sm text-content-secondary tracking-normal">
								Personalize your avatar with unique decorations to stand out in the crowd.
							</p>
							<VioleteButton
								title="Explore"
								classes="!font-semibold !w-max !rounded-sm !py-2 !px-7"
								font="roboto"
							/>
						</div>
						<div
							class="flex flex-row justify-between sm:justify-normal lg:justify-between gap-0 sm:gap-12 lg:gap-0"
						>
							<h5 class="h5-inter title-gradient">$29.99</h5>
							<div class="flex flex-col justify-center">
								<span
									class="flex flex-row gap-[6px] !py-0.5 !pl-1 !pr-2.5 rounded-md bg-content-primary"
								>
									<Icon name="Cube" class="fill-[rgba(8,6,10,1)] size-4 self-center" />
									<p class="font-inter font-medium text-sm text-[rgba(8,6,10,1)] self-center">
										$9,99 with Tier 1
									</p>
								</span>
							</div>
						</div>
					</div>
					<div
						class="relative flex flex-row gap-0 w-full sm:w-[45%] justify-end mr-[-58px] mb-[-50px]"
					>
						<img
							src="/images/collection1.svg"
							class="mt-6 mb-[-50px] mx-[-63px] w-[258px]"
							alt="collection1"
						/>
						<img
							src="/images/collection2.svg"
							class="mt-[-28px] mb-[-50px] mx-[-63px] w-[258px]"
							alt="collection2"
						/>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col justify-between gap-8">
			<h3 class="text-content-primary">Categories</h3>
			<div class="grid grid-rows-3 grid-col-1 lg:grid-rows-1 lg:grid-cols-3 gap-6">
				<button
					on:click={() => handleCollectionsClick(3)}
					class="relative flex justify-center w-full rounded-3xl py-16 px-12 border border-border-light items-center bg-[rgba(255,255,255,0.05)] overflow-hidden before:absolute before:content-[''] before:bg-cover before:inset-0 before:bg-no-repeat before:bg-right-top before:bg-[url('/images/categories-button1-gadient1.svg')] after:absolute after:content-[''] after:bg-cover after:inset-0 after:bg-no-repeat after:bg-left-bottom after:bg-[url('/images/categories-button1-gadient2.svg')]"
					><h4 class="text-content-primary">Avatar decorations</h4></button
				>
				<button
					on:click={() => handleCollectionsClick(4)}
					class="relative flex justify-center w-full rounded-3xl py-16 px-12 border border-border-light items-center bg-[rgba(255,255,255,0.05)] overflow-hidden before:absolute before:content-[''] before:bg-cover before:inset-0 before:bg-no-repeat before:bg-right-top before:bg-[url('/images/categories-button2-gadient1.svg')] after:absolute after:content-[''] after:bg-cover after:inset-0 after:bg-no-repeat after:bg-left-bottom after:bg-[url('/images/categories-button2-gadient2.svg')]"
					><h4 class="text-content-primary">Driver tags</h4></button
				>
				<button
					on:click={() => handleCollectionsClick(5)}
					class="relative flex justify-center w-full rounded-3xl py-16 px-12 border border-border-light items-center bg-[rgba(255,255,255,0.05)] overflow-hidden before:absolute before:content-[''] before:bg-cover before:inset-0 before:bg-no-repeat before:bg-right-top before:bg-[url('/images/categories-button3-gadient1.svg')] after:absolute after:content-[''] after:bg-cover after:inset-0 after:bg-no-repeat after:bg-left-bottom after:bg-[url('/images/categories-button3-gadient2.svg')]"
					><h4 class="text-content-primary">Badges</h4></button
				>
			</div>
		</div>
	{/if}
</div>

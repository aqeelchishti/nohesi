<script lang="ts">
	import { SkeletonImage, SkeletonAvatar } from 'skeleton-elements/svelte';
	import ShopCardLoading from './ShopCardLoading.svelte';
</script>

<div class="grid grid-rows-4 grid-col-2 lg:grid-rows-2 lg:grid-cols-4 gap-6 justify-between">
	<div
		class="relative flex justify-center overflow-hidden h-full col-span-2 row-span-2 lg:col-span-2 lg:row-span-2 rounded-3xl border border-border-light"
	>
		<SkeletonImage
			height={989}
			effect="wave"
			borderRadius="24px"
			color="#2e3235"
			showIcon={true}
			iconColor=""
		/>
	</div>

	<ShopCardLoading classes="col-span-2 md:col-span-1 md:lg:row-span-1 justify-between" />
	<ShopCardLoading classes="col-span-2 md:col-span-1 md:lg:row-span-1 justify-between" />
	<ShopCardLoading classes="col-span-2 lg:col-span-2 lg:row-span-1 justify-between" />
</div>
<div class="flex flex-col justify-between gap-8">
	<h3 class="text-content-primary">Best Sellers</h3>
	<div class="grid grid-rows-2 grid-cols-1 lg:grid-rows-1 lg:grid-cols-2 gap-6">
		<div
			class="flex flex-col sm:flex-row justify-between gap-2 p-5 rounded-3xl border border-border-light overflow-hidden"
		>
			<div class="flex flex-col gap-4 w-full sm:w-[55%] justify-between">
				<div class="flex flex-col gap-2">
					<div class="flex flex-col gap-1">
						<SkeletonImage
							width={180}
							height={40}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							width={260}
							height={40}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex flex-col gap-1">
						<SkeletonImage
							width={320}
							height={20}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							width={200}
							height={20}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>

					<SkeletonImage
						width={134}
						height={36}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div
					class="flex flex-row justify-between sm:justify-normal lg:justify-between gap-0 sm:gap-12 lg:gap-0"
				>
					<SkeletonImage
						width={85}
						height={32}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<div class="flex flex-col justify-center">
						<SkeletonImage
							width={138}
							height={24}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
				</div>
			</div>
			<div class="relative flex flex-row gap-0 w-full sm:w-[45%] justify-end mr-[-58px] mb-[-50px]">
				<div class="mt-5 mb-[-50px] mx-[-63px] w-[228px] rotate-[-16.5deg]">
					<SkeletonImage
						width={228}
						height={324}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>

				<div class="mt-5 mb-[-50px] mx-[-63px] w-[228px] rotate-[16.5deg]">
					<SkeletonImage
						width={228}
						height={324}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			</div>
		</div>
		<div
			class="flex flex-col sm:flex-row justify-between gap-2 p-5 rounded-3xl border border-border-light overflow-hidden"
		>
			<div class="flex flex-col gap-4 w-full sm:w-[55%] justify-between">
				<div class="flex flex-col gap-2">
					<div class="flex flex-col gap-1">
						<SkeletonImage
							width={180}
							height={40}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							width={260}
							height={40}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex flex-col gap-1">
						<SkeletonImage
							width={320}
							height={20}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							width={200}
							height={20}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>

					<SkeletonImage
						width={134}
						height={36}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div
					class="flex flex-row justify-between sm:justify-normal lg:justify-between gap-0 sm:gap-12 lg:gap-0"
				>
					<SkeletonImage
						width={85}
						height={32}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<div class="flex flex-col justify-center">
						<SkeletonImage
							width={138}
							height={24}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
				</div>
			</div>
			<div class="relative flex flex-row gap-0 w-full sm:w-[45%] justify-end mr-[-58px] mb-[-50px]">
				<div class="mt-6 mb-[-50px] mx-[-63px] w-[228px]">
					<SkeletonImage
						width={228}
						height={324}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>

				<div class="mb-[-50px] mx-[-63px] w-[228px]">
					<SkeletonImage
						width={228}
						height={324}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="flex flex-col justify-between gap-8">
	<h3 class="text-content-primary">Categories</h3>
	<div class="grid grid-rows-3 grid-col-1 lg:grid-rows-1 lg:grid-cols-3 gap-6">
		<div
			class="relative flex justify-center w-full rounded-3xl py-16 px-12 border border-border-light items-center overflow-hidden"
		>
			<SkeletonImage
				width={228}
				height={40}
				effect="wave"
				borderRadius="4px"
				color="#2e3235"
				showIcon={false}
				iconColor=""
			/>
		</div>
		<div
			class="relative flex justify-center w-full rounded-3xl py-16 px-12 border border-border-light items-center overflow-hidden"
		>
			<SkeletonImage
				width={228}
				height={40}
				effect="wave"
				borderRadius="4px"
				color="#2e3235"
				showIcon={false}
				iconColor=""
			/>
		</div>
		<div
			class="relative flex justify-center w-full rounded-3xl py-16 px-12 border border-border-light items-center overflow-hidden"
		>
			<SkeletonImage
				width={228}
				height={40}
				effect="wave"
				borderRadius="4px"
				color="#2e3235"
				showIcon={false}
				iconColor=""
			/>
		</div>
	</div>
</div>

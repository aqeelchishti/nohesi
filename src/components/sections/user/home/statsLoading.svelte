<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { SkeletonImage } from 'skeleton-elements/svelte';

	let screenWidth = 0;
	let isLessThan1426 = false;
	let isLessThan1024 = false;
	let isLessThan1200 = false;
	let isLessThan1400 = false;

	$: if (screenWidth < 1426) {
		isLessThan1426 = true;
	} else {
		isLessThan1426 = false;
	}

	$: if (screenWidth < 1400) {
		isLessThan1400 = true;
	} else {
		isLessThan1400 = false;
	}

	$: if (screenWidth < 1200) {
		isLessThan1200 = true;
	} else {
		isLessThan1200 = false;
	}

	$: if (screenWidth < 1024) {
		isLessThan1024 = true;
	} else {
		isLessThan1024 = false;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="flex flex-col gap-10 py-2">
	<h3 class="h3-inter text-content-primary">{$_('page.user.home.title')}</h3>

	<div class="relative flex flex-col gap-7">
		<div class="relative grid lg:grid-cols-2 lg:grid-rows-1 gap-7 self-stretch z-10">
			<div
				class="lg:cols-span-1 flex flex-col gap-3 w-full h-full items-center align-middle border border-border"
			>
				<SkeletonImage
					effect="wave"
					borderRadius="16px"
					color="#2e3235"
					showIcon={true}
					iconColor=""
				/>
			</div>
			<div
				class="lg:cols-span-1 flex flex-col p-4 justify-between gap-10 xl:gap-0 rounded-xl border border-top-light-17"
			>
				<div class="flex flex-col gap-3">
					<div class="flex flex-row gap-6">
						<SkeletonImage
							height={85}
							width={400}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex flex-row">
						<SkeletonImage
							height={24}
							width={320}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
				</div>

				<div class="flex flex-col">
					<div class="flex flex-col gap-4">
						<SkeletonImage
							height={24}
							width={260}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<div class="relative flex flex-row flex-wrap md:flex-nowrap justify-between">
							<SkeletonImage
								height={52}
								width={340}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
							<SkeletonImage
								height={52}
								width={162}
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

		<div
			class="relative grid {isLessThan1426 === true
				? 'lg:grid-cols-2 lg:grid-rows-2'
				: 'lg:grid-cols-4 lg:grid-rows-1'} gap-6 rounded-[28px] p-3 border border-border self-stretch"
		>
			<div class="flex flex-col gap-3 p-4 border border-border rounded-xl">
				<div class="flex flex-row justify-between items-center">
					<SkeletonImage
						height={28}
						width={185}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={32}
						width={75}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<SkeletonImage
					height={60}
					width={200}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
			<div class="flex flex-col gap-3 p-4 border border-border rounded-xl">
				<div class="flex flex-row justify-between items-center">
					<SkeletonImage
						height={28}
						width={185}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={32}
						width={75}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<SkeletonImage
					height={60}
					width={200}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
			<div class="flex flex-col gap-3 p-4 border border-border rounded-xl">
				<div class="flex flex-row justify-between items-center">
					<SkeletonImage
						height={28}
						width={185}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={32}
						width={75}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<SkeletonImage
					height={60}
					width={200}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
			<div class="flex flex-col gap-3 p-4 border border-border rounded-xl">
				<div class="flex flex-row justify-between items-center">
					<SkeletonImage
						height={28}
						width={185}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={32}
						width={75}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<SkeletonImage
					height={60}
					width={200}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
		</div>

		<div class="grid lg:grid-cols-3 lg:grid-rows-2 gap-6 self-stretch">
			<div
				class="flex flex-col gap-4 p-4 h-full w-full border border-border rounded-xl self-stretch"
			>
				<div class="flex flex-row justify-between items-center">
					<SkeletonImage
						height={28}
						width={215}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={32}
						width={75}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<SkeletonImage
					height={60}
					width={200}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
			{#if isLessThan1024 === true}
				<div class="flex flex-col gap-3 p-4 rounded-xl border border-border self-stretch">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={250}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			{/if}
			<div class="lg:col-span-2 lg:row-span-2 border border-border rounded-xl self-stretch">
				<div class="flex flex-col gap-8 p-4 rounded-xl h-full w-full">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex flex-col md:flex-row justify-between content-center gap-3 items-center">
						<div class="flex flex-col gap-2">
							<SkeletonImage
								height={60}
								width={225}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
							<SkeletonImage
								height={60}
								width={325}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
						<SkeletonImage
							height={320}
							width={isLessThan1200 ? 370 : 430}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={true}
							iconColor=""
						/>
					</div>
				</div>
			</div>
			{#if !isLessThan1024}
				<div class="flex flex-col gap-3 p-4 rounded-xl border border-border self-stretch">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={250}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			{/if}
		</div>
		<div
			class="grid {isLessThan1400 === true
				? 'lg:grid-cols-2 lg:grid-rows-3'
				: 'lg:grid-cols-3 lg:grid-rows-2'} gap-6 self-stretch"
		>
			<div
				class="{isLessThan1400 === true
					? 'lg:col-span-1 lg:row-span-3 lg:grid-rows-3'
					: 'lg:col-span-1 lg:row-span-2 lg:grid-rows-2'} lg:grid flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
			>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				{#if isLessThan1400 === true}
					<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
						<div class="flex flex-row justify-between items-center">
							<SkeletonImage
								height={28}
								width={215}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
							<SkeletonImage
								height={32}
								width={75}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
						<SkeletonImage
							height={60}
							width={200}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
				{/if}
			</div>
			<div
				class="{isLessThan1400 === true
					? 'lg:col-span-1 lg:row-span-3 lg:grid-rows-3'
					: 'lg:col-span-1 lg:row-span-2 lg:grid-rows-2'} lg:grid flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
			>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				{#if isLessThan1400 === true}
					<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
						<div class="flex flex-row justify-between items-center">
							<SkeletonImage
								height={28}
								width={215}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
							<SkeletonImage
								height={32}
								width={75}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
						<SkeletonImage
							height={60}
							width={200}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
				{/if}
			</div>
			{#if !isLessThan1400}
				<div
					class="{isLessThan1400
						? 'lg:col-span-1 lg:row-span-3 lg:grid-rows-3'
						: 'lg:col-span-1 lg:row-span-2 lg:grid-rows-2'} lg:grid flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
				>
					<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
						<div class="flex flex-row justify-between items-center">
							<SkeletonImage
								height={28}
								width={215}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
							<SkeletonImage
								height={32}
								width={75}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
						<SkeletonImage
							height={60}
							width={200}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
						<div class="flex flex-row justify-between items-center">
							<SkeletonImage
								height={28}
								width={215}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
							<SkeletonImage
								height={32}
								width={75}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
						<SkeletonImage
							height={60}
							width={200}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
				</div>
			{/if}
		</div>
		<div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-6 self-stretch">
			<div
				class="lg:col-span-1 lg:row-span-2 lg:grid lg:grid-rows-2 flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
			>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			</div>
			<div
				class="lg:col-span-1 lg:row-span-2 lg:grid lg:grid-rows-2 flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
			>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="lg:row-span-1 flex flex-col gap-3 p-4 border border-border rounded-xl">
					<div class="flex flex-row justify-between items-center">
						<SkeletonImage
							height={28}
							width={215}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={75}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<SkeletonImage
						height={60}
						width={200}
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

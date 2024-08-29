<script lang="ts">
	import { SkeletonImage, SkeletonAvatar } from 'skeleton-elements/svelte';
	import { _ } from 'svelte-i18n';

	let screenWidth = 0;
	let isLessThan398 = false;
	let isLessThan490 = false;

	$: if (screenWidth < 398) {
		isLessThan398 = true;
	} else {
		isLessThan398 = false;
	}

	$: if (screenWidth < 490) {
		isLessThan490 = true;
	} else {
		isLessThan490 = false;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="pt-10 flex flex-col gap-12">
	<div class="flex flex-col xs:flex-row gap-7 xs:items-center">
		<h3 class="h3-inter flex-1 text-content-primary">{$_('page.user.friends.title')}</h3>
		<SkeletonImage
			height={36}
			width={215}
			effect="wave"
			borderRadius="4px"
			color="#2e3235"
			showIcon={false}
			iconColor=""
		/>
	</div>
	<div class="flex flex-col gap-5 self-stretch">
		<div class="flex flex-row justify-between gap-3 {isLessThan398 === true ? 'flex-wrap' : ''}">
			<div class="flex flex-row gap-4">
				<h4 class="h4-inter text-content-primary">Requests</h4>
				<SkeletonImage
					height={32}
					width={36}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
			<SkeletonImage
				height={36}
				width={146}
				effect="wave"
				borderRadius="4px"
				color="#2e3235"
				showIcon={false}
				iconColor=""
			/>
		</div>
		<div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-2 self-stretch">
			{#each Array(4) as _, i}
				<div
					class="flex p-4 px-5 flex-col {isLessThan490 === true
						? 'flex-wrap'
						: ''} items-baseline xs:flex-row xs:items-center gap-5 self-stretch rounded-xl border border-border"
				>
					<div class="flex justify-between items-center w-full xs:w-auto self-start">
						<div
							class="h-12 w-12 xs:h-18 xs:w-18 aspect-square flex object-cover border-4 rounded-full"
						>
							<SkeletonAvatar
								size={72}
								effect="wave"
								borderRadius="9999px"
								color="#2e3235"
								showIcon={true}
								iconColor=""
							/>
						</div>
						<div class="block xs:hidden">
							<SkeletonImage
								height={18}
								width={38}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
					</div>
					<div class="flex flex-1 flex-col gap-3">
						<div class="flex items-baseline xs:items-center justify-between self-stretch">
							<div class="flex xs:items-center gap-2">
								<SkeletonImage
									height={26}
									width={56}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
								<div class="flex items-center gap-2">
									<SkeletonImage
										height={26}
										width={142}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
									<SkeletonImage
										height={24}
										width={32}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
								</div>
							</div>
							<div class="hidden xs:block">
								<SkeletonImage
									height={18}
									width={38}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
							</div>
						</div>
						<div
							class="flex flex-col sm:flex-row items-baseline sm:items-center justify-between flex-wrap"
						>
							<div class="flex flex-col gap-2 text-sm font-inter font-medium">
								<SkeletonImage
									height={22}
									width={200}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
								<div class="flex flex-row gap-3 {isLessThan398 === true ? 'flex-wrap' : ''}">
									<SkeletonImage
										height={36}
										width={130}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
									<SkeletonImage
										height={36}
										width={198}
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
			{/each}
		</div>
	</div>
	<div class="flex flex-col gap-5 self-stretch">
		<h4 class="h4-inter text-content-primary">All friends</h4>
		<div class="flex flex-col gap-2 self-stretch">
			{#each Array(7) as _, i}
				<div
					class="flex p-4 px-5 flex-col items-baseline xs:flex-row xs:items-center gap-5 self-stretch rounded-xl border border-border"
				>
					<div class="flex justify-between items-center w-full xs:w-auto">
						<div class="h-12 xs:h-18 aspect-square block object-cover">
							<SkeletonAvatar
								size={72}
								effect="wave"
								borderRadius="9999px"
								color="#2e3235"
								showIcon={true}
								iconColor=""
							/>
						</div>
						<button class="block xs:hidden">
							<SkeletonImage
								height={18}
								width={38}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</button>
					</div>
					<div class="flex flex-1 flex-col gap-2">
						<div class="flex items-baseline xs:items-center justify-between self-stretch">
							<div class="flex xs:items-center gap-2">
								<SkeletonImage
									height={26}
									width={56}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
								<div class="flex items-center gap-2">
									<SkeletonImage
										height={26}
										width={142}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
									<SkeletonImage
										height={24}
										width={32}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
								</div>
							</div>
							<button class="hidden xs:block">
								<SkeletonImage
									height={18}
									width={38}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
							</button>
						</div>
						<div
							class="flex gap-2 flex-col sm:flex-row items-baseline sm:items-center justify-between flex-wrap"
						>
							<div class="flex gap-1 items-center">
								<SkeletonImage
									height={22}
									width={22}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={true}
									iconColor=""
								/>
								<SkeletonImage
									height={22}
									width={90}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
								<SkeletonImage
									height={22}
									width={90}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
								<SkeletonImage
									height={22}
									width={45}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
							</div>
							<SkeletonImage
								height={28}
								width={196}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

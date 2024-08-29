<script lang="ts">
	import { SkeletonImage } from 'skeleton-elements/svelte';
	import { _ } from 'svelte-i18n';

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div class="flex flex-col gap-7">
	{#if width > 950}
		<div class="flex flex-row gap-2 2xl:flex-row justify-between 2xl:items-center">
			<div class="flex gap-1 items-center 2xl:justify-start">
				<SkeletonImage
					height={36}
					width={222}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
				<SkeletonImage
					height={36}
					width={132}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
				<SkeletonImage
					height={36}
					width={152}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>

			<div class="flex gap-1 items-center justify-end">
				<SkeletonImage
					height={36}
					width={300}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
		</div>
	{:else}
		<div class="flex flex-col gap-2 sm:flex-row justify-between items-start relative">
			<div
				class="flex gap-1 gap-y-2 items-center justify-between w-full md:w-max flex-wrap max-[480px]:flex-col max-[480px]:items-start"
			>
				<div class="flex gap-1 items-center justify-end">
					<SkeletonImage
						height={36}
						width={300}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<SkeletonImage
					height={36}
					width={222}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
				<div class="flex flex-wrap gap-2">
					<SkeletonImage
						height={36}
						width={132}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={36}
						width={152}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			</div>
		</div>
	{/if}

	{#if width >= 1440}
		<div class="flex flex-col gap-2">
			<div
				class="grid grid-cols-12 gap-x-3 text-base text-content-secondary font-inter w-full p-3 pl-6"
			>
				<div class="col-span-3">
					<SkeletonImage
						height={30}
						width={85}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="col-span-2 text-center">
					<SkeletonImage
						height={30}
						width={125}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div>
					<SkeletonImage
						height={30}
						width={85}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div>
					<SkeletonImage
						height={30}
						width={85}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div>
					<SkeletonImage
						height={30}
						width={85}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="col-span-2">
					<SkeletonImage
						height={30}
						width={85}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="text-center">
					<SkeletonImage
						height={30}
						width={85}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="flex justify-end items-start gap-2">
					<SkeletonImage
						height={30}
						width={30}
						effect="wave"
						borderRadius="1000px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={30}
						width={30}
						effect="wave"
						borderRadius="1000px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			</div>
			{#each Array(6) as _, i}
				<div
					class="grid grid-cols-12 gap-x-3 text-base text-content-secondary font-inter w-full rounded-lg p-3 pl-6 bg-top-light-2 border-l-8 border-[#2e3235] hover:bg-top-light-10 transition-colors duration-1000"
				>
					<div class="flex items-center col-span-3">
						<SkeletonImage
							height={28}
							width={85}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="col-span-2 text-center -z-10">
						<SkeletonImage
							height={28}
							width={85}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex gap-2 items-center -z-10">
						<SkeletonImage
							height={28}
							width={32}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={true}
							iconColor=""
						/>
						<SkeletonImage
							height={28}
							width={72}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex gap-2 items-center -z-10">
						<SkeletonImage
							height={28}
							width={32}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={true}
							iconColor=""
						/>
						<SkeletonImage
							height={28}
							width={72}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex gap-2 items-center -z-10">
						<SkeletonImage
							height={28}
							width={32}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={true}
							iconColor=""
						/>
						<SkeletonImage
							height={28}
							width={72}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="col-span-2 flex gap-2 items-center -z-10">
						<SkeletonImage
							height={28}
							width={32}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={true}
							iconColor=""
						/>
						<SkeletonImage
							height={28}
							width={72}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="flex items-center justify-center -z-10">
						<SkeletonImage
							height={28}
							width={36}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
					<div class="justify-self-end self-center flex gap-2 items-center h-[120%]">
						<div class="relative h-full flex items-center">
							<SkeletonImage
								height={28}
								width={28}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
						<div class="relative h-full flex items-center">
							<SkeletonImage
								height={28}
								width={28}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={true}
								iconColor=""
							/>
						</div>
					</div>
				</div>
			{/each}
		</div>
	{:else}
		<div class="flex justify-end items-start gap-2">
			<SkeletonImage
				height={30}
				width={30}
				effect="wave"
				borderRadius="1000px"
				color="#2e3235"
				showIcon={false}
				iconColor=""
			/>
			<SkeletonImage
				height={30}
				width={30}
				effect="wave"
				borderRadius="1000px"
				color="#2e3235"
				showIcon={false}
				iconColor=""
			/>
		</div>
		<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each Array(6) as _, i}
				<div class="flex flex-col gap-3 pt-4 rounded-xl border border-border cursor-pointer">
					<div class="flex justify-between items-center mx-4">
						<SkeletonImage
							height={36}
							width={72}
							effect="wave"
							borderRadius="1000px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>

						<div class="flex items-center gap-2">
							<div class="relative h-full flex items-center">
								<SkeletonImage
									height={34}
									width={34}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
							</div>
							<SkeletonImage
								height={34}
								width={34}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>
						</div>
					</div>

					<div
						class="flex flex-col rounded-b-xl h-full px-4 pt-2 justify-between items-start gap-4"
					>
						<div class="flex flex-col gap-4 self-stretch">
							<SkeletonImage
								height={28}
								width={36}
								effect="wave"
								borderRadius="4px"
								color="#2e3235"
								showIcon={false}
								iconColor=""
							/>

							<h5 class="self-stretch w-full">
								<SkeletonImage
									height={34}
									width={325}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
							</h5>
							<p class="font-inter text-content-secondary font-medium text-base">
								<SkeletonImage
									height={30}
									width={125}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={false}
									iconColor=""
								/>
							</p>
						</div>

						<div class="flex flex-col gap-2 items-start">
							<div class="flex flex-wrap gap-6">
								<div class="flex items-center self-stretch gap-2">
									<SkeletonImage
										height={24}
										width={32}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={true}
										iconColor=""
									/>
									<SkeletonImage
										height={24}
										width={45}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
								</div>
								<div class="flex items-center self-stretch gap-2">
									<SkeletonImage
										height={24}
										width={32}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={true}
										iconColor=""
									/>
									<SkeletonImage
										height={24}
										width={45}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
								</div>
								<div class="flex items-center self-stretch gap-2">
									<SkeletonImage
										height={24}
										width={32}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={true}
										iconColor=""
									/>
									<SkeletonImage
										height={24}
										width={45}
										effect="wave"
										borderRadius="4px"
										color="#2e3235"
										showIcon={false}
										iconColor=""
									/>
								</div>
							</div>
							<div class="flex items-center self-stretch gap-2">
								<SkeletonImage
									height={24}
									width={32}
									effect="wave"
									borderRadius="4px"
									color="#2e3235"
									showIcon={true}
									iconColor=""
								/>
								<SkeletonImage
									height={24}
									width={45}
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
			{/each}
		</div>
	{/if}
</div>

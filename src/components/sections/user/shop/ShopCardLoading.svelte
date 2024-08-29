<script lang="ts">
	import { SkeletonImage, SkeletonAvatar } from 'skeleton-elements/svelte';

	export let classes: string;
</script>

<div class="{classes} rounded-3xl bg-top-light-2 border border-border-light overflow-hidden">
	<div class="flex flex-col">
		<div class="flex flex-row-reverse pt-3 px-3">
			<span class="flex-end rounded-md"
				><SkeletonImage
					height={26}
					width={54}
					effect="wave"
					borderRadius="8px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></span
			>
		</div>
		<div
			class="flex flex-col xs:flex-row sm:flex-col md:flex-row lg:flex-col xl:flex-row justify-center gap-5 xs:gap-0 sm:gap-5 md:gap-0 lg:gap-5 xl:gap-0 pl-6 pr-8 2xl:px-11 pt-6 pb-[60px]"
		>
			<div class="flex flex-row z-40">
				<SkeletonAvatar
					size={44}
					effect="wave"
					borderRadius="9999px"
					color="#2e3235"
					showIcon={true}
					iconColor=""
				/>
			</div>
			<div
				class="flex flex-row justify-between gap-4 xs:max-sm:gap-8 rounded-sm items-center py-2.5 pl-8 pr-[12px] z-30 -ml-[22px]"
			>
				<div class="flex flex-row gap-1 justify-center items-center">
					<SkeletonImage
						height={22}
						width={22}
						effect="wave"
						borderRadius="8px"
						color="#2e3235"
						showIcon={true}
						iconColor=""
					/>
					<SkeletonImage
						height={20}
						width={99}
						effect="wave"
						borderRadius="8px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="flex flex-row justify-center items-center">
					<span class="flex gap-0.5 py-0.5 px-[3px] rounded-[3px] justify-center items-center">
						<SkeletonImage
							height={16}
							width={48}
							effect="wave"
							borderRadius="8px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</span>
				</div>
			</div>
			<div class="flex flex-row justify-start xs:justify-center sm:justify-start items-center px-3">
				<span class="flex justify-center items-center">
					<SkeletonImage
						height={20}
						width={53}
						effect="wave"
						borderRadius="8px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</span>
			</div>
		</div>
		<div class="flex flex-col gap-5 p-5">
			<div class="flex flex-row justify-between">
				<SkeletonImage
					height={32}
					width={80}
					effect="wave"
					borderRadius="8px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
				<div class="flex flex-col justify-end">
					<SkeletonImage
						height={24}
						width={138}
						effect="wave"
						borderRadius="8px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
			</div>
			<div class="flex flex-col gap-1 justify-between">
				<SkeletonImage
					height={24}
					width={112}
					effect="wave"
					borderRadius="8px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>

				<SkeletonImage
					height={20}
					width={402}
					effect="wave"
					borderRadius="8px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
				<SkeletonImage
					height={20}
					width={220}
					effect="wave"
					borderRadius="8px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
			<div class="flex flex-row gap-2 justify-between">
				<SkeletonImage
					height={36}
					width={360}
					effect="wave"
					borderRadius="8px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
				<SkeletonImage
					height={36}
					width={36}
					effect="wave"
					borderRadius="8px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
		</div>
	</div>
</div>

<script lang="ts">
	import { SkeletonImage, SkeletonAvatar } from 'skeleton-elements/svelte';

	let screenWidth = 0;
	let isLessThan424 = false;
	let isLessThan388 = false;
	let isLessThan768 = false;

	$: if (screenWidth < 768) {
		isLessThan768 = true;
	} else {
		isLessThan768 = false;
	}

	$: if (screenWidth < 424) {
		isLessThan424 = true;
	} else {
		isLessThan424 = false;
	}

	$: if (screenWidth < 388) {
		isLessThan388 = true;
	} else {
		isLessThan388 = false;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div
	class="flex flex-col {isLessThan388 === true ? 'h-[600px]' : 'h-[556px]'} md:h-64 overflow-hidden rounded-xl border border-border bg-top-light-2 cursor-default before:absolute before:content-[''] before:inset-0 before:bg-[linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.54))] {isLessThan388 === true ? 'before:h-[600px]' : 'before:h-[556px]'} before:md:h-64 before:mt-10 before:mx-2"
>
	<img
		src="/images/user-profile-cover.png"
		alt="cdn"
		class="object-cover {isLessThan388 === true ? 'h-[600px]' : 'h-[556px]'} md:h-64 w-full"
	/>
	<div
		class="absolute flex flex-col left-0 right-0 justify-stretch md:justify-normal gap-8 md:gap-2 {isLessThan388 === true ? 'h-[600px]' : 'h-[556px]'} md:h-64 overflow-hidden mx-2 px-3 pt-3 pb-6"
	>
		<div
			class="relative flex {isLessThan424
				? 'flex-row justify-end'
				: 'flex-row-reverse justify-start'} flex-wrap md:flex-nowrap gap-2 md:gap-5"
		>
			<div class="flex flex-row gap-2">
				<SkeletonImage
					height={36}
					width={126}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>

			<div class="flex items-center ml-2">
				<SkeletonImage
					height={36}
					width={267}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/>
			</div>
		</div>

		<div class="relative flex flex-col md:flex-row gap-8 pl-2 md:pl-8">
			<div class="group relative w-max cursor-default mt-4 justify-center">
				<SkeletonAvatar
					size={156}
					effect="wave"
					borderRadius="9999px"
					color="#2e3235"
					showIcon={true}
					iconColor=""
				/>
			</div>

			<div class="relative flex flex-col gap-3">
				<div class="flex flex-row gap-2 items-center flex-wrap justify-start self-stretch">
					<SkeletonImage
						height={32}
						width={75}
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
					<SkeletonImage
						height={32}
						width={272}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="flex flex-row gap-3 flex-wrap items-center justify-start self-stretch">
					<SkeletonImage
						height={40}
						width={160}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={40}
						width={160}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="flex flex-row gap-2 flex-wrap items-center justify-start self-stretch">
					<SkeletonImage
						height={26}
						width={150}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
					<SkeletonImage
						height={26}
						width={150}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</div>
				<div class="flex flex-row gap-2 items-center justify-start self-stretch">
					<SkeletonImage
						height={36}
						width={138}
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

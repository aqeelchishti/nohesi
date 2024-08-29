<script lang="ts">
	import { SkeletonImage, SkeletonAvatar } from 'skeleton-elements/svelte';

	import { _ } from 'svelte-i18n';
	/*
		let screenWidth = 0;
		let isLessThan400 = false;
		
		$: if (screenWidth <= 400) {
			isLessThan400 = true;
		} else {
			isLessThan400 = false;
		}
	*/
</script>

<!--<svelte:window bind:innerWidth={screenWidth} />-->

<div class="overflow-x-scroll scroll-smooth overscroll-x-contain flex flex-nowrap">
	<table class="w-full overflow-x-scroll scroll-smooth border-spacing-y-3 border-separate">
		<tr class="w-full flex flex-row justify-between">
			<td class="w-[92px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[340px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[106px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[85px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[170px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[110px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[85px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[85px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
			<td class="w-[85px] pb-0 px-3"
				><SkeletonImage
					height={34}
					width={85}
					effect="wave"
					borderRadius="4px"
					color="#2e3235"
					showIcon={false}
					iconColor=""
				/></td
			>
		</tr>

		{#each Array(8) as _, i}
			<tr class="p-3 bg-top-light-2 w-full whitespace-nowrap flex overflow-x-auto">
				<td class="flex items-center p-3 border border-border rounded-l-xl border-r-0">
					<SkeletonImage
						height={34}
						width={75}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
				<td class="p-3 pr-12 border border-border border-x-0">
					<div class="flex items-center gap-3 w-[304px]">
						<SkeletonAvatar
							size={32}
							effect="wave"
							borderRadius="1000px"
							color="#2e3235"
							showIcon={true}
							iconColor=""
						/>
						<SkeletonImage
							height={32}
							width={304}
							effect="wave"
							borderRadius="4px"
							color="#2e3235"
							showIcon={false}
							iconColor=""
						/>
					</div>
				</td>
				<td class=" p-3 border border-border border-x-0">
					<SkeletonImage
						height={32}
						width={158}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
				<td class=" p-3 border border-border border-x-0">
					<SkeletonImage
						height={32}
						width={158}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
				<td class=" p-3 border border-border border-x-0 capitalize">
					<SkeletonImage
						height={32}
						width={158}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
				<td class=" p-3 border border-border border-x-0">
					<SkeletonImage
						height={32}
						width={158}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
				<td class="p-3 border border-border border-x-0">
					<SkeletonImage
						height={32}
						width={158}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
				<td class=" p-3 border border-border border-x-0">
					<SkeletonImage
						height={32}
						width={158}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
				<td class=" p-3 border border-border rounded-r-xl border-l-0">
					<SkeletonImage
						height={32}
						width={158}
						effect="wave"
						borderRadius="4px"
						color="#2e3235"
						showIcon={false}
						iconColor=""
					/>
				</td>
			</tr>
		{/each}
	</table>
</div>

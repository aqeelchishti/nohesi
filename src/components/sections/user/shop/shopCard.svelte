<script lang="ts">
	import VioleteButton from '../../../shared/violeteButton.svelte';
	import Icon from '../../../shared/Icon.svelte';

	export let className: string,
		name: string,
		price: number,
		summary: string,
		avatar: string,
		username: string,
		badge: string,
		views: string;
</script>

<div
	class="flex flex-col rounded-3xl bg-top-light-2 border border-border-light overflow-hidden {className ||
		''}"
>
	<div class="flex flex-row-reverse pt-3 px-3">
		<span
			class="flex-end rounded-md bg-primary-violete text-content-primary py-0 px-2 font-inter font-medium uppercase text-[17px] leading-2"
			>New</span
		>
	</div>
	<div
		class="flex flex-col xs:flex-row sm:flex-col md:flex-row lg:flex-col xl:flex-row justify-center gap-5 xs:gap-0 sm:gap-5 md:gap-0 lg:gap-5 xl:gap-0 pl-6 pr-8 2xl:px-11 pt-6 pb-[60px]"
	>
		<div class="flex flex-row z-40">
			<img src={avatar} class="rounded-full size-11 object-cover" alt="profile-avatar" />
		</div>
		<div
			class="flex flex-row justify-between gap-4 xs:max-sm:gap-8 rounded-sm items-center bg-[linear-gradient(90deg,rgba(255,214,67,0),rgba(255,214,67,0.17))] skew-x-[-16deg] py-2.5 pl-8 pr-[12px] z-30 -ml-[22px]"
		>
			<div class="flex flex-row gap-1 justify-center items-center skew-x-[16deg]">
				<Icon name="GameController" class="fill-content-primary size-[22px]" />
				<span
					class="font-roboto slnt-10 font-semibold text-md text-primary-violete-light uppercase -tracking-wider"
					>{username}</span
				>
			</div>
			<div class="flex flex-row justify-center items-center skew-x-[16deg]">
				<span
					class="flex gap-0.5 py-0.5 px-[3px] rounded-[3px] -tracking-[0.015em] bg-yellow justify-center items-center"
				>
					<Icon name="Crown" class="fill-[rgba(8,6,10,1)] size-[11px] self-center" />
					<p class="font-inter font-medium text-xxs text-[rgba(8,6,10,1)]">{badge}</p>
				</span>
			</div>
		</div>
		<div
			class="flex flex-row justify-start xs:justify-center sm:justify-start items-center bg-top-dark-83 skew-x-[-16deg] px-3"
		>
			<span
				class="flex justify-center items-center skew-x-[16deg] font-roboto slnt-10 font-semibold text-md uppercase -tracking-wide text-content-primary"
			>
				#{views}
			</span>
		</div>
	</div>
	<div class="flex flex-col gap-5 bg-top-light-10 p-5">
		<div class="flex flex-row justify-between">
			<h5 class="h5-inter title-gradient">${price}</h5>
			<div class="flex flex-col justify-end">
				<span class="flex flex-row gap-[6px] !py-0.5 !pl-1 !pr-2.5 rounded-md bg-content-primary">
					<Icon name="Cube" class="fill-[rgba(8,6,10,1)] size-4 self-center" />
					<p class="font-inter font-medium text-sm text-[rgba(8,6,10,1)] self-center">
						$9,99 with Tier 1
					</p>
				</span>
			</div>
		</div>
		<div class="flex flex-col gap-1 justify-between">
			<h6 class="h6-inter !leading-2 text-content-primary tracking-wide">{name}</h6>
			<p class="font-inter font-normal text-sm text-content-secondary tracking-normal">
				{summary}
			</p>
		</div>
		<div class="flex flex-row gap-2 justify-between">
			<VioleteButton
				title="Purchase"
				classes="!font-semibold !w-full !rounded-sm !py-2 !px-7"
				font="roboto"
			/>
			<VioleteButton
				title=""
				classes="!font-semibold !w-max !rounded-sm !p-2"
				font="roboto"
				icon="Gift"
				iconClasses="fill-content-primary"
				iconSize="20px"
			/>
		</div>
	</div>
</div>

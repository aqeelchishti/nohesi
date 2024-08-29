<script lang="ts">
	import { goto } from '$app/navigation';
	import type { userInterface } from '$lib/interfaces';
	import { _ } from 'svelte-i18n';
	import TierTag from '../sections/user/friends/tierTag.svelte';
	import Icon from '../shared/Icon.svelte';

	export let data: userInterface;

	let background = '';

	if (data.tier === 0) {
		background = '!bg-top-light-2';
	} else if (data.tier === 1) {
		background = '!bg-top-light-17';
	} else if (data.tier === 2) {
		background = '!bg-primary-orange';
	} else {
		background = '!bg-primary-red';
	}

	const handleClick = () => {
		goto(`/user/friends/${data.name}`)
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	class="flex p-4 px-5 flex-col items-baseline xs:flex-row xs:items-center gap-5 self-stretch rounded-xl border border-border bg-top-light-2 hover:bg-top-light-10 transition-colors duration-500 cursor-pointer"
	on:click={handleClick}
>
	<div class="flex justify-between items-center w-full xs:w-auto">
		<img
			src={data.profilePicture}
			alt="cdn"
			class="h-12 xs:h-18 aspect-square block object-cover border-4 rounded-full border-primary-red-light"
		/>
		<button class="block xs:hidden">
			<Icon
				name="DotsThree"
				class="fill-icon group-hover:fill-icon-accent"
				height="32"
				width="32"
			/>
		</button>
	</div>
	<div class="flex flex-1 flex-col gap-1">
		<div class="flex items-baseline xs:items-center justify-between self-stretch">
			<div class="flex xs:items-center gap-2">
				<p
					class:!bg-primary-red-light={data.position === 1}
					class:!bg-content-secondary={data.position === 2}
					class:!bg-primary-orange-light={data.position === 3}
					class:!text-background={[1, 2, 3].includes(data.position)}
					class="text-content-secondary text-sm font-bold font-inter flex gap-1 items-center p-0.5 px-1.5 rounded-sm bg-top-light-17 w-max"
				>
					<Icon
						name={'NohesiLogo16'}
						width="16"
						height="16"
						class={`${[1, 2, 3].includes(data.position) ? 'fill-background' : 'fill-icon-accent'}`}
					/>
					#{data.position}
				</p>
				<div class="flex items-center gap-2">
					<h6 class="h6-inter text-content-primary">{data.name}</h6>
					<Icon name="eu-flag" width="20" height="15" />
				</div>
			</div>
			<button class="hidden xs:block">
				<Icon
					name="DotsThree"
					class="fill-icon group-hover:fill-icon-accent"
					height="32"
					width="32"
				/>
			</button>
		</div>
		<div
			class="flex gap-2 flex-col sm:flex-row items-baseline sm:items-center justify-between flex-wrap"
		>
			<div class="flex gap-1 items-center text-sm font-inter font-medium">
				<Icon
					name="SpinnerGap"
					class="fill-icon group-hover:fill-icon-accent"
					height="20"
					width="20"
				/>
				<p class="text-content-tertiary">{$_("page.user.friends.playing")}</p>
				<p class="text-content-secondary">{data.currentServer}</p>
				<TierTag
					tier={data.tier}
					classes={`w-max ${data.tier == 0 ? '!gap-2' : '!gap-1'} ${background}`}
				/>
			</div>
			<button
				class="p-2 rounded-sm text-content-secondary text-sm font-medium hover:bg-top-light-17"
			>
				{$_('page.user.friends.buyMsg')}
			</button>
		</div>
	</div>
</div>

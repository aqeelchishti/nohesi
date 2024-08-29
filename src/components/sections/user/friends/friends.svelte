<script lang="ts">
	import { friendsData } from '$lib/data';
	import { _ } from 'svelte-i18n';
	import Friend from '../../../cards/friend.svelte';
	import Icon from '../../../shared/Icon.svelte';
	import VioleteButton from '../../../shared/violeteButton.svelte';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';

	import { onMount } from 'svelte';

	let FriendsLoading: any;
	let isSkeletonLoading: boolean = true;

	onMount(async () => {
		FriendsLoading = (await import('./friendsLoading.svelte')).default;
		setTimeout(() => {
			isSkeletonLoading = false;
		}, 3000);
	});

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

{#if isSkeletonLoading === true}
	<svelte:component this={FriendsLoading} />
{:else}
	<div class="pt-10 flex flex-col gap-12">
		<div class="flex flex-col xs:flex-row gap-7 xs:items-center">
			<h3 class="h3-inter flex-1 text-content-primary">{$_('page.user.friends.title')}</h3>
			<div class="relative">
				<input
					type="text"
					name=""
					id=""
					placeholder={$_('page.user.friends.placeholder')}
					class="bg-top-light-2 w-full rounded-sm border border-border text-content-tertiary py-2 px-4 pl-10 text-sm placeholder:text-content-tertiary active:outline focus:outline-none"
				/>
				<img
					src="/icons/MagnifyingGlass.svg"
					alt="cdn"
					class="absolute left-3 top-1/2 -translate-y-1/2"
				/>
			</div>
		</div>
		<div class="flex flex-col gap-5 self-stretch">
			<div class="flex flex-row justify-between gap-3 {isLessThan398 === true ? 'flex-wrap' : ''}">
				<div class="flex flex-row gap-4">
					<h4 class="h4-inter text-content-primary">Requests</h4>
					<h4 class="h4-inter text-content-tertiary">24</h4>
				</div>
				<OutlinedButton
					title="Show All"
					classes="!font-bold !rounded-sm !w-max !py-2 !px-7"
					font="roboto"
				/>
			</div>
			<div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-2 self-stretch">
				{#each Array(4) as _, i}
					<div
						class="flex p-4 px-5 flex-col {isLessThan490 === true
							? 'flex-wrap'
							: ''} items-baseline xs:flex-row xs:items-center gap-5 self-stretch rounded-xl border border-border bg-top-light-2 hover:bg-top-light-10 transition-colors duration-500 cursor-pointer"
					>
						<div class="flex justify-between items-center w-full xs:w-auto self-start">
							<img
								src="/images/friend-request.png"
								alt="friend-request"
								class="h-12 w-12 xs:h-18 xs:w-18 aspect-square flex object-cover border-4 rounded-full border-primary-red-light"
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
						<div class="flex flex-1 flex-col gap-3">
							<div class="flex items-baseline xs:items-center justify-between self-stretch">
								<div class="flex xs:items-center gap-2">
									<p
										class="bg-top-light-17 text-content-secondary text-sm font-bold font-inter flex gap-1 items-center p-0.5 px-1.5 rounded-sm w-max"
									>
										<Icon name={'NohesiLogo16'} width="16" height="16" class="fill-icon-accent" />
										#27
									</p>
									<div class="flex items-center gap-2">
										<h6 class="h6-inter text-content-primary">happysnake594</h6>
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
								class="flex flex-col sm:flex-row items-baseline sm:items-center justify-between flex-wrap"
							>
								<div class="flex flex-col gap-2 text-sm font-inter font-medium">
									<p class="text-content-tertiary">10 mutual friends</p>
									<div class="flex flex-row gap-3 {isLessThan398 === true ? 'flex-wrap' : ''}">
										<OutlinedButton
											title="Decline"
											classes="!font-bold !rounded-sm !w-max !py-2 !px-7"
											font="roboto"
										/>
										<VioleteButton
											title="Add to friends"
											classes="!font-bold !rounded-sm !w-max !py-2 !px-7"
											font="roboto"
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
				{#each friendsData as friend}
					<Friend data={friend} />
				{/each}
			</div>
		</div>
	</div>
{/if}

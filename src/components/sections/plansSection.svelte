<script lang="ts">
	import { goto } from '$app/navigation';
	import { page } from '$app/stores';
	import features from '$lib/data/features.json';
	import { discord, plans, referal, subscriptionPlanLoading, toastMsg, user } from '$lib/stores';
	import { equals } from 'ramda';
	import { _ } from 'svelte-i18n';
	import { fade } from 'svelte/transition';
	import Plan from '../cards/plan.svelte';
	import Loading from '../shared/loading.svelte';
	import PlansTable from './plansTable.svelte';
	import DiscordMember from '../shared/discordMember.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	export let sid: string | undefined;

	let width: number;
	let billingCycle: 'year' | 'month' = 'month';

	let discount = 'Save 20%';

	let loading = false;

	let displayModal = false;

	const closeModal = () => {
		displayModal = false;
	};

	const handleSubscribe = async ({ detail: { price_id } }: any) => {

		if ($user.authenticated && sid) {
			if (!$discord.joinedAt) {
				displayModal = true;
			} else {
				$subscriptionPlanLoading = price_id;
				let resp = await (
					await fetch(`${PUBLIC_BACKEND_URL}/functions/subscribe`, {
						method: 'POST',
						headers: {
							'content-type': 'application/json',
							Authorization: `Bearer ${sid}`
						},
						body: JSON.stringify({
							price_id,
							referal: $referal
						})
					})
				).json();

				if (resp.error) {
					toastMsg.set({
						icon: 'Warning',
						msg: resp.error,
						desc: ''
					});
					$subscriptionPlanLoading = '';
				} else {
					window.location.replace(resp.data.url);
				}
			}
		} else {
			localStorage.setItem('stripe_price_id', price_id);
			const urlParams = new URLSearchParams({
				redirect: $page.url.pathname
			});
			goto(`/sign-in?${urlParams.toString()}`);
		}
	};
	$: {
		if ($user.authenticated && localStorage.getItem('stripe_price_id')) {
			const price_id = localStorage.getItem('stripe_price_id');
			localStorage.clear();

			if (price_id) {
				handleSubscribe({ detail: { price_id } });
			}
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

{#if loading}
	<Loading />
{/if}

<!-- {#if modalToggle}
	<div
		class="fixed inset-0 w-full h-screen bg-top-dark-44 backdrop-blur-4 z-50 flex justify-center items-center"
	>
		<div
			class="p-6 rounded-xl border border-border bg-top-dark-63 backdrop-blur-128 shadow-tooltip flex flex-col gap-8 w-full xs:w-4/5 2xl:w-2/5 mx-auto"
			use:clickOutside
			on:click_outside={closeModal}
		>
			<div class="flex flex-col gap-7">
				<h4 class="text-content-primary">Change Subscription</h4>
				<div class="flex flex-col gap-5">
					<p
						class="rounded-sm border border-red-secondary bg-red-bg-surface py-3 px-4 text-red text-base font-medium"
					>
						Warning! This action cannot be cancelled.
					</p>
					<p class="text-base text-content-primary">
						Your subscription will be updated by the end of billing period.
					</p>
				</div>
			</div>
			<div class="flex justify-end gap-4">
				<OutlinedButton
					title="Cancel"
					on:click={closeModal}
					classes="!font-bold !w-max"
					font="roboto"
				/>
				<OutlinedButton
					title="Change"
					on:click={handleSubscription}
					classes="!font-bold !w-max !text-red !border-red-secondary hover:!border-red"
					font="roboto"
				/>
			</div>
		</div>
	</div>
{/if}

{#if modalIntervalToggle}
	<div
		class="fixed inset-0 w-full h-screen bg-top-dark-44 backdrop-blur-4 z-50 flex justify-center items-center"
	>
		<div
			class="p-6 rounded-xl border border-border bg-top-dark-63 backdrop-blur-128 shadow-tooltip flex flex-col gap-8 w-full xs:w-4/5 2xl:w-2/5 mx-auto"
			use:clickOutside
			on:click_outside={closeModal}
		>
			<div class="flex flex-col gap-7">
				<h4 class="text-content-primary">Change Subscription</h4>
				<div class="flex flex-col gap-5">
					<p
						class="rounded-sm border border-red-secondary bg-red-bg-surface py-3 px-4 text-red text-base font-medium"
					>
						Warning! This action cannot be cancelled.
					</p>
					<p class="text-base text-content-primary">
						Your current subscription will be canceled, and there will be no refund. Are you sure
						you want to change?
					</p>
				</div>
			</div>
			<div class="flex justify-end gap-4">
				<OutlinedButton
					title="Cancel"
					on:click={closeModal}
					classes="!font-bold !w-max"
					font="roboto"
				/>
				<OutlinedButton
					title="Change"
					on:click={handleSubscription}
					classes="!font-bold !w-max !text-red !border-red-secondary hover:!border-red"
					font="roboto"
				/>
			</div>
		</div>
	</div>
{/if} -->

{#if $user.authenticated && !$discord.joinedAt && displayModal}
	<DiscordMember on:closeModal={closeModal} />
{/if}

{#if $plans}
	<div class="flex flex-col gap-9">
		<!-- test button -->
		<!-- <button
			class="text-content-primary border border-border"
			on:click={() => handleSubscribe({ detail: { price_id: '' } })}>Test Subscription</button
		> -->

		<button
			class="flex gap-1 p-1 justify-center items-center mx-auto w-max rounded-md bg-top-light-2 border border-border"
			on:click={() => {
				if (equals(billingCycle, 'month')) {
					billingCycle = 'year';
				} else {
					billingCycle = 'month';
				}
			}}
		>
			<p
				class="w-max p-3 px-6 rounded-sm font-inter text-sm font-medium transition-all duration-700 {equals(
					billingCycle,
					'month'
				)
					? 'bg-content-primary text-background'
					: 'text-content-secondary'}"
			>
				{$_('components.plans.tenure.monthly')}
			</p>
			<div
				class="flex items-center justify-center gap-2 rounded-sm transition-all duration-700 p-1 {equals(
					billingCycle,
					'year'
				)
					? ''
					: 'pl-3'}"
			>
				<p
					class="font-medium font-inter rounded-sm text-sm {equals(billingCycle, 'year')
						? 'p-3 px-6 bg-content-primary text-background'
						: 'text-content-secondary '}"
				>
					{$_('components.plans.tenure.yearly')}
					{#if discount && equals(billingCycle, 'year')}
						{discount}
					{/if}
				</p>
				{#if equals(billingCycle, 'month')}
					<p
						in:fade|global
						class="text-background font-inter font-medium text-sm p-3 rounded-sm bg-green-secondary"
					>
						{#if discount}
							{discount}
						{/if}
					</p>
				{/if}
			</div>
		</button>
		{#if width >= 1350}
			<div class="grid grid-cols-5 gap-12 xl:gap-1 items-end w-full">
				<div class="flex flex-col px-3 pb-8">
					{#each features as feature}
						<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
							{feature.name}
						</p>
					{/each}
				</div>
				<Plan {billingCycle} data={null} />
				{#each $plans as plan}
					<Plan bind:billingCycle data={plan} on:subscribe={handleSubscribe} />
				{/each}
				<!-- {#if equals(billingCycle, 'year')}
					{#each yearlyPlans as data}
						<Plan {data} {billingCycle} on:subscribe={handleSubscribe} />
					{/each}
				{:else}
					{#each monthlyPlans as data}
						<Plan {data} {billingCycle} on:subscribe={handleSubscribe} />
					{/each}
				{/if} -->
			</div>
			<!-- {:else if equals(billingCycle, 'year')} -->
			<!-- <PlansTable plans={yearlyPlans} {billingCycle} on:subscribe={handleSubscribe} /> -->
		{:else}
			<div class="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
				<Plan {billingCycle} data={null} fillFeatures={true} />
				{#each $plans as plan}
					<Plan bind:billingCycle data={plan} fillFeatures={true} on:subscribe={handleSubscribe} />
				{/each}
			</div>
			<!-- <PlansTable plans={monthlyPlans} {billingCycle} on:subscribe={handleSubscribe} /> -->
		{/if}
	</div>
{/if}
<!-- {/if} -->

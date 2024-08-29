<script lang="ts">
	import { roles, subscription, trials, user } from '$lib/stores';
	import { either, equals, isNotNil, lte } from 'ramda';
	import { createEventDispatcher } from 'svelte';
	import Button from '../shared/button.svelte';
	import Icon from '../shared/Icon.svelte';

	export let data: any;
	export let classes: string = '';
	export let color: string;
	export let billingCycle: 'year' | 'month' = 'month';

	const filteredRoles = $roles.filter(r => r.tiers)


	const dispatch = createEventDispatcher();


	let amount = 0;
	if (data) {
		amount = data.unit_amount;
	}
	$: buttonText = '';

	const getButtonText = (subscribed_price: string, current_price: string) => {
		const filteredRoles = $roles.filter(r => r.tiers)
		let subscribed_role = filteredRoles.find((r) =>
			either(equals(r.tiers[`price_month`]), equals(r.tiers[`price_year`]))(subscribed_price)
		);
		
		
		let current_role = filteredRoles.find((r) =>
		either(equals(r.tiers[`price_month`]), equals(r.tiers[`price_year`]))(current_price)
		);
		

		let btn_text = '';

		if (equals(subscribed_role?.level, current_role?.level)) {
			btn_text = equals(subscribed_price, current_price)
				? 'Current Plan'
				: 'Change Billing Cycle'
		} else {
			btn_text = equals(subscribed_price, data.id)
				? 'Current Plan'
				: lte(getLevel(subscribed_price))(details?.level || 0)
				? 'Upgrade'
				: 'Downgrade';
		}

		return btn_text;
	};

	const getLevel = (price_id: string) => {
		return (
			filteredRoles.find((e) =>
				either(equals(e.tiers.price_month), equals(e.tiers.price_year))(price_id)
			)?.level || 0
		);
	};

	$: {
		if (
			$user.authenticated &&
			$subscription?.price_id &&
			data &&
			($subscription.status === 'active' || $subscription?.status === 'trialing')
		) {
			buttonText = getButtonText($subscription.price_id, data.id);
		} else {
			if (data) {
				const currentPlan = $trials.find((t) => t.price_id === data.id);
				if (currentPlan) {
					buttonText = `Free ${currentPlan.days} days trial`;
				} else {
					buttonText = 'Subscribe Now';
				}
			} else {
				buttonText = 'Subscribe Now';
			}
		}
	}

	const handleClick = async () => {
		if (details.level !== 0) {
			dispatch('subscribe', {
				price_id: data.id,
				interval: data.recurring.interval
			});
		}
	};
</script>

<div
	class={`flex flex-col gap-6 self-stretch p-3 rounded-xl border h-[213px] ${_classes[color].innerClasses} ${classes}`}
>
	<div class="flex justify-start items-center gap-2 -translate-x-2">
		<!-- <img
			src={`/icons/${icons[details?.level || 0]}.svg `}
			alt="cdn"
			width="3rem"
			height="3rem"
			class:w-6={details?.level === 0}
			class:h-6={details?.level === 0}
			class={`${details?.level === 0 ? 'mx-[0.6025rem]' : ' my-[-0.6025rem]'} h12 w-10 ${
				_classes[color].iconClasses
			}`}
		/> -->
		<div class="{_classes[color].iconClasses}">
			<Icon name="Cube" class='{_classes[color].iconClasses} ml-2'/>
		</div>
		<p class="text-md uppercase text-content-tertiary font-bold font-roboto slnt-10">
			Tier {(details?.level > 1 ? details?.level - 1 : `${details?.level}`) || '-'}
		</p>
	</div>
	<div class="flex flex-col gap-1 self-stretch">
		<h6 class="h6-inter text-content-primary font-semibold">
			{(equals(amount, 0) ? 'Public' : details?.name) || ''}
		</h6>

		{#if amount === 0}
			<p class="h3-inter self-stretch title-gradient">Free</p>
		{:else}
			<p class="h6-inter text-content-secondary font-medium">
				<span class="h3-inter self-stretch title-gradient font-semibold">${amount / 100}</span>
				<span>/{equals(billingCycle, 'year') ? 'year' : 'month'}</span>
			</p>
		{/if}
	</div>
	{#if details?.level !== 0}
		<Button
			title={buttonText}
			classes={`uppercase py-4 px-7 flex justify-center whitespace-nowrap ${_classes[color].buttonClasses}`}
			size="md"
			font="roboto"
			disabled={$user.authenticated &&
				isNotNil($subscription?.price_id) &&
				equals($subscription.price_id, data.id)}
			on:click={handleClick}
		/>
	{:else}
		<div class="md:h-9" />
	{/if}
</div>

<script lang="ts">
	import features from '$lib/data/features.json';

	import { either, equals, lte } from 'ramda';
	import Icon from '../shared/Icon.svelte';
	import Button from '../shared/button.svelte';
	import { createEventDispatcher } from 'svelte';
	import { user, subscription, roles, discord, subscriptionPlanLoading } from '$lib/stores';

	export let data: any;

	export let classes: string = '';
	export let fillFeatures: boolean = false;
	export let billingCycle: 'year' | 'month' = 'month';

	const dispatch = createEventDispatcher();

	interface Plan {
		type: string;
		name: string;
		unit_amount: string;
		price_id: string;
		features: { name: string }[];
		billing_cycle: 'month' | 'year';
	}

	let color = (data && data.color) || 'black';
	$: amount = (data && data[billingCycle].unit_amount) || 0;

	let _classes: any = {
		black: {
			outerClasses: 'bg-top-light-2',
			iconClasses: 'fill-content-tertiary',
			innerClasses: 'bg-top-light-2 border-top-light-10',
			buttonClasses:
				'bg-top-light-10 text-content-tertiary !text-md hover:outline hover:outline-1 hover:outline-top-light-45'
		},
		black_: {
			outerClasses: 'bg-top-light-2',
			iconClasses: '',
			innerClasses: 'bg-top-light-2 border-top-light-10',
			buttonClasses:
				'bg-top-light-10 text-content-tertiary !text-md hover:outline hover:outline-1 hover:outline-top-light-45'
		},
		gray: {
			outerClasses: 'bg-top-light-10',
			iconClasses: 'fill-content-primary shadow-plan1',
			innerClasses: 'bg-top-light-10 border-content-secondary',
			buttonClasses: 'bg-top-light-38 text-content-primary !text-md hover:bg-top-light-45'
		},
		orange: {
			outerClasses: 'bg-primary-orange-bg-surface',
			iconClasses: 'fill-primary-orange-light shadow-plan2',
			innerClasses: 'bg-primary-orange-bg-surface border-primary-orange',
			buttonClasses: 'bg-content-primary text-background !text-md hover:shadow-white'
		},
		red: {
			outerClasses: 'bg-primary-red-bg-surface',
			iconClasses: 'fill-primary-red-light shadow-plan3',
			innerClasses: 'bg-primary-red-bg-top border-primary-red-bg-top',
			buttonClasses: 'bg-top-light-38 text-content-primary !text-md hover:bg-top-light-45'
		}
	};
	let width: number;

	let _features = [
		'Access to Help and Help FAQ',
		'Monthly Public Car Updates',
		'Access to 20+ Public Servers'
	];

	const handleClick = async () => {
		if (data) {
			dispatch('subscribe', {
				price_id: data[billingCycle].price_id
			});
		}
	};

	$: buttonText = '';

	const getButtonText = (subscribed_price: string, current_price: string) => {
		const filteredRoles = $roles.filter((r) => r.tiers);

		let current_role = filteredRoles.find((r) =>
			either(equals(r.tiers[`price_month`]), equals(r.tiers[`price_year`]))(current_price)
		);

		let btn_text = '';

		if (equals($discord?.level, current_role?.level)) {
			btn_text = equals(subscribed_price, current_price) ? 'Current Plan' : 'Change Billing Cycle';
		} else {
			btn_text = lte($discord.level)(data?.level || 0) ? 'Upgrade' : 'Downgrade';
		}

		return btn_text;
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
				if (data[billingCycle].trial_period_days) {
					buttonText = `Free ${data[billingCycle].trial_period_days} days trial`;
				} else {
					buttonText = 'Subscribe Now';
				}
			} else {
				buttonText = 'Subscribe Now';
			}
		}
	}
</script>

<svelte:window bind:innerWidth={width} />

<div
	class={`self-stretch relative border rounded-xl border-border flex flex-col gap-8 pb-8 ${_classes[color].outerClasses} ${classes}`}
>
	<div
		class={`flex flex-col gap-6 self-stretch p-3 rounded-xl border h-[213px] ${_classes[color].innerClasses} ${classes}`}
	>
		<div class="flex justify-start items-center gap-2 -translate-x-2">
			<div class={_classes[color].iconClasses}>
				<Icon name="Cube" class="{_classes[color].iconClasses} ml-2" />
			</div>
			<p class="text-md uppercase text-content-tertiary font-bold font-roboto slnt-10">
				{data?.type?.replace('r', 'r ') || 'Tier 0'}
			</p>
		</div>
		<div class="flex flex-col gap-1 self-stretch">
			<h6 class="h6-inter text-content-primary font-semibold">
				{(equals(amount, 0) ? 'Public' : data?.name) || ''}
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
		{#if data}
			<Button
				title={buttonText}
				classes={`uppercase py-4 px-7 flex justify-center whitespace-nowrap ${_classes[color].buttonClasses}`}
				size="md"
				font="roboto"
				loaderSize="20"
				loading={$subscriptionPlanLoading === data[billingCycle].price_id}
				loaderColor={color === 'orange' ? '!stroke-background' : '!stroke-icon-accent'}
				disabled={$subscriptionPlanLoading !== '' &&
					$subscriptionPlanLoading !== data[billingCycle].price_id}
				on:click={handleClick}
			/>
		{:else}
			<div class="md:h-9" />
		{/if}
	</div>

	<div class={`flex flex-col px-4 gap-5 self-stretch text-content-primary`}>
		<h6 class="h6-inter font-semibold h-12 flex justify-center items-center text-center">
			{(data && data.description) || 'Everything you need to start playing.'}
		</h6>
		<div class="flex flex-col self-stretch items-center justify-center">
			{#if fillFeatures}
				{#if data}
					{#each data.features as feature}
						<p
							class="text-content-secondary text-start w-full py-3 border-b border-border last:border-0"
						>
							{feature.name}
						</p>
					{/each}
				{:else}
					{#each _features as feature}
						<p
							class="text-content-secondary text-start w-full py-3 border-b border-border last:border-0"
						>
							{feature}
						</p>
					{/each}
				{/if}
			{:else if data}
				{#each features as { name }}
					<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
						{#if Array.isArray(data.features) && data.features.find((e) => equals(e.name, name))}
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="fill-content-primary"
							>
								<g id="CheckFat">
									<path
										id="Vector"
										d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
									/>
								</g>
							</svg>
						{:else}
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="CheckFat">
									<path
										id="Vector"
										d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
									/>
								</g>
							</svg>
						{/if}
					</div>
				{/each}
			{:else}
				{#each features as { name }}
					<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
						{#if Array.isArray(_features) && _features.find((e) => equals(e, name))}
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
								class="fill-content-primary"
							>
								<g id="CheckFat">
									<path
										id="Vector"
										d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
									/>
								</g>
							</svg>
						{:else}
							<svg
								width="20"
								height="20"
								viewBox="0 0 20 20"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g id="CheckFat">
									<path
										id="Vector"
										d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
									/>
								</g>
							</svg>
						{/if}
					</div>
				{/each}
			{/if}
		</div>
	</div>
</div>

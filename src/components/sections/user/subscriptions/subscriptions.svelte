<script lang="ts">
	import { subscription, user } from '$lib/stores';
	import { _ } from 'svelte-i18n';
	import Icon from '../../../shared/Icon.svelte';
	import PlansSection from '../../plansSection.svelte';

	export let sid: string | undefined;

	let icon_classes = 'fill-primary-orange-light drop-shadow-orange';

	const isSubscription = (sub: any): sub is App.Subscription =>
		(sub as App.Subscription)?.status ? true : false;
	$: {
		if (isSubscription($subscription)) {
			if ($subscription.product.toLocaleLowerCase().includes('public')) {
				icon_classes = 'fill-content-tertiary drop-shadow-tertiary';
			} else if ($subscription.product.toLocaleLowerCase().includes('public+')) {
				icon_classes = 'fill-content-primary drop-shadow-primary';
			} else if ($subscription.product.toLocaleLowerCase().includes('midnight')) {
				icon_classes = 'fill-primary-orange-light drop-shadow-orange';
			} else if ($subscription.product.toLocaleLowerCase().includes('underground')) {
				icon_classes = 'fill-primary-red-light drop-shadow-red';
			}
		}
	}
</script>

<div class="pt-10 flex flex-col gap-20">
	<div class="flex flex-col gap-12">
		<div class="flex justify-between items-end">
			<h3 class="h3-inter flex-1 text-content-primary">{$_('page.user.subscriptions.title')}</h3>
		</div>
		{#if isSubscription($subscription) && ($subscription.status === 'active' || $subscription?.status === 'trialing')}
			<div
				class="flex flex-col gap-6 self-stretch py-4 px-5 bg-top-light-2 rounded-xl border border-border"
			>
				<div class="flex justify-between">
					<p class="text-sm font-medium font-inter text-content-tertiary">
						{$_('page.user.subscriptions.sub')}
					</p>
					{#if $user.customerId && $subscription.customer_portal_url}
						<a
							href={$subscription.customer_portal_url}
							class="group btn-md text-content-secondary flex items-center hover:text-content-primary border border-border hover:border-border-light p-2 px-4"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								xmlns:xlink="http://www.w3.org/1999/xlink"
								version="1.1"
								x="0px"
								y="0px"
								viewBox="0 0 98 98"
								enable-background="new 0 0 98 98"
								xml:space="preserve"
								class="fill-content-secondary h-5 group-hover:fill-content-primary"
							>
								<path
									d="M88.096,10.287H9.904c-3.293,0-5.972,2.679-5.972,5.972v54.868c0,3.293,2.679,5.972,5.972,5.972h20.184l-4.326,7.424  c-0.388,0.665-0.392,1.457-0.013,2.117c0.381,0.662,1.088,1.074,1.847,1.074h42.809c0.758,0,1.466-0.411,1.847-1.074  c0.38-0.66,0.375-1.452-0.013-2.117l-4.326-7.424h20.184c3.293,0,5.972-2.679,5.972-5.972V16.259  C94.068,12.966,91.389,10.287,88.096,10.287z M9.904,13.115h78.192c1.734,0,3.144,1.41,3.144,3.144v50.38H6.76v-50.38  C6.76,14.525,8.171,13.115,9.904,13.115z M69.177,84.885H28.823l4.538-7.787h31.277L69.177,84.885z M88.096,74.27H9.904  c-1.734,0-3.144-1.41-3.144-3.144v-1.66h84.48v1.66C91.24,72.86,89.829,74.27,88.096,74.27z M13.476,62.531h18.066  c1.364,0,2.474-1.11,2.474-2.474V41.293c0-1.364-1.11-2.474-2.474-2.474H13.476c-1.364,0-2.474,1.11-2.474,2.474v18.764  C11.002,61.421,12.112,62.531,13.476,62.531z M13.83,41.646h17.359v18.057H13.83V41.646z M86.171,40.232  c0,0.781-0.633,1.414-1.414,1.414H43.288c-0.781,0-1.414-0.633-1.414-1.414s0.633-1.414,1.414-1.414h41.469  C85.538,38.818,86.171,39.451,86.171,40.232z M86.171,49.548c0,0.781-0.633,1.414-1.414,1.414H60.962  c-0.781,0-1.414-0.633-1.414-1.414s0.633-1.414,1.414-1.414h23.794C85.538,48.134,86.171,48.767,86.171,49.548z M86.171,58.864  c0,0.781-0.633,1.414-1.414,1.414H60.962c-0.781,0-1.414-0.633-1.414-1.414s0.633-1.414,1.414-1.414h23.794  C85.538,57.45,86.171,58.083,86.171,58.864z M48.622,51.05l0.736-0.736c0.566-0.566,0.757-1.389,0.498-2.148  c-0.258-0.754-0.911-1.286-1.704-1.388l-8.056-1.033c-0.643-0.082-1.277,0.133-1.736,0.592c-0.459,0.459-0.675,1.092-0.592,1.736  l1.032,8.055c0.102,0.794,0.634,1.447,1.388,1.705c0.759,0.259,1.582,0.068,2.148-0.498l0.736-0.736l5.261,5.261  c0.446,0.446,1.032,0.669,1.618,0.669c0.586,0,1.172-0.223,1.618-0.669l2.316-2.316c0.432-0.432,0.669-1.006,0.669-1.618  c0-0.612-0.238-1.186-0.669-1.618L48.622,51.05z M49.949,59.48l-5.879-5.879c-0.276-0.276-0.638-0.414-1-0.414  c-0.362,0-0.724,0.138-1,0.414l-0.66,0.66l-0.716-5.588l5.588,0.716l-0.66,0.66c-0.552,0.552-0.552,1.447,0,1.999l5.879,5.879  L49.949,59.48z M14.641,32.33h68.718c1.55,0,2.812-1.261,2.812-2.812v-9.485c0-1.55-1.261-2.812-2.812-2.812H14.641  c-1.55,0-2.812,1.261-2.812,2.812v9.485C11.829,31.069,13.091,32.33,14.641,32.33z M83.343,20.05v9.453H14.657l-0.003-9.453H83.343z   M31.635,24.776c0-0.781,0.633-1.414,1.414-1.414h7.672c0.781,0,1.414,0.633,1.414,1.414s-0.633,1.414-1.414,1.414h-7.672  C32.268,26.19,31.635,25.557,31.635,24.776z M71.814,24.777c0-0.781,0.633-1.414,1.414-1.414h4.049c0.781,0,1.414,0.633,1.414,1.414  s-0.633,1.414-1.414,1.414h-4.049C72.447,26.191,71.814,25.558,71.814,24.777z M47.024,24.776c0-0.781,0.633-1.414,1.414-1.414  l17.88,0c0.781,0,1.414,0.633,1.414,1.414c0,0.781-0.633,1.414-1.414,1.414l-17.88,0C47.657,26.19,47.024,25.557,47.024,24.776z   M20.467,28.977c1.035,0,1.983-0.377,2.716-1l1.569,0.906c0.223,0.129,0.466,0.19,0.706,0.19c0.489,0,0.964-0.254,1.226-0.707  c0.39-0.676,0.159-1.541-0.518-1.931l-1.567-0.905c0.044-0.244,0.069-0.496,0.069-0.753c0-2.316-1.885-4.201-4.201-4.201  c-2.316,0-4.201,1.885-4.201,4.201C16.266,27.093,18.151,28.977,20.467,28.977z M20.467,23.403c0.757,0,1.373,0.616,1.373,1.373  c0,0.757-0.616,1.373-1.373,1.373c-0.757,0-1.373-0.616-1.373-1.373C19.094,24.019,19.71,23.403,20.467,23.403z"
								/>
							</svg>
							Customer Portal
						</a>
					{/if}
				</div>

				<div class="flex flex-col gap-5">
					<div class="flex flex-col gap-3">
						<p class="text-md font-roboto slnt-10 font-bold uppercase text-content-secondary">
							{$subscription.status}
						</p>
						<div class="flex gap-3 items-center">
							<Icon name="Cube48" width="75" height="80" class={icon_classes} />
							<h3 class="text-content-primary uppercase">{$subscription.product}</h3>
						</div>
					</div>
					<div class="flex gap-2 font-inter text-base">
						{#if $subscription.cancel_at}
							<p class="text-content-secondary">Subscription will be ended at:</p>
							{#if typeof $subscription.cancel_at == 'object'}
								<p class="text-content-primary font-medium">
									{`${String($subscription.cancel_at.getDate()).padStart(2, '0')}.${String(
										$subscription.cancel_at.getMonth() + 1
									).padStart(2, '0')}.${$subscription.cancel_at.getFullYear()}`}
								</p>
							{/if}
						{:else}
							<p class="text-content-secondary">{$_('page.user.subscriptions.renewal')}</p>
							{#if $subscription.current_period_end && typeof $subscription.current_period_end == 'object'}
								<p class="text-content-primary font-medium">
									{`${String($subscription.current_period_end.getDate()).padStart(2, '0')}.${String(
										$subscription.current_period_end.getMonth() + 1
									).padStart(2, '0')}.${$subscription.current_period_end.getFullYear()}`}
								</p>
							{/if}
						{/if}
					</div>
				</div>
			</div>
		{:else}
			<div
				class="flex items-center justify-between flex-wrap gap-6 self-stretch py-4 px-5 bg-top-light-2 rounded-xl border border-border"
			>
				<p class="text-md font-roboto slnt-10 font-bold uppercase text-content-secondary">
					{'Subscription Not Found'}
				</p>

				{#if $user.customerId && $subscription && $subscription.customer_portal_url}
					<a
						href={$subscription.customer_portal_url}
						class="group btn-md text-content-secondary flex items-center hover:text-content-primary border border-border hover:border-border-light p-2 px-4"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							version="1.1"
							x="0px"
							y="0px"
							viewBox="0 0 98 98"
							enable-background="new 0 0 98 98"
							xml:space="preserve"
							class="fill-content-secondary h-5 group-hover:fill-content-primary"
						>
							<path
								d="M88.096,10.287H9.904c-3.293,0-5.972,2.679-5.972,5.972v54.868c0,3.293,2.679,5.972,5.972,5.972h20.184l-4.326,7.424  c-0.388,0.665-0.392,1.457-0.013,2.117c0.381,0.662,1.088,1.074,1.847,1.074h42.809c0.758,0,1.466-0.411,1.847-1.074  c0.38-0.66,0.375-1.452-0.013-2.117l-4.326-7.424h20.184c3.293,0,5.972-2.679,5.972-5.972V16.259  C94.068,12.966,91.389,10.287,88.096,10.287z M9.904,13.115h78.192c1.734,0,3.144,1.41,3.144,3.144v50.38H6.76v-50.38  C6.76,14.525,8.171,13.115,9.904,13.115z M69.177,84.885H28.823l4.538-7.787h31.277L69.177,84.885z M88.096,74.27H9.904  c-1.734,0-3.144-1.41-3.144-3.144v-1.66h84.48v1.66C91.24,72.86,89.829,74.27,88.096,74.27z M13.476,62.531h18.066  c1.364,0,2.474-1.11,2.474-2.474V41.293c0-1.364-1.11-2.474-2.474-2.474H13.476c-1.364,0-2.474,1.11-2.474,2.474v18.764  C11.002,61.421,12.112,62.531,13.476,62.531z M13.83,41.646h17.359v18.057H13.83V41.646z M86.171,40.232  c0,0.781-0.633,1.414-1.414,1.414H43.288c-0.781,0-1.414-0.633-1.414-1.414s0.633-1.414,1.414-1.414h41.469  C85.538,38.818,86.171,39.451,86.171,40.232z M86.171,49.548c0,0.781-0.633,1.414-1.414,1.414H60.962  c-0.781,0-1.414-0.633-1.414-1.414s0.633-1.414,1.414-1.414h23.794C85.538,48.134,86.171,48.767,86.171,49.548z M86.171,58.864  c0,0.781-0.633,1.414-1.414,1.414H60.962c-0.781,0-1.414-0.633-1.414-1.414s0.633-1.414,1.414-1.414h23.794  C85.538,57.45,86.171,58.083,86.171,58.864z M48.622,51.05l0.736-0.736c0.566-0.566,0.757-1.389,0.498-2.148  c-0.258-0.754-0.911-1.286-1.704-1.388l-8.056-1.033c-0.643-0.082-1.277,0.133-1.736,0.592c-0.459,0.459-0.675,1.092-0.592,1.736  l1.032,8.055c0.102,0.794,0.634,1.447,1.388,1.705c0.759,0.259,1.582,0.068,2.148-0.498l0.736-0.736l5.261,5.261  c0.446,0.446,1.032,0.669,1.618,0.669c0.586,0,1.172-0.223,1.618-0.669l2.316-2.316c0.432-0.432,0.669-1.006,0.669-1.618  c0-0.612-0.238-1.186-0.669-1.618L48.622,51.05z M49.949,59.48l-5.879-5.879c-0.276-0.276-0.638-0.414-1-0.414  c-0.362,0-0.724,0.138-1,0.414l-0.66,0.66l-0.716-5.588l5.588,0.716l-0.66,0.66c-0.552,0.552-0.552,1.447,0,1.999l5.879,5.879  L49.949,59.48z M14.641,32.33h68.718c1.55,0,2.812-1.261,2.812-2.812v-9.485c0-1.55-1.261-2.812-2.812-2.812H14.641  c-1.55,0-2.812,1.261-2.812,2.812v9.485C11.829,31.069,13.091,32.33,14.641,32.33z M83.343,20.05v9.453H14.657l-0.003-9.453H83.343z   M31.635,24.776c0-0.781,0.633-1.414,1.414-1.414h7.672c0.781,0,1.414,0.633,1.414,1.414s-0.633,1.414-1.414,1.414h-7.672  C32.268,26.19,31.635,25.557,31.635,24.776z M71.814,24.777c0-0.781,0.633-1.414,1.414-1.414h4.049c0.781,0,1.414,0.633,1.414,1.414  s-0.633,1.414-1.414,1.414h-4.049C72.447,26.191,71.814,25.558,71.814,24.777z M47.024,24.776c0-0.781,0.633-1.414,1.414-1.414  l17.88,0c0.781,0,1.414,0.633,1.414,1.414c0,0.781-0.633,1.414-1.414,1.414l-17.88,0C47.657,26.19,47.024,25.557,47.024,24.776z   M20.467,28.977c1.035,0,1.983-0.377,2.716-1l1.569,0.906c0.223,0.129,0.466,0.19,0.706,0.19c0.489,0,0.964-0.254,1.226-0.707  c0.39-0.676,0.159-1.541-0.518-1.931l-1.567-0.905c0.044-0.244,0.069-0.496,0.069-0.753c0-2.316-1.885-4.201-4.201-4.201  c-2.316,0-4.201,1.885-4.201,4.201C16.266,27.093,18.151,28.977,20.467,28.977z M20.467,23.403c0.757,0,1.373,0.616,1.373,1.373  c0,0.757-0.616,1.373-1.373,1.373c-0.757,0-1.373-0.616-1.373-1.373C19.094,24.019,19.71,23.403,20.467,23.403z"
							/>
						</svg>
						Customer Portal
					</a>
				{/if}
			</div>
		{/if}
	</div>

	<div class="flex flex-col gap-6">
		<h4 class="h4-inter text-content-primary">{$_('page.user.subscriptions.otherMsg')}</h4>
		<div class="flex flex-col gap-9 justify-center items-center">
			<PlansSection bind:sid />
		</div>
	</div>
</div>

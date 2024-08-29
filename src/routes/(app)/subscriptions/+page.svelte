<script lang="ts">
	import { browser } from '$app/environment';
	import { referal } from '$lib/stores';
	import { onMount } from 'svelte';
	import Plans from '../../../components/sections/plans.svelte';
	import Form from '../../../components/sections/shared/form.svelte';
	import Seo from '../../../components/shared/SEO.svelte';
	import Spacer from '../../../components/shared/spacer.svelte';

	export let data;

	$: ({ sid } = data);

	onMount(() => {
		if (browser) {
			window.rewardful('ready', () => {
				const ref = window.Rewardful.referral;
				if (ref) {
					referal.set(ref);
				}
			});
		}
	});
</script>

<Seo title="Subscriptions" />

<div class="pt-26">
	<Spacer height="h-20" />
	<Plans bind:sid />
	<Spacer />
	<Form />
	<Spacer height="h-20" />
</div>

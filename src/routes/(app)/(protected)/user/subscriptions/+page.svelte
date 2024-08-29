<script lang="ts">
	import Subscriptions from '../../../../../components/sections/user/subscriptions/subscriptions.svelte';
	import Seo from '../../../../../components/shared/SEO.svelte';
	import Spacer from '../../../../../components/shared/spacer.svelte';

	export let data;
</script>

<Seo title="User | Subscriptions" />

<Subscriptions bind:sid={data.sid} />
<Spacer height="h-20" />

<script lang="ts">
	import Seo from '../../../../../components/shared/SEO.svelte';
	import Loading from '../../../../../components/shared/loading.svelte';
	import Spacer from '../../../../../components/shared/spacer.svelte';
	import Settings from './../../../../../components/sections/user/settings/settings.svelte';

	let loading = false;
</script>

<Seo title="User | Settings" />

{#if loading}
	<Loading />
{/if}

<div class="pt-10 w-full sm:w-4/5 xl:w-1/2 mx-auto">
	<h3 class="h3-inter text-content-primary pb-12">Settings</h3>
	<Settings />
	<Spacer height="h-20" />
</div>

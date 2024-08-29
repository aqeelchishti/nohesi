<script lang="ts">
	import { footerToggle } from '$lib/stores';
	import { onDestroy, onMount } from 'svelte';

	import Friends from '../../../../../components/sections/user/friends/friends.svelte';
	import Spacer from '../../../../../components/shared/spacer.svelte';
	import VioleteButton from '../../../../../components/shared/violeteButton.svelte';
	import Seo from '../../../../../components/shared/SEO.svelte';

	onDestroy(() => {
		footerToggle.set('');
	});
</script>

<Seo title="User | Friends" />

<Friends />

<Spacer height="h-20" />

<script lang="ts">
	import { _ } from 'svelte-i18n';

	import PlansSection from './plansSection.svelte';

	export let sid: string | undefined;
</script>

<div class="container-section flex flex-col justify-center items-center gap-16 scroll-mt-16" id='plans'>
	<div class="flex flex-col justify-center items-center gap-12 w-full lg:w-4/5 xl:w-3/5 mx-auto">
		<h1 class="title-gradient text-center w-full">{$_('components.plans.heading')}</h1>
		<p class="text-base text-center text-content-secondary w-full md:w-1/2 mx-auto">
			{$_('components.plans.desc')}
		</p>
	</div>

	<PlansSection bind:sid={sid} />
</div>

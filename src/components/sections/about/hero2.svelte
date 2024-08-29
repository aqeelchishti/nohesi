<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="flex flex-col gap-6 items-center container-section lg:flex-row">
	<div class="flex flex-col gap-6 lg:w-2/5">
		<h2 class="text-content-primary">{$_('page.about.section2.heading')}</h2>
		<p class="text-lg text-content-secondary">
			{@html $_('page.about.section2.desc').replaceAll('\n', '<br>')}
		</p>
	</div>
	<img
		src="https://cdn.nohesi.gg/assets/website/images/about-2.webp"
		alt="No Hesi servers, where highway racing occurs."
		class="hidden w-3/5 lg:block"
	/>
</div>

<script lang="ts">
	import { _ } from 'svelte-i18n';
</script>

<div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 h-full">
	<div
		class="w-full p-6 gap-12 flex flex-col items-start self-stretch border border-border rounded-xl hover:bg-top-light-2 cursor-pointer hover:shadow-green"
	>
		<img src="/icons/Frame-1.svg" alt="cdn" />
		<div class="gap-6 flex flex-col items-start self-stretch">
			<h3 class="text-green">{$_('components.features.f1.heading')}</h3>
			<p class="text-content-secondary text-base">{$_('components.features.f1.desc')}</p>
		</div>
	</div>

	<div
		class="w-full p-6 gap-12 flex flex-col items-start self-stretch border border-border rounded-xl hover:bg-top-light-2 cursor-pointer hover:shadow-yellow"
	>
		<img src="/icons/Frame-2.svg" alt="cdn" />
		<div class="gap-6 flex flex-col items-start self-stretch">
			<h3 class="text-yellow">{$_('components.features.f2.heading')}</h3>
			<p class="text-content-secondary text-base">{$_('components.features.f2.desc')}</p>
		</div>
	</div>

	<div
		class="w-full sm:w-[calc(50%-0.75rem)] sm:mx-auto lg:w-full sm:col-span-2 lg:col-span-1 p-6 gap-12 flex flex-col items-start self-stretch border border-border rounded-xl hover:bg-top-light-2 cursor-pointer hover:shadow-red"
	>
		<img src="/icons/Frame-3.svg" alt="cdn" />
		<div class="gap-6 flex flex-col items-start self-stretch">
			<h3 class="text-red">{$_('components.features.f3.heading')}</h3>
			<p class="text-content-secondary text-base">{$_('components.features.f3.desc')}</p>
		</div>
	</div>
</div>

<script lang="ts">
	export let heading: string;
	export let headingFont: 'inter' | 'roboto' = 'roboto';
	export let headingClasses: string;
	export let id: string = '';
</script>

<div class="container-section flex flex-col gap-12 scroll-mt-16" {id}>
	<div
		class="flex flex-col gap-6 items-start justify-start md:flex-row md:justify-between md:items-end w-full"
	>
		<h2
			class={`max-w-xl whitespace-pre-line font-${headingFont} ${
				headingFont === 'inter' && 'h2-inter'
			} ${headingClasses}`}
		>
			{heading}
		</h2>
		<slot name="buttons" />
	</div>
	<slot name="grid" />
</div>

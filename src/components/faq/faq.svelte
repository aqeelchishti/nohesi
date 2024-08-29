<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { clickOutside } from '../../actions/clickOutside';
	import Question from './question.svelte';

	let faqs:any = $_('page.faq.faqData')
	

	function toggleFAQ(event: any) {
		let index = event.detail.index;
		faqs[index].isOpen = !faqs[index].isOpen;
	}

	let  closeAll = (event: any) => {
		
		
		faqs = faqs.map((faq: any) => ({...faq, isOpen: false}))
	}
</script>

<div class="container-section">
	<h1 class="title-gradient text-center w-max mx-auto mb-8 mt-8">FAQ</h1>
	<div class=" flex justify-center">
		<div
			class="w-4/5 flex flex-col gap-4"
			use:clickOutside
			on:click_outside={closeAll}
		>
			{#each faqs as { question, answer, isOpen }, index}
				<Question {question} {answer} {index} {isOpen} on:message={toggleFAQ} />
			{/each}
		</div>
	</div>
</div>

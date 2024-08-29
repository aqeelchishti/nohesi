<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import PaginationButton from '../../shared/paginationButton.svelte';

	const dispatch = createEventDispatcher();

	export let pagesCount: number = 10;
	export let currentPage: number = 1;
	export let small: boolean = false;

	$: pages = [...Array(pagesCount).keys()].map((i) => i + 1);

	let pageNumber: number = 1;
	let input: any;

	const getPages = (currentPage: number, pages: number[]) => {
		if (pages.length > 5) {
			const length = pages.length;
			if (currentPage < pages[length - 2]) {
				return [
					pages[0],
					currentPage === 1 ? pages[1] : pages.indexOf(currentPage + 1),
					'...',
					pages[length - 2],
					pages[length - 1]
				];
			} else if (currentPage === pages[length - 1]) {
				return [
					pages[0],
					pages.indexOf(currentPage - 1),
					'...',
					pages[length - 2],
					pages[length - 1]
				];
			} else {
				return [pages[0], pages.indexOf(currentPage), '...', pages[length - 2], pages[length - 1]];
			}
		} else {
			return [...pages];
		}
	};

	const handlePage = (event: any) => {
		let tempData = event.detail.data;

		if (tempData === 'CaretLeft') {
			currentPage = currentPage - 1;
			pageNumber = currentPage;
		} else if (tempData === 'CaretRight') {
			currentPage = currentPage + 1;
			pageNumber = currentPage;
		} else if (tempData === '...') {
			return;
		} else {
			currentPage = Number.parseInt(tempData);
			pageNumber = currentPage;
		}

		dispatch('pageChange', {
			page: currentPage
		});
	};

	const handleChange = () => {
		if (pages.includes(pageNumber)) {
			currentPage = pageNumber;
		} else {
			pageNumber = currentPage;
		}
	};

	const handleKeyPress = (event: any) => {
		if (event.key === 'Enter') {
			handleChange();
			input.blur();
		}
	};
	
	$: if(currentPage){
		pageNumber = currentPage
	}
	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div class="flex {small ? 'justify-end' : 'justify-center'} items-center gap-2">
	<PaginationButton
		title=""
		classes={''}
		icon={'CaretLeft'}
		{small}
		disabled={currentPage === 1}
		on:message={handlePage}
	/>
	{#if width >= 640 && !small}
		{#each getPages(currentPage, pages) as page}
			<PaginationButton
				title={page.toString()}
				classes={'text-content-primary'}
				active={page === currentPage}
				on:message={handlePage}
			/>
		{/each}
	{:else}
		<input
			type="number"
			class="bg-top-light-17 text-sm rounded-md py-2 px-3 border border-border focus:outline-none focus:border-content-tertiary text-content-primary text-center max-w-[60px] h-10"
			bind:value={pageNumber}
			on:change={handleChange}
			on:keyup={handleKeyPress}
			bind:this={input}
		/>
	{/if}
	<PaginationButton
		title=""
		classes={''}
		icon={'CaretRight'}
		disabled={currentPage === pages[pages.length - 1]}
		{small}
		on:message={handlePage}
	/>

	<slot name="dropdown" />
</div>

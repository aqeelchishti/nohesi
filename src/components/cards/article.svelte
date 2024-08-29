<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../shared/button.svelte';

	export let cardSize: 'lg' | 'md' | 'sm' = 'md';
	export let image: string;
	export let title: string;
	export let desc: string;
	export let date: string;
	export let tags: string[];
	export let id: number = 0;

	export let classes: string = '';

	const handleClick = (articleId: number) => {
		goto(`/article/${articleId}`);
	};
</script>

{#if cardSize === 'lg'}
	<div
		class={`${classes} flex flex-col justify-end p-2 pt-[13rem] bg-cover rounded-xl border border-border bg-no-repeat`}
		style="background-image: url('{image}');"
	>
		<div
			class="rounded-md border border-border p-4 bg-top-dark-83 backdrop-blur-16 flex flex-col shrink-0 gap-5 self-stretch"
		>
			<div class="flex flex-col gap-4 self-stretch">
				<p class="font-inter text-sm font-medium">{date}</p>
				<div class="flex gap-1 justify-start flex-wrap">
					{#each tags as tag}
						<p class="py-1 px-4 rounded-xs border border-border bg-top-dark-26">{tag}</p>
					{/each}
				</div>
				<h2 class="text-content-primary self-stretch">{title}</h2>
			</div>
			<p
				class="text-base text-content-secondary font-inter w-full lg:w-3/5 text-ellipsis line-clamp-2"
			>
				{desc}
			</p>
			<Button
				on:click={() => handleClick(id)}
				title="Read"
				font="roboto"
				classes={'uppercase !py-2 !px-7 rounded-sm bg-top-light-17 w-max text-content-primary !text-md hover:bg-top-light-38'}
			/>
		</div>
	</div>
{:else if cardSize === 'md'}
	<div
		class={`${classes} flex flex-col justify-start rounded-xl border border-border overflow-hidden`}
	>
		<div class="w-full h-56">
			<img src={image} alt="cdn" class="h-full w-full object-cover" />
		</div>
		<div
			class="p-4 bg-top-dark-83 backdrop-blur-16 flex flex-col w-full gap-6 self-stretch text-content-tertiary"
		>
			<div class="flex flex-col gap-2 self-stretch">
				<div class="flex flex-col gap-4 self-stretch">
					<p class="font-inter text-sm font-medium">{date}</p>
					<div class="flex gap-1 justify-start font-inter flex-wrap">
						{#each tags as tag}
							<p class="py-1 px-4 text-xs rounded-xs border border-border bg-top-dark-26">{tag}</p>
						{/each}
					</div>
					<p class="text-content-primary self-stretch font-inter text-xl font-semibold">{title}</p>
				</div>
				<p
					class="text-sm text-content-secondary font-inter w-full lg:w-3/5 text-ellipsis line-clamp-2"
				>
					{desc}
				</p>
			</div>
			<Button
				on:click={() => handleClick(id)}
				title="Read"
				font="roboto"
				classes={'uppercase !py-2 !px-7 rounded-sm bg-top-light-17 text-content-primary !text-md hover:bg-top-light-38 '}
			/>
		</div>
	</div>
{:else}
	<div class={`${classes} flex justify-start rounded-xl border border-border overflow-hidden`}>
		<div class="w-[35%]">
			<img src={image} alt="cdn" class="h-full object-cover" />
		</div>
		<div class="p-4 bg-top-dark-83 backdrop-blur-16 flex flex-col w-[65%] gap-7 self-stretch">
			<div class="flex flex-col gap-4 self-stretch">
				<p class="font-inter text-sm font-medium">{date}</p>
				<div class="flex gap-1 justify-start font-inter flex-wrap">
					{#each tags as tag}
						<p class="py-1 px-4 text-xs rounded-xs border border-border bg-top-dark-26">{tag}</p>
					{/each}
				</div>
				<p class="text-content-primary self-stretch font-inter text-xl font-semibold">{title}</p>
				<p
					class="text-sm text-content-secondary font-inter w-full lg:w-3/5 text-ellipsis line-clamp-2"
				>
					{desc}
				</p>
			</div>
			<Button
				on:click={() => handleClick(id)}
				title="Read"
				font="roboto"
				classes={'uppercase !py-2 !px-7 rounded-sm bg-top-light-17 w-max text-content-primary !text-md hover:bg-top-light-38 '}
			/>
		</div>
	</div>
{/if}

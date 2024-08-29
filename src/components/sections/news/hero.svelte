<script lang="ts">
	import { goto } from "$app/navigation";
	import OutlinedButton from "../../shared/outlinedButton.svelte";


    export let date:string;
    export let tags: string[];
    export let title: string;
    export let desc:string;

	const handleClick = () => {
		goto("/article/test")
	}
</script>

<div class="container-section rounded-xl overflow-hidden">
	<div
		class="flex flex-col justify-end pt-1/6 bg-cover bg-no-repeat rounded-xl"
		style="background-image: url('/images/car-3.png');"
	>
		<div
			class="rounded-md p-10 pt-20 bg-gradient-to-b from-top-dark-0 to-background flex flex-col shrink-0 gap-6 self-stretch"
		>
			<div class="flex flex-col gap-4 self-stretch">
				<p class="font-inter text-sm font-medium text-content-tertiary">{date}</p>
				<div class="flex gap-1 justify-start flex-wrap">
					{#each tags as tag}
						<p class="py-1 px-4 text-content-tertiary rounded-xs border border-border bg-top-dark-63">{tag}</p>
					{/each}
				</div>
				<h2 class="text-content-primary self-stretch">{title}</h2>
			</div>
			<p class="text-base text-content-secondary font-inter md:w-2/5 text-ellipsis line-clamp-2">
				{desc}
			</p>
			<OutlinedButton
				title="Read"
				font="roboto"
                size="md"
                classes={'w-max'}
				on:click={handleClick}
			/>
		</div>
	</div>
</div>

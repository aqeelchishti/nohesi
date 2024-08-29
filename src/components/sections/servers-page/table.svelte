<script lang="ts">
	import Icon from '../../shared/Icon.svelte';
	export let table: any;
	export let tableName: string;
</script>

<div class="">
	<p
		class="flex justify-start items-center py-2 rounded text-content-primary font-semibold text-lg font-inter gap-2"
	>
		{tableName}
	</p>
	{#each table as { url, rank, wheelRank, name, content, isrank, iswheelRank }}
		<div
			class="bg-top-dark-83 h-auto p-2 w-full border border-top-light-10 rounded-md flex justify-between items-center mb-2"
		>
			<div class="flex gap-2">
				<img src={url} alt="" class="w-11 h-11" />
				<div class="flex justify-start items-start text-content-primary flex-col">
					<div class="flex justify-start items-start gap-2 md:flex-row flex-col">
						{#if isrank}
							<div
								class="flex justify-center items-center bg-primary-orange-light px-3 py-1 rounded text-black font-semibold text-sm font-inter gap-1"
							>
								<Icon name="SmallLayer" width="12" height="16" />
								<p>#{rank}</p>
							</div>
						{/if}

						{#if iswheelRank}
							<div
								class="flex justify-center items-center bg-primary-red-light px-3 py-1 rounded text-black font-semibold text-sm font-inter gap-1"
							>
								<Icon name="SmallWheel" width="16" height="16" />
								<p>#{wheelRank}</p>
							</div>
						{/if}

						<div
							class="flex justify-center items-center py-1 rounded text-content-primary font-medium text-md font-inter gap-2"
						>
							<p>{name}</p>
							<img src="https://flagcdn.com/24x18/us.webp" alt="" />
						</div>
					</div>
					<p
						class="flex justify-center items-center py-1 rounded text-content-secondary font-medium text-md font-inter gap-2"
					>
						{content}
					</p>
				</div>
			</div>
			<div class="flex justify-center items-center">
				<Icon name="Dots" width="32" height="32" />
			</div>
		</div>
	{/each}
</div>

<script lang="ts">
	_
	import { createEventDispatcher } from "svelte";
	import Icon from "../../../shared/Icon.svelte";
	import Dropdown from "../../../shared/dropdown.svelte";
	import { goto } from "$app/navigation";
	import { _ } from "svelte-i18n";

	const dispatch = createEventDispatcher();

	export let regions: any = {
		values: $_('page.user.leaderboard.regions'),
		isOpen: false,
		active: "Europe"
	};

	export let filters = [
		{ name: $_('page.user.leaderboard.filters.0'), icon: "NohesiLogo16" },
		{ name: $_('page.user.leaderboard.filters.1'), icon: "Speedometer16" },
		{ name: $_('page.user.leaderboard.filters.2'), icon: "Wheel16" }
	];

	let tracks = ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"];

	export let activeFilter: string;

	const setActiveFilter = (filter: string) => {
		dispatch("message", {
			filter
		});
		if (width <= 350) {
			goto(`#${filter.replaceAll(" ", "-").toLowerCase()}`);
		}
	};

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div
	class="flex flex-col-reverse xs:flex-row justify-between items-baseline xs:items-center gap-4 xs:gap-0"
>
	<div class="block xs:hidden">
		{#if activeFilter === "Track times"}
			<Dropdown title="Track" options={tracks} />
		{/if}
	</div>
	<div
		class="flex items-center gap-1 w-full overflow-x-auto xs:hidden snap-x snap-mandatory scroll-smooth pb-2"
	>
		{#each filters as { name, icon }}
			<button
				class={`group text-content-secondary border border-border self-stretch font-inter rounded-sm p-2 px-3 text-sm flex items-center gap-2 ${
					name === activeFilter ? "bg-top-light-10" : "hover:bg-top-light-10 hover:border-icon"
				} transition-all duration-500 whitespace-nowrap snap-center scroll-mt-44`}
				on:click={() => setActiveFilter(name)}
				id={name.replaceAll(" ", "-").toLowerCase()}
			>
				<Icon
					name={icon}
					class={`${
						name === activeFilter ? "fill-icon-accent" : "fill-icon"
					} group-hover:fill-icon-accent transition-all duration-500`}
					width="16"
					height="16"
				/>
				{name}
			</button>
		{/each}
	</div>

	<div class="flex items-center gap-6">
		<div class="flex items-center gap-1 flex-1">
			<Dropdown options={regions.values} title={"Region"} icon="ned-flag" />
			<div class="hidden lg:flex items-center gap-1">
				{#each filters as { name, icon }}
					<button
						class={`group text-content-secondary border border-border self-stretch font-inter rounded-sm p-2 px-3 text-sm flex items-center gap-2 ${
							name === activeFilter ? "bg-top-light-10" : "hover:bg-top-light-10 hover:border-icon"
						} transition-all duration-500`}
						on:click={() => setActiveFilter(name)}
					>
						<Icon
							name={icon}
							class={`${
								name === activeFilter ? "fill-icon-accent" : "fill-icon"
							} group-hover:fill-icon-accent transition-all duration-500`}
							width="16"
							height="16"
						/>
						{name}
					</button>
				{/each}
			</div>
		</div>
		<div class="hidden lg:block">
			{#if activeFilter === "Track times"}
				<Dropdown title="Track" options={tracks} />
			{/if}
		</div>
	</div>

	<div class="relative w-full xs:w-max">
		<input
			type="text"
			name=""
			id=""
			placeholder="Search"
			class="bg-top-light-2 outline-none w-full rounded-sm border border-border text-content-tertiary py-2 px-4 pl-10 text-sm placeholder:text-content-tertiary focus:outline-none active:outline-none"
		/>
		<img src="/icons/MagnifyingGlass.svg" alt="cdn" class="absolute left-3 top-1/2 -translate-y-1/2" />
	</div>
</div>

<div class="hidden xs:flex items-center lg:hidden gap-3 flex-wrap">
	<div class="flex items-center gap-1">
		{#each filters as { name, icon }}
			<button
				class={`group text-content-secondary border border-border self-stretch font-inter rounded-sm p-2 px-3 text-sm flex items-center gap-2 ${
					name === activeFilter ? "bg-top-light-10" : "hover:bg-top-light-10 hover:border-icon"
				} transition-all duration-500 whitespace-nowrap`}
				on:click={() => setActiveFilter(name)}
			>
				<Icon
					name={icon}
					class={`${
						name === activeFilter ? "fill-icon-accent" : "fill-icon"
					} group-hover:fill-icon-accent transition-all duration-500`}
					width="16"
					height="16"
				/>
				{name}
			</button>
		{/each}
	</div>
	{#if activeFilter === "Track times"}
		<Dropdown title="Track" options={tracks} />
	{/if}
</div>

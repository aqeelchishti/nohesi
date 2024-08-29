<script lang="ts">
	import { _ } from "svelte-i18n";

	import Icon from "../../../shared/Icon.svelte";

    let optionsContainerToggle: boolean = false;
	let currentOption: string = '';

	const handleOptionsContainer = () => {
		optionsContainerToggle = !optionsContainerToggle;
	};

	let options = ['Track1', 'Track2', 'Track3'];

	const handleClick = (index: number) => {
		currentOption = options[index];
	};
</script>

<div class="relative self-stretch h-full">
    <button
        class="flex py-3.5 w-full px-4 gap-2 justify-between items-center rounded-sm border border-border bg-top-light-2 self-stretch"
        on:click={handleOptionsContainer}
        on:focusout={() => {
            setTimeout(() => {
                optionsContainerToggle = false;
            }, 100);
        }}
    >
        <p class="text-content-primary">{$_('page.user.profile.leaderboard.placeholder')}</p>
        {#if optionsContainerToggle}
            <Icon name="CaretUp" class="fill-icon" width="16" height="16" />
        {:else}
            <Icon name="CaretDown" class="fill-icon" width="16" height="16" />
        {/if}
    </button>

    <div
        class:hidden={!optionsContainerToggle}
        class="absolute right-0 opacity-100 text-content-secondary bg-background rounded-sm w-full border border-border backdrop-blur-16 z-20"
    >
        {#each options as tempOption, index}
            <button
                class="block px-4 py-2 bg-background opacity-100 hover:bg-top-light-10 w-full text-start text-sm"
                on:click={() => handleClick(index)}>{tempOption}</button
            >
        {/each}
    </div>
</div>
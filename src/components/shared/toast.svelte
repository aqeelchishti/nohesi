<script lang="ts">
	import { fade, fly } from 'svelte/transition';
	import Icon from './Icon.svelte';
	import { toastMsg } from '$lib/stores';

	export let top: string = 'top-0';
	export let left: string = 'left-0';
	export let right: string = 'right-0';
	export let classes: string = '';

	$: {
		if ($toastMsg.msg != '') {
			setTimeout(() => {
				

				toastMsg.set({
					msg: '',
					desc: '',
					icon: 'Success'
				});
			}, 10000);
		}
	}

	const hideToast = () => {
		toastMsg.set({
			msg: '',
			desc: '',
			icon: 'Success'
		});
	};

	$: borderColor = $toastMsg.icon === 'Success' ? 'border-green' : 'border-yellow'
	$: iconBg = $toastMsg.icon === 'Success'? 'bg-green-bg-surface' : 'bg-yellow-bg-surface'
</script>

{#if $toastMsg.msg !== ''}
	<button
		on:click={hideToast}
		in:fly|global={{ x: 200, duration: 500 }}
		out:fade|global
		class={`flex flex-col z-[51] w-80 gap-2 font-inter text-content-secondary bg-background fixed text-sm py-2 px-3 pl-5 rounded-md border-l-8 ${borderColor} ${top} ${left} ${right} ${classes}`}
	>
		<div class="flex gap-2 items-center">
			<div class="{iconBg} rounded-sm p-0.5">
				<Icon name={$toastMsg.icon} width="16" height="16" />
			</div>

			<p class="text-content-primary font-medium text-start">{$toastMsg.msg}</p>
		</div>
		<p class="text-left">{$toastMsg.desc}</p>
	</button>
{/if}

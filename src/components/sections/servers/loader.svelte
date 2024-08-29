<script lang="ts">
	import { onDestroy, onMount } from 'svelte';

	let progressValue = 0;
	export let time: number;

	let interval: NodeJS.Timeout;

	onMount(() => {
		interval = setInterval(() => {
			if (progressValue < 100) {
				progressValue += 100 / (time * 10);
			} else {
				progressValue = 0;
			}
		}, 100);
	});

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<svg class="progress-ring" width="30" height="30">
	<circle
		class="progress-ring__background"
		stroke="#333"
		stroke-width="3"
		fill="transparent"
		r="13"
		cx="15"
		cy="15"
	/>

	<text
		x="50%"
		y="55%"
		text-anchor="middle"
		dominant-baseline="middle"
		fill="#EEEDEE"
		font-size="13"
	>
		{Math.ceil(time - (time * progressValue) / 100)}
	</text>

	<circle
		class="progress-ring__circle"
		stroke="#eeedee"
		stroke-width="3"
		fill="transparent"
		r="13"
		cx="15"
		cy="15"
		stroke-dasharray={2 * Math.PI * 13}
		stroke-dashoffset={2 * Math.PI * 13 * (1 - progressValue / 100)}
	/>
</svg>

<style>
	.progress-ring__circle {
		transition: stroke-dashoffset 0.35s;
		transform: rotate(-90deg);
		transform-origin: 50% 50%;
	}
</style>

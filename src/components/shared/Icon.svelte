<script lang="ts">
	export let name: string;
	export let width = '24';
	export let height = '24';
	export let viewBox = '0 0 24 24';
</script>

<svg class={$$props.class} {width} {height} {viewBox}>
	<use href={`/icons/icons.svg#${name}`} />
</svg>

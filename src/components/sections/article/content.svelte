<script lang="ts">
	import { goto } from '$app/navigation';
	import Button from '../../shared/button.svelte';

    const handleClick = (event: any) => {
        goto('/news')
    }
</script>

<div class="px-9 grid grid-cols-4 max-w-screen-3xl mx-auto">
	<Button
		title={'Back to news'}
		icon={'ArrowLeft'}
		size="full"
		classes={'border border-border hover:border-border-light !px-5 uppercase text-content-primary w-max h-max !gap-3'}
		iconClasses={'w-8 sm:w-12 lg:w-auto'}
        on:click={handleClick}
	/>
	<div class="col-span-4 sm:w-4/5 mx-auto lg:col-span-2 ">
		<h3>Heading 1</h3>
		<p>
			Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a. Tempor nibh
			non nulla ornare orci amet est viverra. Nullam facilisis sed vulputate habitant. Eget sed
			massa consectetur quis volutpat massa lacus quis. Auctor arcu nibh libero facilisis
			ullamcorper. Felis pulvinar id placerat neque tortor porttitor euismod. Nibh ultricies
			ultrices et aenean tortor. Nulla tristique vel cursus nulla. Vitae condimentum quisque amet
			feugiat et in ornare neque cras. Malesuada enim egestas pellentesque sodales nulla nisl. Vitae
			et purus dolor morbi leo. Id diam dolor tempus orci.<br />Orci feugiat elementum arcu
			eleifend. Rhoncus sed elit aliquam quisque. Tempus elit ac tincidunt id enim feugiat posuere.
			Nunc id bibendum volutpat fermentum non arcu porttitor dis aliquam. Consequat sed quam turpis
			risus sit non bibendum sapien. Aliquam faucibus vitae volutpat sit. Consequat sit lectus
			libero ipsum vestibulum. Accumsan duis maecenas nunc lobortis phasellus. In maecenas neque
			eget enim. Euismod in risus scelerisque varius neque urna. Massa fames vitae eget massa
			viverra. Augue augue id cras sagittis. Mauris tortor facilisi tortor scelerisque accumsan.
		</p>
		<h4>Heading 2</h4>
		<p>
			Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a. Tempor nibh
			non nulla ornare orci amet est viverra. Nullam facilisis sed vulputate habitant. Eget sed
			massa consectetur quis volutpat massa lacus quis. Auctor arcu nibh libero facilisis
			ullamcorper. Felis pulvinar id placerat neque tortor porttitor euismod. Nibh ultricies
			ultrices et aenean tortor. Nulla tristique vel cursus nulla. Vitae condimentum quisque amet
			feugiat et in ornare neque cras. Malesuada enim egestas pellentesque sodales nulla nisl. Vitae
			et purus dolor morbi leo. Id diam dolor tempus orci.
		</p>
		<h5>Heading 3</h5>
		<p>
			Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a. Tempor nibh
			non nulla ornare orci amet est viverra. Nullam facilisis sed vulputate habitant. Eget sed
			massa consectetur quis volutpat massa lacus quis. Auctor arcu nibh libero facilisis
			ullamcorper. Felis pulvinar id placerat neque tortor porttitor euismod. Nibh ultricies
			ultrices et aenean tortor. Nulla tristique vel cursus nulla. Vitae condimentum quisque amet
			feugiat et in ornare neque cras. Malesuada enim egestas pellentesque sodales nulla nisl. Vitae
			et purus dolor morbi leo. Id diam dolor tempus orci.
		</p>
		<p class="block-text">
			Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a. Tempor nibh
			non nulla ornare orci amet est viverra. Nullam facilisis sed vulputate habitant. Eget sed
			massa consectetur quis volutpat massa lacus quis.
		</p>
		<h3>Heading 1</h3>
		<p>
			Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a. Tempor nibh
			non nulla ornare orci amet est viverra. Nullam facilisis sed vulputate habitant. Eget sed
			massa consectetur quis volutpat massa lacus quis. Auctor arcu nibh libero facilisis
			ullamcorper. Felis pulvinar id placerat neque tortor porttitor euismod. Nibh ultricies
			ultrices et aenean tortor. Nulla tristique vel cursus nulla. Vitae condimentum quisque amet
			feugiat et in ornare neque cras. Malesuada enim egestas pellentesque sodales nulla nisl. Vitae
			et purus dolor morbi leo. Id diam dolor tempus orci.
		</p>
		<img src="/images/car-4.png" alt="cdn" />
	</div>
</div>

<style lang="postcss">
	h3,
	h4,
	h5 {
		@apply text-content-primary;
	}
	h3 {
		@apply pt-10;
	}
	h4 {
		@apply pt-8;
	}
	h5 {
		@apply pt-7;
	}
	p {
		@apply text-content-secondary mt-6;
	}
    img {
        @apply rounded-xl border border-border mt-6
    }
    .block-text {
        @apply !text-content-primary font-medium pl-5 border-l-4 border-primary-violete-light
    }
</style>

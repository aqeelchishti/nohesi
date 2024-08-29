<script lang="ts">
	import { _ } from 'svelte-i18n';
	import viewport from '../../../actions/inView';
	import { createEventDispatcher, onMount } from 'svelte';
	import VioleteButton from '../../shared/violeteButton.svelte';

	export let activeStream: number;

	const dispatch = createEventDispatcher();

	const handleActiveStream = (streamNum: number) => {
		if (streamNum === 1) {
			container.scroll({
				top: 0,
				left: btn.scrollWidth,
				behavior: 'smooth'
			});
		} else {
			container.scroll({
				top: 0,
				left: -btn.scrollWidth,
				behavior: 'smooth'
			});
		}

		dispatch('setActiveStream', {
			streamNum
		});
		// activeStream.set(streamNum);
	};

	const handleEnterViewport = (streamNum: number) => {
		//

		if (width < 1440) {
			dispatch('setActiveStream', {
				streamNum
			});
		}
	};

	const map415 = async () => {
		dispatch('selectActive', {
			key: 'map',
			value: '415'
		});
	};

	let container: HTMLElement;
	let btn: HTMLElement;

	let width: number;
</script>

<svelte:window bind:innerWidth={width} />

<div class="flex flex-col gap-18 pt-6 container-section">
	<!-- <div class="flex flex-col gap-12 w-4/5 md:w-2/5 mx-auto text-center">
		<img
			class="w-[80%] lg:w-auto h-auto absolute top-16 xs:-top-12 sm:-top-32 lg:-top-56 left-1/2 -translate-x-1/2 -z-50"
			src="/images/serverspagegrid.svg"
			alt="globe"
		/>

		<h1 class="title-gradient">{$_('page.servers.title')}</h1>
		<h3 class="text-content-tertiary">{$_('page.servers.desc')}</h3>
	</div> -->
	<div class="flex justify-center w-full gap-6 pb-4" bind:this={container}>
		<!-- Map 415 -->
		<div class="h-[450px] sm:h-[629px] px-9 w-full">
			<div
				class="bg-map_415 self-stretch rounded-xl bg-cover bg-center bg-opacity-50 w-full h-full"
			>
				<div
					class="flex flex-col justify-center sm:justify-around gap-10 items-center w-full h-full"
				>
					<img src="/images/415_pattern.png" alt="pattern" />
					<div class="flex flex-col gap-5 text-content-primary font-roboto items-center">
						<h3 class="h3-title">by no hesi</h3>
						<h3 class="text-content-primary text-center">Highway perfection</h3>
					</div>
					<div class="flex flex-col items-center gap-4">
						<!-- <h5 class="text-content-primary text-center">Highway perfection</h5> -->
						<VioleteButton
							title="Explore now"
							font="roboto"
							size="md"
							on:click={map415}
							classes="max-sm:!text-xs max-sm:!px-4"
						/>
					</div>
				</div>
			</div>
		</div>
		<!-- <button
			on:click|preventDefault={() => {
				handleActiveStream(0);
			}}
			id={'0'}
			class={`flex flex-col w-full min-w-[70%] md:min-w-[80%] lg:min-w-[60%] 2xl:min-w-[42%] self-stretch justify-end rounded-xl border ${
				activeStream === 0 ? 'border-content-primary' : 'border-border'
			} pt-37 3xl:pt-48 overflow-hidden !bg-cover !bg-no-repeat !bg-clip-padding !snap-center relative !bg-center`}
			style={`background-image: url('https://cdn.nohesi.gg/assets/website/images/server-1.webp') `}
			use:viewport
			on:enterViewport={() => handleEnterViewport(0)}
			bind:this={btn}
		>
			<h4
				class={`pt-10 px-6 pb-5 w-full text-left ${
					activeStream === 0 ? 'text-content-primary' : 'text-content-tertiary'
				} bg-gradient-to-b from-top-dark-0 to-black`}
			>
				Assetto corsa
			</h4>
			<div
				class="absolute inset-0"
				class:hidden={activeStream == 0}
				class:block={activeStream != 0}
				style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)"
			/>
		</button> -->
		<!-- 
		<button
			on:click|preventDefault={() => {
				handleActiveStream(1);
			}}
			id={'1'}
			class={`flex flex-col w-full min-w-[70%] md:min-w-[80%] lg:min-w-[60%] 2xl:min-w-[42%] overflow-hidden self-stretch justify-end rounded-xl border ${
				activeStream === 1 ? 'border-content-primary' : 'border-border'
			} pt-37 3xl:pt-48 !bg-cover !bg-no-repeat !snap-center !bg-clip-padding relative`}
			style={`background-image: url('/images/bg-yt.png'); `}
			use:viewport
			on:enterViewport={() => handleEnterViewport(1)}
		>
			<h4
				class={`pt-10 px-6 w-full pb-5 text-left ${
					activeStream === 1 ? 'text-content-primary' : 'text-content-tertiary'
				} bg-gradient-to-b from-top-dark-0 to-black`}
			>
				Fivem
			</h4>
			<div class="absolute inset-0" class:hidden={activeStream == 1} class:block={activeStream != 1} style="background: linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 100%)"></div>
		</button> -->
	</div>
	<!-- <div class="-mt-16 container-section flex gap-3 justify-center items-center">
		<button
			class:bg-top-light-45={activeStream === 0}
			class:h-5={activeStream === 0}
			class="h-4 aspect-square rounded-full bg-top-light-17"
			on:click|preventDefault={() => {
				handleActiveStream(0);
			}}
		/>
		<button
			class:bg-top-light-45={activeStream === 1}
			class:h-5={activeStream === 1}
			class="h-4 aspect-square rounded-full bg-top-light-17"
			on:click|preventDefault={() => {
				handleActiveStream(1);
			}}
		/>
	</div> -->
</div>

<script>
	import Seo from '../../../components/shared/SEO.svelte';

	import VioleteButton from '../../../components/shared/violeteButton.svelte';

	const systemRequirements = [
		{ name: 'OS', detail: 'Windows 10 or Windows 11' },
		{ name: 'Processor', detail: 'Intel Core 7xxx / AMD Ryzen 2xxx (6 cores or higher)' },
		{ name: 'RAM', detail: '16GB of RAM or higher (32GB is HIGHLY recommended)' },
		{ name: 'GPU', detail: 'Nvidia GeForce GTX 1060 / AMD Radeon RX 580 or higher' },
		{ name: 'Storage', detail: '100GB SSD (50GB for the game and the rest for modded car packs)' }
	];

	let screenWidth = 0;
	let isLessThan1080 = false;
	let isLargerThan1200 = false;
	let isLessThan1200 = false;
	let isLessThan660 = false;
	let isLessThan580 = false;

	$: if (screenWidth < 1080) {
		isLessThan1080 = true;
	} else {
		isLessThan1080 = false;
	}

	$: if (screenWidth <= 1200) {
		isLessThan1200 = true;
	} else {
		isLessThan1200 = false;
	}

	$: if (screenWidth > 1200) {
		isLargerThan1200 = true;
	} else {
		isLargerThan1200 = false;
	}

	$: if (screenWidth < 660) {
		isLessThan660 = true;
	} else {
		isLessThan660 = false;
	}

	$: if (screenWidth < 580) {
		isLessThan580 = true;
	} else {
		isLessThan580 = false;
	}
</script>

<Seo title="Download Installer" />

<svelte:window bind:innerWidth={screenWidth} />

<section class="h-max pb-20">
	<div class="flex flex-row-reverse w-full !left-0 !right-0 bg-hero_gradient">
		<div
			class="absolute h-[640px] w-[54%] bg-cover bg-center bg-no-repeat bg-[url(/images/download-cover.png)]"
		>
			<div
				class="bg-hero_gradient before:absolute before:content-[''] before:inset-0 before:bg-[linear-gradient(0deg,#08060A,transparent),linear-gradient(90deg,#08060A,transparent)] before:w-full before:border-0 before:opacity-100"
			/>
		</div>
	</div>

	<div class="flex flex-col container-section w-full gap-8 px-2 pt-[120px]">
		<div
			class="{isLessThan1080 === true
				? 'hidden'
				: 'flex'} flex-row justify-start bg-[rgb(8,6,10)] rounded-xl h-[56px] w-fit border border-border gap-3 px-4 py-3 !z-20"
		>
			<div class="flex flex-row items-center gap-3">
				<img src="/icons/flag-pennant.svg" class="w-18 h-18 -mx-[20px]" alt="download-flag" />
				<div class="flex flex-row gap-1">
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-primary-violete-light" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-top-light-17" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-top-light-17" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-top-light-17" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-top-light-17" />
				</div>
			</div>
			<div class="flex flex-row items-center gap-3">
				<img src="/icons/download-database.svg" class="w-8 h-8" alt="download-flag" />
				<div class="flex flex-row gap-1">
					<span class="w-[173px] h-[6px] rounded-3xl bg-top-light-17" />
				</div>
			</div>
			<div class="flex flex-row items-center gap-3">
				<img src="/icons/download-steering-wheel.svg" class="w-8 h-8" alt="download-flag" />
				<div class="flex flex-row gap-1">
					<span class="w-[173px] h-[6px] rounded-3xl bg-top-light-17" />
				</div>
			</div>
			<div class="flex flex-row items-center gap-3">
				<img src="/icons/download-discord.svg" class="w-8 h-8" alt="download-flag" />
				<div class="flex flex-row gap-1">
					<span class="w-[173px] h-[6px] rounded-3xl bg-top-light-17" />
				</div>
				<img src="/icons/download-cube.svg" class="w-8 h-8" alt="download-flag" />
			</div>
		</div>

		<div class="flex flex-row flex-wrap gap-4 max-w-full items-center !z-20">
			<h6 class="h6-inter !leading-2 uppercase text-content-tertiary">TAKE YOUR FIRST STEP!</h6>
			<h6 class="h6-inter !leading-2 rounded-md px-3 py-2 bg-yellow">
				Average setup time is 15 minutes 😎
			</h6>
		</div>

		<div class="relative flex flex-row !z-20">
			<h3 class="text-content-primary z-10">1.1 Download <br /> Assetto Corsa</h3>
		</div>

		<div
			class="relative grid gap-6 lg:grid-rows-3 {isLessThan1200 === true
				? 'lg:grid-cols-2'
				: 'lg:grid-cols-3'} "
		>
			<div
				class="{isLessThan1200 === true
					? 'col-span-2 row-span-1'
					: 'col-span-1 row-span-1'} flex flex-col justify-between rounded-xl gap-3 backdrop-blur-16 py-[18px] px-5 border border-border bg-top-light-10"
			>
				<div class="flex flex-row gap-3 justify-normal">
					<img src="/icons/download-steam.svg" alt="staem" width="32px" height="32px" />
					<h4 class="h4-inter text-content-primary">Steam</h4>
				</div>
				<div class="flex flex-row justify-between items-center">
					<h5 class="-tracking-[0.5px] text-content-primary pt-[3px]">$10.49</h5>
					<VioleteButton
						classes="!rounded-sm !py-2 !px-7 !font-bold"
						title="Buy"
						size="sm"
						font="roboto"
						type="button"
					/>
				</div>
			</div>
			{#if isLargerThan1200 === false}
				<div
					class="{isLessThan1200 === true
						? 'col-span-2 row-span-2'
						: 'col-span-2 row-span-1'} col-span-2 row-span-1 grid grid-cols-2 {isLessThan580 ===
					true
						? 'grid-rows-4'
						: 'grid-rows-5'} gap-3"
				>
					<h6
						class="col-span-2 h6-inter !leading-2 text-content-primary pt-2 {isLessThan1200 === true
							? '!h-10'
							: ''}"
					>
						Affiliate Links
					</h6>
					<div
						class="{isLessThan580 === true
							? 'col-span-2 row-span-3'
							: 'col-span-1 row-span-4'} {isLessThan1200 === true
							? 'gap-4'
							: 'gap-0'} flex flex-col justify-between rounded-xl backdrop-blur-16 py-[18px] px-5 border border-border bg-top-light-10"
					>
						<div
							class="flex {isLessThan1200 === true
								? 'flex-row flex-nowrap'
								: 'flex-col flex-wrap'} gap-3"
						>
							<img
								src="/icons/download-affiliate-icon-1.svg"
								width="24px"
								height="24px"
								alt="affiliate-1"
							/>
							<h5 class="h5-inter text-content-primary">Instant Gaming</h5>
						</div>
						<div class="flex flex-col flex-wrap gap-3">
							<h5 class="-tracking-[0.5px] text-content-primary pt-[3px]">$10.49</h5>
							<VioleteButton
								classes="!rounded-sm w-full !py-2 !px-7 !font-bold"
								title="Buy"
								size="sm"
								font="roboto"
								type="button"
							/>
						</div>
					</div>
					<div
						class="{isLessThan580 === true
							? 'col-span-2 row-span-3'
							: 'col-span-1 row-span-4'} flex flex-col {isLessThan1200 === true
							? 'gap-4'
							: 'gap-0'} justify-between rounded-xl backdrop-blur-16 py-[18px] px-5 border border-border bg-top-light-10"
					>
						<div
							class="flex {isLessThan1200 === true
								? 'flex-row flex-nowrap'
								: 'flex-col flex-wrap'} gap-3"
						>
							<img src="/icons/download_g2a.svg" width="24px" height="24px" alt="affiliate-2" />
							<h5 class="h5-inter text-content-primary">G2A</h5>
						</div>
						<div class="flex flex-col flex-wrap gap-3">
							<h5 class="-tracking-[0.5px] text-content-primary pt-[3px]">$10.49</h5>
							<VioleteButton
								classes="!rounded-sm w-full !py-2 !px-7 !font-bold"
								title="Buy"
								size="sm"
								font="roboto"
								type="button"
							/>
						</div>
					</div>
				</div>
			{/if}
			<div
				class=" col-span-2 row-span-3 flex flex-col rounded-xl gap-10 backdrop-blur-16 py-[18px] px-5 border border-border bg-top-light-10"
			>
				<h2 class="h2-inter text-content-primary md:!leading-[56px]">
					Recommended Minimum<br /> System requirements
				</h2>
				<div class="grid grid-cols-6 grid-rows-5 gap-4 pb-1">
					{#each systemRequirements as requirement}
						<div class={isLessThan580 === true ? 'col-span-2' : 'col-span-1'}>
							<h6
								class="{isLessThan660 === true
									? '!text-md'
									: ''} h6-inter font-medium text-content-tertiary"
							>
								{requirement.name}:
							</h6>
						</div>

						<div class={isLessThan580 === true ? 'col-span-4' : 'col-span-5'}>
							<p
								class="{isLessThan660 === true
									? '!text-md'
									: ''} h6-inter font-normal text-content-primary"
							>
								{requirement.detail}:
							</p>
						</div>
					{/each}
				</div>
			</div>
			{#if isLargerThan1200 === true}
				<div class="col-span-1 row-span-2 grid grid-cols-2 grid-rows-8 gap-3">
					<h6 class="col-span-2 row-span-1 h6-inter !leading-2 text-content-primary">
						Affiliate Links
					</h6>
					<div
						class="col-span-1 row-span-7 flex flex-col justify-between rounded-xl backdrop-blur-16 py-[18px] px-5 border border-border bg-top-light-10"
					>
						<div class="flex flex-col flex-wrap gap-3">
							<img
								src="/icons/download-affiliate-icon-1.svg"
								width="24px"
								height="24px"
								alt="affiliate-1"
							/>
							<h5 class="h5-inter text-content-primary">Instant<br /> Gaming</h5>
						</div>
						<div class="flex flex-col flex-wrap gap-3">
							<h5 class="-tracking-[0.5px] text-content-primary pt-[3px]">$10.49</h5>
							<VioleteButton
								classes="!rounded-sm w-full !py-2 !px-7 !font-bold"
								title="Buy"
								size="sm"
								font="roboto"
								type="button"
							/>
						</div>
					</div>
					<div
						class="col-span-1 row-span-7 flex flex-col justify-between rounded-xl backdrop-blur-16 py-[18px] px-5 border border-border bg-top-light-10"
					>
						<div class="flex flex-col flex-wrap gap-3">
							<img src="/icons/download_g2a.svg" width="24px" height="24px" alt="affiliate-2" />
							<h5 class="h5-inter text-content-primary">G2A</h5>
						</div>
						<div class="flex flex-col flex-wrap gap-3">
							<h5 class="-tracking-[0.5px] text-content-primary pt-[3px]">$10.49</h5>
							<VioleteButton
								classes="!rounded-sm w-full !py-2 !px-7 !font-bold"
								title="Buy"
								size="sm"
								font="roboto"
								type="button"
							/>
						</div>
					</div>
				</div>
			{/if}
		</div>
		<div class="relative flex flex-row-reverse !z-20 -mt-1">
			<a
				href="/get-started/download-content-manager"
				class="flex btn-xs font-roboto !bg-primary-violete text-content-primary shadow-violete1 !text-md uppercase slnt-10 !p-4 !px-7 hover:shadow-violete2 hover:violete-gradient !rounded-md !font-bold non-italic transition-all duration-300 justify-center whitespace-nowrap"
				>Continue</a
			>
		</div>
	</div>
</section>

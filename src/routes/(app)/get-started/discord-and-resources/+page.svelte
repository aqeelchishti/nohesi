<script>
	let screenWidth = 0;
	let isMediumScreen = false;

	$: if (screenWidth <= 1080) {
		isMediumScreen = true;
	} else {
		isMediumScreen = false;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<section class="container-section h-max pb-20">
	<div class="flex flex-col w-full gap-8 px-2 pt-[120px]">
		<div
			class="{isMediumScreen
				? 'hidden'
				: 'flex'} flex-row justify-start bg-[rgb(8,6,10)] rounded-xl h-[56px] w-fit border border-border gap-3 px-4 py-3 !z-20"
		>
			<div class="flex flex-row items-center gap-3">
				<img src="/icons/flag-pennant.svg" class="w-18 h-18 -mx-[20px]" alt="download-flag" />
				<div class="flex flex-row gap-1">
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-primary-violete-light" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-primary-violete-light" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-primary-violete-light" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-primary-violete-light" />
					<span class="w-[31.4px] h-[6px] rounded-3xl bg-primary-violete-light" />
				</div>
			</div>
			<div class="flex flex-row items-center gap-3">
				<img
					src="/icons/download-database-active.svg"
					class="w-18 h-18 -mx-[20px]"
					alt="download-flag"
				/>
				<div class="flex flex-row gap-1">
					<span class="w-[173px] h-[6px] rounded-3xl bg-primary-violete-light" />
				</div>
			</div>
			<div class="flex flex-row items-center gap-3">
				<img
					src="/icons/steeringwheel-active.svg"
					class="w-18 h-18 -mx-[20px]"
					alt="download-flag"
				/>
				<div class="flex flex-row gap-1">
					<span
						class="w-[173px] h-[6px] rounded-3xl bg-[linear-gradient(90deg,rgba(177,48,255,1),rgba(88,101,242,1))]"
					/>
				</div>
			</div>
			<div class="flex flex-row items-center gap-3">
				<img
					src="/icons/download-discord-active.svg"
					class="w-18 h-18 -mx-[20px]"
					alt="download-flag"
				/>
				<div class="flex flex-row gap-1">
					<span class="w-[173px] h-[6px] rounded-3xl bg-top-light-17" />
				</div>
				<img src="/icons/download-cube.svg" class="w-8 h-8" alt="download-flag" />
			</div>
		</div>

		<div
			class="relative flex flex-col lg:flex-row w-full justify-normal lg:justify-between gap-20 lg:gap-0"
		>
			<div class="relative flex flex-col gap-8 !z-20 w-full">
				<h3 class="text-content-primary z-10">4. Discord & Resources</h3>
				<div
					class="w-full justify-center rounded-lg border-[0.75px] border-border py-[100px] px-16 bg-top bg-discordsize bg-repeat bg-[rgba(136,0,240,1)] bg-[url('/images/discord-bg.png')]"
				>
					<h1 class="text-[rgba(255,255,255,1)] text-center">JOIN DISCORD SERVER</h1>
				</div>
				<div class="w-full justify-center py-4 px-6">
					<h2 class="text-content-secondary text-center">
						Here you'll find support in our Help channels, plus all the latest updates, votes, and
						announcements about No Hesi
					</h2>
				</div>
			</div>
		</div>

		<div class="relative flex flex-row-reverse gap-3 !z-20 -mt-1">
			<a
				href="/get-started/vip-setup-and-benefits"
				class="flex btn-xs font-roboto !bg-primary-violete text-content-primary shadow-violete1 !text-md uppercase slnt-10 !p-4 !px-7 hover:shadow-violete2 hover:violete-gradient !rounded-md !font-bold non-italic transition-all duration-300 justify-center whitespace-nowrap"
				>Continue</a
			>
			<a
				href="/get-started/gameplay"
				class="flex btn-md font-roboto border border-content-tertiary text-content-primary !text-md uppercase slnt-10 !p-4 disabled:border-transparent disabled:bg-top-light-10 disabled:text-content-tertiary !px-7 hover:!border-content-secondary hover:bg-top-light-17 w-max non-italic transition-all duration-300 justify-center whitespace-nowrap"
				>Back</a
			>
		</div>
	</div>
</section>

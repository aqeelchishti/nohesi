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

		<div
			class="relative flex flex-col lg:flex-row w-full justify-normal lg:justify-between gap-20 lg:gap-0"
		>
			<div class="relative flex flex-col gap-8 !z-20 w-full lg:w-2/5">
				<h3 class="text-content-primary z-10">1.2 Download <br /> Content Manager</h3>
				<div class="flex flex-col gap-3">
					<h3 class="h3-inter text-content-primary normal-case">Step 1</h3>
					<h6 class="h6-inter font-normal text-content-primary">
						Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a. Tempor
						nibh non nulla ornare orci amet est viverra. Nullam facilisis sed vulputate habitant.
						Eget sed massa consectetur quis volutpat massa lacus quis.
					</h6>
					<img
						src="/images/download-step-2.png"
						class="rounded-xl border border-border mt-3"
						alt="step-1"
					/>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="h3-inter text-content-primary normal-case">Step 2</h3>
					<h6 class="h6-inter font-normal text-content-primary">
						Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a.
					</h6>
				</div>
				<div class="flex flex-col gap-3">
					<h3 class="h3-inter text-content-primary normal-case">Step 3</h3>
					<h6 class="h6-inter font-normal text-content-primary">
						Elit nec in arcu quisque. Egestas elit turpis mauris morbi blandit sed gravida a.
					</h6>
				</div>
			</div>

			<div class="relative flex flex-col !z-20 w-full lg:w-[45%] lg:pt-7">
				<div class="flex flex-col gap-3 rounded-xl border border-border h-[399px]">
					<iframe
						src="https://www.youtube.com/embed/EXNTOOeJdMM?si=m8tZoQexg_d3efzV"
						class="rounded-xl"
						title="YouTube video player"
						height="399px"
						frameborder="0"
						allow="accelerometer; clipboard-write; encrypted-media; gyroscope;"
						referrerpolicy="strict-origin-when-cross-origin"
						allowfullscreen={false}
					/>
				</div>
			</div>
		</div>

		<div class="relative flex flex-row-reverse gap-3 !z-20 -mt-1">
			<a
				href="/get-started/download-custom-shaders-patch"
				class="flex btn-xs font-roboto !bg-primary-violete text-content-primary shadow-violete1 !text-md uppercase slnt-10 !p-4 !px-7 hover:shadow-violete2 hover:violete-gradient !rounded-md !font-bold non-italic transition-all duration-300 justify-center whitespace-nowrap"
				>Continue</a
			>
			<a
				href="/get-started"
				class="flex btn-md font-roboto border border-content-tertiary text-content-primary !text-md uppercase slnt-10 !p-4 disabled:border-transparent disabled:bg-top-light-10 disabled:text-content-tertiary !px-7 hover:!border-content-secondary hover:bg-top-light-17 w-max non-italic transition-all duration-300 justify-center whitespace-nowrap"
				>Back</a
			>
		</div>
	</div>
</section>

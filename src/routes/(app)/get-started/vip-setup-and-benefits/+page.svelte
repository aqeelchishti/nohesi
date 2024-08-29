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
					<span
						class="w-[173px] h-[6px] rounded-3xl bg-[linear-gradient(90deg,rgba(88,101,242,1),rgba(255,114,95,1))]"
					/>
				</div>
				<img
					src="/icons/download-cube-active.svg"
					class="w-18 h-18 -mx-[20px]"
					alt="download-flag"
				/>
			</div>
		</div>

		<div
			class="relative flex flex-col lg:flex-row w-full justify-normal lg:justify-between gap-20 lg:gap-0"
		>
			<div class="relative flex flex-col gap-8 !z-20 w-full lg:w-2/5">
				<h3 class="text-content-primary z-10">4. VIP Setup& Benefits</h3>
				<div class="flex flex-col gap-3">
					<h6 class="h6-inter font-normal text-content-primary">
						Eget at ut euismod elementum non. Gravida tristique aliquet pellentesque leo etiam magna
						pulvinar ullamcorper sit.
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

		<!-- Plans -->
		<div class="flex flex-col justify-center items-center gap-16" id="plans">
			<div class="grid lg:grid-cols-4 md:grid-cols-2 gap-4 md:gap-4 xl:gap-1 items-end w-full">
				<div class="hidden xl:flex flex-col px-3 pb-8">
					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Access to Help and Help FAQ
					</p>
					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Monthly Public Car Updates
					</p>
					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Access to 20+ Public Servers
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						VIP slots on public servers
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						VlP-Only 'Public Pack' Servers
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						VIP Alternative and Drift Servers
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						JDM, VTEC, Manual and Drag Servers
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						ln-game Badges
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Exclusive Cars in Spec Servers
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Exclusive Cars in Public Servers
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Complete Server Access
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Weekly Fresh Content
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Early Access to Exclusive Content
					</p>

					<p class="text-sm font-medium text-content-secondary pt-3 pb-4 border-b border-border">
						Collaborative Community Access
					</p>
				</div>

				<div
					class="self-stretch relative border rounded-xl border-border flex flex-col gap-8 pb-8 bg-top-light-10"
				>
					<div
						class="flex flex-col gap-5 self-stretch p-3 rounded-xl border h-[213px] bg-top-light-10 border-content-secondary"
					>
						<div class="flex justify-start items-center gap-2 -translate-x-2">
							<div class="fill-content-primary shadow-plan1">
								<img
									src="/icons/tier1-cube.svg"
									alt="tier"
									class="fill-content-primary shadow-plan1 ml-2"
									width="24px"
									height="24px"
								/>
							</div>

							<p class="text-md uppercase text-content-tertiary font-bold font-roboto slnt-10">
								Tier 1
							</p>
						</div>
						<div class="flex flex-col gap-1 self-stretch">
							<h6 class="h6-inter text-content-primary font-semibold">Public+</h6>
							<p class="h6-inter text-content-secondary font-medium">
								<span class="h3-inter self-stretch title-gradient font-semibold">$2.99</span>
								<span>/month</span>
							</p>
						</div>
						<div class="md:h-9">
							<button
								class="btn-md font-roboto uppercase w-full !py-3 !px-7 !font-medium flex justify-center whitespace-nowrap !text-md non-italic transition-all duration-300 bg-top-light-38 text-content-primary hover:bg-top-light-45"
								type="button">Subscribe Now</button
							><!--<PlanButton>-->
						</div>
					</div>
					<div class="flex flex-col px-4 gap-5 self-stretch text-content-primary">
						<h6 class="h6-inter font-semibold h-12 flex justify-center items-center text-center">
							Get a taste
						</h6>
						<div class="flex flex-col self-stretch items-center justify-center">
							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>
						</div>
					</div>
				</div>

				<div
					class="self-stretch relative border rounded-xl border-border flex flex-col gap-8 pb-8 bg-primary-orange-bg-surface"
				>
					<div
						class="flex flex-col gap-5 self-stretch p-3 rounded-xl border h-[213px] bg-primary-orange-bg-surface border-primary-orange"
					>
						<div class="flex justify-start items-center gap-2 -translate-x-2">
							<div class="fill-primary-orange-light shadow-plan2">
								<img
									src="/icons/tier2-cube.svg"
									alt="tier"
									class="fill-primary-orange-light shadow-plan2 ml-2"
									width="24px"
									height="24px"
								/>
							</div>

							<p class="text-md uppercase text-content-tertiary font-bold font-roboto slnt-10">
								Tier 2
							</p>
						</div>
						<div class="flex flex-col gap-1 self-stretch">
							<h6 class="h6-inter text-content-primary font-semibold">Midnight</h6>
							<p class="h6-inter text-content-secondary font-medium">
								<span class="h3-inter self-stretch title-gradient font-semibold">$6.99</span>
								<span>/month</span>
							</p>
						</div>
						<div class="md:h-9">
							<button
								class="btn-md font-roboto uppercase w-full !py-3 !px-7 !font-medium flex !text-md non-italic transition-all duration-300 justify-center whitespace-nowrap bg-content-primary text-background hover:shadow-white"
								type="button">Free 7 days trial</button
							><!--<PlanButton>-->
						</div>
					</div>
					<div class="flex flex-col px-4 gap-5 self-stretch text-content-primary">
						<h6 class="h6-inter font-semibold h-12 flex justify-center items-center text-center">
							Amplify your experience
						</h6>
						<div class="flex flex-col self-stretch items-center justify-center">
							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>
						</div>
					</div>
				</div>

				<div
					class="self-stretch relative border rounded-xl border-border flex flex-col gap-8 pb-8 bg-primary-red-bg-top"
				>
					<div
						class="flex flex-col gap-5 self-stretch p-3 rounded-xl border h-[213px] bg-primary-red-bg-top border-primary-red-bg-top"
					>
						<div class="flex justify-start items-center gap-2 -translate-x-2">
							<div class="fill-primary-red-light shadow-plan3">
								<img
									src="/icons/tier3-cube.svg"
									alt="tier"
									class="fill-primary-red-light shadow-plan3 ml-2"
									width="24px"
									height="24px"
								/>
							</div>

							<p class="text-md uppercase text-content-tertiary font-bold font-roboto slnt-10">
								Tier 3
							</p>
						</div>
						<div class="flex flex-col gap-1 self-stretch">
							<h6 class="h6-inter text-content-primary font-semibold">Underground</h6>
							<p class="h6-inter text-content-secondary font-medium">
								<span class="h3-inter self-stretch title-gradient font-semibold">$10.99</span>
								<span>/month</span>
							</p>
						</div>
						<div class="md:h-9">
							<button
								class="btn-md font-roboto uppercase w-full !py-3 !px-7 !font-medium flex justify-center whitespace-nowrap !text-md non-italic transition-all duration-300 bg-top-light-38 text-content-primary hover:bg-top-light-45"
								type="button">Subscribe Now</button
							><!--<PlanButton>-->
						</div>
					</div>
					<div class="flex flex-col px-4 gap-5 self-stretch text-content-primary">
						<h6 class="h6-inter font-semibold h-12 flex justify-center items-center text-center">
							Reach new limits
						</h6>
						<div class="flex flex-col self-stretch items-center justify-center">
							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>

							<div class="pt-3 pb-4 border-b border-border flex justify-center items-center w-full">
								<svg
									width="20"
									height="20"
									viewBox="0 0 20 20"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									class="fill-content-primary"
									><g id="CheckFat"
										><path
											id="Vector"
											d="M19.0107 7.10235L8.97872 17.1336C8.86264 17.2497 8.72483 17.3418 8.57315 17.4046C8.42148 17.4675 8.25891 17.4998 8.09473 17.4998C7.93056 17.4998 7.76799 17.4675 7.61631 17.4046C7.46464 17.3418 7.32683 17.2497 7.21075 17.1336L1.61544 11.5086C1.38143 11.2742 1.25 10.9566 1.25 10.6254C1.25 10.2942 1.38143 9.97656 1.61544 9.7422L3.49044 7.8672C3.72405 7.63352 4.04069 7.50185 4.37111 7.50097C4.70153 7.50009 5.01886 7.63008 5.25372 7.86251L8.11622 10.618L8.12481 10.6266L15.3693 3.48829C15.6036 3.255 15.9208 3.12402 16.2514 3.12402C16.582 3.12402 16.8991 3.255 17.1334 3.48829L19.0084 5.32892C19.1255 5.44494 19.2185 5.58297 19.282 5.73507C19.3455 5.88716 19.3783 6.05032 19.3785 6.21515C19.3788 6.37998 19.3464 6.54322 19.2833 6.69548C19.2201 6.84775 19.1275 6.98602 19.0107 7.10235Z"
										/></g
									></svg
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		<div class="relative flex flex-row-reverse gap-3 !z-20 -mt-1">
			<a
				href="/"
				class="flex btn-xs font-roboto !bg-primary-violete text-content-primary shadow-violete1 !text-md uppercase slnt-10 !p-4 !px-7 hover:shadow-violete2 hover:violete-gradient !rounded-md !font-bold non-italic transition-all duration-300 justify-center whitespace-nowrap"
				>Finish</a
			>
			<a
				href="/get-started/discord-and-resources"
				class="flex btn-md font-roboto border border-content-tertiary text-content-primary !text-md uppercase slnt-10 !p-4 disabled:border-transparent disabled:bg-top-light-10 disabled:text-content-tertiary !px-7 hover:!border-content-secondary hover:bg-top-light-17 w-max non-italic transition-all duration-300 justify-center whitespace-nowrap"
				>Back</a
			>
		</div>
	</div>
</section>

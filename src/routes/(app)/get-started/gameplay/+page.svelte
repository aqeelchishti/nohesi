<script>
	let screenWidth = 0;
	let isMediumScreen = false;
	let isLessThan910 = false;
	let isLessThan750 = false;
	let isLessThan1200 = false;

	$: if (screenWidth <= 1200) {
		isLessThan1200 = true;
	} else {
		isLessThan1200 = false;
	}

	$: if (screenWidth <= 1080) {
		isMediumScreen = true;
	} else {
		isMediumScreen = false;
	}

	$: if (screenWidth < 910) {
		isLessThan910 = true;
	} else {
		isLessThan910 = false;
	}

	$: if (screenWidth < 750) {
		isLessThan750 = true;
	} else {
		isLessThan750 = false;
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

		<div class="relative flex flex-col w-full justify-normal lg:justify-between gap-20 lg:gap-0">
			<div class="relative flex flex-col gap-8 !z-20 w-full">
				<h3 class="text-content-primary z-10">3. Basic Gameplay</h3>

				<div
					class="flex {isLessThan910 === true
						? 'flex-col'
						: 'flex-row'} justify-between h-full w-full"
				>
					<div
						class="relative {isLessThan910 === true
							? 'w-full'
							: 'w-[78%]'} h-full {isLessThan910 === true
							? 'p-4 rounded-[32px]'
							: 'p-8 rounded-[56px]'} border bg-[radial-gradient(100%_287.43%_at_0%_0%,#1F1F1F_0%,#0B0B0B_100%)] shadow-[0px_2px_2px_0px_rgba(255,255,255,0.25)_inset,0px_-4px_2px_0px_rgba(0,0,0,1)_inset] z-10"
					>
						<video
							class="w-full h-full rounded-3xl"
							width="960px"
							height="540px"
							autoplay
							muted
							loop
						>
							<source src="/video/Bigtrain3.webm" type="video/mp4" />
						</video>
						<!--
						<img
							src="/images/get-started-basic-gameplay.png"
							class="w-full h-full rounded-3xl"
							alt="gameplay"
						/>
                        -->
						{#if isLessThan750 === false}
							<div
								class="absolute h-auto w-auto flex flex-col justify-between {isLessThan910 === true
									? 'm-4 p-4'
									: 'm-8 p-5'} inset-0"
							>
								<div class="flex flex-row w-full h-auto justify-between">
									<div class="flex flex-col gap-[6px]">
										<p
											class="font-roboto font-bold text-sm uppercase text-content-primary !leading-[14px] mt-[2px] px-[5px] self-start"
										>
											PB
										</p>
										<div
											class="justify-center gap-[2px] py-[3px] px-3 ml-1 bg-[rgba(8,6,10,0.83)] skew-x-[-15deg]"
										>
											<p
												class="font-roboto font-bold text-sm uppercase pt-[1px] text-content-primary skew-x-[15deg]"
											>
												1,096,454
											</p>
										</div>
										<div
											class="flex flex-row justify-center items-center rounded-sm uppercase gap-[2px] py-[2px] pr-1 pl-[2px] bg-[rgba(8,6,10,0.44)]"
										>
											<img src="/icons/nohesi-gameplay.svg" class="size-3" alt="nohesi-gameplay" />
											<p
												class="font-roboto font-[740] text-[10.5px] leading-[12px] pt-[1px] text-content-secondary"
											>
												#13905 place
											</p>
										</div>
									</div>
									<div class="flex flex-col gap-2.5">
										<img
											src="/images/gameplay-screen-frame.png"
											class="{isLessThan1200 === true ? 'w-[80%]' : 'w-full'} self-center"
											alt="frame1"
										/>
										<div
											class="justify-center self-center gap-[2px] py-[6px] px-3 ml-1 bg-[linear-gradient(70deg,rgba(177,48,255,0.87)_49.51%,rgba(238,237,238,0.87)_54.66%,rgba(238,237,238,0.87)_100%)] skew-x-[-20deg]"
										>
											<h6
												class="!font-roboto !font-[1000] italic !text-[16px] !leading-[16px] text-[rgba(8,6,10,1)] uppercase skew-x-[20deg] tracking-wide"
											>
												1,096 pts
											</h6>
										</div>
										<div class="flex flex-row gap-1 self-center">
											<div
												class="flex flex-col justify-center items-center rounded-none gap-1 py-[6px] px-2.5 bg-[rgba(8,6,10,0.63)]"
											>
												<h6
													class="font-roboto !font-black !text-[12.5px] uppercase !leading-[14px] text-content-secondary tracking-wide"
												>
													99.999x
												</h6>
												<p
													class="font-inter font-semibold text-xxs text-content-primary normal-case tracking-wide"
												>
													Combo
												</p>
											</div>
											<div
												class="flex flex-col justify-center items-center rounded-none gap-1 py-[6px] px-2.5 bg-[rgba(8,6,10,0.63)]"
											>
												<h6
													class="font-roboto !font-black !text-[12.5px] uppercase !leading-[14px] text-content-secondary tracking-wide"
												>
													3,2x
												</h6>
												<p
													class="font-inter font-semibold text-xxs text-content-primary normal-case tracking-wide"
												>
													Speed
												</p>
											</div>
											<div
												class="flex flex-col justify-center items-center rounded-none gap-1 py-[6px] px-2.5 bg-[rgba(8,6,10,0.63)]"
											>
												<h6
													class="font-roboto !font-black !text-[12.5px] uppercase !leading-[14px] text-content-secondary tracking-wide"
												>
													3x
												</h6>
												<p
													class="font-inter font-semibold text-xxs text-content-primary normal-case tracking-wide"
												>
													Proximity
												</p>
											</div>
										</div>
										<div class="flex flex-row self-center gap-[52px]">
											<h5
												class="font-roboto !font-[1000] !text-[24px] !leading-[28px] uppercase text-center text-content-secondary drop-shadow-[0.5px_0.5px_3px_0px_rgba(0,0,0,0.35)] tracking-wide rounded-3xl border-[1.5px] border-content-primary bg-transparent shadow-[0.5px_0.5px_3px_0px_rgba(0,0,0,0.35)] py-[6px] px-5"
											>
												1x
											</h5>

											<div class="flex flex-col justify-center items-center">
												<img src="/icons/gameplay-mask-group.svg" alt="mask-group" />
											</div>
										</div>
									</div>

									<div class="flex flex-col gap-[6px]">
										<div class="bg-[rgba(8,6,10,0.26)] rounded-sm px-2.5 py-1">
											<img src="/icons/gamplay-nohesi-logo.svg" class="" alt="gamplay-nohesi" />
										</div>
									</div>
								</div>

								<div class="flex flex-row h-auto justify-start w-2/6">
									<div
										class="flex flex-col rounded-sm border-[0.5px] border-[rgba(255,255,255,0.05)] bg-[rgba(8,6,10,1)] w-full"
									>
										<div
											class="flex flex-row justify-between border-b-[0.5px] border-[rgb(255,255,255,0.05)] pb-1 px-2.5 pt-[4.5px]"
										>
											<p
												class="text-content-primary font-inter font-medium text-[7px] leading-[10px]"
											>
												Chat
											</p>
											<div class="flex flex-row gap-1 justify-center">
												<img
													src="/icons/gameplay-chat-gearsix.svg"
													width="8px"
													height="8px"
													alt="chat-setting"
												/>
												<img
													src="/icons/gameplay-caret-up.svg"
													width="8px"
													height="8px"
													alt="chat-caret"
												/>
												<img
													src="/icons/gameplay-chat-close.svg"
													width="8px"
													height="8px"
													alt="chat-close"
												/>
											</div>
										</div>
										<div class="flex flex-row gap-[6px] justify-between pb-[6px] pt-[2px] px-2.5">
											<div
												class="flex flex-row rounded-[2px] border-[0.5px] border-[rgba(255,255,255,0.05)] w-[82%]"
											>
												<input
													type="text"
													class="pl-2 pr-1 py-1 bg-top-light-2 font-inter font-normal text-[7px] leading-[10px] w-full"
													placeholder="Type new message..."
												/>
												<img
													src="/icons/gameplay-chat-paper-plane.svg"
													class="bg-top-light-2 pr-1"
													width="12px"
													alt="send-message"
												/>
											</div>
											<div class="flex flex-row gap-[2px] justify-center">
												<img
													src="/icons/gameplay-smiley.svg"
													width="10px"
													height="10px"
													alt="chat-setting"
												/>
												<img
													src="/icons/gameplay-paperclip.svg"
													width="10px"
													height="10px"
													alt="chat-caret"
												/>
												<img
													src="/icons/gameplay-lightning.svg"
													width="10px"
													height="10px"
													alt="chat-close"
												/>
												<img
													src="/icons/gameplay-usersthree.svg"
													width="10px"
													height="10px"
													alt="chat-close"
												/>
											</div>
										</div>
									</div>
								</div>
							</div>
						{/if}
					</div>

					<div
						class="h-full {isLessThan910 === true
							? ''
							: 'flex-grow flex-1 -ml-[15%] mt-[20%]'} z-40 rounded-lg z-5 backdrop-blur-[16px] border-[0.75px] border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.1)] drop-shadow-[0px_3px_18px_0px_rgba(0,0,0,0.35),0px_0px_104px_0px_rgba(0,0,0,0.8)] p-[18px] pr-[42px] gap-[27px]"
					>
						<h6
							class="{isMediumScreen
								? 'text-sm leading-2'
								: 'text-md leading-3'} h6-inter font-medium text-content-secondary"
						>
							Eget at ut euismod elementum non. Gravida tristique aliquet pellentesque leo etiam
							magna pulvinar ullamcorper sit. Dictumst sit est ultrices pellentesque nibh. Bibendum
							posuere neque id amet gravida quisque. Semper tortor ligula tortor sollicitudin et
							semper eu.
						</h6>
					</div>
				</div>
				{#if isLessThan910 === false}
					<img
						src="/images/gamplay-monitor-stand.png"
						class="z-0 ml-[29%] -mt-16 w-[22%]"
						alt="frame2"
					/>
				{/if}
				<div class="relative flex flex-row-reverse gap-3 !z-20 -mt-1">
					<a
						href="/get-started/discord-and-resources"
						class="flex btn-xs font-roboto !bg-primary-violete text-content-primary shadow-violete1 !text-md uppercase slnt-10 !p-4 !px-7 hover:shadow-violete2 hover:violete-gradient !rounded-md !font-bold non-italic transition-all duration-300 justify-center whitespace-nowrap"
						>Continue</a
					>
					<a
						href="/get-started/registration-and-join-server"
						class="flex btn-md font-roboto border border-content-tertiary text-content-primary !text-md uppercase slnt-10 !p-4 disabled:border-transparent disabled:bg-top-light-10 disabled:text-content-tertiary !px-7 hover:!border-content-secondary hover:bg-top-light-17 w-max non-italic transition-all duration-300 justify-center whitespace-nowrap"
						>Back</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

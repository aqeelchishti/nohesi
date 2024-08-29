<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '../../../shared/Icon.svelte';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';
	import { user } from '$lib/stores';
	import StatsCards from './stats-cards.svelte';
	export let personalProfile: boolean;
	export let stats;

	let isOpenConnectSteamLayer: boolean = false;

	let screenWidth = 0;
	let isLessThan400 = false;
	let isLessThan1426 = false;
	let isLessThan1024 = false;
	let isLessThan1200 = false;
	let isLessThan1400 = false;
	let isLessThan768 = false;

	$: if (screenWidth < 1426) {
		isLessThan1426 = true;
	} else {
		isLessThan1426 = false;
	}

	$: if (screenWidth < 1400) {
		isLessThan1400 = true;
	} else {
		isLessThan1400 = false;
	}

	$: if (screenWidth < 1200) {
		isLessThan1200 = true;
	} else {
		isLessThan1200 = false;
	}

	$: if (screenWidth < 1024) {
		isLessThan1024 = true;
	} else {
		isLessThan1024 = false;
	}

	$: if (screenWidth < 768) {
		isLessThan768 = true;
	} else {
		isLessThan768 = false;
	}

	$: if (screenWidth <= 400) {
		isLessThan400 = true;
	} else {
		isLessThan400 = false;
	}
</script>

<svelte:window bind:innerWidth={screenWidth} />

<div class="flex flex-col gap-10 py-2">
	<h3 class="h3-inter text-content-primary">{$_('page.user.home.title')}</h3>

	<div class="relative flex flex-col gap-7">
		{#if personalProfile && !$user.connectedProviders?.find((e) => e.provider === 'steam')}
			<div
				class="flex absolute left-0 top-0 w-full h-full bg-top-dark-83 justify-center items-center z-50 backdrop-blur-1"
			>
				<div class="flex flex-col justify-center items-center sm:w-1/3 gap-6 py-20">
					<h5 class="h6-inter md:h5-inter text-center text-content-primary">
						{$_('page.user.home.statsMsg')}
					</h5>
					<OutlinedButton
						title={$_('page.user.home.statsBtn')}
						classes="!p-4 !px-7 !rounded-md !font-bold"
						font="roboto"
						on:click
					/>
				</div>
			</div>
		{/if}
		{#if personalProfile && $user.connectedProviders?.find((e) => e.provider === 'steam') && !stats}
			<div
				class="absolute flex items-center left-0 top-0 w-full h-full bg-top-dark-83 justify-center  z-50 backdrop-blur-1 "
			>
				<div class="flex flex-row justify-center  items-center ">
					<h5 class="h6-inter md:h5-inter text-center text-content-primary">
						{$_('page.user.home.statsMsg2')}
					</h5>
				</div>
			</div>
		{/if}

		<div class="relative grid lg:grid-cols-2 lg:grid-rows-1 gap-7 self-stretch z-10">
			<div
				class="lg:cols-span-1 flex flex-col gap-3 items-center align-middle rounded-xl bg-top-light-2 border border-top-light-17"
			>
				<div
					class="absolute flex flex-col items-center gap-[72px] md:gap-[70px] lg:gap-[86px] mt-4"
				>
					<div class="flex flex-row -mb-6">
						<p
							class="flex flex-wrap gap-1 items-center text-content-primary text-[12px] md:text-base font-medium font-inter"
						>
							Proximity
						</p>
					</div>
					<div class="flex flex-row gap-[182px] md:gap-[215px] lg:gap-[245px] mb-6 md:mb-7 mr-0 sm:mr-2">
						<p
							class="flex flex-wrap gap-1 items-center text-content-primary text-[12px] md:text-base font-medium font-inter"
						>
							Top<br /> Speed
						</p>
						<p
							class="flex flex-wrap gap-1 items-center text-content-primary text-[12px] md:text-base font-medium font-inter mt-1 md:mt-0 mb-0 md:mb-1"
						>
							Points
						</p>
					</div>
					<div class="flex flex-row gap-24 md:gap-28 mt-[-12px] md:mt-auto">
						<p
							class="flex flex-wrap gap-1 items-center text-content-primary text-[12px] md:text-base font-medium font-inter ml-4"
						>
							Drifting
						</p>
						<p
							class="flex flex-wrap gap-1 items-center text-content-primary text-[12px] md:text-base font-medium font-inter"
						>
							Close Calls
						</p>
					</div>
				</div>
				<div class="flex justify-center w-[192px] md:w-[232px]">
					<img
						src="/icons/user-profile-spider-chart.svg"
						class="py-11 w-[164px] md:w-[192px] lg:w-[232px]"
						alt="spider-chart"
					/>
				</div>
			</div>
			<div
				class="lg:cols-span-1 flex flex-col p-4 justify-between gap-10 xl:gap-0 rounded-xl bg-top-light-2 border border-top-light-17"
			>
				<div class="flex flex-col gap-3">
					<div class="flex flex-row gap-6">
						<h2 class="title-gradient h2-title">8644</h2>
						<h3 class="text-red-secondary pt-2 md:pt-[26px]">-83</h3>
					</div>
					<div class="flex flex-row">
						<h6 class="font-inter normal-case font-semibold text-content-secondary">
							Profile views for the last 7 days
						</h6>
					</div>
				</div>

				<div class="flex flex-col">
					<div class="flex flex-col gap-4">
						<h6
							class="h6-inter normal-case font-medium text-content-primary text-base tracking-wide"
						>
							New profile viewers:
						</h6>
						<div class="relative flex flex-row flex-wrap md:flex-nowrap justify-between">
							<div class="flex h-13 content-center {isLessThan400 === true ? 'mb-4' : ''}">
								<img
									src="/images/user-profile-1.png"
									width="40px"
									height="40px"
									class="absolute rounded-full justify-center border-[1.5px] box-border border-top-dark-44 my-1.5 z-0"
									alt="user-avatar"
								/>
								<img
									src="/images/user-profile-1.png"
									width="40px"
									height="40px"
									class="absolute rounded-full justify-center border-[1.5px] box-border border-top-dark-44 ml-7 my-1.5 z-10"
									alt="user-avatar"
								/>
								<img
									src="/images/user-profile-1.png"
									width="40px"
									height="40px"
									class="absolute rounded-full justify-center border-[1.5px] box-border border-top-dark-44 ml-14 my-1.5 z-20"
									alt="user-avatar"
								/>
								<img
									src="/images/user-profile-1.png"
									width="40px"
									height="40px"
									class="absolute rounded-full justify-center border-[1.5px] box-border border-top-dark-44 ml-[84px] my-1.5 z-30"
									alt="user-avatar"
								/>
								<div class="flex items-center align-middle h-13">
									<p class="font-inter text-sm text-content-secondary ml-32 sm:ml-36">+12 more</p>
								</div>
							</div>
							<OutlinedButton title="view more" classes="font-roboto font-bold h-13 !rounded-md" />
						</div>
					</div>
				</div>
			</div>
		</div>
		{#if stats }
		<div
		class="relative grid {isLessThan1426 === true
			? 'lg:grid-cols-2 lg:grid-rows-2'
			: 'lg:grid-cols-4 lg:grid-rows-1'} gap-6 rounded-[28px] p-3 border border-border self-stretch"
	>
		<StatsCards
			percent={stats?.topspeedrank}
			statName={'Top Speed Achieved'}
			stat={stats?.topspeed}
			crashes={false}
			unit={'km/h'}
		/>
		<StatsCards
			percent={stats?.totaldistancerank}
			statName={'Distance Driven'}
			stat={stats?.totaldistance}
			crashes={false}
			unit={'km'}
		/>
		<StatsCards
			percent={stats?.topdistancesessionrank}
			statName={'Top Distance in one Session'}
			stat={stats?.topdistancesession}
			crashes={false}
			unit = {'km'}
		/>
		<StatsCards
			percent={stats?.highestpointsrank}
			statName={'Points Record'}
			stat={stats?.highestpoints}
			crashes={false}
			unit = {''}
		/>
	</div>

	<div class="grid lg:grid-cols-3 lg:grid-rows-2 gap-6 self-stretch">
		<StatsCards
			percent={stats?.totalcrashesrank}
			statName={'Total Crashes'}
			stat={stats?.totalcrashes}
			crashes={true}
			unit = {''}
		/>
		{#if isLessThan1024 === true}
			<div
				class="flex flex-col gap-3 p-4 rounded-xl bg-top-light-2 border border-border self-stretch"
			>
				<div class="flex flex-row justify-between">
					<p
						class="flex gap-1 items-center text-content-secondary text-sm font-medium font-inter text-balance content-start"
					>
						<Icon name="Car" class="fill-icon mt-1" /><span>Favorite Car</span>
					</p>
				</div>
				<h3 class="title-gradient justify-center py-9">{stats?.favoritecar}</h3>
			</div>
		{/if}
		<div class="lg:col-span-2 lg:row-span-2 border border-border rounded-xl self-stretch bg-[rgba(255,255,255,0.02)]">
			<div
				class="flex flex-col gap-8 p-4 rounded-xl  overflow-hidden inset-0 h-full w-full"
			 >
				
				<div class="flex flex-row justify-between z-30">
					<p
						class="flex gap-1 items-center text-content-secondary text-sm font-medium font-inter text-balance content-start"
					>
						<Icon name="SteeringWheel" class="fill-icon mt-1" /><span>Favorite Track</span>
					</p>
				</div>
				<div
					class="flex flex-col md:flex-row justify-between content-center gap-3 items-center pt-2 z-30"
				>
					<h3 class="title-gradient h3-title justify-center">{stats?.favoritetrack}</h3>
					<img
						src="/icons/user-profile-favorite-track.svg"
						class="{isLessThan1200 ? 'w-[370px]' : 'w-[430px]'} -m-2"
						alt="track"
					/>
				</div>
			</div>
		</div>
		{#if !isLessThan1024}
			<div
				class="flex flex-col gap-3 p-4 rounded-xl bg-[rgba(255,255,255,0.02)] border border-border self-stretch"
			>
				<div class="flex flex-row justify-between">
					<p
						class="flex gap-1 items-center text-content-secondary text-sm font-medium font-inter text-balance content-start"
					>
						<Icon name="Car" class="fill-icon mt-1" /><span>Favorite Car</span>
					</p>
				</div>
				<h3 class="title-gradient justify-center py-9">{stats?.favoritecar}</h3>
			</div>
		{/if}
	</div>

	<div
		class="grid {isLessThan1400 === true
			? 'lg:grid-cols-2 lg:grid-rows-3'
			: 'lg:grid-cols-3 lg:grid-rows-2'} gap-6 self-stretch"
	>
		<div
			class="{isLessThan1400 === true
				? 'lg:col-span-1 lg:row-span-3 lg:grid-rows-3'
				: 'lg:col-span-1 lg:row-span-2 lg:grid-rows-2'} lg:grid flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
		>
			<StatsCards
				percent={stats?.totaldriftrank}
				statName={'Total Time spent Drifting'}
				stat={stats?.totaldrift}
				crashes={false}
				unit = {''}
			/>
			<StatsCards
				percent={stats?.topdriftsessionrank}
				statName={'Top time drifting in one Session'}
				stat={stats?.topdriftsession}
				crashes={false}
				unit = {''}
			/>
			{#if isLessThan1400 === true}
				<StatsCards
					percent={stats?.topclosecallssessionrank}
					statName={'All time close Calls in one Session'}
					stat={stats?.topclosecallssession}
					crashes={false}
					unit = {''}
				/>
			{/if}
		</div>
		<div
			class="{isLessThan1400 === true
				? 'lg:col-span-1 lg:row-span-3 lg:grid-rows-3'
				: 'lg:col-span-1 lg:row-span-2 lg:grid-rows-2'} lg:grid flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
		>
			<StatsCards
				percent={stats?.totaltimeproximityrank}
				statName={'Total time spent in Proximity'}
				stat={stats?.totaltimeproximity}
				crashes={false}
				unit = {''}
			/>
			<StatsCards
				percent={stats?.toptimeproximityrank}
				statName={'Top time spent in proximity in one Session'}
				stat={stats?.toptimeproximity}
				crashes={false}
				unit = {''}
			/>
			{#if isLessThan1400 === true}
				<StatsCards
					percent={stats?.closecallsrank}
					statName={'All time Close Calls'}
					stat={stats?.closecalls}
					crashes={false}
					unit = {''}
				/>
			{/if}
		</div>
		{#if !isLessThan1400}
			<div
				class="{isLessThan1400
					? 'lg:col-span-1 lg:row-span-3 lg:grid-rows-3'
					: 'lg:col-span-1 lg:row-span-2 lg:grid-rows-2'} lg:grid flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
			>
				<StatsCards
					percent={stats?.topclosecallssessionrank}
					statName={'All time close Calls in one Session'}
					stat={stats?.topclosecallssession}
					crashes={false}
					unit = {''}
				/>
				<StatsCards
					percent={stats?.closecallsrank}
					statName={'All time Close Calls'}
					stat={stats?.closecalls}
					crashes={false}
					unit = {''}
				/>
			</div>
		{/if}
	</div>

	<div class="grid lg:grid-cols-2 lg:grid-rows-2 gap-6 self-stretch">
		<div
			class="lg:col-span-1 lg:row-span-2 lg:grid lg:grid-rows-2 flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
		>
			<StatsCards
				percent={stats?.tophourssessionrank}
				statName={'Most hours spent on No Hesi in one Session'}
				stat={stats?.tophourssession}
				crashes={false}
				unit = {''}
			/>
			<StatsCards
				percent={stats?.totalhoursrank}
				statName={'Total hours spent on No Hesi'}
				stat={stats?.totalhours}
				crashes={false}
				unit = {''}
			/>
		</div>
		<div
			class="lg:col-span-1 lg:row-span-2 lg:grid lg:grid-rows-2 flex flex-col gap-6 rounded-[28px] p-3 border border-border self-stretch"
		>
			<StatsCards
				percent={stats?.topclosecallssessionrank}
				statName={'Top Close calls spent in one Session '}
				stat={stats?.topclosecallssession}
				crashes={false}
				unit = {''}
			/>
			<StatsCards
				percent={stats?.totalvisitsrank}
				statName={'Total Visits'}
				stat={stats?.totalvisits}
				crashes={false}
				unit = {''}
			/>
		</div>
	</div>
		{/if}
		
	</div>
</div>

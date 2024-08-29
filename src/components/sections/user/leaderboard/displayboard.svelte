<script lang="ts">
	import type { LeaderboardInterface } from '$lib/interfaces';
	import { user } from '$lib/stores';
	import Icon from '../../../shared/Icon.svelte';

	export let user_details: LeaderboardInterface | null;
	export let total_count: number | null | undefined;
	export let score: number | null | undefined;

	// onMount(() => {
	// 	user_details = {
	// 		avg_speed: 80,
	// 		car_model: 'Bmw M340i G20 Chris',
	// 		label: 'No Hesi Tuned',
	// 		combo: '999',
	// 		input: 'Keyboard',
	// 		run_distance: '800',
	// 		run_time: '0:10:59',
	// 		score: 100000,
	// 		server: '',
	// 		steamid: '',
	// 		row_num: 580,
	// 		personaname: 'Huzaifa',
	// 		avatar: '/images/ProfileImage.jpeg',
	// 		avatarfull: '/images/ProfileImage.jpeg'
	// 	};

	// 	score = 100
	// });

	const numberFormatter = new Intl.NumberFormat('en-US', {
		style: 'decimal',
		minimumFractionDigits: 0,
		maximumFractionDigits: 2
	});

	let icon = {
		icon: 'NohesiLogo'
	};
</script>

{#if user_details && user_details.row_num && total_count && score}
	<div
		class="w-full rounded-xl p-3 flex flex-col gap-2 md:gap-5"
		class:!bg-top-light-10={user_details.row_num > 500}
		class:!bg-violete={user_details.row_num <= 500}
		style="background-image: linear-gradient(to right, rgba(83,3,143,{1 -
			Math.floor(user_details.row_num / total_count)}) 0%, transparent {100 -
			Math.floor((user_details.row_num / total_count) * 100)}%) !important;"
	>
		<div class="flex gap-2">
			<h6
				class:!bg-primary-red-light={user_details.row_num === 1}
				class:!bg-content-secondary={user_details.row_num === 2}
				class:!bg-primary-orange-light={user_details.row_num === 3}
				class:!text-background={[1, 2, 3].includes(user_details.row_num)}
				class="text-content-secondary flex gap-1 items-center p-1 pr-2 rounded-sm bg-top-light-17 w-max"
			>
				<Icon
					name={icon.icon}
					class={`${
						[1, 2, 3].includes(user_details.row_num) ? 'fill-background' : 'fill-icon-accent'
					}`}
				/>
				#{user_details.row_num}
			</h6>

			<h6
				class:!hidden={user_details.row_num > 500}
				class="bg-content-primary flex gap-1 items-center p-1 pr-2 rounded-sm text-violete w-max"
			>
				TOP 500
			</h6>
		</div>

		<div class="flex items-center gap-3 flex-wrap">
			<img
				src={$user.displayPicture}
				alt="cdn"
				class="w-10 h-10 aspect-square rounded-full object-cover"
			/>
			<p class="flex items-center gap-2 text-mlg font-semibold text-content-primary">
				{$user.username} <span class="text-top-light-45">{user_details.input}</span>
			</p>
		</div>

		<div
			class="w-full max-2xl:hidden flex text-content-secondary text-base font-inter font-medium justify-between"
		>
			<div class="w-1/5 shrink-0">
				<p class="pb-3 col-span-2">Points</p>
				<p class="text-content-primary font-semibold text-mlg col-span-2">
					{numberFormatter.format(user_details.score)}
				</p>
				{#if user_details.row_num > 500}
					<p class="font-normal text-sm">
						{numberFormatter.format(score - user_details.score)} points away from the top 500
					</p>
				{/if}
			</div>

			<div>
				<p class="pb-3">Combo</p>
				<p class="text-content-primary font-semibold text-mlg">
					{user_details.combo}x
				</p>
			</div>

			<div>
				<p class="pb-3">Car</p>
				<p class="text-content-primary font-semibold text-mlg capitalize whitespace-nowrap w-max">
					{user_details.car_model}
				</p>
			</div>

			<div>
				<p class="pb-3">Label</p>
				<p class="text-content-primary font-semibold text-mlg capitalize">
					{'No Hesi Tuned'}
				</p>
			</div>

			<div>
				<p class="pb-3">Avg Speed</p>
				<p class="text-content-primary font-semibold text-mlg">
					{user_details.avg_speed}km/h
				</p>
			</div>

			<div>
				<p class="pb-3">Distance</p>
				<p class="text-content-primary font-semibold text-mlg">
					{user_details.run_distance}km
				</p>
			</div>

			<div>
				<p class="pb-3">Time</p>
				<p class="text-content-primary font-semibold text-mlg">
					{user_details.run_time}
				</p>
			</div>

			<!-- <p class="pb-3 px-3 text-content-primary font-semibold text-mlg">{user_details.steamid}</p> -->
			<!-- <p class="pb-3 px-3 text-content-primary font-semibold text-mlg whitespace-nowrap">
				{user_details.input}
			</p> -->
			<!-- <p class="pb-3 pl-3 text-content-primary font-semibold text-mlg">{user_details.server}</p> -->
		</div>

		<div
			class="grid gap-y-1 2xl:hidden grid-cols-12 w-full text-content-primary whitespace-nowrap text-lg font-inter font-semibold"
		>
			<div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Points:</span>
				<br />
				{numberFormatter.format(user_details.score)}
			</div>
			<!-- <div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Steam Id:</span>
				<br />
				{stremid}
			</div> -->
			<!-- <div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Input:</span><br />
				{user_details.input}
			</div> -->
			<div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Combo:</span><br
				/>{user_details.combo}x
			</div>
			<div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Car:</span><br />
				<span class="capitalize">{user_details.car_model}</span>
			</div>
			<div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Label:</span><br />
				<span class="capitalize">{'No Hesi Tuned'}</span>
			</div>
			<div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Avg Speed:</span><br
				/>{user_details.avg_speed}km/h
			</div>
			<div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-secondary text-base font-inter font-medium">Time:</span><br
				/>{user_details.run_time}
			</div>
			<div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-seconda ry text-base font-inter font-medium">Distance:</span><br
				/>{user_details.run_distance}km
			</div>
			<!-- <div class="col-span-12 md:col-span-6 lg:col-span-4">
				<span class="text-content-seconda ry text-base font-inter font-medium">Server:</span><br
				/>{server}
			</div> -->
		</div>
	</div>
{/if}

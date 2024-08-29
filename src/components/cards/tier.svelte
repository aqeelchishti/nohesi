<script lang="ts">
	import regions from '$lib/data/regions.json';
	import { server_images } from '$lib/stores';
	import TierTag from '../shared/tierTag.svelte';

	export let maxMembers: number;
	export let members: number;
	export let name: string;
	export let density: string;
	export let map: string;
	export let type: string;
	export let region: string;
	export let ip_address: string;

	$: imageName = $server_images?.find((e) =>
		name.toLowerCase().replaceAll(' ', '_').includes(e.toLowerCase())
	);

	let tierIcon = '';

	let tier = ['Public', 'Certified', 'Tier1', 'Tier2', 'Tier3'].findIndex((e) => e === type);

	if (tier === 0 || tier === 1) {
		tierIcon = 'Cube.svg';
	} else if (tier === 2) {
		tierIcon = 'CubeWhite.svg';
	} else if (tier === 3) {
		tierIcon = 'CubeOrange.svg';
	} else {
		tierIcon = 'CubeRed.svg';
	}

	let tierBackground = '';

	if (tier === 0 || tier === 1) {
		tierBackground = '!bg-top-dark-26';
	} else if (tier === 2) {
		tierBackground = '!bg-top-dark-44';
	} else if (tier === 3) {
		tierBackground = '!bg-primary-orange-bg-top';
	} else {
		tierBackground = '!bg-primary-red-bg-top';
	}

	const joinServer = () => {
		const [ip, port] = ip_address.split(':');
		window.open(
			`acmanager://race/online/join?query=race/online/join&ip=${ip}&httpPort=${port}&password=`,
			'_self'
		);
	};

	// let flag: string | undefined = flags.filter((f) => f.region === region).pop()?.icon;
	const flag = regions.find((r) => r.code === region)?.flag;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
	on:click={joinServer}
	class="flex flex-col gap-24 pt-4 rounded-xl bg-cover bg-center self-stretch cursor-pointer"
	style={`background-image: url('https://cdn.nohesi.gg/assets/website/images/servers/${
		imageName || 'Certified'
	}.webp');`}
>
	<div class="flex justify-between items-center mx-4">
		<TierTag
			{tier}
			{tierIcon}
			classes={`w-max  ${
				tier === 0 || tier === 1 ? '!gap-2 !p-2' : '!gap-1 !p-0.5'
			} !px-2 !pr-4 ${tierBackground}`}
			textClasses={'!font-inter !normal-case !font-medium !text-sm !text-content-primary'}
			iconClasses={`${tier === 0 || tier === 1 ? 'h-5 w-5' : 'h-8 w-8'}`}
		/>
	</div>
	<div
		class="flex flex-col rounded-b-xl h-56 px-4 pt-4 pb-globalGutter justify-between items-start backdrop-blur-4 bg-top-dark-63"
	>
		<div class="flex flex-col gap-4 self-stretch">
			<img src="https://flagcdn.com/24x18/{flag}.webp" alt="flag" class="w-6 h-[18px]" />
			<div>
				<h6 class="text-content-primary self-stretch text-ellipsis overflow-x-clip w-full">
					{name}
				</h6>
				<p class="font-inter text-content-secondary font-medium text-base">{density}</p>
			</div>
		</div>

		<div class="flex flex-col gap-2 items-start text-content-secondary">
			<div class="flex items-center self-stretch gap-2">
				<img src="/icons/UsersThree.svg" alt="cdn" />
				<span>{members}/{maxMembers}</span>
			</div>
			<div class="flex items-center self-stretch gap-2">
				<img src="/icons/Alien.svg" alt="cdn" />
				<span>{map}</span>
			</div>
		</div>
	</div>
</div>

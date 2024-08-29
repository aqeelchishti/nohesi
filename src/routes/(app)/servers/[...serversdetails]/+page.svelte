<script lang="ts">
	// ** Import the Component **
	import Hero from '../../../../components/sections/servers-page/hero.svelte';
	import Grid from '../../../../components/sections/servers-page/grid.svelte';
	import Table from '../../../../components/sections/servers-page/table.svelte';

	import Spacer from '../../../../components/shared/spacer.svelte';

	import { goto } from '$app/navigation';
	import { encryption } from '$lib/utils';
	import { user } from '$lib/stores';

	export let data;
	$: ({ server: serverdata } = data);
	
	const joinServer = ({ detail: { ip_address } }: any) => {
		let encryptedValue = encryption(ip_address);

		if ($user.authenticated) {
			goto(`/servers/${encryptedValue}/choosecar`);
			// const [ip, port] = ip_address.split(':');
			// console.log("🚀 ~ joinServer ~ ip:", ip)

			// window.open(
			// 	`acmanager://race/online/join?query=race/online/join&ip=${ip}&httpPort=${port}&password=`,
			// 	'_self'
			// );
		}
	};

	const table = [
		{
			url: '/images/fram.png',
			rank: '1',
			isrank: true,
			iswheelRank: true,
			wheelRank: '3',
			name: 'silverlion355',
			content: 'Mitsubishi Lancer Evo Berg Monster'
		},
		{
			url: '/images/fram.png',
			rank: '2',
			isrank: true,
			iswheelRank: false,
			wheelRank: '5',
			name: 'speedster22',
			content: 'Ferrari 488 GTB'
		},
		{
			url: '/images/fram.png',
			isrank: true,
			iswheelRank: false,
			rank: '3',
			wheelRank: '2',
			name: 'roadrunner89',
			content: 'Porsche 911 Turbo S'
		},
		{
			url: '/images/fram.png',
			isrank: true,
			iswheelRank: false,
			rank: '4',
			wheelRank: '4',
			name: 'thunderbolt007',
			content: 'Lamborghini Huracan'
		},
		{
			url: '/images/fram.png',
			isrank: true,
			iswheelRank: false,
			rank: '5',
			wheelRank: '1',
			name: 'blacksnake99',
			content: 'Ford Mustang GT'
		}
	];
</script>

<div class="pt-26 container-section">
	<Hero {serverdata} on:joinServer={joinServer} />
	<Spacer height="h-20" />
	<Grid {serverdata} />
	<Spacer height="h-20" />
	<Table {table} tableName="Public player" />
	<Table {table} tableName="VIP players" />
	<Table {table} tableName="Tier 3 cars" />
	<Spacer height="h-20" />
</div>

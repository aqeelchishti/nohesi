<script lang="ts">
	// ** Import the Component **
	import Hero from '../../../../../components/sections/choose-car/hero.svelte';
	import Grid from '../../../../../components/sections/choose-car/grid.svelte';

	import Spacer from '../../../../../components/shared/spacer.svelte';
	export let data;
	$: ({ server: serverdata } = data);

	const joinServer = (event: any) => {
		const car = event.detail.car
		const [ip, port] = serverdata.ip_address.split(':');

		// uncomment it when both port numbers resolved
		// window.open(
		// 		`acmanager://race/online?ip=${ip}&port=${port}&httpPort=13001&car=${car}`,
		// 		'_self'
		// 	);

		// comment it when both port numbers resolved
		window.open(
			`acmanager://race/online/join?query=race/online/join&ip=${ip}&httpPort=${port}&password=`,
			'_self'
		);
	};
</script>

<div class="pt-26 container-section">
	<Hero {serverdata} />
	<Spacer height="h-20" />
	<Grid {serverdata} on:joinserver={joinServer} />
	<Spacer height="h-20" />
</div>

<script lang="ts">
	import countryCodes from '$lib/data/country-codes.json';

	export let serverdata: any;
</script>

<div class="grid grid-cols-12 gap-6 w-full">
	<div
		class="lg:col-span-6 col-span-12 bg-top-dark-63 border p-5 border-top-light-10 h-auto rounded-md overflow-hidden gap-1"
	>
		<div class="grid grid-cols-12 py-2">
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Country:
			</div>
			<div
				class="md:col-span-10 col-span-6 flex justify-start gap-2 items-center font-inter text-sm font-medium text-content-primary"
			>
				{serverdata.country}
				<img src="https://flagcdn.com/24x18/{countryCodes[serverdata.country]}.webp" alt="flag" />
			</div>
		</div>

		<div class="grid grid-cols-12 py-2">
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				CSP features:
			</div>
			<div
				class="md:col-span-10 col-span-6 flex justify-start gap-2 items-center text-content-primary"
			>
				{serverdata.features?.join(', ')}
			</div>
		</div>
		<div class="grid grid-cols-12 py-2">
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Left:
			</div>
			<div
				class="md:col-span-10 col-span-6 flex justify-start gap-2 items-center font-medium text-content-primary"
			>
				15:02:01
			</div>
		</div>
		<div class="grid grid-cols-12 py-2 pt-3 gap-y-2 gap-x-4">
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Weather:
			</div>
			<div class="md:col-span-3 col-span-6 text-sm font-inter font-normal text-content-primary">
				{serverdata.weather}
			</div>
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Contacts:
			</div>
			<div class="md:col-span-5 col-span-6 text-sm font-inter font-normal text-content-primary">
				not limited
			</div>
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Ambient:
			</div>
			<div class="md:col-span-3 col-span-6 text-sm font-inter font-normal text-content-primary">
				{serverdata.ambient_temperature && Math.ceil(serverdata.ambient_temperature)} °C
			</div>
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Wind:
			</div>
			<div class="md:col-span-5 col-span-6 text-sm font-inter font-normal text-content-primary">
				{serverdata.wind_speed} km/h (N)
			</div>
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Road:
			</div>
			<div class="md:col-span-3 col-span-6 text-sm font-inter font-normal text-content-primary">
				{serverdata.ambient_temperature && Math.ceil(serverdata.ambient_temperature)} °C
			</div>
			<div class="md:col-span-2 col-span-6 text-sm font-inter font-normal text-content-tertiary">
				Grip:
			</div>
			<div class="md:col-span-5 col-span-6 text-sm font-inter font-normal text-content-primary">
				{serverdata.grip}%
			</div>
		</div>
	</div>

	<div
		class="lg:col-span-6 col-span-12 bg-top-dark-63 border p-5 border-top-light-10 h-auto rounded-md text-content-primary overflow-hidden gap-1"
	>
		<h1 class="font-black text-xl">Rules</h1>

		<ul class="p-5 list-decimal font-medium space-y-2 font-inter">
			<li>Keep the <span class="text-primary-violete">chat app</span> open at all times.</li>
			<li>
				Please turn your <span class="text-primary-violete">lights ON</span> when it’s night so other
				drivers can see you.
			</li>
			<li>
				Don’t run unto other cars or <span class="text-primary-violete">purpose.</span>
			</li>
			<li>
				Do not park <span class="text-primary-violete">park</span> or
				<span class="text-primary-violete">block</span> the road.
			</li>
		</ul>
	</div>
</div>

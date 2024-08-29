<script>
	const minimalsData = [
		{ title: 'OS:', text: 'Windows 7 SP1 - 8 - 8.1 - 10' },
		{ title: 'Processor:', text: 'AMD Athlon X2 2.8 GHZ, Intel Core 2 Duo 2.4 GHZ' },
		{ title: 'Memory:', text: '2 GB RAM' },
		{ title: 'Graphics:', text: 'DirectX 10.1, AMD Radeon HD 6450, Nvidia GeForce GT 460' },
		{ title: 'DirectX:', text: 'Version 11' },
		{ title: 'Network:', text: 'Broadband Internet connection' },
		{ title: 'Storage:', text: '15 GB available space' },
		{ title: 'Sound Card:', text: 'Integrated' },
		{ title: 'VR Support:', text: 'SteamVR or Oculus PC, Keyboard or gamepad required' }
	];

	const recommendedData = [
		{ title: 'OS:', text: 'Windows 7 SP1 - 8 - 8.1 - 10' },
		{ title: 'Processor:', text: 'AMD Athlon X2 2.8 GHZ, Intel Core 2 Duo 2.4 GHZ' },
		{ title: 'Memory:', text: '2 GB RAM' },
		{ title: 'Graphics:', text: 'DirectX 10.1, AMD Radeon HD 6450, Nvidia GeForce GT 460' },
		{ title: 'DirectX:', text: 'Version 11' },
		{ title: 'Network:', text: 'Broadband Internet connection' },
		{ title: 'Storage:', text: '15 GB available space' },
		{ title: 'Sound Card:', text: 'Integrated' },
		{ title: 'VR Support:', text: 'SteamVR or Oculus PC, Keyboard or gamepad required' }
	];
</script>

<div class="bg-top-light-10 py-4.5 px-5 flex-1 rounded-2xl backdrop-blur-[25px] col-span-2">
	<h4 class="h4-inter text-content-primary mb-3">System requirements</h4>
	<div class="flex flex-col md:flex-row gap-4">
		<div class="flex-1">
			<h6 class="h6-inter text-content-tertiary mb-4">Minimals:</h6>
			<div>
				<ul class="space-y-2">
					{#each minimalsData as data (data.title)}
						<li class="text-sm flex gap-x-2">
							<span class="text-content-tertiary font-medium w-20 flex-none">{data.title}</span>
							<span class="text-content-primary">{data.text}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div class="w-full sm:w-px h-1 sm:h-[inherit] bg-top-light-10" />
		<div class="flex-1">
			<h6 class="h6-inter text-content-tertiary mb-4">Recommended:</h6>

			<div>
				<ul class="space-y-2">
					{#each recommendedData as data (data.title)}
						<li class="text-sm flex gap-x-2">
							<span class="text-content-tertiary font-medium w-20 flex-none">{data.title}</span>
							<span class="text-content-primary">{data.text}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</div>

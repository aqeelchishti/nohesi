<script lang="ts">

	export let pageUrl: string;
	export let title: string;

	let video_id = '';
	$: frame_url = `https://www.youtube.com/embed/${video_id}?autoplay=0&muted=1&showinfo=0`;

	$: {
		if (!video_id) {
			const urlParams = new URLSearchParams(pageUrl.split('?')[1]);
			video_id = urlParams.get('v')?.toString() as string;
			frame_url = `https://www.youtube.com/embed/${video_id}?autoplay=0&muted=1&showinfo=0&controls=0`;
		}
	}
</script>

<div class="flex items-center justify-center rounded-xl w-full overflow-hidden relative h-60 4xl:h-96">
	<div class="absolute w-full h-full inset-0">
		<iframe
			src={frame_url}
			frameborder="0"
			width="100%"
			height="100%"
			title="Youtube Video Player"
		/>
	</div>
	<!-- <div
		class="flex flex-col p-4 mt-24 4xl:mt-60 gap-5 bg-gradient-to-b from-top-dark-0 to-background w-full z-10"
	>
		<img src="/icons/Play.svg" alt="cdn" class="h-13 w-13" />
		<h5 class="text-content-primary">{title}</h5>
	</div> -->
</div>

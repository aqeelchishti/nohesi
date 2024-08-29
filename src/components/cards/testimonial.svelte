<script lang="ts">
	export let username: string;
	export let userImage: string;
	export let desc: string;
</script>

<div class="flex flex-col gap-4 p-4 rounded-xl border border-border bg-top-light-2 w-full overflow-hidden">
	<div class="flex gap-3 items-center overflow-hidden">
		<div class="h-10 w-10 rounded-full overflow-hidden">
			<img src={userImage} alt="cdn" class="object-center"/>
		</div>
		<h6 class="text-content-primary w-4/5 text-ellipsis overflow-hidden">@{username}</h6>
	</div>
	<p class="text-content-secondary text-base">
		{desc}
	</p>
</div>

<script lang="ts">
	import { user } from '$lib/stores';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';
	import VioleteButton from '../../../shared/violeteButton.svelte';

	let avatarInput: HTMLInputElement;
	let bannerInput: HTMLInputElement;

	let avatarUrl: string | null = null;
	let bannerUrl: string | null = null;

	let avatarFile: File | null = null;
	let bannerFile: File | null = null;

	const openAvatarInput = () => {
		avatarInput.click();
	};

	const handleAvatarInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		avatarFile = target.files?.[0] || null;

		if (avatarFile) {
			avatarUrl = URL.createObjectURL(avatarFile);
		}
	};

	const openBannerInput = () => {
		bannerInput.click();
	};

	const handleBannerInput = (event: Event) => {
		const target = event.target as HTMLInputElement;
		bannerFile = target.files?.[0] || null;

		if (bannerFile) {
			bannerUrl = URL.createObjectURL(bannerFile);
		}
	};
</script>

<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
	<h4 class="h4-inter text-content-primary">Avatar</h4>
	<div class="flex flex-col gap-5 self-stretch">
		<div class="flex flex-col sm:flex-row gap-5">
			{#if avatarUrl}
				<img
					src={avatarUrl}
					alt="pfp"
					class="rounded-full w-[140px] h-[140px] aspect-square shrink-0"
				/>
			{:else if $user.displayPicture}
				<img
					src={$user.displayPicture}
					alt="pfp"
					class="rounded-full w-[140px] h-[140px] border-4 border-primary-red justify-center md:justify-normal shrink-0"
				/>
			{:else}
				<div
					class="rounded-full w-[140px] h-[140px] object-cover object-center border-4 border-primary-red flex lg:justify-center md:justify-center sm:justify-center items-center bg-background shrink-0"
				>
					<p class="text-content-primary text-3xl font-bold font-roboto text-center">
						{$user.username.charAt(0)}
					</p>
				</div>
			{/if}
			<div class="flex flex-col gap-3 sm:self-center flex-wrap sm:flex-nowrap">
				<OutlinedButton
					title="Upload Image"
					classes="!font-bold !w-max !rounded-md"
					font="roboto"
					on:click={openAvatarInput}
				/>
				<input
					type="file"
					accept=".jpg,.jpeg,.png,.gif,.webp"
					id="file-input"
					bind:this={avatarInput}
					class="hidden"
					on:change={handleAvatarInput}
				/>
				<p class="font-inter font-normal text-content-tertiary text-sm">
					Upload the file from your device. You need a square image that is at least 184 by 184
					pixels.
				</p>
			</div>
		</div>
		<div class="flex flex-col gap-4">
			<h6 class="h6-inter text-content-primary tracking-wide">Chose Avatar Decoration</h6>
			<div
				class="text-content-primary font-roboto text-lg md:text-2xl xl:text-3xl font-bold uppercase h-32 flex items-center justify-center"
			>
				<div class="wavy">
					<span style="--i:1">C</span>
					<span style="--i:2">O</span>
					<span style="--i:3">M</span>
					<span style="--i:4">I</span>
					<span style="--i:5">N</span>
					<span style="--i:6">G</span>
					<span style="--i:7">&nbsp;</span>
					<span style="--i:8">S</span>
					<span style="--i:9">O</span>
					<span style="--i:10">O</span>
					<span style="--i:11">N</span>
					<span style="--i:12">.</span>
					<span style="--i:13">.</span>
					<span style="--i:14">.</span>
				</div>
			</div>
			<!-- <div
				class="grid grid-rows-3 grid-cols-3 xs:grid-rows-2 xs:grid-cols-4 sm:grid-rows-2 md:grid-cols-5 gap-2"
			>
				<div
					class="flex bg-top-dark-83 border border-[rgba(136,0,240,0.82)] rounded-sm p-2 justify-center"
				>
					<img src="/images/avatar-frame-list.png" class="relative" alt="avatar-option" />
					<img
						src="/icons/selected-frame.svg"
						class="absolute -mr-[36px] xs:-mr-[52px] lg:-mr-[84px] -mt-[6px] size-5 lg:size-6 xl:size-9"
						alt="selectd"
					/>
				</div>
				{#each Array(7) as _, i}
					<div class="flex bg-top-dark-83 border border-border rounded-sm p-2 justify-center">
						<img src="/images/avatar-frame-list.png" alt="avatar-option" />
					</div>
				{/each}
			</div> -->
		</div>
		<!-- <div class="flex flex-row justify-center xs:justify-end">
			<VioleteButton
				title="Explore more decorations"
				classes="!font-bold !w-max !text-sm sm:!text-md !rounded-sm !py-2 !px-2.5 xs:!px-7"
				font="roboto"
			/>
		</div> -->
	</div>
</div>

<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
	<h4 class="h4-inter text-content-primary">Profile Banner</h4>
	<div class="flex flex-col gap-5 self-stretch">
		<div class="flex flex-row rounded-md w-full h-[136px] overflow-hidden">
			<img
				src="/images/profile-banner-image.png"
				class="w-full h-[136px] object-cover"
				alt="profile-banner"
			/>
		</div>
		<div class="flex flex-col gap-3">
			<OutlinedButton
				title="Upload Image"
				classes="!font-bold !w-max !rounded-md !w-full"
				font="roboto"
				on:click={openBannerInput}
			/>
			<input
				type="file"
				accept=".jpg,.jpeg,.png,.gif,.webp"
				id="file-input"
				bind:this={bannerInput}
				class="hidden"
				on:change={handleBannerInput}
			/>
			<p class="font-inter font-normal text-content-tertiary text-sm">
				Upload the file from your device. You need an image that is at least 1368 by 300 pixels.
			</p>
		</div>
	</div>
</div>

<div class="mt-4 flex flex-row justify-between">
	<OutlinedButton title="Cancel" classes="!font-bold !w-max !rounded-md" font="roboto" />
	<VioleteButton title="Save" classes="!font-bold !w-max !rounded-md !px-7" font="roboto" />
</div>

<style lang="postcss">
	.wavy {
		position: relative;
		-webkit-box-reflect: below -20px linear-gradient(transparent, rgba(255, 255, 255, 0.5));
	}
	.wavy span {
		position: relative;
		display: inline-block;
		text-transform: uppercase;
		animation: wavy 1.5s infinite;
		animation-delay: calc(0.1s * var(--i));
	}
	@keyframes wavy {
		0%,
		40%,
		100% {
			transform: translateY(0);
		}
		20% {
			transform: translateY(-20px);
		}
	}
</style>

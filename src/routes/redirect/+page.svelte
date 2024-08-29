<script lang="ts">
	import Icon from '../../components/shared/Icon.svelte';
	import VioleteButton from '../../components/shared/violeteButton.svelte';

	export let data;

	let copiedText: boolean = false;

	$: ({ auth_token, email } = data);

	const handleLauncher = () => {
		const urlParams = new URLSearchParams({
			auth_token
		})
		window.open(`nohesi://sign-in?${urlParams.toString()}`, '_self');
	};

	const copyToClipboard = () => {
		navigator.clipboard.writeText(auth_token);
		copiedText = true;
	};
</script>

<div class="flex items-center justify-center md:justify-start h-[10svh]">
	<a href="/">
		<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
	</a>
</div>

<div class="flex justify-center items-center h-[90svh]">
	<div class="w-[600px] bg-top-light-2 p-6 rounded-xl border border-border flex flex-col gap-10">
		<h4 class="text-content-primary text-center">
			log in as <h6 class="break-words inline-block">{email}</h6>
		</h4>
		<div class="flex flex-col gap-5">
			<VioleteButton
				title="Open no hesi launcher"
				type="button"
				size="md"
				font="roboto"
				on:click={handleLauncher}
			/>
			<div>
				<div class="inline-flex items-center justify-center w-full">
					<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
					<span class="text-content-secondary px-3 font-medium left-1/2">or</span>
					<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
				</div>
			</div>
			<p class="text-content-primary text-base">
				If the redirect does not work or an error occurs, copy the code bellow and paste into your
				launcher
			</p>
			<div class="flex flex-col gap-1.5">
				<label for="token" class="text-sm text-content-secondary"
					>Copy verification token and paste into launcher</label
				>
				<div class="relative w-full">
					<input
						type="text"
						name="token"
						id="token"
						disabled={true}
						value={auth_token}
						class="border border-border focus:border-border-light rounded-sm bg-top-light-2 hover:bg-top-light-10 line-clamp-1 p-4 pr-12 py-3.5 w-full text-base placeholder:text-content-tertiary text-content-secondary"
					/>
					{#if !copiedText}
						<button
							class="absolute right-4 top-1/2 -translate-y-1/2 group"
							on:click={copyToClipboard}
						>
							<Icon
								name="Copy"
								height="24"
								width="24"
								class="fill-top-light-30 group-hover:fill-top-light-45"
							/>
						</button>
					{:else}
						<div
							class="absolute right-4 top-1/2 -translate-y-1/2 bg-green p-1 px-3 rounded-lg flex items-center gap-1.5"
						>
							<p class="font-semibold text-sm text-background">Copied!</p>
							<Icon name="Check20" height="20" width="20" class="fill-background" />
						</div>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>

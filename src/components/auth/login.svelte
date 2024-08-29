<script lang="ts">
	import { enhance } from '$app/forms';
	import { toastMsg } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Icon from '../shared/Icon.svelte';
	import OutlinedButton from '../shared/outlinedButton.svelte';
	import Toast from '../shared/toast.svelte';
	import VioleteButton from '../shared/violeteButton.svelte';

	const dispatch = createEventDispatcher();

	let loading = false;
	let showPassword: boolean = false;
	let emailField: string;
	let passwordField: string = '';

	const handlePasswordChange = (event: any) => {
		passwordField = event.target.value;
	};

	const handleSignup = () => {
		dispatch('signup');
	};

	const handleDiscord = () => {
		dispatch('discordLogin');
	};

	const handleGoogle = () => {
		dispatch('googleLogin');
	};

	const handleMagicLink = () => {
		if (new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g).test(emailField)) {
			dispatch('magicLink', {
				email: emailField
			});
		} else {
			toastMsg.set({
				msg: 'Invalid email address',
				desc: 'Make sure to write proper email address.',
				icon: 'Warning'
			});
		}
	};
</script>

<div
	class="bg-background w-full relative h-[100svh] overflow-hidden grid md:grid-cols-2 4xl:grid-cols-3 content-center justify-center items-center gap-x-20 xs:px-8"
>
	<Toast left="right-8 md:right-12" top="top-20" classes="z-50" />
	<!-- <img
		src="/icons/world_img.svg"
		alt="cdn"
		class="absolute w-[150%] -left-1/4 md:left-0 max-w-none md:w-full md:h-[120svh] md:-top-1/10 opacity-50 object-center"
	/> -->
	<video
		class="fixed w-[150%] -left-1/4 md:left-0 max-w-none md:w-full md:h-[120svh] md:-top-1/10 opacity-50 object-center"
		autoplay
		loop
		muted
		width="100%"
		height="auto"
	>
		<source src="https://cdn.nohesi.gg/assets/website/world.webm" type="video/webm" />
		<!-- <source src="https://cdn.nohesi.gg/assets/website/videos/welcome.mp4" type="video/mp4" /> -->
	</video>
	<div
		class="rounded-xl w-full  md:backdrop-blur-16 md:bg-top-light-2 md:border border-border p-6 flex flex-col gap-3 z-20 justify-between xs:justify-normal h-full overflow-y-auto"
		style="scrollbar-width: thin; scrollbar-color: var(--bg-top-light-10) transparent;"
	>
		<a href="/">
			<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
		</a>
		<div
			class="flex flex-col w-full gap-4 self-stretch max-md:backdrop-blur-2 max-md:border max-md:py-16 max-md:px-4 max-md:rounded-xl max-md:border-border"
		>
			<h4 class="text-content-primary">login for the best experience</h4>
			<div class="flex flex-col gap-3 self-stretch">
				<div class="flex items-center gap-2 justify-center flex-wrap">
					<OutlinedButton
						title="LOG IN VIA DISCORD"
						size="md"
						font="roboto"
						classes=""
						icon="Discord"
						iconClasses="w-6 h-auto"
						on:click={handleDiscord}
					/>
					<OutlinedButton
						title="LOG IN VIA Google"
						size="md"
						font="roboto"
						classes=""
						icon="Google"
						iconClasses="w-6 h-auto"
						on:click={handleGoogle}
					/>
				</div>
				<div>
					<div class="inline-flex items-center justify-center w-full">
						<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
						<span class="text-content-secondary px-3 font-medium left-1/2"
							>{$_('auth.signin.seperator')}</span
						>
						<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
					</div>
				</div>
				<form
					use:enhance={() => {
						loading = true;
						return async ({ update }) => {
							loading = false;
							await update();
						};
					}}
					method="post"
					class="flex flex-col gap-5 self-stretch"
				>
					<div class="flex flex-col gap-4 font-inter">
						<div class="flex flex-col gap-1.5">
							<label for="email" class="text-sm text-content-secondary"
								>{$_('auth.signup.label3')}</label
							>
							<div class="relative">
								<input
									bind:value={emailField}
									type="email"
									name="email"
									id="email"
									class="pl-12 pr-4 w-full py-3.5 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
									placeholder={$_('auth.signup.placeholder3')}
									required
								/>
								<Icon name="Envelope" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />

								<!-- <img src="/icons/email.svg" alt="cdn" class="absolute left-3 top-1/2 -translate-y-1/2" /> -->
							</div>
						</div>
						<div class="flex flex-col gap-1.5">
							<div class="flex justify-between items-end">
								<label for="password" class="text-sm text-content-secondary">Password</label>
								<a
									href="/forgot-password"
									class="text-sm text-content-secondary underline underline-offset-2"
									>Forgot password?</a
								>
							</div>
							<div class="relative">
								<input
									value={passwordField}
									type={showPassword ? 'text' : 'password'}
									name="password"
									id="password"
									class="p-12 w-full py-3.5 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
									placeholder="••••••••••••••"
									required
									on:input={handlePasswordChange}
								/>
								<Icon name="Lock" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />
								<button
									class="absolute right-3 top-1/2 -translate-y-1/2"
									on:click={() => (showPassword = !showPassword)}
									type="button"
								>
									<Icon name="EyeClosed" class="fill-icon {showPassword && 'hidden'}" />
									<Icon name="Eye" class="fill-icon {!showPassword && 'hidden'}" />
								</button>
								<!-- <img src="/icons/email.svg" alt="cdn" class="absolute left-3 top-1/2 -translate-y-1/2" /> -->
							</div>
						</div>
					</div>
					<div class="flex flex-col gap-1 w-full">
						<VioleteButton
							title="Login"
							size="md"
							font="roboto"
							classes="!bg-primary-violete-light"
							type="submit"
							{loading}
							disabled={loading}
						/>
						<div>
							<div class="inline-flex items-center justify-center w-full">
								<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
								<span class="text-content-secondary px-3 font-medium left-1/2"
									>{$_('auth.signin.seperator')}</span
								>
								<hr class="w-16 md:w-18 h-[2px] my-4 bg-top-light-10" />
							</div>
						</div>
						<VioleteButton
							title="SEND MAGIC LINK"
							size="md"
							font="roboto"
							classes="!bg-primary-violete-light"
							on:click={handleMagicLink}
							{loading}
							disabled={loading}
						/>
					</div>
				</form>
			</div>
		</div>

		<div
			class="font-roboto text-content-primary text-md italic font-bold flex justify-between items-center"
		>
			<p class="uppercase">Don’t have an account?</p>
			<OutlinedButton title="Signup" size="md" font="roboto" on:click={handleSignup} />
		</div>
	</div>
	<video
		class="z-20 w-full 4xl:w-4/5 mx-auto md:block hidden 4xl:col-span-2"
		autoplay
		loop
		muted
		width="100%"
		height="auto"
	>
		<source src="https://cdn.nohesi.gg/assets/website/videos/welcome.webm" type="video/webm" />
		<source src="https://cdn.nohesi.gg/assets/website/videos/welcome.mp4" type="video/mp4" />
	</video>
</div>

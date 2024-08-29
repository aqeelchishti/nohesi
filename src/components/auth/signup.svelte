<script lang="ts">
	import * as R from 'ramda';
	import { enhance } from '$app/forms';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import Icon from '../shared/Icon.svelte';
	import OutlinedButton from '../shared/outlinedButton.svelte';
	import VioleteButton from '../shared/violeteButton.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';

	const dispatch = createEventDispatcher();
	let passwordRequirments: boolean = false;

	const handleLogin = async () => {
		dispatch('login');
	};

	const debounceR = R.curry((config, fn) => {
		const { delay, initialInstant = false } = R.is(Number, config) ? { delay: config } : config;
		let timer: string | number | NodeJS.Timeout | null | undefined = null;
		let firstCall = false;
		return (...args: any) =>
			new Promise((resolve, reject) => {
				const safeCall = () => {
					try {
						resolve(fn.apply(window, args));
					} catch (e) {
						reject(e);
					}
				};
				if (!firstCall) {
					firstCall = true;
					if (initialInstant) {
						safeCall();
						return;
					}
				}
				if (!R.isNil(timer)) {
					clearTimeout(timer);
				}
				timer = setTimeout(safeCall, delay);
			});
	});

	const handleUsernameChange = debounceR({ delay: 500 }, async (event: any) => {
		username = event.target.value.trim().toLowerCase();
		console.log('🚀 ~ handleUsernameChange ~ username:', username);

		try {
			if (username.length === 0) {
				validUsername = '';
				return;
			}
			if (username.length > 25) {
				validUsername = 'Cannot be more than 25 characters';
			} else if (username.length < 5) {
				validUsername = 'Must be at least 5 characters';
			} else if (!/^[a-z]/.test(username)) {
				validUsername = 'Must start with a letter';
			} else if (!/^[a-z][a-z0-9_]*$/.test(username)) {
				validUsername = 'Only letters, numbers, and underscores allowed';
			} else {
				const available = await (
					await fetch(`${PUBLIC_BACKEND_URL}/functions/check-username`, {
						method: 'POST',
						headers: { 'content-type': 'application/json' },
						body: JSON.stringify({ username })
					})
				).json();
				console.log('🚀 ~ handleUsernameChange ~ available:', available);
				if (available.error) {
					validUsername = 'Username is already taken';
				} else {
					validUsername = 'This username fits'; // No error, valid username
				}
			}
		} catch (error) {
			console.error('Error checking username availability:', error);
		}
	});

	const handlePasswordChange = (event: any) => {
		passwordInput = event.target.value;
		if (
			passwordInput.trim().length > 0 &&
			(passwordInput.length < 8 ||
				passwordInput.length > 16 ||
				!/[^a-zA-Z0-9\s]/.test(passwordInput) ||
				!/[0-9]/.test(passwordInput) ||
				!/[a-z]/.test(passwordInput) ||
				!/[A-Z]/.test(passwordInput))
		) {
			passwordRequirments = true;
		} else {
			passwordRequirments = false;
		}
	};

	const handleConfirmPasswordChange = (event: any) => {
		confirmPasswordInput = event.target.value;
	};

	let loading = false;
	let showPassword: boolean = false;
	let passwordInput = '';
	let username = '';
	let validUsername = '';
	let confirmPasswordInput = '';
	let msg = 'Start typing';
	let msgClasses = 'text-content-tertiary';
	let pills = ['bg-top-light-10', 'bg-top-light-10', 'bg-top-light-10'];

	$: {
		if (passwordInput.length === 0) {
			msg = 'Start typing';
			msgClasses = 'text-content-tertiary';
			pills = ['bg-top-light-10', 'bg-top-light-10', 'bg-top-light-10'];
		} else if (
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\S)[a-zA-Z\d\S]{8,11}$/.test(passwordInput) &&
			/[^a-zA-Z\d\s]/.test(passwordInput.toString())
		) {
			msg = 'Keep going!';
			msgClasses = 'text-yellow';
			pills = ['bg-yellow', 'bg-yellow', 'bg-top-light-10'];
		} else if (
			/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\S)[a-zA-Z\d\S]{12,16}$/.test(passwordInput) &&
			/[^a-zA-Z\d\s]/.test(passwordInput.toString())
		) {
			msg = 'Strong password, congrats!';
			msgClasses = 'text-green';
			pills = ['bg-green', 'bg-green', 'bg-green'];
		} else if (passwordInput.length > 0 && passwordInput.length <= 16) {
			msg = 'Weak Password';
			msgClasses = 'text-red';
			pills = ['bg-red', 'bg-top-light-10', 'bg-top-light-10'];
		} else if (passwordInput.length > 16) {
			msg = 'Invalid Password! Max length is 16';
			msgClasses = 'text-red';
			pills = pills = ['bg-red', 'bg-red', 'bg-red'];
		}
	}
</script>

<div class="flex items-center justify-center md:justify-start">
	<a href="/">
		<img class="2xl:h-20" src="/images/footer-logo.png" alt="logo" />
	</a>
</div>

<div class=" flex items-center justify-center">
	<div
		class="w-full md:w-2/5 px-5 gap-5 py-7 flex flex-col justify-center bg-top-light-2 rounded-xl border border-border"
	>
		<form
			method="post"
			action="/signup?/signup"
			use:enhance={() => {
				console.log('call action to signup');
				loading = true;
				return async ({ update, result }) => {
					console.log(result);
					loading = false;
					passwordInput = '';
					confirmPasswordInput = '';
					await update();
				};
			}}
			class="flex flex-col gap-5"
		>
			<h4 class="text-content-primary">SIGN UP</h4>
			<div class="grid grid-cols-2 max-lg:grid-cols-1 gap-2">
				<div class="w-full flex flex-col gap-1.5">
					<label for="name" class="text-sm text-content-secondary">Your name</label>
					<div class="relative">
						<input
							type="text"
							name="name"
							id="name"
							placeholder="John"
							required
							class="p-3 pl-12 pr-4 w-full outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
						/>
						<Icon name="User" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />
					</div>
				</div>
				<div class="w-full flex flex-col gap-1.5">
					<label for="uname" class="text-sm text-content-secondary">Username</label>
					<div class="relative">
						<input
							value={username}
							type="text"
							name="uname"
							id="uname"
							placeholder="Enter username"
							required
							class="p-3 pl-12 pr-4 w-full outline-none text-base text-content-secondary rounded-sm bg-top-light-2 border {validUsername ===
							''
								? 'border-border'
								: validUsername === 'This username fits'
								? 'border-green'
								: 'border-red'} placeholder-content-tertiary"
							on:input={handleUsernameChange}
						/>
						<Icon name="UserList" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />
					</div>
					{#if validUsername}
						<small
							class="text-xxs {validUsername === 'This username fits' ? 'text-green' : 'text-red'}"
							>{validUsername}</small
						>
					{/if}
				</div>
			</div>
			<div class="flex flex-col gap-1.5">
				<label for="email" class="text-sm text-content-secondary">{$_('auth.signup.label3')}</label>
				<div class="relative">
					<input
						type="email"
						name="email"
						id="email"
						class="pl-12 pr-4 w-full py-3 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
						placeholder={$_('auth.signup.placeholder3')}
						required
					/>
					<Icon name="Envelope" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />

					<!-- <img src="/icons/email.svg" alt="cdn" class="absolute left-3 top-1/2 -translate-y-1/2" /> -->
				</div>
			</div>

			<div class="flex flex-col gap-1.5">
				<div class="flex justify-between items-end">
					<label for="password" class="text-sm text-content-secondary">Create password</label>
				</div>
				<div class="relative">
					<input
						value={passwordInput}
						type={showPassword ? 'text' : 'password'}
						name="password"
						id="password"
						class="p-12 w-full py-3 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
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
				</div>
			</div>
			<div class="flex flex-col gap-1.5">
				<label for="" class={`text-sm ${msgClasses}`}>{msg}</label>
				<div class="flex gap-1 self-stretch rounded-sm bg-top-light-2 h-2 overflow-hidden">
					<div class={`flex-1 ${pills[0]}`} />
					<div class={`flex-1 ${pills[1]}`} />
					<div class={`flex-1 ${pills[2]}`} />
				</div>
			</div>
			<div class="text-content-secondary hidden" class:!block={passwordRequirments}>
				<p class="text-md">Requirements for a strong password:</p>
				<ul class="text-sm list-disc list-inside pl-4">
					<li class="hidden" class:!list-item={passwordInput.length < 8}>
						At least 8 characters long
					</li>
					<li class="hidden" class:!list-item={passwordInput.length > 16}>
						At most 16 characters long
					</li>
					<li class="hidden" class:!list-item={!/[A-Z]/.test(passwordInput)}>
						Include at least one uppercase letter
					</li>
					<li class="hidden" class:!list-item={!/[a-z]/.test(passwordInput)}>
						Include at least one lowercase letter
					</li>
					<li class="hidden" class:!list-item={!/[0-9]/.test(passwordInput)}>
						Include at least one number
					</li>
					<li class="hidden" class:!list-item={!/[^a-zA-Z0-9\s]/.test(passwordInput)}>
						Include at least one special character (e.g., !, @, #, $)
					</li>
				</ul>
			</div>
			<div class="flex flex-col gap-1.5">
				<div class="flex justify-between items-end">
					<label for="cpassword" class="text-sm text-content-secondary">Repeat password</label>
				</div>
				<div class="relative">
					<input
						name="cpassword"
						value={confirmPasswordInput}
						type={showPassword ? 'text' : 'password'}
						id="cpassword"
						class="p-12 w-full py-3 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
						placeholder="••••••••••••••"
						required
						on:input={handleConfirmPasswordChange}
					/>
					<Icon name="Lock" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />
				</div>
			</div>

			<VioleteButton
				title="Create an account"
				size="md"
				font="roboto"
				classes="!bg-primary-violete-light"
				type="submit"
				{loading}
				disabled={loading}
			/>

			<p class="text-sm font-inter text-content-tertiary w-4/5 md:w-full mx-auto">
				By clicking "Create an account" above, you acknowledge that you will receive updates from
				the No Hesi team and that you have read, understood, and agreed to No Hesi’s <a
					href="/privacy-policy"
					class="underline">Privacy Policy</a
				>
				and
				<a href="/terms-of-use" class="underline">Terms of Service</a>.
			</p>
		</form>

		<div
			class="font-roboto text-content-primary text-md italic font-bold flex justify-between items-center"
		>
			<p class="uppercase">Already have an account?</p>
			<OutlinedButton title="Log in" size="md" font="roboto" on:click={handleLogin} />
		</div>
	</div>
</div>

<!-- <div
	class="bg-background relative min-h-[100svh] w-full overflow-hidden grid md:grid-cols-2 content-center justify-center items-center gap-x-20 xs:px-8"
>
	<div
		class="rounded-xl xs:backdrop-blur-16 bg-top-light-2 border border-border p-6 flex flex-col gap-5 shrink-0 z-20 justify-between xs:justify-normal min-h-[100svh] xs:h-max"
	>
		<a href="/">
			<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
		</a>
		<div class="flex flex-col gap-7 self-stretch">
			<h4 class="text-content-primary">login for the best experience</h4>
			<div class="flex flex-col gap-5 self-stretch">
				<VioleteButton
					title="LOG IN VIA DISCORD"
					size="md"
					font="roboto"
					classes="!bg-primary-violete-light"
					icon="Discord"
					iconClasses="w-6 h-auto"
				/>
				<div>
					<div class="inline-flex items-center justify-center w-full">
						<hr class="w-10 md:w-18 h-[2px] my-4 bg-top-light-10" />
						<span class="text-content-secondary px-3 font-medium left-1/2"
							>{$_('auth.signin.seperator')}</span
						>
						<hr class="w-10 md:w-18 h-[2px] my-4 bg-top-light-10" />
					</div>
				</div>
				<div class="flex flex-col gap-4 font-inter">
					<div class="flex flex-col gap-1.5">
						<label for="" class="text-sm text-content-secondary">{$_('auth.signup.label3')}</label>
						<div class="relative">
							<input
								type="email"
								name="email"
								id="email"
								class="pl-12 pr-4 w-full py-3.5 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
								placeholder={$_('auth.signup.placeholder3')}
								required
							/>
							<img
								src="/icons/email.svg"
								alt="cdn"
								class="absolute left-3 top-1/2 -translate-y-1/2"
							/>
						</div>
					</div>
				</div>
				<VioleteButton title="LOG IN" size="md" font="roboto" classes="!bg-primary-violete-light" />
			</div>
		</div>
		<div class="flex flex-col md:flex-row gap-2 items-center md:items-baseline md:justify-between">
			<p
				class="order-last md:order-none font-roboto text-md font-bold uppercase text-content-secondary slnt-10"
			>
				{$_('auth.signin.msg')}
			</p>
			<OutlinedButton
				title={$_('auth.signin.btn2')}
				size="md"
				font="roboto"
				classes="w-full md:w-max"
				on:click={() => goto('/sign-up')}
			/>
		</div>
		<p
			class="text-sm font-inter text-content-primary w-4/5 md:w-full xl:w-3/5 text-center mx-auto my-12"
		>
			By logging in, you agree to our <a href="/terms-of-use" class="underline">Terms of Service</a>
			and acknowledge having read our
			<a href="/privacy-policy" class="underline">Privacy Policy</a>.
		</p>
	</div>
</div> -->

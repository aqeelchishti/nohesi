<script lang="ts">
	import * as R from 'ramda';
	import Button from '../shared/button.svelte';
	import Icon from '../shared/Icon.svelte';
	import VioleteButton from '../shared/violeteButton.svelte';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { createEventDispatcher } from 'svelte';

	export let email: string;
	export let emailDisabled: boolean;
	export let loading: boolean;

	const dispatch = createEventDispatcher();

	let username: string = '';
	let validUsername = '';
	let emailInput: string = email;

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

	const handleFormSubmit = () => {
		if (validUsername === 'This username fits') {
			dispatch('createUsername', { username, email: emailInput });
		}
	};
</script>

<div class="flex items-center justify-center md:justify-start h-[10svh]">
	<a href="/">
		<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
	</a>
</div>
<div class="flex justify-center items-center h-[90svh]">
	<div
		class="w-full md:w-2/5 px-5 gap-8 py-7 flex flex-col justify-center bg-top-light-2 rounded-xl border border-border"
	>
		<form method="post" on:submit|preventDefault={handleFormSubmit} class="flex flex-col gap-5">
			<h4 class="h4 text-content-primary font-roboto">CREATE USERNAME</h4>
			<div class="flex flex-col gap-4 font-inter">
				<div class="flex flex-col gap-4">
					<div class=" bg-yellow-bg-surface border border-yellow rounded-sm py-3 px-4">
						<p class="text-yellow font-inter font-medium">
							Usernames must not contain profanity, racial slurs or words that belittle other
							players
						</p>
					</div>
					<div class="flex flex-col gap-2.5">
						<div class="flex flex-row justify-between">
							<label for="" class="text-sm text-content-primary">Enter your email address</label>
						</div>

						<div class="relative">
							<input
								bind:value={emailInput}
								disabled={emailDisabled}
								id="email"
								class="pl-12 pr-4 py-3.5 w-full text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
								placeholder="example@mail.com"
								type="email"
							/>
							<Icon name="Envelope" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />
						</div>
					</div>
					<div class="flex flex-col gap-2.5">
						<div class="flex flex-row justify-between">
							<label for="" class="text-sm text-content-primary"
								>You can change your username at any time in user settings</label
							>
						</div>

						<div class="relative">
							<input
								bind:value={username}
								on:input={handleUsernameChange}
								id="username"
								class="pl-12 pr-4 py-3.5 w-full text-base text-content-secondary rounded-sm border {validUsername ===
								''
									? 'border-border'
									: validUsername === 'This username fits'
									? 'border-green'
									: 'border-red'} bg-top-light-2 placeholder-content-tertiary"
								placeholder="e.g. luckyboy2047"
							/>
							<Icon
								name="UserList"
								width="24"
								height="24"
								class="absolute left-3 top-1/2 -translate-y-1/2"
							/>
						</div>
						{#if validUsername}
							<small
								class="text-xxs {validUsername === 'This username fits'
									? 'text-green'
									: 'text-red'}">{validUsername}</small
							>
						{/if}
					</div>

					<div class="flex flex-col gap-1.5">
						{#if emailInput !== '' && validUsername === 'This username fits'}
							<VioleteButton
								type="submit"
								classes="mt-2"
								title="CONFIRM"
								size="md"
								font="roboto"
								{loading}
							/>
						{:else}
							<Button
								disabled={true}
								title={'CONFIRM'}
								size={'md'}
								font={'roboto'}
								classes={'mt-2 !bg-top-light-10 !text-content-primary  !text-md uppercase slnt-10 !p-4 !px-7'}
							/>
						{/if}
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

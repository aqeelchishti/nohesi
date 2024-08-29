<script lang="ts">
	import { enhance } from '$app/forms';
	import { _ } from 'svelte-i18n';
	import VioleteButton from '../../components/shared/violeteButton.svelte';
	import Icon from '../shared/Icon.svelte';

	export let title: string = '';
	export let id: string;
	let showPassword: boolean = false;
	let loading = false;

	let passwordInput = '';
	let confirmPasswordInput = '';
	let msg = 'Start typing';
	let msgClasses = 'text-content-tertiary';
	let pills = ['bg-top-light-10', 'bg-top-light-10', 'bg-top-light-10'];
	let passwordRequirments: boolean = false;

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
		<form
			method="post"
			use:enhance={({ formData }) => {
				loading = true;
				formData.append('id', id);
				return async ({ update }) => {
					passwordInput = '';
					confirmPasswordInput = '';
					loading = false;
					await update();
				};
			}}
			action=""
			class="flex flex-col gap-5"
		>
			<h4 class="h4 title-gradient">{title === '' ? $_('auth.resetPassword.title') : title}</h4>
			<div class="flex flex-col gap-4 font-inter">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col gap-1.5">
						<div class="flex flex-row justify-between">
							<label for="" class="text-sm text-content-secondary"
								>{$_('auth.resetPassword.label1')}</label
							>
						</div>

						<div class="relative">
							<input
								on:input={handlePasswordChange}
								value={passwordInput}
								type={showPassword ? 'text' : 'password'}
								name="password"
								id="password"
								class="pl-12 pr-4 py-3.5 w-full text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
								placeholder="••••••••"
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
					<label for="" class={`text-sm ${msgClasses}`}>{msg}</label>
					<div class="flex gap-1 self-stretch rounded-sm bg-top-light-2 h-2 overflow-hidden">
						<div class={`flex-1 ${pills[0]}`} />
						<div class={`flex-1 ${pills[1]}`} />
						<div class={`flex-1 ${pills[2]}`} />
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
						<div class="flex flex-row justify-between">
							<label for="" class="text-sm text-content-secondary"
								>{$_('auth.resetPassword.label2')}</label
							>
						</div>

						<div class="relative">
							<input
								on:input={handleConfirmPasswordChange}
								value={confirmPasswordInput}
								type={showPassword ? 'text' : 'password'}
								name="cpassword"
								id="cpassword"
								class="pl-12 pr-4 py-3.5 w-full text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
								placeholder="••••••••"
							/>
							<Icon name="Lock" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />
						</div>
						<VioleteButton
							type="submit"
							classes="mt-2"
							title={$_('auth.resetPassword.btn')}
							size="md"
							font="roboto"
							{loading}
							disabled={loading}
						/>
					</div>
				</div>
			</div>
		</form>
	</div>
</div>

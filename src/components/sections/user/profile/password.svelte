<script lang="ts">
	import { _ } from 'svelte-i18n';
	import Icon from '../../../shared/Icon.svelte';
	import VioleteButton from '../../../shared/violeteButton.svelte';
	import { enhance } from '$app/forms';
	import Privacy from './privacy.svelte';

	let loading = false;
	let infoTooltip: boolean = false;

	export let showOldPassword: boolean = false;
	export let showNewPassword: boolean = false;
	export let oldPassword = '';
	export let passwordInput = '';
	export let confirmPasswordInput = '';
	let passwordRequirments: boolean = false;

	export let msg = 'Start typing';
	export let msgClasses = 'text-content-tertiary';
	export let pills = ['bg-top-light-10', 'bg-top-light-10', 'bg-top-light-10'];

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

	const handleOldPasswordChange = (event: any) => {
		oldPassword = event.target.value;
	};

	let displayTooltip = () => {
		infoTooltip = true;
		setTimeout(() => {
			infoTooltip = false;
		}, 1500);
	};
</script>

<Privacy />

<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
	<div class="flex items-end justify-between relative">
		<h4 class="h4-inter text-content-primary">{$_('page.user.profile.password.title')}</h4>
		<button class="peer" on:click={displayTooltip}>
			<Icon name="Info-Simple" class="fill-icon" />
		</button>
		<p
			class="hidden peer-hover:block absolute right-0 bottom-full text-content-secondary bg-background p-2 px-4 rounded-lg border border-border w-1/2"
			class:!block={infoTooltip}
		>
			If you have not set any password previously, leave the old password field empty.
		</p>
	</div>
	<form
		class="flex flex-col gap-5 self-stretch"
		method="post"
		action="?/change-password"
		use:enhance={({}) => {
			loading = true;
			return async ({ update }) => {
				loading = false;
				passwordInput = '';
				oldPassword = '';
				confirmPasswordInput = '';
				await update();
			};
		}}
	>
		<div class="flex flex-col gap-1.5">
			<div class="flex justify-between items-end px-2">
				<label for="oldPassword" class="text-sm text-content-secondary">Old password</label>
				<a
					href="/forgot-password"
					class="text-sm text-content-secondary underline underline-offset-2">Forgot password?</a
				>
			</div>
			<div class="relative">
				<input
					value={oldPassword}
					type={showOldPassword ? 'text' : 'password'}
					name="oldPassword"
					id="oldPassword"
					class="p-12 w-full py-3 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
					placeholder="••••••••••••••"
					on:input={handleOldPasswordChange}
				/>
				<Icon name="Lock" class="fill-icon absolute left-3 top-1/2 -translate-y-1/2" />
				<button
					class="absolute right-3 top-1/2 -translate-y-1/2"
					on:click={() => (showOldPassword = !showOldPassword)}
					type="button"
				>
					<Icon name="EyeClosed" class="fill-icon {showOldPassword && 'hidden'}" />
					<Icon name="Eye" class="fill-icon {!showOldPassword && 'hidden'}" />
				</button>
			</div>
		</div>
		<div class="flex flex-col gap-1.5">
			<div class="flex justify-between items-end px-2">
				<label for="password" class="text-sm text-content-secondary">New password</label>
			</div>
			<div class="relative">
				<input
					value={passwordInput}
					type={showNewPassword ? 'text' : 'password'}
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
					on:click={() => (showNewPassword = !showNewPassword)}
					type="button"
				>
					<Icon name="EyeClosed" class="fill-icon {showNewPassword && 'hidden'}" />
					<Icon name="Eye" class="fill-icon {!showNewPassword && 'hidden'}" />
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
					type={showNewPassword ? 'text' : 'password'}
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
			title="Save"
			font="roboto"
			classes="!font-bold !py-4 !px-7 !text-md !w-max !self-end"
			size="md"
			type="submit"
			disabled={loading}
			{loading}
		/>
	</form>
</div>

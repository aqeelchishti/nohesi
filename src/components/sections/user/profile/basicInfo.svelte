<script lang="ts">
	import { user } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { clickOutside } from '../../../../actions/clickOutside';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';
	import VioleteButton from '../../../shared/violeteButton.svelte';
	import InputField from './inputField.svelte';
	import Button from '../../../shared/button.svelte';
	import Icon from '../../../shared/Icon.svelte';

	export let emailModal: boolean;
	export let email: string;
	export let emailError: string;
	export let otp1: string;
	export let otp2: string;
	export let otpError: string;
	export let loading: boolean;
	export let timer: number;
	export let timerInterval: NodeJS.Timeout;
	export let username: string;
	export let usernameError: string;
	export let usernameModal: boolean;

	let infoTooltip: boolean = false;

	const dispatch = createEventDispatcher();

	const updateUsername = () => {
		if (username === $user.username) {
			emailError = 'Enter a different username to update';
			return;
		}

		dispatch('changeUsername', {
			username
		});
	};

	const updateEmail = () => {
		if (email === $user.email) {
			emailError = 'Enter a different email to update';
			return;
		}

		dispatch('changeEmail', {
			email
		});
	};

	const verifyOtp = () => {
		dispatch('verifyOtp');
	};

	const closeModal = () => {
		if (!loading) {
			document.body.classList.remove('overflow-hidden');
			clearInterval(timerInterval);
			email = '';
			otp1 = '';
			otp2 = '';
			emailModal = false;
		}
	};

	const closeUsernameModal = () => {
		document.body.classList.remove('overflow-hidden');
		username = '';
		usernameModal = false;
	};

	const handleNameChange = (event: any) => {
		console.log('ok');
	};

	const handleEmailChange = (event: any) => {
		email = event.detail.email;
		if (emailError != '') {
			emailError = '';
		}
	};
	const handleUsernameChange = (event: any) => {
		username = event.detail.username;
		if (usernameError != '') {
			usernameError = '';
		}
	};

	const resendOtp = () => {
		dispatch('resendOtp');
	};

	let displayTooltip = () => {
		infoTooltip = true;
		setTimeout(() => {
			infoTooltip = false;
		}, 1500);
	};
</script>

<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
	<div class="flex items-end justify-between relative">
		<h4 class="h4-inter text-content-primary">{$_('page.user.profile.basicInfo.title')}</h4>
		<button class="peer" on:click={displayTooltip}>
			<Icon name="Info-Simple" class="fill-icon" />
		</button>
		<p
			class="hidden peer-hover:block absolute right-0 bottom-full text-content-secondary bg-background p-2 px-4 rounded-lg border border-border w-1/2"
			class:!block={infoTooltip}
		>
			You are only allowed to change username once a month!
		</p>
	</div>
	<div class="flex flex-col gap-5 self-stretch">
		<!-- <InputField label={$_('page.user.profile.basicInfo.label1')} placeholder={$_('page.user.profile.basicInfo.placeholder1')} icon="User" />
		
		<InputField label={$_('page.user.profile.basicInfo.label2')} placeholder={$_('page.user.profile.basicInfo.placeholder2')} icon="Alien" /> -->
		<form on:submit={updateUsername} class="flex flex-col gap-5 w-full">
			<div class="flex flex-col xs:flex-row xs:items-end gap-2 w-full">
				<InputField
					value={''}
					on:change={handleNameChange}
					error={''}
					type="text"
					label={'Your name'}
					placeholder={'John'}
					icon="User"
				/>
			</div>
			<div class="flex flex-col xs:flex-row xs:items-end gap-2 w-full">
				<InputField
					value={$user.username}
					error={''}
					type="text"
					label={'Username'}
					placeholder=""
					icon="UserList"
					showValue={true}
					disabled={true}
				/>
				<OutlinedButton
					title={'Change Username'}
					font="roboto"
					classes="whitespace-nowrap !font-bold !w-54"
					size="md"
					type="submit"
					disabled={loading}
				/>
			</div>
		</form>
		<form on:submit={updateEmail} class="flex flex-col gap-2 w-full">
			<div class="flex flex-col xs:flex-row xs:items-end gap-2 w-full">
				<InputField
					value={email}
					on:change={handleEmailChange}
					required={true}
					error={emailError}
					type="email"
					label={$_('page.user.profile.basicInfo.label3')}
					placeholder={$_('page.user.profile.basicInfo.placeholder3')}
					icon="Envelope"
				/>
				<OutlinedButton
					title={'Change Email'}
					font="roboto"
					classes="whitespace-nowrap !font-bold !w-48 !py-2 xs:!py-4"
					size="md"
					type="submit"
					disabled={loading}
				/>
			</div>
			<p class="text-sm text-content-secondary font-inter ml-2">
				Active email: <span class="text-content-primary font-medium">{$user.email}</span>
			</p>
		</form>
	</div>
</div>

{#if emailModal}
	<div class="modal max-w-screen-3xl mx-auto">
		<div
			class="p-6 rounded-xl border border-border bg-top-dark-63 backdrop-blur-128 shadow-tooltip flex flex-col gap-8 w-full xs:w-4/5 2xl:w-2/5 mx-auto"
			use:clickOutside
			on:click_outside={closeModal}
		>
			<div class="flex flex-col gap-7">
				<h4 class="text-content-primary">{$_('page.user.profile.basicInfo.btn')}</h4>
				<div class="flex flex-col gap-5">
					<p class="text-content-primary text-base font-inter">
						We sent you six digit confirmation codes on <span class="text-primary-violete"
							>{$user.email}</span
						>
						and <span class="text-primary-violete">{email}</span>. Please fill below fields to
						confirm your email adress.
					</p>
					{#if otpError !== ''}
						<small class="text-red px-2 -my-4">{otpError}</small>
					{/if}
					<div class="flex flex-col gap-0.5">
						<input
							disabled={loading}
							bind:value={otp1}
							type="text"
							placeholder={`Enter 6-digit code (${$user.email})`}
							class={`p-3.5 px-4 text-base rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary text-content-primary w-full`}
						/>
					</div>
					<div class="text-content-primary font-inter flex items-end justify-between gap-4">
						<p class="text-sm">
							{$_('page.user.profile.basicInfo.modalText2')}
							<button
								class:text-content-tertiary={timer > 0}
								disabled={timer > 0}
								class="underline"
								on:click={resendOtp}
							>
								{$_('page.user.profile.basicInfo.modalText3')}
							</button>
						</p>
						<small class="whitespace-nowrap">
							{#if timer > 0}
								{timer} seconds
							{/if}
						</small>
					</div>
					<div class="flex flex-col gap-0.5">
						<input
							disabled={loading}
							bind:value={otp2}
							type="text"
							placeholder={`Enter 6-digit code (${email})`}
							class={`p-3.5 px-4 text-base rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary text-content-primary w-full`}
						/>
					</div>
					<div class="text-content-primary font-inter flex items-end justify-between gap-4">
						<p class="text-sm">
							{$_('page.user.profile.basicInfo.modalText2')}
							<button
								class:text-content-tertiary={timer > 0}
								disabled={timer > 0}
								class="underline"
								on:click={resendOtp}
							>
								{$_('page.user.profile.basicInfo.modalText3')}
							</button>
						</p>
						<small class="whitespace-nowrap">
							{#if timer > 0}
								{timer} seconds
							{/if}
						</small>
					</div>
				</div>
			</div>
			<div class="flex items-center justify-between">
				<OutlinedButton
					title={$_('page.user.profile.basicInfo.modalBtn')}
					on:click={closeModal}
					classes="!font-bold !w-max"
					font="roboto"
					disabled={loading}
				/>
				<VioleteButton
					title="Verify"
					on:click={verifyOtp}
					classes="!font-bold !w-max"
					font="roboto"
					disabled={loading}
				/>
			</div>
		</div>
	</div>
{/if}

{#if usernameModal}
	<div
		class="modal max-w-screen-3xl 2xl:p-0 xl:p-80 lg:p-52 md:p-44 sm:p-32 xs:p-14 max-[500px]:p-0"
	>
		<div
			class="p-6 rounded-xl border border-border bg-top-light-2 backdrop-blur-128 shadow-tooltip flex flex-col gap-8 w-full xs:w-4/5 2xl:w-2/5 mx-auto"
			use:clickOutside
			on:click_outside={closeUsernameModal}
		>
			<form method="post" class="flex flex-col gap-5">
				<h4 class="h4 text-content-primary font-roboto uppercase">Change USERNAME</h4>
				<div class="flex flex-col gap-4 font-inter">
					<div class="flex flex-col gap-4">
						<div class=" bg-yellow-bg-surface border border-yellow rounded-sm py-3 px-4">
							<p class="text-yellow font-inter font-medium">
								Usernames must not contain profanity, racial slurs or words that belittle other
								players
							</p>
						</div>
						<div class="flex flex-col gap-2.5">
							<div class="relative">
								<input
									id="username"
									class="pl-12 pr-4 py-3.5 w-full text-base text-content-secondary rounded-sm border
							 border-border bg-top-light-2 placeholder-content-tertiary"
									placeholder="e.g. luckyboy2047"
								/>
								<Icon
									name="UserList"
									width="24"
									height="24"
									class="absolute left-3 top-1/2 -translate-y-1/2"
								/>
							</div>
							<div class="flex justify-between gap-2">
								<OutlinedButton
									type="submit"
									classes="mt-2"
									title="Cancel"
									size="md"
									font="roboto"
									on:click={closeUsernameModal}
								/>
								<Button
									type="submit"
									classes="mt-2 !bg-top-light-10 !text-content-primary  !text-md uppercase slnt-10 !p-4 !px-7"
									title="Confirm"
									size="md"
									font="roboto"
									on:click={closeUsernameModal}
								/>
							</div>
						</div>
					</div>
				</div>
			</form>
		</div>
	</div>
{/if}

<style lang="postcss">
	.modal {
		@apply h-full w-screen bg-top-dark-44 backdrop-blur-4 flex justify-center items-center z-50 fixed top-0 left-0 bottom-0 right-0;
	}
</style>

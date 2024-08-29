<script lang="ts">
	// import OutlinedButton from '../../../shared/outlinedButton.svelte';
	// import VioleteButton from '../../../shared/violeteButton.svelte';
	import BasicInfo from './basicInfo.svelte';
	import OtherSettings from './otherSettings.svelte';
	import Password from './password.svelte';
	//import ProfileDecoration from './profileDecoration.svelte';
	import SocialLinks from './socialLinks.svelte';

	export let loading: boolean;
	export let emailModal: boolean;
	export let email: string;
	export let emailError: string;
	export let otp1: string;
	export let otp2: string;
	export let otpError: string;
	export let timer: number;
	export let timerInterval: NodeJS.Timeout;

	let showOldPassword: boolean = false;
	let showNewPassword: boolean = false;
	let oldPassword = '';
	let passwordInput = '';
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
			pills = ['bg-red', 'bg-red', 'bg-red'];
		}
	}
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-4">
		<BasicInfo
			on:changeEmail
			on:verifyOtp
			on:resendOtp
			bind:loading
			bind:email
			bind:emailError
			bind:otp1
			bind:otp2
			bind:otpError
			bind:timer
			bind:timerInterval
			bind:emailModal
		/>

		<Password
			bind:showNewPassword
			bind:showOldPassword
			bind:oldPassword
			bind:passwordInput
			bind:confirmPasswordInput
			bind:msg
			bind:pills
			bind:msgClasses
		/>

		<SocialLinks on:connectSteam on:handleDiscord on:handleGoogle on:handleSteam />

		<OtherSettings on:deactivateUser bind:loading />
	</div>
	<!-- <div class="flex justify-between">
		<OutlinedButton
			title="Cancel"
			font="roboto"
			classes="!font-bold !py-4 !px-7 !text-md "
			size="md"
		/>
		<VioleteButton
			title="Save"
			font="roboto"
			classes="!font-bold !py-4 !px-7 !text-md "
			size="md"
		/>
	</div> -->
</div>

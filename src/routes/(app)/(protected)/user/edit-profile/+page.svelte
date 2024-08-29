<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { discord, socialConnecting, toastMsg, user } from '$lib/stores';
	//import EditForm from '../../../../../components/sections/user/profile/editForm.svelte';
	import BasicInfo from '../../../../../components/sections/user/profile/basicInfo.svelte';
	import OtherSettings from '../../../../../components/sections/user/profile/otherSettings.svelte';
	import Password from '../../../../../components/sections/user/profile/password.svelte';
	import ProfileDecoration from '../../../../../components/sections/user/profile/profileDecoration.svelte';
	import SocialLinks from '../../../../../components/sections/user/profile/socialLinks.svelte';
	import Seo from '../../../../../components/shared/SEO.svelte';
	import Loading from '../../../../../components/shared/loading.svelte';
	import Spacer from '../../../../../components/shared/spacer.svelte';
	import SideMenu from '../../../../../components/sections/user/profile/side-menu/sideMenu.svelte';

	export let data;
	export let form;

	$: ({ sid, error } = data);
	$: if (form) {
		if (form.error) {
			toastMsg.set({
				msg: form.error,
				desc: '',
				icon: 'Warning'
			});
		}
		if (form.success) {
			toastMsg.set({
				msg: 'Password updated successfully',
				desc: '',
				icon: 'Success'
			});
		}
	}

	let loading = false;
	let emailLoading = false;
	let email: string;
	let emailError: string = '';
	let otp1: string;
	let otp2: string;
	let otpError: string = '';
	let emailModal: boolean = false;
	let timer: number;
	let timerInterval: NodeJS.Timeout;
	let usernameModal: boolean = false;
	let username: string;
	let usernameError: string;

	const updateUsername = () => {
		usernameModal = true;
	};

	const updateEmail = async () => {
		emailLoading = true;

		const resp = await fetch(`${PUBLIC_BACKEND_URL}/functions/check-email`, {
			method: 'POST',
			body: JSON.stringify({ email }),
			headers: {
				Authorization: `Bearer ${sid}`,
				'content-type': 'application/json'
			}
		});

		if (resp.status === 403) {
			goto('/api/logout');
		} else {
			const emailAvailable = await resp.json();
			if (emailAvailable.error) {
				emailLoading = false;
				emailError = emailAvailable.error;
			} else {
				const otpResp = await fetch(`${PUBLIC_BACKEND_URL}/functions/generate-otps`, {
					method: 'POST',
					headers: {
						Authorization: `Bearer ${sid}`,
						'content-type': 'application/json'
					},
					body: JSON.stringify({
						email: email,
						resend: false
					})
				});

				if (otpResp.ok) {
					document.body.classList.add('overflow-hidden');
					emailLoading = false;
					emailModal = true;
					timer = 60;
					timerInterval = setInterval(() => timer--, 1000);
				} else if (otpResp.status === 500) {
					emailError = 'Some error occurred, try again later!';
				} else {
					const temp = await otpResp.json();
					emailError = temp.error;
				}

				emailLoading = false;
			}
		}
	};

	const verifyOtp = async () => {
		emailLoading = true;
		if (otp1.length !== 6 || otp2.length !== 6) {
			otpError = 'Invalid otp values!';
			emailLoading = false;
			return;
		} else if (!/\d{6}/.test(otp1) || !/\d{6}/.test(otp2)) {
			otpError = 'Invalid otp values!';
			emailLoading = false;
			return;
		}
		const resp = await fetch(`${PUBLIC_BACKEND_URL}/functions/verify-otps`, {
			method: 'POST',
			body: JSON.stringify({ email, otp1, otp2 }),
			headers: {
				Authorization: `Bearer ${sid}`,
				'content-type': 'application/json'
			}
		});

		if (resp.status === 403) {
			goto('/api/logout');
		} else if (resp.status === 500) {
			otpError = 'Some error occurred, try again later!';
		} else if (resp.ok) {
			document.body.classList.remove('overflow-hidden');
			clearInterval(timerInterval);
			user.update((prev) => ({ ...prev, email: email }));
			email = '';
			otp1 = '';
			otp2 = '';
			otpError = '';
			emailModal = false;
			toastMsg.set({
				icon: 'Success',
				msg: 'Email changed successfully',
				desc: ''
			});
		} else if (resp.status === 400) {
			const data = await resp.json();
			otpError = data.error;
			otp1 = '';
			otp2 = '';
		} else {
			document.body.classList.remove('overflow-hidden');
			clearInterval(timerInterval);
			email = '';
			otp1 = '';
			otp2 = '';
			const data = await resp.json();
			emailModal = false;

			if (data.error === 'Tokens expired!') {
				toastMsg.set({
					icon: 'Warning',
					msg: 'Tokens expired!',
					desc: 'Token provided for email change are valid only for 24 hours.'
				});
			} else {
				toastMsg.set({
					icon: 'Warning',
					msg: 'Some error occurred',
					desc: 'Some internal error occurred Try again in some time. If the error does not resolve try contacting us.'
				});
			}
		}
		emailLoading = false;
	};

	const resendOtp = async () => {
		const otpResp = await fetch(`${PUBLIC_BACKEND_URL}/functions/resend-otps`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${sid}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				email: email
			})
		});

		if (otpResp.ok) {
			timer = 60;
		} else if (otpResp.status === 500) {
			otpError = 'Some error occurred sening emails, try again later!';
		} else if (otpResp.status === 403) {
			goto('/api/logout');
		} else if (otpResp.status === 401) {
			document.body.classList.remove('overflow-hidden');
			clearInterval(timerInterval);
			email = '';
			otp1 = '';
			otp2 = '';
			emailModal = false;
			toastMsg.set({
				icon: 'Warning',
				msg: 'Some error occurred',
				desc: 'Tokens may have expired. Change email tokens are only valid for 24 hours.'
			});
		}
	};

	const deactivateUser = async (event: any) => {
		const feedback = event.detail.feedback;
		loading = true;
		const resp = await fetch(`${PUBLIC_BACKEND_URL}/functions/delete-account`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${sid}`,
				'content-type': 'application/json'
			},
			body: JSON.stringify({
				feedback
			})
		});

		if (resp.ok) {
			goto('/', { invalidateAll: true });
		}
	};

	const handleDiscord = async (event: any) => {
		socialConnecting.set('discord');
		const id = event.detail.id;
		if (id) {
			const resp = await fetch(`${PUBLIC_BACKEND_URL}/delink/discord`, {
				headers: {
					Authorization: `Bearer ${sid}`
				}
			});
			if (resp.ok) {
				user.update((prev) => ({
					...prev,
					connectedProviders: prev.connectedProviders!.filter((e) => e.provider !== 'discord'),
					discordId: ''
				}));

				delete $discord.level;
				delete $discord.joinedAt;

				toastMsg.set({
					icon: 'Success',
					msg: 'Discord disconnected successfully',
					desc: ''
				});
			} else if (resp.status === 400) {
				toastMsg.set({
					icon: 'Warning',
					msg: (await resp.json()).error,
					desc: 'Your account have only 1 provider connected for your authentication process, so cannot remove the provider.'
				});
			}
			socialConnecting.set(null);
		} else {
			goto('/sign-in/discord');
		}
	};
	const handleGoogle = async (event: any) => {
		socialConnecting.set('google');
		const id = event.detail.id;
		if (id) {
			const resp = await fetch(`${PUBLIC_BACKEND_URL}/delink/google`, {
				headers: {
					Authorization: `Bearer ${sid}`
				}
			});
			if (resp.ok) {
				user.update((prev) => ({
					...prev,
					connectedProviders: prev.connectedProviders!.filter((e) => e.provider !== 'google')
				}));

				toastMsg.set({
					icon: 'Success',
					msg: 'Google disconnected successfully',
					desc: ''
				});
			} else if (resp.status === 400) {
				toastMsg.set({
					icon: 'Warning',
					msg: (await resp.json()).error,
					desc: 'Your account have only 1 provider connected for your authentication process, so cannot remove the provider.'
				});
			}
			socialConnecting.set(null);
		} else {
			goto('/sign-in/google');
		}
	};
	const handleSteam = async (event: any) => {
		socialConnecting.set('steam');
		const id = event.detail.id;
		if (id) {
			const resp = await fetch(`${PUBLIC_BACKEND_URL}/delink/steam`, {
				headers: {
					Authorization: `Bearer ${sid}`
				}
			});

			if (resp.ok) {
				user.update((prev) => ({
					...prev,
					connectedProviders: prev.connectedProviders!.filter((e) => e.provider !== 'steam')
				}));

				toastMsg.set({
					icon: 'Success',
					msg: 'Steam disconnected successfully',
					desc: ''
				});
			} else if (resp.status === 400) {
				toastMsg.set({
					icon: 'Warning',
					msg: (await resp.json()).error,
					desc: 'Your account have only 1 provider connected, so cannot remove the provider.'
				});
			}
			socialConnecting.set(null);
		} else {
			goto('/api/steam');
		}
	};

	$: if (error) {
		toastMsg.set({
			icon: 'Warning',
			msg: error,
			desc: ''
		});
	}

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

	//
	import { menuItems } from '$lib/store/editProfileSideBar';
	import { onDestroy } from 'svelte';

	onDestroy(() => {
		$menuItems.map((item: any, i: number) => {
			if (item.isActive === true) {
				item.isActive = false;
			}
		});
		$menuItems[0].isActive = true;
	});
</script>

<Seo title="User | Profile" />

{#if loading}
	<Loading />
{/if}

<div class="pt-10 w-full sm:w-4/5 mx-auto">
	<div class="flex flex-row flex-wrap sm:flex-nowrap w-full gap-[26px]">
		<h3 class="h3-inter text-content-primary pb-6 sm:hidden flex">
			{$_('page.user.profile.title')}
		</h3>
		<div class="flex-auto w-full sm:w-[206px] pt-0 sm:pt-24">
			<SideMenu />
		</div>
		<div class="flex-auto w-full md:w-[672px]">
			<h3 class="h3-inter text-content-primary pb-12 hidden sm:flex">
				{$_('page.user.profile.title')}
			</h3>

			<div class="flex flex-col gap-8">
				<div class="flex flex-col gap-4">
					{#each $menuItems as item}
						{#if item.isActive === true}
							{#if item.name === 'Profile decorations'}
								<ProfileDecoration />
							{:else if item.name === 'Basic information'}
								<BasicInfo
									on:changeEmail={updateEmail}
									on:verifyOtp={verifyOtp}
									on:resendOtp={resendOtp}
									on:changeUsername={updateUsername}
									bind:loading={emailLoading}
									bind:email
									bind:emailError
									bind:otp1
									bind:otp2
									bind:otpError
									bind:timer
									bind:timerInterval
									bind:emailModal
									bind:username
									bind:usernameError
									bind:usernameModal
								/>
							{:else if item.name === 'Privacy'}
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
							{:else if item.name === 'Social links'}
								<SocialLinks
									on:connectSteam
									on:handleDiscord={handleDiscord}
									on:handleGoogle={handleGoogle}
									on:handleSteam={handleSteam}
								/>
							{:else if item.name === 'Other settings'}
								<OtherSettings on:deactivateUser={deactivateUser} bind:loading={emailLoading} />
							{/if}
						{/if}
					{/each}
				</div>
			</div>
		</div>
	</div>

	<Spacer height="h-20" />
</div>

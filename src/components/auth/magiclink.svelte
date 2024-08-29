<script lang="ts">
	import VioleteButton from '../../components/shared/violeteButton.svelte';
	import OutlinedButton from '../../components/shared/outlinedButton.svelte';
	import { goto } from '$app/navigation';
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	import { toastIcon, toastMsg, userLoggedIn } from '$lib/stores';
	import Toast from '../shared/toast.svelte';

	const dispatch = createEventDispatcher();

	let emailExpression = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g);

	let passwordFields: boolean = false;
	let emailField: string = '';
	let passwordField: string = '';
	let form: HTMLFormElement;

	const handleSendCode = () => {
		dispatch('sendcode');
	};
	const handlePassword = () => {
		dispatch('setpassword');
	};

	const handleMagicLogin = () => {
		if (emailExpression.test(emailField)) {
			userLoggedIn.set(true);
			goto('/');
		} else {
			toastMsg.set('Email is not valid!');
			toastIcon.set('Warning');
		}
	};

	const handlePasswordLogin = () => {
		if (passwordField !== '') {
			userLoggedIn.set(true);
			goto('/');
		} else {
			toastMsg.set('Password must not be empty!');
			toastIcon.set('Warning');
		}
	};

	const togglePassword = () => {
		if (emailField === '') {
			toastMsg.set('Email must not be empty!');
			toastIcon.set('Warning');
		} else if (emailExpression.test(emailField)) {
			passwordFields = !passwordFields;
		} else {
			toastMsg.set('Email is not valid!');
			toastIcon.set('Warning');
		}
	};

	const handleFormSubmit = (
		e: SubmitEvent & {
			currentTarget: EventTarget & HTMLFormElement;
		}
	) => {
		e.preventDefault();
		// const formData = new FormData(e.target as HTMLFormElement);
		// 
		// const email = formData.get('email');
	};
</script>

<div
	class="grid grid-cols-1 h-screen md:grid-cols-2 3xl:grid-cols-3 bg-top-light-2 md:bg-top-dark-0 justify-items-stretch content-between md:content-center"
>
	<div class="flex justify-center md:hidden relative">
		<a href="/">
			<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
		</a>
		<Toast left="left-0" top="top-20" />
	</div>

	<div
		class="w-full p-6 grid order-last gap-40 md:order-first md:h-screen grid-cols-1 md: md:bg-top-light-2 bg-transparent rounded-xl md:border border-border 3xl:content-center"
	>
		<div class="relative">
			<a class="hidden md:block 4xl:mb-20" href="/">
				<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
			</a>
			<Toast left="left-0" top="top-20" />
		</div>
		<form class="flex flex-col gap-5" bind:this={form}>
			<h4 class="h4 title-gradient">LOG IN WITH EMAIL</h4>
			{#if passwordFields}
				<div class="flex flex-col gap-4 font-inter">
					<div class="flex flex-col gap-1.5">
						<div class="text-sm text-content-secondary flex justify-between">
							<label for="">{$_('auth.signin.label2')}</label>
							<a href="/forget-password" class="underline">Forgot password?</a>
						</div>
						<div class="relative">
							<input
								bind:value={passwordField}
								type="password"
								name="password"
								id="password"
								class="pl-12 pr-4 w-full py-3.5 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
								placeholder={'••••••••'}
								required
							/>
							<img src="/icons/email.svg" alt="cdn" class="absolute left-3 top-1/2 -translate-y-1/2" />
						</div>
					</div>
					<VioleteButton
						classes="mt-2"
						title="Login"
						size="md"
						font="roboto"
						on:click={handlePasswordLogin}
					/>
				</div>
			{:else}
				<div class="flex flex-col gap-4 font-inter">
					<div class="flex flex-col gap-1.5">
						<label for="" class="text-sm text-content-secondary">{$_('auth.signup.label3')}</label>
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
							<img src="/icons/email.svg" alt="cdn" class="absolute left-3 top-1/2 -translate-y-1/2" />
						</div>
					</div>
				</div>
				<VioleteButton
					classes="mt-2"
					title="SEND MAGIC LINK"
					size="md"
					font="roboto"
					on:click={handleMagicLogin}
				/>
				<OutlinedButton
					icon=""
					iconClasses="h-6 w-6 2xl:w-8 2xl:h-8 opacity-100"
					title="LOGIN WITH PASSWORD "
					size="md"
					font="roboto"
					classes="w-full justify-center"
					on:click={togglePassword}
				/>
			{/if}
		</form>

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
	</div>
	<div
		class="w-full relative md:p-6 md:h-screen grid content-center justify-items-center 3xl:col-span-2"
	>
		<img class="w-[50%] md:w-[72%] 3xl:w-[60%] h-auto" src="/icons/world_img.svg" alt="cdn" />

		<h3
			class="absolute text-center top-1/2 left-1/2 w-[100%] text-sm md:text-md lg:text-xl 3xl:text-2xl 4xl:text-3xl transform -translate-x-1/2 -translate-y-1/2 text-content-secondary"
		>
			WELCOME TO <br />YOUR NEW ADDICTION
		</h3>
	</div>
</div>

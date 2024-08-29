<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { _ } from 'svelte-i18n';
	import OutlinedButton from '../../components/shared/outlinedButton.svelte';
	import VioleteButton from '../../components/shared/violeteButton.svelte';

	let loading = false;
</script>

<div class="flex items-center justify-center md:justify-start h-[10svh]">
	<a href="/">
		<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
	</a>
</div>
<div class="flex items-center justify-center h-[90svh]">
	<div
		class="w-full md:w-2/5 px-5 gap-8 py-7 flex flex-col justify-center bg-top-light-2 rounded-xl border border-border"
	>
		<form
			method="post"
			use:enhance={() => {
				loading = true;
				return async ({ update }) => {
					loading = false;
					await update();
				};
			}}
			class="flex flex-col gap-5"
		>
			<h4 class="h4 title-gradient">
				{@html $_('auth.forgetPassword.title').replaceAll('\n', '<br>')}
			</h4>
			<label for="" class="text-sm text-content-secondary"
				>Enter your email address below and we'll send you a link to reset your password.</label
			>
			<div class="flex flex-col gap-4 font-inter">
				<div class="flex flex-col gap-1.5">
					<label for="mail" class="text-sm text-content-secondary"
						>{$_('auth.forgetPassword.label')}</label
					>
					<div class="relative">
						<input
							type="text"
							name="mail"
							id="mail"
							class="pl-12 pr-4 w-full py-3.5 text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
							placeholder={$_('auth.forgetPassword.placeholder')}
						/>
						<img
							src="/icons/email.svg"
							alt="cdn"
							class="absolute left-3 top-1/2 -translate-y-1/2"
						/>
					</div>
				</div>
			</div>
			<VioleteButton
				type="submit"
				classes="mt-2"
				title={$_('auth.forgetPassword.btn1')}
				size="md"
				font="roboto"
				{loading}
				disabled={loading}
			/>
		</form>

		<div class="flex flex-col md:flex-row items-baseline justify-between">
			<p class="font-roboto text-md font-bold text-content-secondary italic uppercase">
				{$_('auth.forgetPassword.msg2')}
			</p>
			<OutlinedButton
				title={$_('auth.forgetPassword.btn2')}
				size="md"
				font="roboto"
				classes="w-full md:w-max"
				on:click={() => goto('/sign-in')}
			/>
		</div>
	</div>
</div>

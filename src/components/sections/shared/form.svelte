<script lang="ts">
	import { _ } from 'svelte-i18n';

	import OutlinedButton from '../../shared/outlinedButton.svelte';
	import VioleteButton from '../../shared/violeteButton.svelte';
	import Icon from '../../shared/Icon.svelte';
	import { toastMsg } from '$lib/stores';
	import Toast from '../../shared/toast.svelte';
	import { goto } from '$app/navigation';

	export let showDescription: boolean = true;

	let textAreaInput = '';
	let name = '';
	let email = '';

	let loading = false;

	const sendEmail = async () => {
		loading = true;

		try {
			await fetch('/api/send-email', {
				method: 'POST',
				body: JSON.stringify({
					name,
					sender: 'team@nohesi.gg',
					body: `<a href="mailto:${email}">${email}</a><h3>Query:</h3><p>${textAreaInput}</p>`,
					subject: `Contact | ${name}`
				})
			});
			toastMsg.set({
				msg: 'Email sent to No Hesi team',
				desc: '',
				icon: 'Success'
			});
			loading = false;
			textAreaInput = '';
			name = '';
			email = '';
		} catch (error) {}
	};

	const gotoFaq = () => {
		// goto('/faq');
	};
</script>

<Toast top="top-20" left="right-8 md:right-12" classes="z-50" />

<div class="container-section grid grid-cols-1 md:grid-cols-5 gap-6 scroll-mt-16" id="contact">
	<div class="col-span-1 md:col-span-3 flex flex-col gap-10">
		{#if showDescription}
			<h1 class="title-gradient">{$_('components.form.left.heading3')}</h1>
		{:else}
			<h1 class="title-gradient">
				{@html $_('components.form.left.heading2').replaceAll('\n', '<br>')}
			</h1>
		{/if}
	</div>
	<div
		class="col-span-1 md:col-span-2 px-5 py-4.5 flex flex-col justify-between h-auto bg-top-light-2 rounded-xl border border-border"
	>
		<form action="" class="flex flex-col gap-7" on:submit|preventDefault={sendEmail}>
			<p class="h2-inter title-gradient">{$_('components.form.right.heading')}</p>
			<div class="flex flex-col gap-5 font-inter">
				<div class="flex flex-col gap-1.5">
					<label for="" class="text-sm text-content-secondary"
						>{$_('components.form.right.field1.label')}</label
					>
					<div class="relative">
						<input
							bind:value={name}
							required
							type="text"
							name=""
							id=""
							class="pl-12 pr-4 w-full py-3.5 text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
							placeholder={$_('components.form.right.field1.placeholder')}
						/>
						<img src="/icons/User.svg" alt="cdn" class="absolute left-3 top-1/2 -translate-y-1/2" />
					</div>
				</div>
				<div class="flex flex-col gap-1.5">
					<label for="" class="text-sm text-content-secondary"
						>{$_('components.form.right.field2.label')}</label
					>
					<div class="relative">
						<input
							bind:value={email}
							required
							type="email"
							name=""
							id=""
							class="pl-12 pr-4 py-3.5 w-full text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
							placeholder={$_('components.form.right.field2.placeholder')}
						/>
						<Icon name="Envelope" class="absolute left-3 top-1/2 -translate-y-1/2 fill-icon" />
					</div>
				</div>
				<div class="flex flex-col gap-1.5">
					<label for="" class="text-sm text-content-secondary"
						>{$_('components.form.right.field3.label')}</label
					>
					<div class="relative">
						<textarea
							required
							name=""
							id=""
							cols="30"
							rows="3"
							placeholder={$_('components.form.right.field3.placeholder')}
							maxlength="400"
							class="pl-12 outline-none pr-4 py-3.5 w-full pb-10 text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary resize-none"
							bind:value={textAreaInput}
						/>
						<img src="/icons/ChatDots.svg" alt="cdn" class="absolute left-3 top-4" />
						<p class="text-content-tertiary text-xxs absolute bottom-2 right-2">
							{textAreaInput.length}/400
						</p>
					</div>
				</div>
			</div>
			<VioleteButton
				classes=""
				title={$_('components.form.right.btn')}
				size="md"
				font="roboto"
				type="submit"
				bind:loading
			/>
		</form>
	</div>
</div>

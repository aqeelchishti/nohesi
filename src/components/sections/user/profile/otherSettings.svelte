<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { clickOutside } from '../../../../actions/clickOutside';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';
	import { user } from '$lib/stores';
	import { createEventDispatcher } from 'svelte';

	export let loading: boolean;

	let requestSent: boolean = false;

	const dispatch = createEventDispatcher();

	let displayModal: boolean = false;
	const openModal = () => {
		document.body.classList.add('overflow-hidden');
		displayModal = true;
	};

	const closeModal = () => {
		document.body.classList.remove('overflow-hidden');
		displayModal = false;
	};

	const handleDeactivate = () => {
		if (username && username === $user.username) {
			requestSent = true
			dispatch('deactivateUser', {
				feedback: textAreaInput
			});
		} else {
			username = '';
			usernameError = 'Invalid username';
		}
	};
	const handleChange = () => {
		if (usernameError && username) {
			usernameError = '';
		}
	};

	$: if(requestSent && !loading){
		closeModal()
	}
	
	let textAreaInput = '';
	let username = '';
	let usernameError = '';
</script>

<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
	<h4 class="h4-inter text-content-primary">{$_('page.user.profile.other.title')}</h4>
	<div class="flex flex-col xs:flex-row xs:items-center self-stretch justify-between gap-2">
		<div class="flex flex-col gap-1">
			<h6 class="h6-inter text-content-secondary">{$_('page.user.profile.other.msg')}</h6>
			<p class="text-base font-inter font-medium text-red">
				{$_('page.user.profile.other.warning')}
			</p>
		</div>
		<OutlinedButton
			title={$_('page.user.profile.other.btn')}
			size="sm"
			classes="!py-2 !px-2 !font-bold items-center"
			font="roboto"
			on:click={openModal}
		/>
	</div>
</div>

{#if displayModal}
	<div class="modal max-w-screen-3xl mx-auto">
		<div
			class="p-6 rounded-xl border border-border bg-top-dark-63 backdrop-blur-128 shadow-tooltip flex flex-col gap-8 w-full xs:w-4/5 2xl:w-2/5 mx-auto"
			use:clickOutside
			on:click_outside={closeModal}
		>
			<div class="flex flex-col gap-7">
				<h4 class="text-content-primary">{$_('page.user.profile.other.modalTitle')}</h4>
				<div class="flex flex-col gap-5">
					<p
						class="rounded-sm border border-red-secondary bg-red-bg-surface py-3 px-4 text-red text-base font-medium"
					>
						Warning! This action is irreversible, and all subscriptions will be cancelled
						immediately.
					</p>
					<div class="flex flex-col gap-3">
						<p class="text-content-primary text-base">
							{$_('page.user.profile.other.modalMsg1')}
						</p>
						<div class="relative">
							<textarea
								name=""
								id=""
								cols="30"
								rows="3"
								placeholder={$_('page.user.profile.other.modalPlaceholder1')}
								maxlength="400"
								class="px-4 py-3.5 w-full pb-10 text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary resize-none"
								bind:value={textAreaInput}
							/>
							<p class="text-content-tertiary text-xxs absolute bottom-2 right-2">
								{textAreaInput.length}/400
							</p>
						</div>
					</div>
					<p class="text-content-primary text-base font-inter">
						{$_('page.user.profile.other.modalMsg2', { values: { email: $user.email } })}
					</p>
					<div>
						{#if usernameError != ''}
							<small class="text-red font-inter font-medium">{usernameError}</small>
						{/if}
						<input
							type="text"
							bind:value={username}
							on:paste|preventDefault
							on:copy|preventDefault
							on:input={handleChange}
							placeholder="username"
							class:border-red={usernameError}
							class={`p-3.5 px-4 text-base rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary text-content-primary w-full`}
						/>
					</div>
				</div>
			</div>
			<div class="flex justify-end gap-4">
				<OutlinedButton
					title="Cancel"
					on:click={closeModal}
					classes="!font-bold !w-max"
					font="roboto"
					disabled={loading}
				/>
				<OutlinedButton
					title="Deactivate"
					on:click={handleDeactivate}
					classes="!font-bold !w-max !text-red !border-red-secondary hover:!border-red"
					font="roboto"
					disabled={loading}
				/>
			</div>
		</div>
	</div>
{/if}

<style lang="postcss">
	.modal {
		@apply h-full w-screen bg-top-dark-44 backdrop-blur-4 flex justify-center items-center z-50 fixed top-0 left-0 bottom-0 right-0;
	}
</style>

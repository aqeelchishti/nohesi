<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { _ } from 'svelte-i18n';
	const dispatch = createEventDispatcher();

	let value = '';

	$: if (value) {
		dispatch('verify', {
			value
		});
	}
</script>

<div class="flex items-center justify-center md:justify-start">
	<a href="/">
		<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
	</a>
</div>
<div class=" flex items-center justify-center">
	<div
		class="w-full md:w-2/5 px-5 gap-5 py-7 flex flex-col justify-center bg-top-light-2 rounded-xl border border-border"
	>
		<form action="" class="flex flex-col gap-5">
			<h4 class="h4 title-gradient">{$_('auth.verifyEmail.title')}</h4>
			<label for="" class="text-sm text-content-secondary">{$_('auth.verifyEmail.msg1')}</label>
			<div class="flex flex-col gap-4 font-inter">
				<div class="relative">
					<input
						type="text"
						bind:value
						name=""
						id=""
						class="pl-12 pr-4 w-full py-3.5 outline-none text-base text-content-secondary rounded-sm border border-border bg-top-light-2 placeholder-content-tertiary"
						placeholder={$_('auth.verifyEmail.placeholder')}
					/>
				</div>
			</div>
		</form>

		<label for="" class="text-sm text-content-secondary">{$_('auth.verifyEmail.msg4')}</label>
	</div>
</div>

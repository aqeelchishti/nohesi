<script lang="ts">
	import { _ } from 'svelte-i18n';
	export let mail: string;
</script>

<div class="flex items-center justify-center md:justify-start h-[10svh]">
	<a href="/">
		<img class="2xl:h-20" src="/images/footer-logo.png" alt="cdn" />
	</a>
</div>
<div class=" flex items-center justify-center h-[90svh]">
	<div
		class="w-full md:w-2/5 px-5 gap-5 py-7 flex flex-col justify-center bg-top-light-2 rounded-xl border border-border"
	>
		<form action="" class="flex flex-col gap-5">
			<h4 class="h4 title-gradient">{$_('auth.verifyEmail.title')}</h4>
			<label for="" class="text-sm text-content-secondary"
				>We have sent you a confirmation email at {mail}. Please confirm it to enjoy full features
				of NoHesi.
			</label>
		</form>
	</div>
</div>

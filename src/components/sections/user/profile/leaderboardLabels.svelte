<script>
	import { _ } from 'svelte-i18n';

	import DropDown from './dropDown.svelte';
	import Switch from './switch.svelte';
</script>

<div class="p-6 flex flex-col gap-7 rounded-lg border border-border bg-top-light-2">
	<h4 class="h4-inter text-content-primary">{$_('page.user.profile.leaderboard.title')}</h4>
	<div class="flex flex-col gap-5">
		<div class="flex flex-col gap-3">
			<div class="flex items-center justify-between self-stretch">
				<h6 class="h6-inter text-content-primary">{$_('page.user.profile.leaderboard.label1')}</h6>
				<Switch checked={true} />
			</div>
			<DropDown />
		</div>
		<div class="flex items-center justify-between self-stretch">
			<h6 class="h6-inter text-content-primary">{$_('page.user.profile.leaderboard.label2')}</h6>
			<Switch />
		</div>
	</div>
</div>

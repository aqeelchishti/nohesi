<script lang="ts">
	//import Switcher from './../../../shared/switcher.svelte';
	import OutlinedButton from '../../../shared/outlinedButton.svelte';
	import VioleteButton from '../../../shared/violeteButton.svelte';
	import Switch from '../../../shared/switch.svelte';
</script>

<div class="flex flex-col gap-8">
	<div class="flex flex-col gap-4">
		<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
			<h4 class="h4-inter text-content-primary">Notifications</h4>
			<div class="flex flex-col mx-auto w-full xs:items-start gap-5 self-stretch">
				<div class="flex flex-row justify-between xs:items-center gap-2 xs:w-full">
					<div class="flex gap-3 items-center">
						<h6 class="h6-inter slnt-10 text-content-primary">Marketing</h6>
					</div>
					<Switch />
				</div>
				<div class="flex flex-row justify-between xs:items-center gap-2 xs:w-full">
					<div class="flex gap-3 items-center">
						<h6 class="h6-inter slnt-10 text-content-primary">Profile views</h6>
					</div>
					<Switch />
				</div>

				<div class="flex flex-row justify-between xs:items-center gap-2 xs:w-full">
					<div class="flex gap-3 items-center">
						<h6 class="h6-inter slnt-10 text-content-primary">Messages</h6>
					</div>
					<Switch />
				</div>
			</div>
		</div>

		<div class="p-6 flex flex-col gap-7 bg-top-light-2 border border-border rounded-lg">
			<h4 class="h4-inter text-content-primary">Notifications</h4>
			<div class="flex flex-col mx-auto w-full xs:items-start gap-5 self-stretch">
				<div class="flex flex-row justify-between xs:items-center gap-2 xs:w-full">
					<div class="flex flex-col gap-1 flex-1">
						<h6 class="h6-inter slnt-10 text-content-primary">Private my page</h6>
						<p class="font-inter font-normal text-[17px] leading-2 text-content-primary">
							If you use this function, no one will see your stats.
						</p>
					</div>
					<div class="flex-2"><Switch /></div>
				</div>
				<div class="flex flex-row justify-between xs:items-center gap-2 xs:w-full">
					<div class="flex flex-col gap-1 flex-1">
						<h6 class="h6-inter slnt-10 text-content-primary">Private my page</h6>
						<p class="font-inter font-normal text-[17px] leading-2 text-content-primary">
							If you use this function, no one will see your stats.
						</p>
					</div>
					<div class="flex-2"><Switch /></div>
				</div>
			</div>
		</div>
	</div>
	<div class="flex flex-row justify-between">
		<OutlinedButton title="Cancel" classes="!font-bold !rounded-md !w-max" font="roboto" />
		<VioleteButton title="Save" classes="!font-bold !rounded-md !w-max" font="roboto" />
	</div>
</div>

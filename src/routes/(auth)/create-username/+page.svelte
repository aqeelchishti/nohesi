<script lang="ts">
	import { goto } from '$app/navigation';
	import { PUBLIC_BACKEND_URL } from '$env/static/public';
	import { toastMsg } from '$lib/stores';
	import { generateVerificationEmail } from '$lib/utils';
	import Createusername from '../../../components/auth/createusername.svelte';
	import Toast from '../../../components/shared/toast.svelte';

	export let data;

	let loading = false;
	const createUser = async (event: any) => {
		loading = true;
		const { username, email } = event.detail;
		console.log('🚀 ~ createUser ~ email:', email);
		console.log('🚀 ~ createUser ~ username:', username);

		const resp = await fetch(`${PUBLIC_BACKEND_URL}/functions/create-username`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			credentials: 'include',
			body: JSON.stringify({
				username,
				email,
				provider_email: data.email,
				provider: data.p,
				provider_id: data.pid
			})
		});

		if (resp.ok) {
			const { data: respData, error } = await resp.json();
			if (!error && respData.verification_status) {
				goto('/');
			} else if (!error && !respData.verification_status) {
				const uid = respData.uid;
				const name = respData.name;

				const tokenResp = await fetch('/api/verification-token', {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({ userId: uid, email: email })
				});

				const { verificationUrl } = await tokenResp.json();

				await fetch(`${PUBLIC_BACKEND_URL}/functions/send-email`, {
					method: 'POST',
					headers: { 'content-type': 'application/json' },
					body: JSON.stringify({
						name: name,
						sender: email,
						body: generateVerificationEmail(name, verificationUrl),
						subject: `Verify Your Email Address for NoHesi`
					})
				});

				console.log('Send to verify email');
				goto(`/verify-email?mail=${email}`);
			}
		} else {
			loading = false;
			if (resp.status === 400) {
				toastMsg.set({
					msg: 'Email already registered!',
					desc: '',
					icon: 'Warning'
				});
			} else if (resp.status === 500) {
				toastMsg.set({
					msg: 'Internal Error',
					desc: 'Some error encountered, Try again in some time. If the error does not resolve try contacting us.',
					icon: 'Warning'
				});
			}
		}
	};
</script>

<Toast left="right-8 md:right-12" top="top-20" classes="z-50" />

<Createusername
	email={data.email}
	emailDisabled={data.email !== ''}
	bind:loading
	on:createUsername={createUser}
/>

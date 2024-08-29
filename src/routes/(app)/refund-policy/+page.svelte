<script lang="ts">
	import Seo from '../../../components/shared/SEO.svelte';
	import Button from '../../../components/shared/button.svelte';

	const handleClick = () => {
		window.history.back();
	};
</script>

<Seo title="Refund Policy" />

<div class="px-9 grid grid-cols-6 max-w-screen-3xl mx-auto pt-26 pb-12 font-inter">
	<Button
		title={'Back'}
		icon={'ArrowLeft'}
		size="full"
		classes={'border border-border hover:border-border-light !px-5 uppercase text-content-primary w-max h-max !gap-3'}
		iconClasses={'w-8 sm:w-12 lg:w-auto'}
		on:click={handleClick}
	/>

	<div class="col-span-6 sm:w-4/5 mx-auto lg:col-span-4">
		<h3><b>REFUND POLICY</b></h3>
		<h6><b>Waiver of Withdrawal Rights with Conditional Cancellation Option</b></h6>
		<p>
			By agreeing to this Waiver and commencing your subscription, you acknowledge and agree to the
			immediate start of delivery of the digital content associated with the Service. Consequently,
			you expressly agree to waive your right to withdraw from the subscription to the Service once
			delivery of the digital content has begun, with the exception provided herein. Notwithstanding
			the foregoing, you are granted a conditional right to cancel your subscription within 72 hours
			from the time of your subscription confirmation, subject to the following conditions:
		</p>
		<ol>
			<li>
				<b>Cancellation Notice:</b> To exercise your right to cancel, you must inform No Hesi of
				your decision to cancel your subscription by a clear statement to
				<a href="mailto:support@nohesi.gg">support@nohesi.gg</a> within the 72-hour period. Contact details
				for cancellation notices are provided below.
			</li>

			<li>
				<b>Refund Eligibility:</b> If you cancel your subscription within the 72-hour period, you may
				be eligible for a full refund of any subscription fees paid, provided that you have not utilized
				the Service to a degree which constitutes significant consumption of the digital content. No
				Hesi reserves the right to deduct an amount reflecting the service consumed up to the point of
				cancellation.
			</li>

			<li>
				<b>Effect of Cancellation:</b> Upon valid cancellation within the 72-hour period, No Hesi will
				reimburse to you all payments received from you, without undue delay and in any event not later
				than 14 days from the day on which we are informed about your decision to cancel your subscription.
				The reimbursement will be made using the same means of payment as you used for the initial transaction,
				unless you have expressly agreed otherwise.
			</li>

			<li>
				<b>Cancellation During Free Trial:</b> You may cancel the Service at any time during the 7-day
				free trial period without incurring any charges.
			</li>

			<li>
				<b>Cancellation After Free Trial:</b> Following the end of the 7-day free trial, you have an
				additional 72 hours to cancel your subscription if you decide the Service does not meet your
				expectations. To exercise your right to cancel during this 72-hour post-trial period, you must
				inform No Hesi of your decision to cancel the subscription by a clear statement using the provided
				contact details.
			</li>
		</ol>

		<p>
			By subscribing to the Service, you acknowledge and agree that delivery of digital content
			begins immediately upon subscription confirmation, and you thereby expressly consent to this
			immediate start and acknowledge that you lose your right to withdrawal after the 72-hour
			cancellation period, unless a valid cancellation is made as outlined above.
		</p>
		<h6><b>Contact Information for Cancellation:</b></h6>
		<ul>
			<li>Email: <a href="mailto:support@nohesi.gg">support@nohesi.gg</a></li>
		</ul>
	</div>
</div>

<style lang="postcss">
	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		@apply text-content-primary;
	}
	h3 {
		@apply pt-10;
	}
	h4,
	h5 {
		@apply pt-8;
	}
	h6 {
		@apply pt-7;
	}
	div > p {
		@apply text-content-secondary mt-6;
	}
	ul {
		@apply list-disc ml-12;
	}
	ol {
		@apply list-decimal ml-12 my-4;
	}
	li {
		@apply text-content-secondary my-2 pl-4;
	}
	li > p {
		@apply my-3;
	}
	.block-text {
		@apply !text-content-primary font-medium pl-5 border-l-4 border-primary-violete-light;
	}
	a {
		@apply underline text-primary-violete hover:text-primary-violete-light;
	}
</style>

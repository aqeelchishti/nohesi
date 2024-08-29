import { goto } from '$app/navigation';
import { user, websiteLoading } from '$lib/stores';

// hexConverter.js
export function encryption(str: any) {
	let hex = '';
	for (let i = 0; i < str.length; i++) {
		const charCode = str.charCodeAt(i);
		const hexValue = charCode.toString(16);
		hex += hexValue.padStart(2, '0');
	}
	return hex;
}

export function decryption(hex: any) {
	let str = '';
	for (let i = 0; i < hex.length; i += 2) {
		const hexValue = hex.substr(i, 2);
		const decimalValue = parseInt(hexValue, 16);
		str += String.fromCharCode(decimalValue);
	}
	return str;
}

export const formatData = (e: any) => {
	return {
		...e,
		input: ['Steering Wheel', 'Controller', 'Keyboard'][e.input],
		car_model: e.car_model
			.replace('nohesi_', '')
			.replace('nohesituned_as_', '')
			.replace('nohesituned_', '')
			.replaceAll('_', ' '),
		label: e.car_model.startsWith('nohesi_')
			? 'No Hesi'
			: e.car_model.startsWith('nohesituned_as_') || e.car_model.startsWith('nohesituned_')
			? 'No Hesi Tuned'
			: 'Others',
		avg_speed: e.avg_speed.toFixed(0),
		run_distance: e.run_distance.toFixed(1),
		combo: e.combo.toFixed(1),
		run_time: secondsToHms(Number.parseInt(e.run_time.toFixed(0)))
	};
};

export const secondsToHms = (seconds: number) => {
	const hours = Math.floor(seconds / 3600);
	const minutes = Math.floor((seconds % 3600) / 60);
	const remainingSeconds = seconds % 60;

	return `${hours}:${minutes}:${remainingSeconds}`;
};

export const generateResetEmail = (name: string, verificationLink: string) => {
	return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<html lang="en">
	
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style type="text/css">
			p,
			li {
				font-size: 17px;
				line-height: 24px;
				font-weight: 400;
				color: #EEEDEE;
			}
	
			.small {
				font-size: 14px;
				line-height: 20px;
				color: #cccccc;
				gap: 8px;
			}
	
			.gray {
				color: #a5a3a6;
	
			}
	
			li {
				margin-left: 20px;
			}
		</style>
	</head>
	
	<body style="margin: 0; font-family: Arial, Helvetica, sans-serif; background-color: #08060A;">
		<div style="width: 100%; background-color: #08060A; margin: 0;">
			<div align="center">
				<table width="600" border="0" cellspacing="0" cellpadding="0"
					style="border: 1px solid #131115; border-radius: 16px; margin: 32px 0; overflow: hidden;">
					<tr>
						<td style="padding: 24px; background-color: #0d0b10;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<img src="https://cdn.nohesi.gg/assets/website/images/logo.webp" alt="NoHesi Logo"
											width="100" style="margin-left: -10px;">
									</td>
									<td align="right">
										<a href="https://www.youtube.com/@NoHesiGG"
											style="margin-right: 4px; text-decoration: none;">
											<!-- YouTube SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/youtube.png"
												alt="youtube">
										</a>
										<a href="https://discord.gg/nohesitation"
											style="margin-right: 4px; text-decoration: none;">
											<!-- Discord SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/discord.png"
												alt="discord">
										</a>
										<a href="https://www.instagram.com/nohesigg/"
											style="margin-right: 4px; text-decoration: none;">
											<!-- Instagram SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/instagram.png"
												alt="instagram">
										</a>
										<a href="https://www.tiktok.com/@nohesigg"
											style="margin-right: 4px; text-decoration: none;">
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/tiktok.png"
												alt="tiktok">
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td bgcolor="#08060A" style="padding: 20px; color: #FFF;">
							<h3 style="margin: 0; font-size: 39px; line-height: 48px; font-weight: 600;">
								Hello, ${name}
							</h3>
						</td>
					</tr>
					<tr>
						<td bgcolor="#08060A" style="padding: 24px;">
							<p>
								We received a request to reset the password for your NoHesi account. To complete this
								process,
								please follow the instructions below:
							</p>
							<ol style="margin: 0; padding: 0;">
								<li>
									Click the following button link to reset your password
								</li>
								<a style="padding: 16px 28px; background-color: #8800F0; color: #EEEDEE; text-decoration: none; border-radius: 8px; text-align: center; width: auto; display: block; margin: 18px 0;"
									href="${verificationLink}">Reset password</a>
								<li>
									If clicking the link doesn't work, you can copy and paste the URL ito your browser's
									address
									bar.
									<div style="margin: 8px 0;">
										<a style="font-size: 17px; line-height: 24px; font-weight: 500; color: #B130FF; text-decoration: none;"
											href="${verificationLink}">${verificationLink}</a>
									</div>
								</li>
								<li>
									Once you've accessed the reset page, follow the prompts to choose a new password.
	
								</li>
							</ol>
							<div
								style="color: #FFD643; background-color: #52451b; padding: 12px 16px; border-radius: 4px; border: 1px solid #d4b239; margin: 8px 0;">
								<h5 style="font-size: 27px;
								line-height: 32px;
								font-weight: 600;
								margin: 0;">
									Please note!
								</h5>
								<p style="color: #FFD643;">
									This link is valid for the next 24 hours!. After this period, you will need to request
									another
									password reset.
								</p>
							</div>
	
							<p>
								If you did not request this password reset or believe this email was sent in error, please
								ignore
								it. Your account will remain secure.
							</p>
	
							<p>
								If you have any questions or concerns, please don't hesitate to contact our support team at
								<a style="font-size: 17px; line-height: 24px; font-weight: 500; color: #B130FF; text-decoration: none;"
									href="mailto:support@nohesi.gg">support@nohesi.gg</a>. We're here to help!
							</p>
	
							<p>
								Best Regards, <br>The NoHesi Team
							</p>
						</td>
					</tr>
					<tr>
						<td style="padding: 10px 24px;">
							<hr style="border-bottom: 1px solid #0d0b10;">
						</td>
					</tr>
					<tr>
						<td style="padding: 10px 24px; background-color: #0d0b10;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<img src="https://cdn.nohesi.gg/assets/website/images/logo.webp" alt="NoHesi Logo"
											width="100" style="margin-left: -10px;">
										<div class="links">
											<p class="small">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/globe.png"
													alt="website">
												www.nohesi.gg
											</p>
											<p class="small">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/email.png"
													alt="mail">
												support@nohesi.gg
											</p>
										</div>
									</td>
									<td align="right">
										<div>
	
											<a href="https://www.youtube.com/@NoHesiGG"
												style="margin-right: 4px; text-decoration: none;">
												<!-- YouTube SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/youtube.png"
													alt="youtube">
											</a>
											<a href="https://discord.gg/nohesitation"
												style="margin-right: 4px; text-decoration: none;">
												<!-- Discord SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/discord.png"
													alt="discord">
											</a>
											<a href="https://www.instagram.com/nohesigg/"
												style="margin-right: 4px; text-decoration: none;">
												<!-- Instagram SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/instagram.png"
													alt="instagram">
											</a>
											<a href="https://www.tiktok.com/@nohesigg"
												style="margin-right: 4px; text-decoration: none;">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/tiktok.png"
													alt="tiktok">
											</a>
										</div>
										<p class="small gray"
											style="text-align: end; width: fit-content; margin-top: 80px;">©
											2024 NoHesi. All rights reserved.</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</body>
	
	</html>`;
};

export const generateMagicEmail = (name: string, verificationLink: string) => {
	return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<html lang="en">
	
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style type="text/css">
			p {
				font-size: 17px;
				line-height: 24px;
				font-weight: 400;
				color: #EEEDEE;
			}
	
			.small {
				font-size: 14px;
				line-height: 20px;
				color: #cccccc;
				display: flex;
				align-items: center;
				gap: 8px;
			}
	
			.gray {
				color: #a5a3a6;
	
			}
		</style>
	</head>
	
	<body style="margin: 0; font-family: Arial, Helvetica, sans-serif; background-color: #08060A;">
		<div style="width: 100%; background-color: #08060A; margin: 0;">
	
			<div align="center">
				<table width="600" border="0" cellspacing="0" cellpadding="0"
					style="border: 1px solid #131115; border-radius: 16px; margin: 32px 0; overflow: hidden;">
					<tr>
						<td style="padding: 24px; background-color: #0d0b10;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<img src="https://cdn.nohesi.gg/assets/website/images/logo.webp" alt="NoHesi Logo"
											width="100" style="margin-left: -10px;">
									</td>
									<td align="right">
										<a href="https://www.youtube.com/@NoHesiGG"
											style="margin-right: 4px; text-decoration: none;">
											<!-- YouTube SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/youtube.png"
												alt="youtube">
										</a>
										<a href="https://discord.gg/nohesitation"
											style="margin-right: 4px; text-decoration: none;">
											<!-- Discord SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/discord.png"
												alt="discord">
										</a>
										<a href="https://www.instagram.com/nohesigg/"
											style="margin-right: 4px; text-decoration: none;">
											<!-- Instagram SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/instagram.png"
												alt="instagram">
										</a>
										<a href="https://www.tiktok.com/@nohesigg"
											style="margin-right: 4px; text-decoration: none;">
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/tiktok.png"
												alt="tiktok">
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td bgcolor="#08060A" style="padding: 20px; color: #FFF;">
							<h3 style="margin: 0; font-size: 39px; line-height: 48px; font-weight: 600;">
								Hello, ${name}
							</h3>
						</td>
					</tr>
					<tr>
						<td bgcolor="#08060A" style="padding: 24px;">
							<p>
								We're excited to see you're ready to explore NoHesi! To make the process seamless and
								secure,
								we've
								generated a magic link for you to access your account without the need for a password. Click
								the
								boutton bellow to log in instantly:
							</p>
							<a style="padding: 16px 28px; background-color: #8800F0; color: #EEEDEE; text-decoration: none; border-radius: 8px; text-align: center; width: auto; display: block;"
								href="${verificationLink}">Access NoHesi</a>
							<p>
								If the button doesn't work, you can copy and paste the following link into your browser:
							</p>
							<a style="font-size: 17px; line-height: 24px; font-weight: 500; color: #B130FF; text-decoration: none;"
								href="${verificationLink}">
								${verificationLink}
							</a>
							<div
								style="color: #FFD643; background-color: #52451b; padding: 12px 16px; border-radius: 4px; border: 1px solid #d4b239; margin: 8px 0;">
								<h5 style="font-size: 27px;
								line-height: 32px;
								font-weight: 600;
								margin: 0;">
									Please note!
								</h5>
								<p style="color: #FFD643;">
									This magic link will expire in 15 minutes for seccurity purposes.
								</p>
							</div>
	
							<p>
								If you did not request this password reset or believe this email was sent in error, please
								ignore
								it. Your account will remain secure.
							</p>
	
							<p>
								If you have any questions or concerns, please don't hesitate to contact our support team at
								<a style="font-size: 17px; line-height: 24px; font-weight: 500; color: #B130FF; text-decoration: none;"
									href="mailto:support@nohesi.gg">support@nohesi.gg</a>. We're here to help!
							</p>
	
							<p>
								Best Regards, <br>The NoHesi Team
							</p>
						</td>
					</tr>
					<tr>
						<td style="padding: 10px 24px;">
							<hr style="border-bottom: 1px solid #0d0b10;">
						</td>
					</tr>
					<tr>
						<td style="padding: 10px 24px; background-color: #0d0b10;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<img src="https://cdn.nohesi.gg/assets/website/images/logo.webp" alt="NoHesi Logo"
											width="100" style="margin-left: -10px;">
										<div class="links">
											<p class="small">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/globe.png"
													alt="website">
												www.nohesi.gg
											</p>
											<p class="small">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/email.png"
													alt="mail">
												support@nohesi.gg
											</p>
										</div>
									</td>
									<td align="right">
										<div>
	
											<a href="https://www.youtube.com/@NoHesiGG"
												style="margin-right: 4px; text-decoration: none;">
												<!-- YouTube SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/youtube.png"
													alt="youtube">
											</a>
											<a href="https://discord.gg/nohesitation"
												style="margin-right: 4px; text-decoration: none;">
												<!-- Discord SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/discord.png"
													alt="discord">
											</a>
											<a href="https://www.instagram.com/nohesigg/"
												style="margin-right: 4px; text-decoration: none;">
												<!-- Instagram SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/instagram.png"
													alt="instagram">
											</a>
											<a href="https://www.tiktok.com/@nohesigg"
												style="margin-right: 4px; text-decoration: none;">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/tiktok.png"
													alt="tiktok">
											</a>
										</div>
										<p class="small gray"
											style="text-align: end; width: fit-content; margin-top: 80px;">©
											2024 NoHesi. All rights reserved.</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</body>
	
	</html>`;
};

export const generateVerificationEmail = (name: string, verificationLink: string) => {
	return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
	<html lang="en">
	
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<style type="text/css">
			p {
				font-size: 17px;
				line-height: 24px;
				font-weight: 400;
				color: #EEEDEE;
			}
	
			.small {
				font-size: 14px;
				line-height: 20px;
				color: #cccccc;
				display: flex;
				align-items: center;
				gap: 8px;
			}
	
			.gray {
				color: #a5a3a6;
	
			}
		</style>
	</head>
	
	<body style="margin: 0; font-family: Arial, Helvetica, sans-serif; background-color: #08060A;">
		<div style="width: 100%; background-color: #08060A; margin: 0;">
	
			<div align="center">
				<table width="600" border="0" cellspacing="0" cellpadding="0"
					style="border: 1px solid #131115; border-radius: 16px; margin: 32px 0; overflow: hidden;">
					<tr>
						<td style="padding: 24px; background-color: #0d0b10;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<img src="https://cdn.nohesi.gg/assets/website/images/logo.webp" alt="NoHesi Logo"
											width="100" style="margin-left: -10px;">
									</td>
									<td align="right">
										<a href="https://www.youtube.com/@NoHesiGG"
											style="margin-right: 4px; text-decoration: none;">
											<!-- YouTube SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/youtube.png"
												alt="youtube">
										</a>
										<a href="https://discord.gg/nohesitation"
											style="margin-right: 4px; text-decoration: none;">
											<!-- Discord SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/discord.png"
												alt="discord">
										</a>
										<a href="https://www.instagram.com/nohesigg/"
											style="margin-right: 4px; text-decoration: none;">
											<!-- Instagram SVG content -->
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/instagram.png"
												alt="instagram">
										</a>
										<a href="https://www.tiktok.com/@nohesigg"
											style="margin-right: 4px; text-decoration: none;">
											<img src="https://cdn.nohesi.gg/assets/website/images/emails/tiktok.png"
												alt="tiktok">
										</a>
									</td>
								</tr>
							</table>
						</td>
					</tr>
					<tr>
						<td bgcolor="#08060A" style="padding: 20px; color: #FFF;">
							<h3 style="margin: 0; font-size: 39px; line-height: 48px; font-weight: 600;">
								Hello, ${name}
							</h3>
						</td>
					</tr>
					<tr>
						<td bgcolor="#08060A" style="padding: 24px;">
							<p>
								Thank you for signing up for NoHesi!
							</p>
							<p>
								To complete your registration, please verify your email address by clicking the link below:
							</p>
							<a style=" padding: 16px 28px; background-color: #8800F0; color: #EEEDEE; text-decoration: none; border-radius: 8px; text-align: center; width: auto; display: block;"
								href="${verificationLink}">Verify
								Email Address</a>
							<p>
								If the button doesn't work, you can copy and paste the URL ito your browser's address bar.
							</p>
							<a style="font-size: 17px; line-height: 24px; font-weight: 500; color: #B130FF; text-decoration: none;"
								href="${verificationLink}">
								${verificationLink}
							</a>
							<div
								style="color: #FFD643; background-color: #52451b; padding: 12px 16px; border-radius: 4px; border: 1px solid #d4b239; margin: 8px 0;">
								<h5 style="font-size: 27px;
								line-height: 32px;
								font-weight: 600;
								margin: 0;">
									Please note!
								</h5>
								<p style="color: #FFD643;">
									This link will expire 1 hour. lf you don't verify your email within this time frame, you
									will
									need to request another verification email.
								</p>
							</div>
	
							<p>
								If you did not request this password reset or believe this email was sent in error, please
								ignore
								it. Your account will remain secure.
							</p>
	
							<p>
								If you have any questions or concerns, please don't hesitate to contact our support team at
								<a style="font-size: 17px; line-height: 24px; font-weight: 500; color: #B130FF; text-decoration: none;"
									href="mailto:support@nohesi.gg">support@nohesi.gg</a>. We're here to help!
							</p>
	
							<p>
								Best Regards, <br>The NoHesi Team
							</p>
						</td>
					</tr>
					<tr>
						<td style="padding: 10px 24px;">
							<hr style="border-bottom: 1px solid #0d0b10;">
						</td>
					</tr>
					<tr>
						<td style="padding: 10px 24px; background-color: #0d0b10;">
							<table width="100%" border="0" cellspacing="0" cellpadding="0">
								<tr>
									<td>
										<img src="https://cdn.nohesi.gg/assets/website/images/logo.webp" alt="NoHesi Logo"
											width="100" style="margin-left: -10px;">
										<div class="links">
											<p class="small">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/globe.png"
													alt="website">
												www.nohesi.gg
											</p>
											<p class="small">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/email.png"
													alt="mail">
												support@nohesi.gg
											</p>
										</div>
									</td>
									<td align="right">
										<div>
	
											<a href="https://www.youtube.com/@NoHesiGG"
												style="margin-right: 4px; text-decoration: none;">
												<!-- YouTube SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/youtube.png"
													alt="youtube">
											</a>
											<a href="https://discord.gg/nohesitation"
												style="margin-right: 4px; text-decoration: none;">
												<!-- Discord SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/discord.png"
													alt="discord">
											</a>
											<a href="https://www.instagram.com/nohesigg/"
												style="margin-right: 4px; text-decoration: none;">
												<!-- Instagram SVG content -->
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/instagram.png"
													alt="instagram">
											</a>
											<a href="https://www.tiktok.com/@nohesigg"
												style="margin-right: 4px; text-decoration: none;">
												<img src="https://cdn.nohesi.gg/assets/website/images/emails/tiktok.png"
													alt="tiktok">
											</a>
										</div>
										<p class="small gray"
											style="text-align: end; width: fit-content; margin-top: 80px;">©
											2024 NoHesi. All rights reserved.</p>
									</td>
								</tr>
							</table>
						</td>
					</tr>
				</table>
			</div>
		</div>
	</body>
	
	</html>`;
};

export const handleLogout = async () => {
	const res = await fetch('/api/logout');
	if (res.status === 302) {
		websiteLoading.set(true);
		user.set({
			authenticated: false,
			email: '',
			username: '',
			displayPicture: '',
			discordId: '',
			customerId: null,
			country: '',
			level: 0,
			connectedProviders: null,
			triesLeft: 0
		});
		websiteLoading.set(false);
		goto('/');
	}
};

export const getLevel = (roles: any[], userRoles: any[]) => {
	const filteredRoles = roles
		.filter((r) => {
			if (r.role_id) {
				return userRoles.includes(r.role_id);
			} else {
				return (
					userRoles.includes(r.tiers.stripe) ||
					userRoles.includes(r.tiers.discord) ||
					userRoles.includes(r.tiers.patreon)
				);
			}
		})
		.sort((a: any, b: any) => b.level - a.level);

	const level = filteredRoles.length > 0 ? filteredRoles[0].level : 0;
	return level;
};
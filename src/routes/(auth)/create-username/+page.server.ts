import { error } from '@sveltejs/kit';

export const load = async ({ url }) => {
	const param = url.searchParams.get('p');
	if (param) {
		const paramString = Buffer.from(param, 'base64').toString('ascii');
		const searchParams = new URLSearchParams(paramString);

		if (!searchParams.get('pid')) {
            console.log('Not Found');
			error(404, 'Not Found');
		}
		const data: { pid: string; p: string; email: string } = {
			pid: searchParams.get('pid') || '',
			p: searchParams.get('p') || '',
			email: searchParams.get('email') || ''
		};
		return data;
	}
	return {
		pid: '',
		p: '',
		email: ''
	};
};

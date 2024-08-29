import { lucia } from "$lib/server/auth";

export const load = ({ url, cookies }) => {
	const sid = cookies.get(lucia.sessionCookieName)
	const searchParams = url.searchParams;
	const params: any = {};

	searchParams.forEach((v, k) => {
		if (v) {
			if (k === 'page') {
				try {
					params.page = Number.parseInt(v);
				} catch (error) {
					params.page = 1;
				}
			} else if (k === 'type') {
				
				if (params.tier) {
					params.tier = [...params.tier, v];
				} else {
					params.tier = [v];
				}
			} else if (k === 'region' || k === 'map' || k === 'traffic') {
				
				if (params[k]) {
					params[k] = [...params[k], v];
				} else {
					params[k] = [v];
				}
			} else if (k === 'search' || k === 'sort_by') {
				params[k] = v;
			} else if (k === 'models'){
				if(params.models){
					params.models = [...params.models, v]
				}else{
					params.models = [v]
				}
			}
		}
	});

	return {
		params,
		sid
	};
};

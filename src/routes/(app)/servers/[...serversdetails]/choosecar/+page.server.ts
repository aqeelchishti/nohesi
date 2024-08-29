import { decryption } from '$lib/utils';

const formatCars = (cars: string[], players: any[]) => {
	return cars
		.filter((e) => !e.includes('_traffic'))
		.map((e) => ({
			name: e
				.replace('nohesi_', '')
				.replace('nohesituned_as_', '')
				.replace('nohesituned_', '')
				.replaceAll('_', ' '),
			tag: e,
			availableSlots: players.filter((p) => p.Model === e && p.IsConnected === false).length
		}));
};

export const load = async ({ params, locals }) => {
	return {};
};

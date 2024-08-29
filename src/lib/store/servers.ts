import { get, writable } from 'svelte/store';
import INITIAL_SERVER_STATE_VALUES from '$lib/data/_filters.json';
import type { Server } from '$lib/interfaces';

export const INITIAL_TIERS = [
	{
		name: 'Public',
		active: true,
		value: 0
	},
	{
		name: 'Tier1',
		active: true,
		value: 1
	},
	{
		name: 'Tier2',
		active: true,
		value: 2
	},
	{
		name: 'Tier3',
		active: true,
		value: 3
	}
];

const INITIAL_CARS_SORT_OPTIONS = {
	options: ['VIP Tier Descending', 'VIP Tier Ascending'],
	active: 'VIP Tier Descending'
};

interface FiltersCar {
	searchByCar: string[];
}

interface TIER {
	name: string;
	value: number;
	active: boolean;
}

interface CAR_SORT {
	options: string[];
	active: string;
}
interface FiltersServer {
	region: string[];
	tier: string[];
	map: string[];
	traffic: string[];
}

interface Filters {
	sort_by: string;
	search: string;
	server: FiltersServer;
	cars: FiltersCar;
	page: number;
}

interface FilterState {
	slug: 'region' | 'tier' | 'map' | 'traffic' | string;
	title: string;
	values: { value: string; active: boolean; show: boolean }[];
	active: boolean;
}

const INITIAL_SERVER_VALUES = {
	region: [],
	tier: [],
	map: [],
	traffic: []
};

const INITIAL_CAR_VALUES = {
	searchByCar: []
};

const INITIAL_FILTERS_VALUES = {
	sort_by: 'Most players',
	search: '',
	server: INITIAL_SERVER_VALUES,
	cars: INITIAL_CAR_VALUES,
	page: 1
};

const carSearch = writable<string>('');
const tiers = writable<TIER[]>(INITIAL_TIERS);
const carsSort = writable<CAR_SORT>(INITIAL_CARS_SORT_OPTIONS);
const availableCars = writable(false);
const filters = writable<Filters>(INITIAL_FILTERS_VALUES);
const filtersState = writable<FilterState[]>([...INITIAL_SERVER_STATE_VALUES]);
const selectedCars = writable<{ model: string; tier: number[] }[]>([]);
const servers = writable<Server[] | null>(null);
const servers_pages = writable(0);

const resetFiltersState = () => {
	filtersState.set([...INITIAL_SERVER_STATE_VALUES]);
};

const resetFilters = () => {
	filters.set(INITIAL_FILTERS_VALUES);
};

const resetCarFilters = () => {
	carSearch.set('');
	selectedCars.set([]);
	carsSort.update((prev) => {
		return {
			...prev,
			active: prev.options[0]
		};
	});
	filters.update((prev) => ({
		...prev,
		cars: {
			searchByCar: []
		},
		page: 1
	}));
	tiers.set(INITIAL_TIERS);
	availableCars.set(false);
};

const resetServerFilters = () => {
	filters.update((state) => ({
		...state,
		server: INITIAL_SERVER_VALUES,
		page: 1
	}));
};

const setServerFilters = (props: FiltersServer) => {
	filters.update((state) => ({
		...state,
		server: {
			...state.server,
			...props
		}
	}));
};

const toFiltersState = (filters: FiltersServer): FilterState[] => {
	let state: FilterState[] = get(filtersState);
	Object.entries(filters).forEach(([k, values]) => {
		state = state.map((e) => {
			if (e.slug == k) {
				return {
					...e,
					values: e.values.map((item) => {
						return {
							...item,
							active: values.includes(item.value)
						};
					})
				};
			}

			return e;
		});
	});

	return state;
};

const applyFilters = () => {
	const state = get(filtersState);
	const serverFilters = toFiltersServer(state);
	// resetCarFilters();
	setServerFilters(serverFilters);
};

const applyCarFilters = () => {
	// resetFiltersState();
	const temp = get(selectedCars).map((e) => `${e.model}|${e.tier.join('|')}`);
	filters.update((prev) => {
		return {
			...prev,
			cars: {
				...prev.cars,
				searchByCar: temp
			}
		};
	});
};

const toFiltersServer = (state: FilterState[]): FiltersServer => {
	const filterServers: FiltersServer = { ...INITIAL_SERVER_VALUES };
	state.forEach((e: FilterState) => {
		const values = e.values.filter((item) => item.active).map((item) => item.value);
		filterServers[e.slug as 'region' | 'tier' | 'traffic' | 'map'] = values;
	});
	return filterServers;
};

export {
	toFiltersServer,
	toFiltersState,
	filtersState,
	resetFiltersState,
	filters,
	tiers,
	resetFilters,
	setServerFilters,
	applyFilters,
	applyCarFilters,
	resetCarFilters,
	resetServerFilters,
	availableCars,
	carsSort,
	selectedCars,
	carSearch,
	servers,
	servers_pages
};

export interface listData {
	title: string;
	desc: string;
}

export interface serverRow {
	name: string;
	type: string;
	density: string;
	maxclients: number;
	clients: number;
	vip_slots: number;
	tier3_cars: number;
	map: string;
	country: string;
	favorite: boolean;
	ip: string;
	port: string;
}

export interface inViewInterface {
	root: any;
	top: number;
	bottom: number;
}

export interface filterInterface {
	title: string;
	values: any[];
	isOpen: boolean;
	active: string;
}

export interface planInterface {
	title: string;
	pricing: string | number;
	tier: number;
	buttonTitle: string;
	listTitle: string;
	features: number;
	iconClasses: string;
	outerClasses: string;
	innerClasses: string;
	buttonClasses: string;
}

export interface userInterface {
	name: string;
	profilePicture: string;
	position: number;
	tier: number;
	region: string;
	currentServer: string | undefined;
}

export interface userProfileInterface {
	username: string;
	region: string;
	dateCreated: string;
	driftPosition: number;
	cutUpPointsPosition: number;
	trackPosition: number;
	tier: number;
	profilePicture: string;
	cover: string;
	fvrtCar: string;
	fvrtCarImage: string;
	milesDriven: number;
	points: number;
	hiddenStats: boolean;
}
export interface Car {
	model: string;
	tier: number[];
	available: boolean;
}

export interface Server {
	ip_address: string;
	map: string;
	region: string;
	density: string;
	name: string;
	type: string;
	clients: number;
	maxclients: number;
	vip_slots: number;
	max_vip_slots: number;
	tier3_cars: number;
	favorite?: boolean;
	position?: number | null;
	growth?: number;
}

export interface LeaderboardInterface {
	avg_speed: number | string;
	car_model: string;
	label: string;
	combo: number | string;
	input: string;
	run_distance: number | string;
	run_time: number | string;
	score: number;
	server: string;
	steamid: string;
	row_num?: number;
	personaname: string;
	avatar: string;
	avatarfull: string;
}

export interface DataInterface {
	avg_speed: number;
	car_model: string;
	combo: number;
	input: number;
	run_distance: number;
	run_time: number | string;
	score: number;
	server: string;
	steamid: string;
	row_num?: number;
}

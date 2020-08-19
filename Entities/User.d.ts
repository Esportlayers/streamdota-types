export interface User {
	id: number;
	twitchId: number;
	displayName: string;
	created: number;
	avatar: string;
	avatarWEBP: string;
	avatarJP2: string;
	profileUrl: string;
	gsiAuth: string;
	dotaStatsFrom: string;
	useBets: boolean;
	betSeasonId: number | null;
	gsiConnected: boolean;
	frameApiKey: string;
	gsiActive: boolean;
	status: 'active' | 'disabled';
}
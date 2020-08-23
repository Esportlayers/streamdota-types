export interface Command {
	id: number;
	active: boolean;
	command: string;
	message: string;
	type: 'default' | 'dotaWinLoss' | 'betting_streamer' | 'betting_user';
	noResponse: boolean;
	deleteAble: boolean;
	identifier: 'bet' | 'startbet' | 'betwinner';
	userAccess: boolean;
	tier1Access: boolean;
	tier2Access: boolean;
	tier3Access: boolean;
	vipAccess: boolean;
	modAccess: boolean;
	streamerAccess: boolean;
}

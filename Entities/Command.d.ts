export interface Command {
	id: number;
	active: boolean;
	command: string;
	message: string;
	type: 'default' | 'dotaWinLoss' | 'betting_streamer' | 'betting_user';
	noResponse: boolean;
	deleteAble: boolean;
	identifier: 'bet' | 'startbet' | 'betwinner';
}

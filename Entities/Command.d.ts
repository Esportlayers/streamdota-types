export interface Command {
	id: number;
	active: boolean;
	command: string;
	message: string;
	type: 'default' | 'dotaWL' | 'betting_streamer' | 'betting_user';
	noResponse: boolean;
	deleteAble: boolean;
	identifier: 'bet' | 'startbet' | 'betwinner';
}

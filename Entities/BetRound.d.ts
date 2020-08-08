export interface BetRound {
    id: number;
    betSeason: number;
    round: number;
    status: 'betting' | 'running' | 'finished';
    result: string;
    userId: number;
    created: number;
    chatters: number;
}


export interface BetRoundStats extends BetRound {
    total: number;
    aBets: number;
    bBets: number;
}
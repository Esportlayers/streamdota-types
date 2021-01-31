export interface BetSeason {
    id: number;
    name: string;
    description: string;
    userRole: 'owner' | 'editor' | 'user';
    type: 'ladder' | 'tournament' | 'other';
    winnerCount: number;
}

export interface BetSeasonToplist {
    id: number;
    betSeason: number;
    name: string;
    username: string;
    won: number;
    total: number;
}
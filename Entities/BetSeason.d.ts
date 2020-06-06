export interface BetSeason {
    id: number;
    name: string;
    description: string;
    userRole: 'owner' | 'editor' | 'user';
    type: 'ladder' | 'tournament' | 'other';
}

export interface BetSeasonToplistEntry {
    name: string;
    username: string;
    won: number;
    total: number;
}
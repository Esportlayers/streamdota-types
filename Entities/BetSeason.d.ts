export interface BetSeason {
    id: number;
    name: string;
    description: string;
    userRole: 'owner' | 'editor' | 'user';
    type: 'ladder' | 'tournament' | 'other';
}

export interface BetInvite {
    betSeason: BetSeason;
    owner: number;
    inviteKey: string;
    created: number;
    status: 'open' | 'accepted' | 'denied';
}

export interface ToplistEntry {
    name: string;
    username: string;
    won: number;
    total: number;
}
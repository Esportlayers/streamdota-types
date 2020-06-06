export interface BetSeasonInvite {
    betSeason: number;
    owner: number;
    inviteKey: string;
    created: number;
    status: 'open' | 'accepted' | 'denied';
}

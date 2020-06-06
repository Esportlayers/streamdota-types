export interface BetSeasonUser {
    id: number;
    betSeason: number;
    displayName: string;
    userRole: 'owner' | 'user';
}
export interface BetOverlay {
    userId: number;
    fontFamily: string;
    fontVariant: string;
    distributionBackground: string;
    distributionFont: string;
    distributionFontSize: number;
    distributionColorLeft: string;
    distributionColorRight: string;
    distributionNumbers: boolean;
    timerBackground: string;
    timerFont: string;
    timerFontSize: number;
    toplistBackground: string;
    toplistFont: string;
    toplistFontSize: number;
    toplistShowRank: boolean;
    toplistShowTotalBets: boolean;
    toplistShowAccuracy: boolean;
    toplistMaxEntry: number;
}
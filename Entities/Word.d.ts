export interface WordGroup {
    id: number;
    active: boolean;
    name: string;
}

export interface Word {
    id: number;
    wordGroup: number;
    word: string;
    useSentimentAnalysis: boolean;
}

export interface WordMessage {
    id: number;
    word: number;
    message: string;
    visibility: number;
    chatters: number;
    sentimentScore: number;
    sentimentMagnitude: number;
}
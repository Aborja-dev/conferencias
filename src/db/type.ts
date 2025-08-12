export interface TalkSchema {
    id: number;
    date: number;
    name: string;
    description: string;
    state: string;
    user_id: number;
    hour: number;
    duration: number
    topics: string[]
}
export interface ForInsertTalk {
    name: string;
    date: number;
    description: string;
    state: string;
    user_id: number;
    hour: number;
    duration: number
}

export interface IMessage {
    userId: number,
    message: string,
    talkId: number
}
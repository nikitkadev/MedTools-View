export interface InjectionsQueryResult {
    injDates: InjDate[],
    injs: Injection[]
}

export interface InjDate {
    uid: number;
    date: Date;
}

export interface Injection {
    uid: number;
    dateinj: Date;
    kvInj?: number | null;
    kizInj?: number | null;
    sInj: number | null;
    svInj?: number | null;
    sizInj?: number | null;
    redInj?: number | null;
}
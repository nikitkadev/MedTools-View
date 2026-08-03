export interface KsgVmpTablesDataQueryResult {
    crits: Crit[];
    slKoefs: SlKoef[];
}

export interface Crit {
    uid: number;
    crit: string;
}

export interface SlKoef {
    uid: number;
    idSl: string;
    zSl: number;
}
export interface CasesQueryResult {
    cases: Case[];
}

export interface Case {
    uid: number,
    profil?: number | null,
    det: number,
    prvs: number;
    startingAt: Date;
    endingAt: Date;
    ds1: string;
    edCol?: number | null;
    tarif: number;
    sumM: number;
    sump?: number | null;
    smoSump?: number | null;
}
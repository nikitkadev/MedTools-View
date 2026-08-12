export interface FinishedCasesQueryResult {
    finisedCases: FinishedCase[],
    totalRecords: number
}

export interface FinishedCase {
    persUid: number,
    pacientUid: number,
    zSlUid: number;
    positionNumber: number;
    recordNumber: number;
    surname: string;
    name: string;
    patronymic: string;
    uslOk: number;
    sPolis?: string | null;
    nPolis: string;
    sumv: number;
    sump?: number | null;
    smoSump?: number | null;
}
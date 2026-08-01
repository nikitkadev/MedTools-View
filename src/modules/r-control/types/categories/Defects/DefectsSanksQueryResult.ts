export interface DefectsSanksQueryResult {
    defects: Defect[];
    sanks: Sank[];
}

export interface Defect {
    uid: number;
    code?: number | null;
    comment: string;
}

export interface Sank {
    uid: number;
    sCode: string;
    sSum: number;
    sTip: string;
    sOsn: number;
    sEdCol: number;
    dateAct: Date;
    numAct: string;
    codeExp?: string | null;
    sCom?: string | null;
    filename?: string | null;
    year?: number | null;
    month?: number | null;
    uploaddate?: Date | null;
}
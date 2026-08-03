export interface MedDevQueryResult {
    medDevs: MedDev[];
}

export interface MedDev {
    uid: number;
    medDate: Date,
    codeMedDev: number;
    seriesNumber: string;
}
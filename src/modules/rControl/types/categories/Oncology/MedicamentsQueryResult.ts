export interface MedicamentsQueryResult {
    medicaments: Medicament[];
}

export interface Medicament {
    uid: number;
    regnum: string;
    regnumDop?: string | null;
    codeSh?: string | null;
}
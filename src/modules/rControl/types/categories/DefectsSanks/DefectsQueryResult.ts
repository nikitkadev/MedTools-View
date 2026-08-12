export interface DefectsQueryResult {
    defects: Defect[];
    totalItems: number;
}

export interface Defect {
    uid: number;
    kod?: number | null;
    comment: string; 
}
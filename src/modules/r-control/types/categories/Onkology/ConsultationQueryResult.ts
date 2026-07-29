export interface ConsultationQueryResult {
    consultations: Consultation[];
}

export interface Consultation {
    prCons: string;
    dtCons?: Date | null;
}
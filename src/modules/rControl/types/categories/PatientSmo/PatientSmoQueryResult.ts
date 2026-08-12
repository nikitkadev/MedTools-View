export interface PatientSmoQueryResult {
    patient: Patient,
    smo: Smo
}

export interface Patient {
    surname: string;
    name: string;
    patronymic: string;
    sex: number;
    birthday: Date;
    representativeSurname?: string | null;
    representativeName?: string | null;
    representativePatronymic?: string | null;
    representativeSex?: number | null;
    representativeBirthday?: Date | null;
    documentType?: string | null;
    documentSeries?: string | null;
    documentNumber?: string | null;
    issueDate?: Date | null;
    issuedBy?: string | null;
}

export interface Smo {
    smoCode?: string | null;
    smoOGRN?: string | null;
    smoOKATO?: string | null;
    smoName?: string | null;
    polisSeries?: string | null;
    polisNumber: string;
    polisType: number;
    enp?: string | null;
    umpname: string;
    vmpname: string;
    frmmpname: string;
}
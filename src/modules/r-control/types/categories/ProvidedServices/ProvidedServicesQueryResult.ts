export interface ProvidedServicesQueryResult {
    services: ProvidedService[];
}

export interface ProvidedService {
    uid: number;
    codeUsl: string;
    vidVme?: string | null;
    profil: number;
    prvs: number;
    det: number;
    dateIn: Date;
    dateOut: Date;
    ds: string;
    kolUsl: number;
    tarif?: number | null;
    sumvUsl: number;
    comentu?: string | null
}
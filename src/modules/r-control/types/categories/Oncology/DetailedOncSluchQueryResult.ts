export interface DetailedOncSluchQueryResult {
    diags: Diag[],
    contraindications: OncologyСontraindication[],
    services: OncologyService[]
}

export interface Diag {
    diagDate?: Date | string | null;
    diagTip?: number | null;
    diagCode?: number | null;
    diagRslt?: number | null;
    recRslt?: number | null;
}

export interface OncologyСontraindication {
    prot: number;
    dProt: Date;
}

export interface OncologyService {
    uid: number;
    uslTip: number;
    hirTip?: number | null;
    lekTipL?: number | null;
    lekTipV?: number | null;
    pptR?: number | null;
    luchTip?: number | null;
}
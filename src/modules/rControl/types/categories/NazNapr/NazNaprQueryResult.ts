export interface NazNaprQueryResult {
    purposes: Purpose[];
    directions: Direction[];
}

export interface Purpose {
    uid: number;
    nazN: number;
    nazR: number;
    nazIddokt: string;
    nazV?: number | null;
    nazUsl?: string | null;
    naprDate?: Date | null;
    naprMo?: string | null;
    nazPmp?: number | null;
    nazPk?: string | null;
}

export interface Direction {
    uid: number;
    naprDate: Date;
    naprMo?: string | null;
    naprV: number;
    metIssl?: number | null;
    naprUsl?: string | null;
}
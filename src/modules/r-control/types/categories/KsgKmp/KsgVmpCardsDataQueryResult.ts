export interface KsgVmpCardsDataQueryResult {
    ksgKpg: KsgKpg;
    vmp: Vmp;
}

export interface KsgKpg {
    uid: number;
    ksg?: string | null;
    nKsg: string;
    verKsg: number;
    ksgPg: number;
    nKpg?: string | null;
    koefZ: number;
    koefUp: number;
    bztsz: number;
    koefD: number;
    koefU: number;
    slK: number;
    itSl?: number | null;
}

export interface Vmp {
    vidHmp?: string | null;
    metodHmp?: number | null;
    talD?: Date | null;
    talNum?: string | null;
    talP?: string | null;
}
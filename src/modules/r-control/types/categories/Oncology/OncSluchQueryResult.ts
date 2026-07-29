export interface OncSluchQueryResult {
    oncSluch: OncSluch;
}

export interface OncSluch {
    uid: number;
    ds1T?: number | null;
    stad?: number | null;
    onkT?: number | null;
    onkN?: number | null;
    onkM?: number | null;
    mtstz?: number | null;
    sod?: number | null;
    kFr?: number | null;
    wei?: number | null;
    hei?: number | null;
    bsa?: number | null;
}
export const CATEGORY_IDS = [
    'patientSmoId',
    'casesId',
    'onkId',
    'uslId',
    'ksgVmpId',
    'nazNaprId',
    'defectsId',
    'default'
] as const;

export type CategoryId = typeof CATEGORY_IDS[number];

export const isCategoryId = (value: string): value is CategoryId => {
    return CATEGORY_IDS.includes(value as CategoryId);
};
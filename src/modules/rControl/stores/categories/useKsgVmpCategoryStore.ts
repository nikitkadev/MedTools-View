import type { KsgKpg, Vmp } from "../../types/categories/KsgKmp/KsgVmpCardsDataQueryResult";
import type { Crit, SlKoef } from "../../types/categories/KsgKmp/KsgVmpTablesDataQueryResult";
import { create } from "zustand";

interface KsgVmpCategoryStore {
    ksgKpgUid: number | null;
    ksgKpg: KsgKpg | null;
    vmp: Vmp | null;

    crits: Crit[];
    slKoefs: SlKoef[];

    setKsgKpgUid: (uid: number | null) => void;
    setKsgKpg: (entity: KsgKpg | null) => void;
    setVmp: (entity: Vmp | null) => void;
    setCrits: (entities: Crit[]) => void;
    setSlKoefs: (entities: SlKoef[]) => void;
}

export const useKsgVmpCategoryStore = create<KsgVmpCategoryStore>((set) => ({
    ksgKpgUid: null,
    ksgKpg: null,
    vmp: null,

    crits: [],
    slKoefs: [],

    setKsgKpgUid: (uid) => set({
        ksgKpgUid: uid
    }),

    setKsgKpg: (entity) => set({
        ksgKpg: entity
    }),

    setVmp: (entity) => set({
        vmp: entity
    }),

    setCrits: (entities) => set({
        crits: entities
    }),

    setSlKoefs: (entities) => set({
        slKoefs: entities
    })
}));
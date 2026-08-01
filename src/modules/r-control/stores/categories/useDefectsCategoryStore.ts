import { create } from "zustand";
import type { Defect, Sank } from "../../types/categories/Defects/DefectsSanksQueryResult";

interface DefectsCategoryStore {
    defects: Defect[];
    sanks: Sank[];

    setDefects: (entities: Defect[]) => void;
    setSanks: (entities: Sank[]) => void;
}

export const useDefectsCategoryStore = create<DefectsCategoryStore>((set) => ({
    defects: [],
    sanks: [],

    setDefects: (entities) => set({
        defects: entities
    }),

    setSanks: (entities) => set({
        sanks: entities
    })
}))
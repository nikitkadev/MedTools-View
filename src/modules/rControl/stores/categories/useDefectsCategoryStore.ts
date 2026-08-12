import type { Sank } from "../../types/categories/DefectsSanks/SanksQueryResult";
import type { PaginationState } from "../../../../common/types/PaginationState";
import type { Defect } from "../../types/categories/DefectsSanks/DefectsQueryResult";
import { create } from "zustand";

interface DefectsCategoryStore {
    defects: Defect[];
    sanks: Sank[];
    defectsPaginationState: PaginationState,

    setDefects: (entities: Defect[]) => void;
    setSanks: (entities: Sank[]) => void;
    setDefectsTablePagination: (pagination: Partial<DefectsCategoryStore['defectsPaginationState']>) => void;
}

export const useDefectsCategoryStore = create<DefectsCategoryStore>((set) => ({
    defects: [],
    sanks: [],
    defectsPaginationState: {
        page: 0,
        pageSize: 10,
        totalItems: 0,
        totalPages: 1
    },

    setDefects: (entities) => set({
        defects: entities
    }),

    setSanks: (entities) => set({
        sanks: entities
    }),

    setDefectsTablePagination: (newState) => set((state) => ({
        defectsPaginationState: { ...state.defectsPaginationState, ...newState }
    }))
}))
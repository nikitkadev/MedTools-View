import { create } from "zustand";
import type { PaginationState } from "../../../../common/types/PaginationState";
import type { FinishedCase } from "../../types/FinishedCasesQueryResult";

interface FinishedCasesStore {

    finishedCases: FinishedCase[];
    pagination: PaginationState;
    selectedRecordUid: number | null;

    setFinishedCases: (finishedCases: FinishedCase[]) => void;
    setPagination: (newPagination: Partial<FinishedCasesStore['pagination']>) => void;
    setSelectedRecordUid: (uid: number) => void;
}

export const useFinishedCasesStore = create<FinishedCasesStore>((set) => ({
    finishedCases: [],
    pagination: {
        page: 0,
        pageSize: 10,
        totalItems: 0,
        totalPages: 1
    },
    selectedRecordUid: null,

    setFinishedCases: (finishedCases) => set({
        finishedCases: finishedCases
    }),
    setPagination: (newPagination) => set((state) => ({
        pagination: { ...state.pagination, ...newPagination }
    })),
    setSelectedRecordUid: (uid) => set({
        selectedRecordUid: uid
    })

}));
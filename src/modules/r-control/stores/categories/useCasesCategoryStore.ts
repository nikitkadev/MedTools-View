import { create } from "zustand";
import type { CaseCategory, FinishedCaseCategory } from "../../types/categories/AllCases/CasesQueryResult";

interface CasesCategoryStore {
    caseCategory: CaseCategory | null;
    finishedCaseCategory: FinishedCaseCategory | null;

    setCategoryCase: (caseCategory: CaseCategory) => void;
    setCategoryFinishedCase: (finishedCaseCategory: FinishedCaseCategory) => void
}

export const useCasesCategoryStore = create<CasesCategoryStore>((set) => ({
    caseCategory: null,
    finishedCaseCategory: null,

    setCategoryCase: (caseCategory) => set({
        caseCategory: caseCategory
    }),
    setCategoryFinishedCase: (finishedCaseCategory) => set({
        finishedCaseCategory: finishedCaseCategory
    })
}))
import type { TargetDbType } from "../../../../common/types/TargetDbType";
import { create } from "zustand";

interface FiltersStore {
    targetDb: TargetDbType | null;
    selectedOrgCode: string;
    selectedYear: string;
    selectedMonth: string;

    setTargetDb: (targetDb: TargetDbType) => void;
    setSelectedOrgCode: (orgCode: string) => void;
    setSelectedYear: (year: string) => void;
    setSelectedMonth: (month: string) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({

    targetDb: null,
    selectedOrgCode: '',
    selectedYear: '',
    selectedMonth: '',

    setTargetDb: (targetDb) => set({
        targetDb: targetDb
    }),
    setSelectedOrgCode: (orgCode) => set({
        selectedOrgCode: orgCode
    }),
    setSelectedYear: (year) => set({
        selectedYear: year
    }),
    setSelectedMonth: (month) => set({
        selectedMonth: month
    })

}));
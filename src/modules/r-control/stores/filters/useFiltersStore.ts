import type { TargetDbType } from "../../../../common/types/TargetDbType";
import { create } from "zustand";
import type { CategoryId } from "../../types/CategoryId";

interface FiltersStore {
    targetDb: TargetDbType | null;
    selectedOrgCode: string;
    selectedYear: string;
    selectedMonth: string;
    selectedCategory: CategoryId;

    setTargetDb: (targetDb: TargetDbType) => void;
    setSelectedOrgCode: (orgCode: string) => void;
    setSelectedYear: (year: string) => void;
    setSelectedMonth: (month: string) => void;
    setSelectedCategory: (category: CategoryId) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({

    targetDb: null,
    selectedOrgCode: '',
    selectedYear: '',
    selectedMonth: '',
    selectedCategory: 'default',

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
    }),
    setSelectedCategory: (category) => set({
        selectedCategory: category
    })

})); 
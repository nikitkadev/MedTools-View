import type { CategoryId } from "../../ui/CategoryRender/CategoryRender";
import { create } from "zustand";

interface CategoriesStore {
  targetCategory: CategoryId;
  selectedOncologyServiceUid: number | null;
  selectedMedicationUid: number | null;
  selectOncologyService: (oncologyServiceUid: number | null) => void;
  selectMedication: (medicationUid: number | null) => void;
  setTargetCategory: (targetCategory: CategoryId) => void;
}

export const useCategoriesStore = create<CategoriesStore>((set) => ({
  targetCategory: "default",
  selectedOncologyServiceUid: null,
  selectedMedicationUid: null,
  selectOncologyService: (oncologyServiceUid) =>
    set({
      selectedOncologyServiceUid: oncologyServiceUid,
      selectedMedicationUid: null,
    }),
  selectMedication: (medicationUid) =>
    set({
      selectedMedicationUid: medicationUid,
    }),
  setTargetCategory: (targetCategory) =>
    set({
      targetCategory: targetCategory,
    }),
}));

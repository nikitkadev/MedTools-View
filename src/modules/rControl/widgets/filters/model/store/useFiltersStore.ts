import { create } from "zustand";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";

interface FiltersStore {
  targetDb: TargetDbType | null;
  selectedMedicalOrganization: string;
  selectedBillingYear: string;
  selectedBillingMonth: string;
  selectTargetDb: (targetDb: TargetDbType) => void;
  selectMedicalOrganization: (medicalOrganization: string) => void;
  selectBillingYear: (billingYear: string) => void;
  selectBillingMonth: (billingMonth: string) => void;
}

export const useFiltersStore = create<FiltersStore>((set) => ({
  targetDb: null,
  selectedMedicalOrganization: "",
  selectedBillingYear: "",
  selectedBillingMonth: "",
  selectTargetDb: (targetDb) =>
    set({
      targetDb: targetDb,
      selectedMedicalOrganization: "",
    }),
  selectMedicalOrganization: (medicalOrganization) =>
    set({
      selectedMedicalOrganization: medicalOrganization,
    }),
  selectBillingYear: (billingYear) =>
    set({
      selectedBillingYear: billingYear,
    }),
  selectBillingMonth: (billingMonth) =>
    set({
      selectedBillingMonth: billingMonth,
    }),
}));

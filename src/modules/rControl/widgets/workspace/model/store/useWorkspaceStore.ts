import type { PaginationState } from "../../../../../../shared/types/PaginationState";
import type { CategoryId } from "../../ui/categories/render/CategoryRender/CategoryRender";
import { create } from "zustand";

interface WorkspaceStore {
  selectedInvoiceUid: number | null;
  selectedCompletedCaseUid: number | null;
  selectedMedicalCaseUid: number | null;
  selectedProvidedServiceUid: number | null;
  invoicesTablePagination: PaginationState;
  completedCasesTablePagination: PaginationState;
  defectsTablePagination: PaginationState;
  targetCategory: CategoryId;
  selectedOncologyServiceUid: number | null;
  selectedMedicationUid: number | null;
  selectOncologyService: (oncologyServiceUid: number | null) => void;
  selectMedication: (medicationUid: number | null) => void;
  setTargetCategory: (targetCategory: CategoryId) => void;
  selectInvoice: (invoiceUid: number | null) => void;
  selectCompletedCase: (completedCaseUid: number | null) => void;
  selectMedicalCase: (medicalCaseUid: number | null) => void;
  selectProvidedService: (providedServiceUid: number | null) => void;
  setInvoicesTablePagination: (
    newState: Partial<WorkspaceStore["invoicesTablePagination"]>,
  ) => void;
  setCompletedCasesTablePagination: (
    newState: Partial<WorkspaceStore["completedCasesTablePagination"]>,
  ) => void;
  setDefectsTablePagination: (
    newState: Partial<WorkspaceStore["defectsTablePagination"]>,
  ) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedInvoiceUid: null,
  selectedCompletedCaseUid: null,
  selectedMedicalCaseUid: null,
  selectedProvidedServiceUid: null,
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
  invoicesTablePagination: {
    page: 0,
    pageSize: 10,
  },
  completedCasesTablePagination: {
    page: 0,
    pageSize: 10,
  },
  defectsTablePagination: {
    page: 0,
    pageSize: 10,
  },
  selectInvoice: (invoiceUid) =>
    set((state) => ({
      selectedInvoiceUid: invoiceUid,
      selectedCompletedCaseUid: null,
      selectedProvidedServiceUid: null,
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        page: 0,
      },
    })),
  selectCompletedCase: (completedCaseUid) =>
    set({
      selectedCompletedCaseUid: completedCaseUid,
      selectedMedicalCaseUid: null,
      selectedProvidedServiceUid: null,
    }),
  selectMedicalCase: (medicalCaseUid) =>
    set({
      selectedMedicalCaseUid: medicalCaseUid,
      selectedProvidedServiceUid: null,
    }),
  selectProvidedService: (providedServiceUid) =>
    set({
      selectedProvidedServiceUid: providedServiceUid,
    }),
  setInvoicesTablePagination: (newState) =>
    set((state) => ({
      invoicesTablePagination: {
        ...state.invoicesTablePagination,
        ...newState,
      },
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        page: 0,
      },
      selectedInvoiceUid: null,
      selectedCompletedCaseUid: null,
      selectedMedicalCaseUid: null,
    })),
  setCompletedCasesTablePagination: (newState) =>
    set((state) => ({
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        ...newState,
      },
      selectedCompletedCaseUid: null,
      selectedMedicalCaseUid: null,
    })),

  setDefectsTablePagination: (newState) =>
    set((state) => ({
      defectsTablePagination: { ...state.defectsTablePagination, ...newState },
    })),
}));

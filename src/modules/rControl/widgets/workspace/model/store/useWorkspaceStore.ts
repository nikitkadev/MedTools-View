import type { PaginationState } from "../../../../../../shared/types/PaginationState";
import { create } from "zustand";
import type { CategoryId } from "../types/categories/CategoryId";

interface WorkspaceStore {
  selectedInvoiceUid: number | null;
  selectedCompletedCaseUid: number | null;
  selectedMedicalCaseUid: number | null;
  selectedProvidedServiceUid: number | null;
  selectedOncologyServiceUid: number | null;
  selectedMedicationUid: number | null;

  invoicesTablePagination: PaginationState;
  completedCasesTablePagination: PaginationState;
  defectsTablePagination: PaginationState;

  targetCategory: CategoryId;

  selectOncologyService: (oncologyServiceUid: number | null) => void;
  selectMedication: (medicationUid: number | null) => void;
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
  setTargetCategory: (targetCategory: CategoryId) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedInvoiceUid: null,
  selectedCompletedCaseUid: null,
  selectedMedicalCaseUid: null,
  selectedProvidedServiceUid: null,
  selectedOncologyServiceUid: null,
  selectedMedicationUid: null,

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

  targetCategory: "default",

  setTargetCategory: (targetCategory) =>
    set({
      targetCategory: targetCategory,
    }),
  selectInvoice: (invoiceUid) =>
    set((state) => ({
      selectedInvoiceUid: invoiceUid,
      selectedCompletedCaseUid: null,
      selectedMedicalCaseUid: null,
      selectedProvidedServiceUid: null,
      selectedOncologyServiceUid: null,
      selectedMedicationUid: null,
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        page: 0,
      },
      defectsTablePagination: {
        ...state.defectsTablePagination,
        page: 0,
      },
    })),
  selectCompletedCase: (completedCaseUid) =>
    set((state) => ({
      selectedCompletedCaseUid: completedCaseUid,
      selectedMedicalCaseUid: null,
      selectedProvidedServiceUid: null,
      selectedOncologyServiceUid: null,
      selectedMedicationUid: null,
      defectsTablePagination: {
        ...state.defectsTablePagination,
        page: 0,
      },
    })),
  selectMedicalCase: (medicalCaseUid) =>
    set((state) => ({
      selectedMedicalCaseUid: medicalCaseUid,
      selectedProvidedServiceUid: null,
      selectedOncologyServiceUid: null,
      selectedMedicationUid: null,
      defectsTablePagination: {
        ...state.defectsTablePagination,
        page: 0,
      },
    })),
  selectProvidedService: (providedServiceUid) =>
    set({
      selectedProvidedServiceUid: providedServiceUid,
    }),
  selectOncologyService: (oncologyServiceUid) =>
    set({
      selectedOncologyServiceUid: oncologyServiceUid,
      selectedMedicationUid: null,
    }),
  selectMedication: (medicationUid) =>
    set({
      selectedMedicationUid: medicationUid,
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
      defectsTablePagination: {
        ...state.defectsTablePagination,
        page: 0,
      },
      selectedInvoiceUid: null,
      selectedCompletedCaseUid: null,
      selectedMedicalCaseUid: null,
      selectedOncologyServiceUid: null,
      selectedMedicationUid: null,
      selectedProvidedServiceUid: null,
    })),
  setCompletedCasesTablePagination: (newState) =>
    set((state) => ({
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        ...newState,
      },
      defectsTablePagination: {
        ...state.defectsTablePagination,
        page: 0,
      },
      selectedCompletedCaseUid: null,
      selectedMedicalCaseUid: null,
      selectedOncologyServiceUid: null,
      selectedMedicationUid: null,
      selectedProvidedServiceUid: null,
    })),

  setDefectsTablePagination: (newState) =>
    set((state) => ({
      defectsTablePagination: { ...state.defectsTablePagination, ...newState },
    })),
}));

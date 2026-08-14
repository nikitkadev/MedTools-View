import type { PaginationState } from "../../../../../../shared/types/PaginationState";
import { create } from "zustand";

interface WorkspaceStore {
  selectedInvoiceUid: number | null;
  selectedCompletedCaseUid: number | null;
  selectedMedicalCaseUid: number | null;
  invoicesTablePagination: PaginationState;
  completedCasesTablePagination: PaginationState;
  selectInvoice: (invoiceUid: number | null) => void;
  selectCompletedCase: (completedCaseUid: number | null) => void;
  selectMedicalCase: (medicalCaseUid: number | null) => void;
  setInvoicesTablePagination: (
    newState: Partial<WorkspaceStore["invoicesTablePagination"]>,
  ) => void;
  setCompletedCasesTablePagination: (
    newState: Partial<WorkspaceStore["completedCasesTablePagination"]>,
  ) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedInvoiceUid: null,
  selectedCompletedCaseUid: null,
  selectedMedicalCaseUid: null,
  invoicesTablePagination: {
    page: 0,
    pageSize: 10,
  },
  completedCasesTablePagination: {
    page: 0,
    pageSize: 10,
  },
  selectInvoice: (invoiceUid) =>
    set((state) => ({
      selectedInvoiceUid: invoiceUid,
      selectedCompletedCaseUid: null,
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        page: 0,
      },
    })),
  selectCompletedCase: (completedCaseUid) =>
    set({
      selectedCompletedCaseUid: completedCaseUid,
      selectedMedicalCaseUid: null,
    }),
  selectMedicalCase: (medicalCaseUid) =>
    set({
      selectedMedicalCaseUid: medicalCaseUid,
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
}));

import { create } from "zustand";
import type { PaginationState } from "../../../../../../shared/types/PaginationState";

interface WorkspaceStore {
  selectedInvoiceUid: number | null;
  invoicesTablePagination: PaginationState;
  completedCasesTablePagination: PaginationState;
  selectInvoice: (invoiceUid: number | null) => void;
  setInvoicesTablePagination: (
    newState: Partial<WorkspaceStore["invoicesTablePagination"]>,
  ) => void;
  setCompletedCasesTablePagination: (
    newState: Partial<WorkspaceStore["completedCasesTablePagination"]>,
  ) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedInvoiceUid: null,
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
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        page: 0,
      },
    })),
  setInvoicesTablePagination: (newState) =>
    set((state) => ({
      invoicesTablePagination: {
        ...state.invoicesTablePagination,
        ...newState,
      },
      selectedInvoiceUid: null,
    })),
  setCompletedCasesTablePagination: (newState) =>
    set((state) => ({
      completedCasesTablePagination: {
        ...state.completedCasesTablePagination,
        ...newState,
      },
    })),
}));

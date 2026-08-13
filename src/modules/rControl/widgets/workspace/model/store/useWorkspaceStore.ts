import { create } from "zustand";
import type { PaginationState } from "../../../../../../shared/types/PaginationState";

interface WorkspaceStore {
  selectedInvoiceUid: number | null;
  pagination: PaginationState;
  selectInvoice: (invoiceUid: number | null) => void;
  setPagination: (newState: Partial<WorkspaceStore["pagination"]>) => void;
}

export const useWorkspaceStore = create<WorkspaceStore>((set) => ({
  selectedInvoiceUid: null,
  pagination: {
    page: 0,
    pageSize: 10
  },
  selectInvoice: (invoiceUid) =>
    set({
      selectedInvoiceUid: invoiceUid,
    }),
  setPagination: (newState) =>
    set((state) => ({
      pagination: { ...state.pagination, ...newState },
      selectedInvoiceUid: null
    })),
    
}));

import { create } from "zustand";
import type { PaginationState } from "../../../../common/types/PaginationState";
import type { InvoiceShortly } from "../../types/InvoicesShortlyQueryResult";

interface InvoicesStore {
    invoicesShortlies: InvoiceShortly[];
    pagination: PaginationState;

    setInvoicesShortlies: (invoices: InvoiceShortly[]) => void;
    setPagination: (newPaginationState: Partial<InvoicesStore['pagination']>) => void;
}

export const useInvoicesStore = create<InvoicesStore>((set) => ({

    invoicesShortlies: [],
    
    pagination: {
        page: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 1
    },

    setInvoicesShortlies: (invoices) => set({
        invoicesShortlies: invoices
    }),
    
    setPagination: (newPaginationState) => set((state) => ({
        pagination: { ...state.pagination, ...newPaginationState }
    }))

}))
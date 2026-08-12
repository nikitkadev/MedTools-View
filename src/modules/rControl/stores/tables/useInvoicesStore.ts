import { create } from "zustand";
import type { PaginationState } from "../../../../common/types/PaginationState";
import type { InvoiceShortly } from "../../types/InvoicesShortlyQueryResult";
import type { InvoiceSummaryQueryResult } from "../../types/InvoiceSummaryQueryResult";

interface InvoicesStore {
    invoicesShortlies: InvoiceShortly[];
    pagination: PaginationState;
    selectedRecord: InvoiceShortly | null;
    invoiceSummary: InvoiceSummaryQueryResult | null;

    setInvoiceSummary: (summary: InvoiceSummaryQueryResult) => void;
    setSelectedRecord: (record: InvoiceShortly) => void;
    setInvoicesShortlies: (invoices: InvoiceShortly[]) => void;
    setPagination: (newPaginationState: Partial<InvoicesStore['pagination']>) => void;
}

export const useInvoicesStore = create<InvoicesStore>((set) => ({

    invoicesShortlies: [],
    selectedRecord: null,
    invoiceSummary: null,

    pagination: {
        page: 0,
        pageSize: 10,
        totalItems: 0,
        totalPages: 1
    },

    setInvoiceSummary: (summary) => set({
        invoiceSummary: summary
    }),

    setSelectedRecord: (record) => set({
        selectedRecord: record
    }),

    setInvoicesShortlies: (invoices) => set({
        invoicesShortlies: invoices
    }),

    setPagination: (newPaginationState) => set((state) => ({
        pagination: { ...state.pagination, ...newPaginationState }
    }))

}))
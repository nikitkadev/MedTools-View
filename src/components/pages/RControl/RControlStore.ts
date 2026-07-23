import type { MedOrganization } from "../../../api/services/RControl/responses/MedOrganizationsQueryResult";
import type { BillingPeriod } from "../../../api/services/RControl/responses/BillingPeriodsQueryResult";
import type { InvoiceShortly } from "../../../api/services/RControl/responses/InvoicesShortlyQueryResult";

import { create } from "zustand";

interface RControlStore {

    dbType: string | null;

    selectedOrgCode: string;
    selectedYear: string;
    selectedMonth: string;

    medOrganizations: MedOrganization[];
    billingPeriods: BillingPeriod[];
    invoicesShortlies: InvoiceShortly[];

    invoicesPagination: {
        page: number;
        pageSize: number;
        totalPages: number;
        totalItems: number;
    };


    setInvoicesTablePagination: (pagination: Partial<RControlStore["invoicesPagination"]>) => void;
    setDbType: (type: string) => void;
    setMedOrganizations: (orgs: MedOrganization[]) => void;
    setBillingPeriods: (periods: BillingPeriod[]) => void;
    setInvoicesShortlies: (invoices: InvoiceShortly[]) => void;
    setSelectedMonth: (value: string) => void;
    setSelectedYear: (value: string) => void;
    setSelectedOrgCode: (value: string) => void;
}

export const useRControlStore = create<RControlStore>((set) => ({

    dbType: null,
    selectedOrgCode: '',
    selectedYear: '',
    selectedMonth: '',
    medOrganizations: [],
    billingPeriods: [],
    invoicesShortlies: [],

    invoicesPagination: {
        page: 1,
        pageSize: 10,
        totalItems: 0,
        totalPages: 1
    },

    setInvoicesTablePagination: (newPaginationState) => set((state) => ({
        invoicesPagination: { ...state.invoicesPagination, ...newPaginationState }
    })),
    setSelectedOrgCode: (value) => set({
        selectedOrgCode: value
    }),
    setSelectedYear: (value) => set({
        selectedYear: value
    }),
    setSelectedMonth: (value) => set({
        selectedMonth: value
    }),
    setMedOrganizations: (orgs) => set({
        medOrganizations: orgs
    }),
    setInvoicesShortlies: (invoices) => set({
        invoicesShortlies: invoices
    }),
    setBillingPeriods: (periods) => set({
        billingPeriods: periods
    }),
    setDbType: (type: string) => set({
        dbType: type
    }),

}))
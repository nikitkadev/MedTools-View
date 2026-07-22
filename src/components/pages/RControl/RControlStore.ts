import { create } from "zustand";
import type { MedOrganization } from "../../../api/services/RControl/responses/MedOrganizationsQueryResult";
import type { BillingPeriod } from "../../../api/services/RControl/responses/BillingPeriodsQueryResult";

interface RControlStore {
    dbType: string | null;
    setDbType: (type: string) => void;

    selectedOrgCode: string;
    selectedYear: string;
    selectedMonth: string;
    setSelectedMonth: (value: string) => void;
    setSelectedYear: (value: string) => void;
    setSelectedOrgCode: (value: string) => void;

    medOrganizations: MedOrganization[];
    setMedOrganizations: (orgs: MedOrganization[]) => void;

    billingPeriods: BillingPeriod[];
    setBillingPeriods: (periods: BillingPeriod[]) => void;
}

export const useRControlStore = create<RControlStore>((set) => ({

    dbType: null,
    setDbType: (type: string) => set({
        dbType: type
    }),

    selectedOrgCode: '',
    selectedYear: '',
    selectedMonth: '',
    setSelectedOrgCode: (value) => set({
        selectedOrgCode: value
    }),
    setSelectedYear: (value) => set({
        selectedYear: value
    }),
    setSelectedMonth: (value) => set({
        selectedMonth: value
    }),

    medOrganizations: [],
    setMedOrganizations: (orgs) => set({
        medOrganizations: orgs
    }),

    billingPeriods: [],
    setBillingPeriods: (periods) => set({
        billingPeriods: periods
    })

}))
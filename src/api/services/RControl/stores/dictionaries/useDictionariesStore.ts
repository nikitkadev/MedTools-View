import { create } from "zustand";
import type { BillingPeriod } from "../../responses/BillingPeriodsQueryResult";
import type { MedOrganization } from "../../responses/MedOrganizationsQueryResult";

interface DictionariesStore {
    medOrganizations: MedOrganization[];
    periods: BillingPeriod[];

    setMedOrganizations: (orgs: MedOrganization[]) => void;
    setPeriods: (periods: BillingPeriod[]) => void;
}

export const useDictionariesStore = create<DictionariesStore>((set) => ({
    medOrganizations: [],
    periods: [],

    setMedOrganizations: (orgs) => set({
        medOrganizations: orgs
    }),
    setPeriods: (periods) => set({
        periods: periods
    })

}));
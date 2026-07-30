import { create } from "zustand";
import type { MedDev } from "../../types/categories/ProvidedServices/MedDevQueryResult";
import type { ProvidedService } from "../../types/categories/ProvidedServices/ProvidedServicesQueryResult";

interface ProvidedServicesCategoryStore {
    serviceUid: number | null;
    services: ProvidedService[];
    medDevs: MedDev[];

    setServices: (services: ProvidedService[]) => void;
    setMedDevs: (medDevs: MedDev[]) => void;
    setServiceUid: (uid: number) => void;
}

export const useProvidedServicesCategoryStore = create<ProvidedServicesCategoryStore>((set) => ({
    serviceUid: null,
    services: [],
    medDevs: [],

    setServices: (services) => set({
        services: services
    }),

    setMedDevs: (medDevs) => set({
        medDevs: medDevs
    }),

    setServiceUid: (uid) => set({
        serviceUid: uid
    })
}))
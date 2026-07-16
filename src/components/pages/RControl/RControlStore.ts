import { create } from "zustand";

interface RControlStore {
    dbType: string | null;
    setDbType: (type: string) => void;

    selectedOrgCode: string | null;
    setSelectedOrgCode: (value: string) => void;
}

export const useRControlStore = create<RControlStore>((set) => ({

    dbType: null,
    setDbType: (type: string) => set({
        dbType: type
    }),

    selectedOrgCode: null,
    setSelectedOrgCode: (value) => set({
        selectedOrgCode: value
    })
}))
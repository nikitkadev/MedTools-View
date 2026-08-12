import type { TargetDbType } from "../../../../shared/types/TargetDbType";
import { create } from "zustand";

interface FiltersPanelStore {
    targetDb: TargetDbType | null;

    selectTargetDb: (targetDb: TargetDbType) => void;
}

export const useFiltersStore = create<FiltersPanelStore>((set) => ({
    targetDb: null,

    selectTargetDb: (targetDb) => set({
        targetDb: targetDb
    })
}))
import { create } from "zustand";
import type { Case } from "../../types/CasesQueryResult";

interface CasesStore {
    cases: Case[];
    selectedRecordUid: number | null;

    setCases: (cases: Case[]) => void;
    setSelectedRecordUid: (uid: number) => void;
}

export const useCasesStore = create<CasesStore>((set) => ({
    cases: [],
    selectedRecordUid: null,

    setCases: (cases) => set({
        cases: cases
    }),
    setSelectedRecordUid: (uid) => set({
        selectedRecordUid: uid
    })
    
}));
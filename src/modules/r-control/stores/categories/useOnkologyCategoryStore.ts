import { create } from "zustand";
import type { OnkSluch } from "../../types/categories/Onkology/OnkSluchQueryResult";
import type { Consultation } from "../../types/categories/Onkology/ConsultationQueryResult";

interface OnkologyCategoryStore {
    onkSluch: OnkSluch | null;
    consultations: Consultation[],

    setOnkSluch: (onkSluch: OnkSluch) => void;
    setConsultations: (consultations: Consultation[]) => void;
}

export const useOnkologyCategoryStore = create<OnkologyCategoryStore>((set) => ({
    onkSluch: null,
    consultations: [],

    setOnkSluch: (onkSluch) => set({
        onkSluch: onkSluch
    }),
    setConsultations: (consultations) => set({
        consultations: consultations
    })
}))
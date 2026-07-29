import type { OncSluch } from "../../types/categories/Oncology/OncSluchQueryResult";
import type { Consultation } from "../../types/categories/Oncology/ConsultationQueryResult";
import type { Diag, OncologyService, OncologyСontraindication } from "../../types/categories/Oncology/OncSluchDetailedQueryResult";
import { create } from "zustand";

interface OncologyCategoryStore {
    oncSluch: OncSluch | null;
    oncSluchUid: number | null;
    consultations: Consultation[],

    services: OncologyService[],
    contraindications: OncologyСontraindication[],
    diags: Diag[],

    setOncSluch: (sluch: OncSluch) => void;
    setOncSluchUid: (uid: number) => void;
    setConsultations: (consultations: Consultation[]) => void;

    setOncologyServices: (services: OncologyService[]) => void;
    setContraindications: (contraindications: OncologyСontraindication[]) => void;
    setDiags: (diags: Diag[]) => void;
}

export const useOnkologyCategoryStore = create<OncologyCategoryStore>((set) => ({
    oncSluch: null,
    oncSluchUid: null,
    consultations: [],

    services: [],
    contraindications: [],
    diags: [],

    setOncSluch: (onkSluch) => set({
        oncSluch: onkSluch
    }),
    setOncSluchUid: (uid) => set({
        oncSluchUid: uid
    }),
    setConsultations: (consultations) => set({
        consultations: consultations
    }),
    setOncologyServices: (services) => set({
        services: services
    }),
    setContraindications: (contraindications) => set({
        contraindications: contraindications
    }),
    setDiags: (diags) => set({
        diags: diags
    })
}))
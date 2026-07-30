import type { OncSluch } from "../../types/categories/Oncology/OncSluchQueryResult";
import type { Consultation } from "../../types/categories/Oncology/ConsultationQueryResult";
import type { Diag, OncologyService, OncologyСontraindication } from "../../types/categories/Oncology/DetailedOncSluchQueryResult";
import type { Medicament } from "../../types/categories/Oncology/MedicamentsQueryResult";
import { create } from "zustand";

interface OncologyCategoryStore {
    oncServiceUid: number | null;
    oncSluchUid: number | null;

    oncSluch: OncSluch | null;
    consultations: Consultation[],

    services: OncologyService[],
    contraindications: OncologyСontraindication[],
    diags: Diag[],

    medicaments: Medicament[],

    setOncServiceUid: (uid: number) => void;
    setOncSluchUid: (uid: number) => void;

    setOncSluch: (sluch: OncSluch) => void;
    setConsultations: (consultations: Consultation[]) => void;

    setOncologyServices: (services: OncologyService[]) => void;
    setContraindications: (contraindications: OncologyСontraindication[]) => void;
    setDiags: (diags: Diag[]) => void;

    setMedicaments: (medicaments: Medicament[]) => void;
}

export const useOnkologyCategoryStore = create<OncologyCategoryStore>((set) => ({
    oncServiceUid: null,
    oncSluchUid: null,

    oncSluch: null,
    consultations: [],

    services: [],
    contraindications: [],
    diags: [],

    medicaments: [],

    setOncServiceUid: (uid) => set({
        oncServiceUid: uid
    }),
    setOncSluchUid: (uid) => set({
        oncSluchUid: uid
    }),

    setOncSluch: (onkSluch) => set({
        oncSluch: onkSluch
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
    }),
    setMedicaments: (medicaments) => set({
        medicaments: medicaments
    })
}))
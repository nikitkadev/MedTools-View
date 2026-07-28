import type { Patient, Smo } from "../../types/categories/PatientSmoQueryResult";
import { create } from "zustand";

interface PatientSmoStore {
    patient?: Patient | null,
    smo?: Smo | null,

    setPatient: (patient: Patient) => void;
    setSmo: (smo: Smo) => void;
}

export const usePatientSmoStore = create<PatientSmoStore>((set) => ({
    patient: null,
    smo: null,

    setPatient: (patient) => set({
        patient: patient
    }),
    setSmo: (smo) => set({
        smo: smo
    })
}))
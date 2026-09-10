import type { Dayjs } from "dayjs";
import type { Sex } from "./Sex";

export interface FiltersDraft {
  person: PersonFiltersGroupDraft;
  medicalCaseDetails: MedicalCaseDetailsFiltersGroupDraft;
}

export interface MedicalCaseDetailsFiltersGroupDraft {
  medicalCaseDetails: MedicalCaseDetailsFiltersSubgroupDraft;
  completedCaseDetails: CompletedCaseDetailsSubgroupDraft;
}

export interface MedicalCaseDetailsFiltersSubgroupDraft {
  medicalProfiles: string[];
  bedProfiles: string[];
  divisions: string[];
  encounterMedicalOrganizations: string[];
  visitPurposes: string[];
  preventiveCarePlace: string;
  treatmentStartDate: Dayjs | null;
  treatmentEndDate: Dayjs | null;
  diseaseCharacters: string[];
  physicianSpecialties: string[];
  medicalRecordNumber: string;
}

export interface CompletedCaseDetailsSubgroupDraft {
  careConditions: string[];
  medicalCareTypes: string[];
  careForms: string[];
  medicalOrganizations: string[];
  treatmentStartDate: Dayjs | null;
  treatmentEndDate: Dayjs | null;
  screeningResults: string[];
  hospitalizationOutcomes: string[];
  diseaseOutcomes: string[];
  paymentMethods: string[];
}

export interface PersonFiltersGroupDraft {
  patient: PatientFiltersSubgroupDraft;
  representative: RepresentativeFiltersSubgroupDraft;
  insurance: InsuranceFiltersSubgroupDraft;
}

export interface PatientFiltersSubgroupDraft {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: Dayjs | null;
  sex: Sex | null;
}

export interface RepresentativeFiltersSubgroupDraft {
  firstName: string;
  lastName: string;
  middleName: string;
  birthDate: Dayjs | null;
  sex: Sex | null;
}

export interface InsuranceFiltersSubgroupDraft {
  insurances: string[];
  insurancePolicyTypes: string[];
  insurancePolicySeries: string;
  insurancePolicyNumber: string;
  unifiedPolicyNumber: string;
}

export const initialFiltersDraft: FiltersDraft = {
  person: {
    patient: {
      firstName: "",
      lastName: "",
      middleName: "",
      birthDate: null,
      sex: null,
    },
    representative: {
      firstName: "",
      lastName: "",
      middleName: "",
      birthDate: null,
      sex: null,
    },
    insurance: {
      insurances: [],
      insurancePolicyTypes: [],
      insurancePolicySeries: "",
      insurancePolicyNumber: "",
      unifiedPolicyNumber: "",
    },
  },
  medicalCaseDetails: {
    medicalCaseDetails: {
      medicalProfiles: [],
      bedProfiles: [],
      divisions: [],
      encounterMedicalOrganizations: [],
      visitPurposes: [],
      preventiveCarePlace: "",
      treatmentStartDate: null,
      treatmentEndDate: null,
      diseaseCharacters: [],
      physicianSpecialties: [],
      medicalRecordNumber: "",
    },
    completedCaseDetails: {
      careConditions: [],
      medicalCareTypes: [],
      careForms: [],
      medicalOrganizations: [],
      treatmentStartDate: null,
      treatmentEndDate: null,
      screeningResults: [],
      hospitalizationOutcomes: [],
      diseaseOutcomes: [],
      paymentMethods: [],
    },
  },
};

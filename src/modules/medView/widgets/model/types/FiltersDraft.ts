import type { Dayjs } from "dayjs";
import type { Sex } from "./Sex";

export interface FiltersDraft {
  person: PersonFiltersGroupDraft;
  medicalCaseDetails: MedicalCaseDetailsFiltersGroupDraft;
  oncology: OncologyFiltersGroupDraft;
  prescription: PrescriptionFiltersGroupDraft;
}

export interface PrescriptionFiltersGroupDraft {
  prescription: PrescriptionFiltersSubgroupDraft;
  referral: ReferralFiltersSubgroupDraft;
}

export interface PrescriptionFiltersSubgroupDraft {
  prescriptionTypes: string[];
  diagnosticMethods: string[];
  services: string[];
  referralDate: Dayjs | null;
  referredToMedicalOrganizations: string[];
  medicalCareProfiles: string[];
  bedProfiles: string[];
}

export interface ReferralFiltersSubgroupDraft {
  referralDate: Dayjs | null;
  referredToMedicalOrganizations: string[];
  refferalTypes: string[];
  diagnosticMethods: string[];
  referredServices: string[];
}

export interface OncologyFiltersGroupDraft {
  oncologyCase: OncologyCaseFiltersSubgroupDraft;
  oncologyService: OncologyServiceFiltersSubgroupDraft;
  medication: MedicationFiltersSubgroupDraft;
}

export interface MedicationFiltersSubgroupDraft {
  drugIdentifiers: string[];
  therapyRegimens: string[];
}

export interface OncologyServiceFiltersSubgroupDraft {
  serviceTypes: string[];
  surgicalTreatmentTypes: string[];
  drugTherapyLines: string[];
  drugTherapyCycles: string[];
  radioTherapyTypes: string[];
}

export interface OncologyCaseFiltersSubgroupDraft {
  referralReasons: string[];
  stages: string[];
  tumors: string[];
  noduses: string[];
  metastasises: string[];
}

export interface MedicalCaseDetailsFiltersGroupDraft {
  medicalCaseDetails: MedicalCaseDetailsFiltersSubgroupDraft;
  completedCaseDetails: CompletedCaseDetailsFiltersSubgroupDraft;
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

export interface CompletedCaseDetailsFiltersSubgroupDraft {
  careConditions: string[];
  medicalCareTypes: string[];
  careForms: string[];
  medicalOrganizations: string[];
  referringMedicalOrganizations: string[];
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
      referringMedicalOrganizations: [],
      treatmentStartDate: null,
      treatmentEndDate: null,
      screeningResults: [],
      hospitalizationOutcomes: [],
      diseaseOutcomes: [],
      paymentMethods: [],
    },
  },
  oncology: {
    oncologyCase: {
      referralReasons: [],
      stages: [],
      tumors: [],
      noduses: [],
      metastasises: [],
    },
    oncologyService: {
      drugTherapyCycles: [],
      drugTherapyLines: [],
      radioTherapyTypes: [],
      serviceTypes: [],
      surgicalTreatmentTypes: [],
    },
    medication: {
      drugIdentifiers: [],
      therapyRegimens: [],
    },
  },
  prescription: {
    prescription: {
      referralDate: null,
      referredToMedicalOrganizations: [],
      medicalCareProfiles: [],
      bedProfiles: [],
      services: [],
      diagnosticMethods: [],
      prescriptionTypes: [],
    },
    referral: {
      referralDate: null,
      referredToMedicalOrganizations: [],
      referredServices: [],
      diagnosticMethods: [],
      refferalTypes: [],
    },
  },
};

import type { Dayjs } from "dayjs";
import type { Sex } from "./Sex";

export interface FiltersDraft {
  person: PersonFiltersGroupDraft;
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
};

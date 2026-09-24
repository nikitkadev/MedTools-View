import { useQuery } from "@tanstack/react-query";
import type { MedicalOrgsTargetSource } from "../../../types/MedicalOrgsTargetSource";
import { getMedicalOrganizationFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getMedicalOrganizationFilterOptions";

export const useMedicalOrganizationFilterOptions = (
  targetSource: MedicalOrgsTargetSource,
) => {
  return useQuery({
    queryKey: [
      "med-view",
      "filter-options",
      "medical-organization",
      targetSource,
    ],
    queryFn: () => {
      return getMedicalOrganizationFilterOptions(targetSource);
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

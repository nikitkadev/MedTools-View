import { useQuery } from "@tanstack/react-query";
import { getHospitalizationOutcomeFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getHospitalizationOutcomeFilterOptions";

export const useHospitalizationOutcomeFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "hospitalization-outcome"],
    queryFn: getHospitalizationOutcomeFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

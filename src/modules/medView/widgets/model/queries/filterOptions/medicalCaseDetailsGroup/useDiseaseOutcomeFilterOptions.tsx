import { useQuery } from "@tanstack/react-query";
import { getDiseaseOutcomeFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getDiseaseOutcomeFilterOptions";

export const useDiseaseOutcomeFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "disease-outcome"],
    queryFn: getDiseaseOutcomeFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

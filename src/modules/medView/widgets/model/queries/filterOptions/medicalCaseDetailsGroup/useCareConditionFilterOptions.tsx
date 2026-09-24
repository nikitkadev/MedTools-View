import { useQuery } from "@tanstack/react-query";
import { getCareConditionFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getCareConditionFilterOptions";

export const useCareConditionFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "care-condition"],
    queryFn: getCareConditionFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

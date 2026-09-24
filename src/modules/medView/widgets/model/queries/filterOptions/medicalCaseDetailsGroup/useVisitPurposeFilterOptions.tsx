import { useQuery } from "@tanstack/react-query";
import { getVisitPurposeFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getVisitPurposeFilterOptions";

export const useVisitPurposeFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "visit-purpose"],
    queryFn: getVisitPurposeFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

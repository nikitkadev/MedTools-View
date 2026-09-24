import { useQuery } from "@tanstack/react-query";
import { getScreeningResultFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getScreeningResultFilterOptions";

export const useScreeningResultFilterGroup = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "screening-result"],
    queryFn: getScreeningResultFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

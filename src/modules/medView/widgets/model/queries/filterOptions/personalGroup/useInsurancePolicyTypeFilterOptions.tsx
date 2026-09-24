import { useQuery } from "@tanstack/react-query";
import { getInsurancePolicyTypeFilterOptions } from "../../../../api/filterOptions/personalGroup/getInsurancePolicyTypeFilterOptions";

export const useInsurancePolicyTypeFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options"],
    queryFn: () => {
      return getInsurancePolicyTypeFilterOptions();
    },
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

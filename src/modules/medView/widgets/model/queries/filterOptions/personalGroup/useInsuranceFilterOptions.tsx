import { useQuery } from "@tanstack/react-query";
import { getInsuranceFilterOptions } from "../../../../api/filterOptions/personalGroup/getInsuranceFilterOptions";

export const useInsuranceFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "insurance-filter-options"],
    queryFn: () => {
      return getInsuranceFilterOptions();
    },
  });
};

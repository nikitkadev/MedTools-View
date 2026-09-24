import { useQuery } from "@tanstack/react-query";
import { getBedProfileFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getBedProfileFilterOptions";

export const useBedProfileFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "bed-profile"],
    queryFn: getBedProfileFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

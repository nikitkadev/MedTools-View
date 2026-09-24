import { useQuery } from "@tanstack/react-query";
import { getVisitPlaceFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getVisitPlaceFilterOptions";

export const useVisitPlaceFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "visit-place"],
    queryFn: getVisitPlaceFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

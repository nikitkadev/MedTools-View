import { useQuery } from "@tanstack/react-query";
import { getMedicalCareTypeFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getMedicalCareTypeFilterOptions";

export const useMedicalCareTypeFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "medical-care-type"],
    queryFn: getMedicalCareTypeFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

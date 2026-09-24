import { useQuery } from "@tanstack/react-query";
import { getMedicalCareFormFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getMedicalCareFormFilterOptions";

export const useMedicalCareFormFiilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "medical-care-form"],
    queryFn: getMedicalCareFormFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

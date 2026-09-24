import { useQuery } from "@tanstack/react-query";
import { getMedicalCareProfileFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getMedicalCareProfileFilterOptions";

export const useMedicalCareProfileFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "medical-care-profile"],
    queryFn: () => {
      return getMedicalCareProfileFilterOptions();
    },
    gcTime: Infinity,
    staleTime: Infinity,
  });
};

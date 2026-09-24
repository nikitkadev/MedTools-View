import { useQuery } from "@tanstack/react-query";
import { getDiseaseCharacterFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getDiseaseCharacterFilterOptions";

export const useDiseaseCharacterFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "disease-character"],
    queryFn: getDiseaseCharacterFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

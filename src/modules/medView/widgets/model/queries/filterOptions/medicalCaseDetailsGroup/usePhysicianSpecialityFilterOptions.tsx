import { useQuery } from "@tanstack/react-query";
import { getPhysicianSpecialityFilterOptions } from "../../../../api/filterOptions/medicalCaseDetailsGroup/getPhysicianSpecialityFilterOptions";

export const usePhysicianSpecialityFilterOptions = () => {
  return useQuery({
    queryKey: ["med-view", "filter-options", "physician-speciality"],
    queryFn: getPhysicianSpecialityFilterOptions,
    staleTime: Infinity,
    gcTime: Infinity,
  });
};

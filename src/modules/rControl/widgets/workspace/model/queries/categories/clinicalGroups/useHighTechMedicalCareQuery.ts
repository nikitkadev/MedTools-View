import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getHighTechMedicalCare } from "../../../../api/categories/clinicalGroups/getHighTechMedicalCare";
import { useQuery } from "@tanstack/react-query";

export const useHighTechMedicalCareQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "high-tech-medical-care", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getHighTechMedicalCare(medicalCaseUid, targetDb);
    },
  });
};

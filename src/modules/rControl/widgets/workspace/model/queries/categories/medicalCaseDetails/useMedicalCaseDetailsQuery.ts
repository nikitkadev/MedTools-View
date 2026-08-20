import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getMedicalCaseDetails } from "../../../../api/categories/medicalCaseDetails/getMedicalCaseDetails";

export const useMedicalCaseDetailsQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "medical-case-details", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getMedicalCaseDetails(medicalCaseUid, targetDb);
    },
  });
};

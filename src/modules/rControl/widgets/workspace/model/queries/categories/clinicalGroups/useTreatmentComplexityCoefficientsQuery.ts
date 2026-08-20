import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getTreatmentComplexityCoefficients } from "../../../../api/categories/clinicalGroups/getTreatmentComplexityCoefficients";
import { useQuery } from "@tanstack/react-query";

export const useTreatmentComplexityCoefficientsQuery = (
  clinicalGroupUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: [
      "r-control",
      "treatment-complexity-coefficients",
      clinicalGroupUid,
      targetDb,
    ],
    enabled: clinicalGroupUid !== null && targetDb !== null,
    queryFn: () => {
      if (clinicalGroupUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getTreatmentComplexityCoefficients(clinicalGroupUid, targetDb);
    },
  });
};

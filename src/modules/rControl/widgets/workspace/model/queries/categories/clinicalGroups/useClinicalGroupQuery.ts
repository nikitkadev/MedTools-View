import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getClinicalGroup } from "../../../../api/categories/clinicalGroups/getClinicalGroup";

export const useClinicalGroupQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  const isReady = medicalCaseUid !== null && targetDb !== null;

  return useQuery({
    queryKey: ["r-control", "clinical-group", medicalCaseUid, targetDb],
    enabled: isReady,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getClinicalGroup(medicalCaseUid, targetDb);
    },
  });
};

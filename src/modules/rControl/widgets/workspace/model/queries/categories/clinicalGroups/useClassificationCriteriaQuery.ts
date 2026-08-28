import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getClassificationCriteria } from "../../../../api/categories/clinicalGroups/getClassificationCriteria";

export const useClassificationCriteriaQuery = (
  clinicalGroupUid: number | null,
  targetDb: TargetDbType | null,
) => {
  const isReady = clinicalGroupUid !== null && targetDb !== null;

  return useQuery({
    queryKey: [
      "r-control",
      "classification-criteria",
      clinicalGroupUid,
      targetDb,
    ],
    enabled: isReady,
    queryFn: () => {
      if (clinicalGroupUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getClassificationCriteria(clinicalGroupUid, targetDb);
    },
  });
};

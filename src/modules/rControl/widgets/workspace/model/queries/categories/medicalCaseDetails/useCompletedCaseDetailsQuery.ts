import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getCompletedCaseDetails } from "../../../../api/categories/medicalCaseDetails/getCompletedCaseDetails";

export const useCompletedCaseDetailsQuery = (
  completedCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  const isReady = completedCaseUid !== null && targetDb !== null;

  return useQuery({
    queryKey: [
      "r-control",
      "completed-case-details",
      completedCaseUid,
      targetDb,
    ],
    enabled: isReady,
    queryFn: () => {
      if (completedCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getCompletedCaseDetails(completedCaseUid, targetDb);
    },
  });
};

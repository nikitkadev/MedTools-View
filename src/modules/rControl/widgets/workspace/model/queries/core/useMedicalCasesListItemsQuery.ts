import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getMedicalCaseListItems } from "../../../api/core/getMedicalCaseListItems";

export const useMedicalCasesListItemsQuery = (
  completedCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "medical-cases", completedCaseUid, targetDb],
    queryFn: () => {
      if (completedCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getMedicalCaseListItems(completedCaseUid, targetDb);
    },
    enabled: completedCaseUid !== null && targetDb !== null,
  });
};

import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getOncologyCase } from "../../../api/Oncology/getOncologyCase";

export const useOncologyCaseQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "oncology-case", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getOncologyCase(medicalCaseUid, targetDb);
    },
  });
};

import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getDefects } from "../../../../api/categories/defects/getDefects";

export const useDefectsQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
  page: number,
  pageSize: number,
) => {
  return useQuery({
    queryKey: [
      "r-control",
      "defects",
      medicalCaseUid,
      targetDb,
      page,
      pageSize,
    ],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getDefects(medicalCaseUid, targetDb, page, pageSize);
    },
  });
};

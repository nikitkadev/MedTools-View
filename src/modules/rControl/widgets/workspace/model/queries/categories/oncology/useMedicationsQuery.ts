import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getMedications } from "../../../../api/categories/oncology/getMedications";

export const useMedicationsQuery = (
  oncologyServiceUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "medications", oncologyServiceUid, targetDb],
    enabled: oncologyServiceUid !== null && targetDb !== null,
    queryFn: () => {
      if (oncologyServiceUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getMedications(oncologyServiceUid, targetDb);
    },
  });
};

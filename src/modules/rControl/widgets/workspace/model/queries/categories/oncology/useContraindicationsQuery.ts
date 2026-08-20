import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getContraindications } from "../../../../api/categories/oncology/getContraindications";

export const useContraindicationsQuery = (
  oncologyCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "contraindications", oncologyCaseUid, targetDb],
    enabled: oncologyCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (oncologyCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getContraindications(oncologyCaseUid, targetDb);
    },
  });
};

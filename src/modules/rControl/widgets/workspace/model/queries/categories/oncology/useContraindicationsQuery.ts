import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getContraindications } from "../../../../api/categories/oncology/getContraindications";

export const useContraindicationsQuery = (
  oncologyCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  const isReady = oncologyCaseUid !== null && targetDb !== null;

  return useQuery({
    queryKey: ["r-control", "contraindications", oncologyCaseUid, targetDb],
    enabled: isReady,
    queryFn: () => {
      if (oncologyCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getContraindications(oncologyCaseUid, targetDb);
    },
  });
};

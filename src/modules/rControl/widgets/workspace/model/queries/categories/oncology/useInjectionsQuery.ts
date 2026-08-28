import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getInjections } from "../../../../api/categories/oncology/getInjections";

export const useInjectionsQuery = (
  medicationUid: number | null,
  targetDb: TargetDbType | null,
) => {
  const isReady = medicationUid !== null && targetDb !== null;

  return useQuery({
    queryKey: ["r-control", "injections", medicationUid, targetDb],
    enabled: isReady,
    queryFn: () => {
      if (medicationUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getInjections(medicationUid, targetDb);
    },
  });
};

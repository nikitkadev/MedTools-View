import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getInjections } from "../../../api/Oncology/getInjections";

export const useInjectionsQuery = (
  medicationUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "injections", medicationUid, targetDb],
    enabled: medicationUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicationUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getInjections(medicationUid, targetDb);
    },
  });
};

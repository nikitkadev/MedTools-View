import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getOncologyServices } from "../../../api/Oncology/getOncologyServices";

export const useOncologyServicesQuery = (
  oncologyCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "oncology-services", oncologyCaseUid, targetDb],
    enabled: oncologyCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (oncologyCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getOncologyServices(oncologyCaseUid, targetDb);
    },
  });
};

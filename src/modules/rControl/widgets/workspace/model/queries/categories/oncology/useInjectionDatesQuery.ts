import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getInjectionDates } from "../../../../api/categories/oncology/getInjectionDates";

export const useInjectionDatesQuery = (
  medicationUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "injection-dates", medicationUid, targetDb],
    enabled: medicationUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicationUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getInjectionDates(medicationUid, targetDb);
    },
  });
};

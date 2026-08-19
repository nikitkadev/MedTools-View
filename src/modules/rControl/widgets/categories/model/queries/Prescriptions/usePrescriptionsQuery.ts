import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { getPrescriptions } from "../../../api/Prescriptions/getPrescriptions";

export const usePrescriptionsQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "prescriptions", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getPrescriptions(medicalCaseUid, targetDb);
    },
  });
};

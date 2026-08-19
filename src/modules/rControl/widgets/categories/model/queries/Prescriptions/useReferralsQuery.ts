import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getReferrals } from "../../../api/Prescriptions/getReferrals";

export const useReferralsQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "referrals", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getReferrals(medicalCaseUid, targetDb);
    },
  });
};

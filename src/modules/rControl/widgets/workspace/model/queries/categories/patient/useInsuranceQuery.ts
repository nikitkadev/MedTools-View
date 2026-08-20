import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getInsurance } from "../../../../api/categories/patient/getInsurance";

export const useInsuranceQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "insurance", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getInsurance(medicalCaseUid, targetDb);
    },
  });
};

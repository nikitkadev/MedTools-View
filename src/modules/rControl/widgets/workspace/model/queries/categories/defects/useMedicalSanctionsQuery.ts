import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { useQuery } from "@tanstack/react-query";
import { getMedicalSanctions } from "../../../../api/categories/defects/getMedicalSanctions";

export const useMedicalSanctionsQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "medical-sanctions", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getMedicalSanctions(medicalCaseUid, targetDb);
    },
  });
};

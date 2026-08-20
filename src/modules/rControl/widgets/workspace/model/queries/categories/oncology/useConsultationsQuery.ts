import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getConsultations } from "../../../../api/categories/oncology/getConsultations";

export const useConsultationsQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "consultations", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getConsultations(medicalCaseUid, targetDb);
    },
  });
};

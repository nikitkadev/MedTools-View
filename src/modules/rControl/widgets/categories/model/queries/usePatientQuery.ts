import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import { getPatient } from "../../api/getPatient";

export const usePatientQuery = (
  medicalCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "patient", medicalCaseUid, targetDb],
    enabled: medicalCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (medicalCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getPatient(medicalCaseUid, targetDb);
    },
  });
};

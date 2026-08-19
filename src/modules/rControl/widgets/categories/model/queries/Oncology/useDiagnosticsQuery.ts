import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { getDiagnostics } from "../../../api/Oncology/getDiagnostics";

export const useDiagnosticsQuery = (
  oncologyCaseUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "diagnostics", oncologyCaseUid, targetDb],
    enabled: oncologyCaseUid !== null && targetDb !== null,
    queryFn: () => {
      if (oncologyCaseUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getDiagnostics(oncologyCaseUid, targetDb);
    },
  });
};

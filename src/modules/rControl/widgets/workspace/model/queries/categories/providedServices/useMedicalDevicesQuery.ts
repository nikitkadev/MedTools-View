import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";
import { getMedicalDevices } from "../../../../api/categories/providedServices/getMedicalDevices";
import { useQuery } from "@tanstack/react-query";

export const useMedicalDevicesQuery = (
  providedServiceUid: number | null,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: ["r-control", "medical-devices", providedServiceUid, targetDb],
    enabled: providedServiceUid !== null && targetDb !== null,
    queryFn: () => {
      if (providedServiceUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getMedicalDevices(providedServiceUid, targetDb);
    },
  });
};

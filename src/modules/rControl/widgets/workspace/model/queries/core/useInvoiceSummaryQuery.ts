import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import { getInvoiceSummary } from "../../../api/core/getInvoiceSummary";

export const useInvoiceSummaryQuery = (
  invoiceUid: number | null,
  targetDb: TargetDbType | null,
) => {
  const isReady = invoiceUid !== null && targetDb !== null;

  return useQuery({
    queryKey: ["r-control", "invoice-summary", invoiceUid, targetDb],
    enabled: isReady,
    queryFn: () => {
      if (invoiceUid === null || targetDb === null) {
        throw new Error("Невалидные параметры запроса");
      }

      return getInvoiceSummary(invoiceUid, targetDb);
    },
  });
};

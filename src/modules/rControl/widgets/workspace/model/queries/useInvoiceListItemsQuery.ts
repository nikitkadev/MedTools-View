import { useQuery } from "@tanstack/react-query";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import { getInvoices } from "../../api/getInvoices";

export const useInvoiceListItemsQuery = (
  medicalOrganizationCode: string | null,
  year: number | null,
  month: number | null,
  page: number,
  pageSize: number,
  targetDb: TargetDbType | null,
) => {
  return useQuery({
    queryKey: [
      "r-control",
      "invoice-list-items",
      medicalOrganizationCode,
      year,
      month,
      page,
      pageSize,
      targetDb,
    ],
    queryFn: () =>
      getInvoices(
        medicalOrganizationCode,
        year,
        month,
        page,
        pageSize,
        targetDb,
      ),
      enabled: month !== null && targetDb !== null
  });
};

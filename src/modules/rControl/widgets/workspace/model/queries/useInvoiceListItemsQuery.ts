import { useQuery } from "@tanstack/react-query";
import { getInvoiceListItems } from "../../api/getInvoiceListItems";
import type { InvoiceListItemsQueryParams } from "./getInvoiceListItems.query.params";

export const useInvoiceListItemsQuery = (
  params: InvoiceListItemsQueryParams,
) => {
  return useQuery({
    queryKey: ["r-control", "invoice-list-items", params],
    queryFn: () => {
      if (
        params.medicalOrganizationCode === null ||
        params.year === null ||
        params.month === null ||
        params.targetDb === null
      ) {
        throw new Error("Неккоректные параметры запроса");
      }

      return getInvoiceListItems({
        medicalOrganizationCode: params.medicalOrganizationCode,
        year: params.year,
        month: params.month,
        page: params.page,
        pageSize: params.pageSize,
        targetDb: params.targetDb,
      });
    },
    enabled: params.month !== null && params.targetDb !== null,
  });
};

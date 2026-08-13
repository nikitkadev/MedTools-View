import { useQuery } from "@tanstack/react-query";
import { getInvoiceListItems } from "../../api/getInvoiceListItems";
import type { InvoiceListItemsQueryParams } from "../../api/getInvoiceListItems.params";

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

      return getInvoiceListItems(params);
    },
    enabled: params.month !== null && params.targetDb !== null,
  });
};

import { useQuery } from "@tanstack/react-query";
import { getCompletedCaseListItems } from "../../api/getCompletedCaseListItems";
import type { CompletedCaseListItemsQueryParams } from "./getCompletedCaseListItemsQuery";

export const useCompletedCaseListItemsQuery = (
  params: CompletedCaseListItemsQueryParams,
) => {
  return useQuery({
    queryKey: ["r-control", "completed-cases", params],
    queryFn: () => {
      if (params.invoiceUid === null || params.targetDb === null) {
        throw new Error("Неккоректные параметры запроса");
      }

      return getCompletedCaseListItems({
        invoiceUid: params.invoiceUid,
        page: params.page,
        pageSize: params.pageSize,
        targetDb: params.targetDb,
      });
    },
    enabled: params.invoiceUid !== null && params.targetDb !== null,
  });
};

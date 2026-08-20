import type { CompletedCaseListItemsQueryParams } from "./getCompletedCaseListItems.query.params";
import { useQuery } from "@tanstack/react-query";
import { getCompletedCaseListItems } from "../../../api/core/getCompletedCaseListItems";

export const useCompletedCaseListItemsQuery = (
  params: CompletedCaseListItemsQueryParams,
) => {
  const isReady = params.invoiceUid !== null && params.targetDb !== null;

  return useQuery({
    queryKey: ["r-control", "completed-cases", params],
    enabled: isReady,
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
  });
};

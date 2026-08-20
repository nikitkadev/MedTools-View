import type { GetCompletedCaseListItemsResult } from "../../model/types/core/results/GetCompletedCaseListItemsResult";
import type { CompletedCaseListItemsAPIParams } from "../../model/types/core/params/CompletedCaseListItemsRequest";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import apiClient from "../../../../../../app/providers/apiClient";

export const getCompletedCaseListItems = async (
  params: CompletedCaseListItemsAPIParams,
): Promise<GetCompletedCaseListItemsResult> => {
  const response = await apiClient.get<
    ResultResponse<GetCompletedCaseListItemsResult>
  >(`/rcontrol/invoices/${params.invoiceUid}/completed-cases`, {
    params: {
      page: params.page + 1,
      pageSize: params.pageSize,
      targetDb: params.targetDb,
    },
  });

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value) {
    throw new Error("Сервер не смог вернуть данные");
  }

  return response.data.value;
};

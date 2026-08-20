import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { GetInvoiceListItemsResult } from "../../model/types/core/results/GetInvoiceListItemsResult";
import type { InvoiceListItemsAPIParams } from "../../model/types/core/params/InvoiceListItemsRequest";
import apiClient from "../../../../../../app/providers/apiClient";

export const getInvoiceListItems = async (
  params: InvoiceListItemsAPIParams,
): Promise<GetInvoiceListItemsResult> => {
  const response = await apiClient.get<
    ResultResponse<GetInvoiceListItemsResult>
  >("/rcontrol/invoices", {
    params: {
      medicalOrganizationCode: params.medicalOrganizationCode,
      year: params.year,
      month: params.month,
      page: params.page + 1,
      pageSize: params.pageSize,
      targetDb: params.targetDb,
    },
  });

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value) {
    throw new Error("null-ex");
  }

  return response.data.value;
};

import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import type {
  GetInvoiceSummaryResult,
  InvoiceSummaryDto,
} from "../../model/types/core/results/GetInvoiceSummaryResult";

export const getInvoiceSummary = async (
  invoiceUid: number,
  targetDb: TargetDbType,
): Promise<InvoiceSummaryDto> => {
  const response = await apiClient.get<ResultResponse<GetInvoiceSummaryResult>>(
    `/rcontrol/invoices/${invoiceUid}/summary`,
    {
      params: {
        targetDb: targetDb,
      },
    },
  );

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value) {
    throw new Error("null-ex");
  }

  return response.data.value.invoiceSummary;
};

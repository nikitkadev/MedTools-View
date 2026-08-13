import apiClient from "../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../shared/types/TargetDbType";
import type { GetInvoiceListItemsResult } from "../model/types/GetInvoiceListItemsResult";

export const getInvoices = async (
  medicalOrganizationCode: string | null,
  year: number | null,
  month: number | null,
  page: number,
  pageSize: number,
  targetDb: TargetDbType | null,
): Promise<GetInvoiceListItemsResult> => {
  const response = await apiClient.get<
    ResultResponse<GetInvoiceListItemsResult>
  >("/rcontrol/invoices", {
    params: {
      medicalOrganizationCode: medicalOrganizationCode,
      year: year,
      month: month,
      page: page + 1,
      pageSize: pageSize,
      targetDb: targetDb,
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

import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";

export interface InvoiceListItemsAPIParams {
  medicalOrganizationCode: string;
  year: number;
  month: number;
  page: number;
  pageSize: number;
  targetDb: TargetDbType;
}

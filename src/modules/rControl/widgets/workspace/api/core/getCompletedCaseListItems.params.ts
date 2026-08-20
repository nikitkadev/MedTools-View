import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";

export interface CompletedCaseListItemsAPIParams {
  invoiceUid: number;
  page: number;
  pageSize: number;
  targetDb: TargetDbType;
}

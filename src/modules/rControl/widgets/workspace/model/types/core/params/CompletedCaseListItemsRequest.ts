import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";

export interface CompletedCaseListItemsRequest {
  invoiceUid: number;
  page: number;
  pageSize: number;
  targetDb: TargetDbType;
}

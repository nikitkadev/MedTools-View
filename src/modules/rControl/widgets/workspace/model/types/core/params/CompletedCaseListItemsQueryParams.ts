import type { TargetDbType } from "../../../../../../../../shared/types/TargetDbType";

export interface CompletedCaseListItemsQueryParams {
  invoiceUid: number | null;
  page: number;
  pageSize: number;
  targetDb: TargetDbType | null;
}

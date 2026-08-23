import type { DataState } from "../../../../../../../../shared/types/DataState";
import type { PaginationState } from "../../../../../../../../shared/types/PaginationState";
import { AppTablePagination } from "../../../../../../../../shared/ui/AppTablePagination/AppTablePagination";
import { SearchInput } from "../../../../../../../../shared/ui/SearchInput/SearchInput";
import { StatusBadge } from "../../../../../../../../shared/ui/StatusBadge/StatusBadge";
import styles from "./styles.module.scss";

interface CompletedCasesTableHeaderProps {
  totalCount: number;
  state: DataState;
  pagination: PaginationState;
  onRowsPerPageChange: (
    _event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onPageChange: (
    _event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  isLoading: boolean;
  disabled: boolean;
}

export const CompletedCasesTableHeader = ({
  totalCount,
  state,
  pagination,
  onRowsPerPageChange,
  onPageChange,
  isLoading,
  disabled,
}: CompletedCasesTableHeaderProps) => {
  return (
    <header className={styles.completedCasesTableHeader}>
      <div className={styles.titleGroup}>
        <h2>Законченные случаи</h2>
        <StatusBadge state={state} />
      </div>
      <SearchInput />
      <AppTablePagination
        pagination={pagination}
        totalCount={totalCount}
        onRowsPerPageChange={onRowsPerPageChange}
        onPageChange={onPageChange}
        isLoading={isLoading}
        disabled={disabled}
      />
    </header>
  );
};

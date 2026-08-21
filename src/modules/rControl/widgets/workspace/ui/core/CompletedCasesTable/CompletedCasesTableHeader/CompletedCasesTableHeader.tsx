import type { PaginationState } from "../../../../../../../../shared/types/PaginationState";
import { AppTablePagination } from "../../../../../../../../shared/ui/AppTablePagination/AppTablePagination";
import { SearchInput } from "../../../../../../../../shared/ui/SearchInput/SearchInput";
import styles from "./styles.module.scss";

interface CompletedCasesTableHeaderProps {
  totalCount: number;
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
  pagination,
  onRowsPerPageChange,
  onPageChange,
  isLoading,
  disabled,
}: CompletedCasesTableHeaderProps) => {
  return (
    <header className={styles.completedCasesTableHeader}>
      <h2>Законченные случаи</h2>
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

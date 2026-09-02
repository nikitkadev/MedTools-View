import { useState } from "react";
import type { DataState } from "../../../../../../../../shared/types/DataState";
import type { PaginationState } from "../../../../../../../../shared/types/PaginationState";
import { AppTablePagination } from "../../../../../../../../shared/ui/AppTablePagination/AppTablePagination";
import { SearchInput } from "../../../../../../../../shared/ui/SearchInput/SearchInput";
import { StatusBadge } from "../../../../../../../../shared/ui/StatusBadge/StatusBadge";
import styles from "./styles.module.scss";
import { useWorkspaceStore } from "../../../../model/store/useWorkspaceStore";

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
  const [searchValue, setSearchValue] = useState("");
  const { setCompleteCasesSearch } = useWorkspaceStore();

  const onChangeSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const onSearch = () => {
    setCompleteCasesSearch(searchValue);
  };

  return (
    <header className={styles.completedCasesTableHeader}>
      <div className={styles.titleGroup}>
        <h2>Законченные случаи</h2>
        <StatusBadge state={state} />
      </div>
      <SearchInput
        searchValue={searchValue}
        onChange={onChangeSearchValue}
        onSearch={onSearch}
      />
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

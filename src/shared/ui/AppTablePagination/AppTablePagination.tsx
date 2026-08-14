import type { PaginationState } from "../../types/PaginationState";
import { TablePagination } from "@mui/material";

interface AppPaginationProps {
  pagination: PaginationState;
  totalCount: number;
  disabled: boolean;
  isLoading?: boolean;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement> | null,
    page: number,
  ) => void;
  onRowsPerPageChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
}

export const AppTablePagination = ({
  pagination,
  totalCount,
  disabled,
  isLoading,
  onPageChange,
  onRowsPerPageChange,
}: AppPaginationProps) => {
  return (
    <TablePagination
      disabled={disabled}
      component="div"
      count={totalCount}
      page={pagination.page}
      rowsPerPage={pagination.pageSize}
      onRowsPerPageChange={onRowsPerPageChange}
      onPageChange={onPageChange}
      labelRowsPerPage="Показывать по"
      labelDisplayedRows={({ from, to, count }) => {
        if (isLoading) {
          return "Ждем-с...";
        }

        return `${from} - ${to} из ${count}`;
      }}
      sx={{
        "& .MuiTablePagination-displayedRows": {
          fontFamily: "var(--inter)",
          fontSize: "var(--fs-body2)",
          color: "var(--text-primary)",
        },
        "& .MuiSelect-select": {
          fontFamily: "var(--inter)",
          fontSize: "var(--fs-body2)",
          color: "var(--text-primary)",
        },
        "& .MuiTablePagination-selectLabel": {
          fontFamily: "var(--inter)",
          fontSize: "var(--fs-body2)",
          color: "var(--text-primary)",
        },
      }}
    />
  );
};

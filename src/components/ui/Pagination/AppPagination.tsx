import type { PaginationState } from "../../../shared/types/PaginationState"
import { TablePagination } from '@mui/material';

interface AppPaginationProps {
    pagination: PaginationState;
    onPageChange: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
    onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export const AppPagination = ({
    pagination,
    onPageChange,
    onRowsPerPageChange }: AppPaginationProps) => {

    return (
        <TablePagination
            component='div'
            count={pagination.totalItems}
            page={pagination.page}
            rowsPerPage={pagination.pageSize}
            onRowsPerPageChange={onRowsPerPageChange}
            onPageChange={onPageChange}
            labelRowsPerPage="Показывать по"
            labelDisplayedRows={({ from, to, count }) => {
                return `${from} - ${to} из ${count}`
            }}
            sx={{
                '& .MuiTablePagination-displayedRows': {
                    fontFamily: 'var(--inter)',
                    fontSize: 'var(--fs-body2)',
                    color: 'var(--text-primary)',
                },
                '& .MuiSelect-select': {
                    fontFamily: 'var(--inter)',
                    fontSize: 'var(--fs-body2)',
                    color: 'var(--text-primary)',
                },
                '& .MuiTablePagination-selectLabel': {
                    fontFamily: 'var(--inter)',
                    fontSize: 'var(--fs-body2)',
                    color: 'var(--text-primary)',
                },

            }} />
    )
}
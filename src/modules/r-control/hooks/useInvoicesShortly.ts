import { useEffect } from "react";
import { useInvoicesStore } from "../stores/tables/useInvoicesStore";
import { useFiltersStore } from "../stores/filters/useFiltersStore";
import { rControlService } from "../api/rControlService";

export const useInvoicesShortly = () => {

    const { targetDb, selectedOrgCode, selectedYear, selectedMonth } = useFiltersStore();
    const { setInvoicesShortlies, pagination, setPagination } = useInvoicesStore();

    useEffect(() => {

        const fetchCases = async () => {

            if (!targetDb) {
                return;
            }

            const response = await rControlService.getInvoicesShortlyRecords(
                { dbType: targetDb },
                { currentPage: pagination.page + 1, pageSize: pagination.pageSize },
                { globalSearchString: '' },
                selectedOrgCode,
                selectedYear,
                selectedMonth
            );

            if (response.data.isFailure) {
                return;
            }

            setInvoicesShortlies(response.data.value.invoicesShortlies);
            setPagination({
                totalItems: response.data.value.totalRecords
            })
        }

        fetchCases();

    }, [selectedMonth, pagination.page, pagination.pageSize]);


}
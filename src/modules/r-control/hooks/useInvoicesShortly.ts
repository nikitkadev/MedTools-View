import { useEffect } from "react";
import { useInvoicesStore } from "../stores/tables/useInvoicesStore";
import { useFiltersStore } from "../stores/filters/useFiltersStore";
import { rControlService } from "../api/rControlService";

export const useInvoicesShortly = () => {

    const { targetDb, selectedOrgCode, selectedYear, selectedMonth } = useFiltersStore();
    const { setInvoicesShortlies, pagination } = useInvoicesStore();

    useEffect(() => {

        const fetchCases = async () => {

            if (!targetDb) {
                return;
            }

            const response = await rControlService.getInvoicesShortlyRecords(
                { dbType: targetDb },
                { currentPage: pagination.page, pageSize: pagination.pageSize },
                { globalSearchString: '' },
                selectedOrgCode,
                selectedYear,
                selectedMonth
            );

            if (response.data.isFailure) {
                return;
            }

            setInvoicesShortlies(response.data.value.invoicesShortlies);

        }

        fetchCases();

    }, [selectedMonth]);

    
}
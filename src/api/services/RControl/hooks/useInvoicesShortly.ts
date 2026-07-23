import { useEffect } from "react";
import { useRControlStore } from "../../../../components/pages/RControl/RControlStore"
import { rControlService } from "../rControlService";

export const useInvoicesShortly = () => {

    const {
        selectedMonth,
        setInvoicesShortlies,
        invoicesPagination,
        selectedOrgCode,
        selectedYear,
        dbType } = useRControlStore();

    useEffect(() => {

        const fetchCases = async () => {

            const response = await rControlService.getInvoicesShortlyRecords(
                { dbType: dbType },
                { currentPage: invoicesPagination.page, pageSize: invoicesPagination.pageSize },
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

    }, [selectedMonth])
}
import { useEffect } from "react"
import { useFinishedCasesStore } from "../../stores/tables/useFinishedCasesStore";
import { useInvoicesStore } from "../../stores/tables/useInvoicesStore";
import { useFiltersStore } from "../../stores/filters/useFiltersStore";
import { rControlService } from "../../api/rControlService";

export const useFinishedCases = () => {

    const { targetDb } = useFiltersStore();
    const { selectedRecord } = useInvoicesStore();
    const {
        pagination,
        setFinishedCases,
        setPagination } = useFinishedCasesStore();

    useEffect(() => {

        const fetchFinishedCases = async () => {

            if (!selectedRecord || !targetDb) {
                return;
            }

            const response = await rControlService.getFinishedCases(
                { dbType: targetDb },
                {
                    currentPage: pagination.page + 1,
                    pageSize: pagination.pageSize
                },
                {
                    globalSearchString: ""
                },
                selectedRecord?.invoiceUid
            );

            if (response.data.isFailure) {
                return;
            }

            setFinishedCases(response.data.value.finisedCases);
            setPagination({
                totalItems: response.data.value.totalRecords
            });
        }

        fetchFinishedCases();

    }, [
        pagination.page,
        pagination.pageSize,
        selectedRecord]);
}
import { useEffect } from "react";
import { useInvoicesStore } from "../stores/tables/useInvoicesStore";
import { useFiltersStore } from "../stores/filters/useFiltersStore";
import { rControlService } from "../api/rControlService";

export const useInvoiceSummary = () => {

    const { selectedRecord, setInvoiceSummary } = useInvoicesStore();
    const { targetDb } = useFiltersStore();

    useEffect(() => {

        const fetchInvoiceSummary = async () => {

            if (!targetDb) {
                return;
            }

            const response = await rControlService.getInvoiceSummary(targetDb, selectedRecord.invoiceUid);

            if (response.data.isFailure) {
                return;
            }

            setInvoiceSummary(response.data.value);
        };

        fetchInvoiceSummary();

    }, [selectedRecord]);

}
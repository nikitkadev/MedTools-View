import { useEffect } from "react"
import { useDictionariesStore } from "../stores/dictionaries/useDictionariesStore";
import { useFiltersStore } from "../stores/filters/useFiltersStore";
import { rControlService } from "../api/rControlService";

export const useBillingPeriods = () => {

    const { targetDb, selectedOrgCode } = useFiltersStore();
    const { setPeriods } = useDictionariesStore();

    useEffect(() => {

        const fetchPeriods = async () => {

            if (!targetDb) {
                return;
            }

            const response = await rControlService.getBillingPeriods(targetDb, selectedOrgCode);

            if (response.data.isFailure) {
                return;
            }

            setPeriods(response.data.value.billingPeriods);
        }

        fetchPeriods();

    }, [selectedOrgCode]);
}
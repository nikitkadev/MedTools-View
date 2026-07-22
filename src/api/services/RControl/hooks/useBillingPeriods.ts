import { useEffect } from "react"
import { rControlService } from "../rControlService";
import { useRControlStore } from "../../../../components/pages/RControl/RControlStore";

export const useBillingPeriods = () => {

    const {
        dbType,
        selectedOrgCode,
        setBillingPeriods
    } = useRControlStore();

    useEffect(() => {

        const fetchPeriods = async () => {
            const response = await rControlService.getBillingPeriods(dbType, selectedOrgCode);

            if (response.data.isFailure) {
                return;
            }

            setBillingPeriods(response.data.value.billingPeriods);
        }

        fetchPeriods();

    }, [selectedOrgCode]);
}
import type { MedOrganizationsQueryResult } from "./responses/MedOrganizationsQueryResult";
import type { ResultResponse } from "./responses/ResultResponse";
import type { BillingPeriodsQueryResult } from "./responses/BillingPeriodsQueryResult";
import apiClient from "../../aliClient"

export const rControlService = {

    getOrganizations: (targetDbType: string) => {
        return apiClient.get<ResultResponse<MedOrganizationsQueryResult>>("/rcontrol/med-organizations", {
            params: {
                targetDbType: targetDbType
            }
        });
    },

    getBillingPeriods: (targetDbType: string, orgCode: string) => {
        return apiClient.get<ResultResponse<BillingPeriodsQueryResult>>("/rcontrol/billing-periods", {
            params: {
                targetDbType: targetDbType,
                orgCode: orgCode
            }
        });
    }

}
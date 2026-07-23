import type { MedOrganizationsQueryResult } from "./responses/MedOrganizationsQueryResult";
import type { ResultResponse } from "./responses/ResultResponse";
import type { BillingPeriodsQueryResult } from "./responses/BillingPeriodsQueryResult";
import apiClient from "../../aliClient"
import type { InvoicesShortlyQueryResult } from "./responses/InvoicesShortlyQueryResult";

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
    },

    getInvoicesShortlyRecords: (
        dbType: { dbType: string },
        pagination: {
            currentPage: number,
            pageSize: number
        },
        search: { globalSearchString: string },
        orgCode: string,
        year: string,
        month: string) => {

        return apiClient.post<ResultResponse<InvoicesShortlyQueryResult>>("/rcontrol/invoices-shortly", {
            pagination,
            dbType,
            search,
            orgCode,
            year,
            month
        });

    }

}
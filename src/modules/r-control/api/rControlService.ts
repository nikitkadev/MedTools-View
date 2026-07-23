import type { MedOrganizationsQueryResult } from "../types/MedOrganizationsQueryResult";
import type { ResultResponse } from "../../../shared/types/ResultResponse";
import type { BillingPeriodsQueryResult } from "../types/BillingPeriodsQueryResult";
import apiClient from "../../../shared/api/aliClient"
import type { InvoicesShortlyQueryResult } from "../types/InvoicesShortlyQueryResult";
import type { TargetDbType } from "../../../common/types/TargetDbType";

export const rControlService = {

    getOrganizations: (targetDbType: TargetDbType) => {
        return apiClient.get<ResultResponse<MedOrganizationsQueryResult>>("/rcontrol/med-organizations", {
            params: {
                targetDbType: targetDbType
            }
        });
    },

    getBillingPeriods: (targetDbType: TargetDbType, orgCode: string) => {
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
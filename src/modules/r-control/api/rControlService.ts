import type { MedOrganizationsQueryResult } from "../types/MedOrganizationsQueryResult";
import type { ResultResponse } from "../../../shared/types/ResultResponse";
import type { BillingPeriodsQueryResult } from "../types/BillingPeriodsQueryResult";
import type { InvoicesShortlyQueryResult } from "../types/InvoicesShortlyQueryResult";
import type { TargetDbType } from "../../../common/types/TargetDbType";
import type { InvoiceSummaryQueryResult } from "../types/InvoiceSummaryQueryResult";
import type { FinishedCasesQueryResult } from "../types/FinishedCasesQueryResult";
import apiClient from "../../../shared/api/aliClient"
import type { CasesQueryResult } from "../types/CasesQueryResult";

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

    },

    getInvoiceSummary: (targetDb: TargetDbType, schetUid: number) => {
        return apiClient.get<ResultResponse<InvoiceSummaryQueryResult>>("/rcontrol/invoice-summary", {
            params: {
                schetUid: schetUid,
                targetDb: targetDb
            }
        });
    },

    getFinishedCases: (
        dbType: { dbType: string },
        pagination: {
            currentPage: number,
            pageSize: number
        },
        search: { globalSearchString: string },
        schetUid: number
    ) => {
        return apiClient.post<ResultResponse<FinishedCasesQueryResult>>("/rcontrol/finished-cases", {
            pagination,
            dbType,
            search,
            schetUid
        });
    },

    getCases: (targetDb: TargetDbType, zSlUid: number) => {
        return apiClient.get<ResultResponse<CasesQueryResult>>("/rcontrol/cases", ({
            params: {
                zSlUid: zSlUid,
                targetDb: targetDb
            }
        }))
    }

}
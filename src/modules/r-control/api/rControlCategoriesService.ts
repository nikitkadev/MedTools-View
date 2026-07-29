import { type TargetDbType } from '../../../common/types/TargetDbType';
import type { ResultResponse } from '../../../shared/types/ResultResponse';
import type { PatientSmoQueryResult } from '../types/categories/PatientSmo/PatientSmoQueryResult';
import type { CasesQueryResult } from '../types/categories/AllCases/CasesQueryResult';
import type { OncSluchQueryResult } from '../types/categories/Oncology/OncSluchQueryResult';
import type { ConsultationQueryResult } from '../types/categories/Oncology/ConsultationQueryResult';
import apiClient from '../../../shared/api/aliClient';
import type { OncSluchDetailedQueryResult } from '../types/categories/Oncology/OncSluchDetailedQueryResult';

export const rControlCategoriesService = {

    getPatientSmoData: (sluchUid: number, targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<PatientSmoQueryResult>>('/rcontrol/categories/patient-smo', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));

    },

    getCasesData: (sluchUid: number, targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<CasesQueryResult>>('/rcontrol/categories/cases', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));

    },

    getOnkSluchData: (sluchUid: number, targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<OncSluchQueryResult>>('/rcontrol/categories/onkology/onk-sluch', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }

        }));
    },

    getConsultations: (sluchUid: number, targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<ConsultationQueryResult>>('/rcontrol/categories/onkology/consultations', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    },

    getOncSluchDetailedInformation: (onkSluchUid: number, targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<OncSluchDetailedQueryResult>>('/rcontrol/categories/onkology/onk-sluch-detailed', ({
            params: {
                onkSluchUid: onkSluchUid,
                targetDb: targetDb
            }
        }));

    }

}
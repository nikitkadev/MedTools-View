import { type TargetDbType } from '../../../common/types/TargetDbType';
import type { ResultResponse } from '../../../shared/types/ResultResponse';
import type { PatientSmoQueryResult } from '../types/categories/PatientSmo/PatientSmoQueryResult';
import type { CasesQueryResult } from '../types/categories/AllCases/CasesQueryResult';
import type { OnkSluchQueryResult } from '../types/categories/Onkology/OnkSluchQueryResult';
import type { ConsultationQueryResult } from '../types/categories/Onkology/ConsultationQueryResult';
import apiClient from '../../../shared/api/aliClient';

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

        return apiClient.get<ResultResponse<OnkSluchQueryResult>>('/rcontrol/categories/onkology/onk-sluch', ({
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
    }

}
import { type TargetDbType } from '../../../common/types/TargetDbType';
import type { ResultResponse } from '../../../shared/types/ResultResponse';
import type { PatientSmoQueryResult } from '../types/categories/PatientSmoQueryResult';
import apiClient from '../../../shared/api/aliClient';
import type { CasesQueryResult } from '../types/categories/CasesQueryResult';

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
        }))
    }

}
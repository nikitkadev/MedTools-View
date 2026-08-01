import { type TargetDbType } from '../../../common/types/TargetDbType';
import type { ResultResponse } from '../../../shared/types/ResultResponse';
import type { CasesQueryResult } from '../types/categories/AllCases/CasesQueryResult';
import type { OncSluchQueryResult } from '../types/categories/Oncology/OncSluchQueryResult';
import type { PatientSmoQueryResult } from '../types/categories/PatientSmo/PatientSmoQueryResult';
import type { MedicamentsQueryResult } from '../types/categories/Oncology/MedicamentsQueryResult';
import type { ConsultationQueryResult } from '../types/categories/Oncology/ConsultationQueryResult';
import type { DetailedOncSluchQueryResult } from '../types/categories/Oncology/DetailedOncSluchQueryResult';
import type { InjectionsQueryResult } from '../types/categories/Oncology/InjectionsQueryResult';
import type { ProvidedServicesQueryResult } from '../types/categories/ProvidedServices/ProvidedServicesQueryResult';
import type { MedDevQueryResult } from '../types/categories/ProvidedServices/MedDevQueryResult';
import type { KsgVmpCardsDataQueryResult } from '../types/categories/KsgKmp/KsgVmpCardsDataQueryResult';
import apiClient from '../../../shared/api/aliClient';
import type { KsgVmpTablesDataQueryResult } from '../types/categories/KsgKmp/KsgVmpTablesDataQueryResult';
import type { NazNaprQueryResult } from '../types/categories/NazNapr/NazNaprQueryResult';
import type { DefectsSanksQueryResult } from '../types/categories/Defects/DefectsSanksQueryResult';

export const rControlCategoriesService = {

    getPatientSmoData: (
        sluchUid: number,
        targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<PatientSmoQueryResult>>('/rcontrol/categories/patient-smo', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    },

    getCasesData: (
        sluchUid: number,
        targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<CasesQueryResult>>('/rcontrol/categories/cases', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    },

    getOnkSluchData: (
        sluchUid: number,
        targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<OncSluchQueryResult>>('/rcontrol/categories/oncology/onc-sluch', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    },

    getConsultations: (
        sluchUid: number,
        targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<ConsultationQueryResult>>('/rcontrol/categories/oncology/consultations', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    },

    getOncSluchDetailedInformation: (
        oncSluchUid: number,
        targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<DetailedOncSluchQueryResult>>('/rcontrol/categories/oncology/onc-sluch-detailed', ({
            params: {
                oncSluchUid: oncSluchUid,
                targetDb: targetDb
            }
        }));
    },

    getMedicaments: (
        oncServiceUid: number,
        targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<MedicamentsQueryResult>>('/rcontrol/categories/oncology/medicaments', ({
            params: {
                oncServiceUid: oncServiceUid,
                targetDb: targetDb
            }
        }));
    },

    getInjections: (
        medicamentUid: number,
        targetDb: TargetDbType) => {

        return apiClient.get<ResultResponse<InjectionsQueryResult>>('/rcontrol/categories/oncology/injections', ({
            params: {
                medicamentUid: medicamentUid,
                targetDb: targetDb
            }
        }))
    },

    getProvidedServices: (
        sluchUid: number,
        targetDb: TargetDbType
    ) => {

        return apiClient.get<ResultResponse<ProvidedServicesQueryResult>>('/rcontrol/categories/provided-services/services', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));

    },

    getMedDevs: (
        providedServiceUid: number,
        targetDb: TargetDbType
    ) => {

        return apiClient.get<ResultResponse<MedDevQueryResult>>('/rcontrol/categories/provided-services/med-devs', ({
            params: {
                providedServiceUid: providedServiceUid,
                targetDb: targetDb
            }
        }));
    },

    getKsgVmpCardsData: (
        sluchUid: number,
        targetDb: TargetDbType
    ) => {

        return apiClient.get<ResultResponse<KsgVmpCardsDataQueryResult>>('/rcontrol/categories/ksg-vmp/cards-data', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    },

    getKsgVmpTablesData: (
        ksgKpgUid: number,
        targetDb: TargetDbType
    ) => {

        return apiClient.get<ResultResponse<KsgVmpTablesDataQueryResult>>('/rcontrol/categories/ksg-vmp/tabes-data', ({
            params: {
                ksgKpgUid: ksgKpgUid,
                targetDb: targetDb
            }
        }))
    },

    getNazNaprCategoryData: (
        sluchUid: number,
        targetDb: TargetDbType
    ) => {

        return apiClient.get<ResultResponse<NazNaprQueryResult>>('/rcontrol/categories/naz-napr/purposes', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    },

    getDefectsSanksCategoryData: (
        sluchUid: number,
        targetDb: TargetDbType
    ) => {

        return apiClient.get<ResultResponse<DefectsSanksQueryResult>>('//rcontrol/categories/defects-sanks', ({
            params: {
                sluchUid: sluchUid,
                targetDb: targetDb
            }
        }));
    }

}
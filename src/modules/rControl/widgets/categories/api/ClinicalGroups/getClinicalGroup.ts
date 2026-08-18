import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import type {
  ClinicalGroupDto,
  GetClinicalGroupResult,
} from "../../model/types/ClinicalGroups/GetClinicalGroupResult";

export const getClinicalGroup = async (
  medicalCaseUid: number,
  targetDb: TargetDbType,
): Promise<ClinicalGroupDto> => {
  const response = await apiClient.get<ResultResponse<GetClinicalGroupResult>>(
    `/rcontrol/medical-cases/${medicalCaseUid}/clinical-group`,
    {
      params: {
        targetDb: targetDb,
      },
    },
  );

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value) {
    throw new Error("Сервер прислал невалидный ответ");
  }

  return response.data.value.clinicalGroup;
};

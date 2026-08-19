import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import type {
  TreatmentComplexityCoefficientDto,
  GetTreatmentComplexityCoefficientsResult,
} from "../../model/types/ClinicalGroups/GetTreatmentComplexityCoefficientsResult";

export const getTreatmentComplexityCoefficients = async (
  clinicalGroupUid: number,
  targetDb: TargetDbType,
): Promise<TreatmentComplexityCoefficientDto[]> => {
  const response = await apiClient.get<
    ResultResponse<GetTreatmentComplexityCoefficientsResult>
  >(
    `/rcontrol/clinical-groups/${clinicalGroupUid}/treatment-complexity-coefficients`,
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

  return response.data.value.treatmentComplexityCoefficients;
};

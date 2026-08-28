import apiClient from "../../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import type {
  ClassificationCriterionDto,
  GetClassificationCriteriaResult,
} from "../../../model/types/categories/clinicalGroup/GetClassificationCriteriaResult";

export const getClassificationCriteria = async (
  clinicalGroupUid: number,
  targetDb: TargetDbType,
): Promise<ClassificationCriterionDto[]> => {
  const response = await apiClient.get<
    ResultResponse<GetClassificationCriteriaResult>
  >(`/rcontrol/clinical-groups/${clinicalGroupUid}/classification-criteria`, {
    params: {
      targetDb: targetDb,
    },
  });

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value) {
    throw new Error("Сервер прислал невалидный ответ");
  }

  return response.data.value.classificationCriteria;
};

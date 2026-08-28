import type {
  GetOncologyCaseResult,
  OncologyCaseDto,
} from "../../../model/types/categories/oncology/GetOncologyCaseResult";
import type { ResultResponse } from "../../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import apiClient from "../../../../../../../app/providers/apiClient";

export const getOncologyCase = async (
  medicalCaseUid: number,
  targetDb: TargetDbType,
): Promise<OncologyCaseDto> => {
  const response = await apiClient.get<ResultResponse<GetOncologyCaseResult>>(
    `/rcontrol/medical-cases/${medicalCaseUid}/oncology-case`,
    {
      params: {
        targetDb: targetDb,
      },
    },
  );

  if (response.data.isFailure) {
    throw new Error(response.data.clientMessage);
  }

  if (!response.data.value) {
    throw new Error("Сервер прислал невалидный ответ");
  }

  return response.data.value.oncologyCase;
};

import type {
  CompletedCaseDetailsDto,
  GetCompletedCaseDetailsResult,
} from "../../../model/types/categories/medicalCases/GetCompletedCaseDetailsResult";
import type { ResultResponse } from "../../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import apiClient from "../../../../../../../app/providers/apiClient";

export const getCompletedCaseDetails = async (
  completedCaseUid: number,
  targetDb: TargetDbType,
): Promise<CompletedCaseDetailsDto> => {
  const response = await apiClient.get<
    ResultResponse<GetCompletedCaseDetailsResult>
  >(`/rcontrol/completed-cases/${completedCaseUid}`, {
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

  return response.data.value.completedCaseDetails;
};

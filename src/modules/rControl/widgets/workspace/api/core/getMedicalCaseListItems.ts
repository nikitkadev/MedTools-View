import type { GetMedicalCaseListItemsResult, MedicalCaseDto } from "../../model/types/core/GetMedicalCaseListItemsResult";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import apiClient from "../../../../../../app/providers/apiClient";

export const getMedicalCaseListItems = async (
  completedCaseUid: number,
  targetDb: TargetDbType,
): Promise<MedicalCaseDto[]> => {
  const response = await apiClient.get<
    ResultResponse<GetMedicalCaseListItemsResult>
  >(`/rcontrol/completed-cases/${completedCaseUid}/medical-cases`, {
    params: {
      targetDb: targetDb,
    },
  });

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value) {
    throw new Error("Сервер вернул невалидный результат");
  }

  return response.data.value.medicalCases;
};

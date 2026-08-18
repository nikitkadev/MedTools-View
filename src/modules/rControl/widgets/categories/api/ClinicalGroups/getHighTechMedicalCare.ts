import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import type { HighTechMedicalCareDto } from "../../model/types/ClinicalGroups/GetHighTechMedicalCareResult";
import type { GetHighTechMedicalCareResult } from "../../model/types/ClinicalGroups/GetHighTechMedicalCareResult";

export const getHighTechMedicalCare = async (
  medicalCaseUid: number,
  targetDb: TargetDbType,
): Promise<HighTechMedicalCareDto> => {
  const response = await apiClient.get<
    ResultResponse<GetHighTechMedicalCareResult>
  >(`/rcontrol/medical-cases/${medicalCaseUid}/high-tech-medical-care`, {
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

  return response.data.value.highTechMedicalCare;
};

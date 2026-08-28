import apiClient from "../../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import type {
  GetPrescriptionsResult,
  PrescriptionDto,
} from "../../../model/types/categories/prescriptions/GetPrescriptionsResult";

export const getPrescriptions = async (
  medicalCaseUid: number,
  targetDb: TargetDbType,
): Promise<PrescriptionDto[]> => {
  const response = await apiClient.get<ResultResponse<GetPrescriptionsResult>>(
    `/rcontrol/medical-cases/${medicalCaseUid}/prescriptions`,
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

  return response.data.value.prescriptions;
};

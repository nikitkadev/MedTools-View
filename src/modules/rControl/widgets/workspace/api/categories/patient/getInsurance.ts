import apiClient from "../../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import type {
  GetInsuranceResult,
  InsuranceDto,
} from "../../../model/types/categories/patient/GetInsuranceResult";
export const getInsurance = async (
  medicalCaseUid: number,
  targetDb: TargetDbType,
): Promise<InsuranceDto> => {
  const response = await apiClient.get<ResultResponse<GetInsuranceResult>>(
    `/rcontrol/medical-cases/${medicalCaseUid}/insurance`,
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
    throw new Error("Сервер вернул невалидный ответ");
  }

  return response.data.value.insurance;
};

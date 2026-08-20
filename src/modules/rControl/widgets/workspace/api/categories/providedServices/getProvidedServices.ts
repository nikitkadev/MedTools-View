import apiClient from "../../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../../shared/types/TargetDbType";
import type {
  GetProvidedServicesResult,
  ProvidedSerivceDto,
} from "../../../model/types/categories/providedServices/GetProvidedServicesResult";

export const getProvidedServices = async (
  medicalCaseUid: number,
  targetDb: TargetDbType,
): Promise<ProvidedSerivceDto[]> => {
  const response = await apiClient.get<
    ResultResponse<GetProvidedServicesResult>
  >(`/rcontrol/medical-cases/${medicalCaseUid}/provided-services`, {
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

  return response.data.value.providedServices;
};

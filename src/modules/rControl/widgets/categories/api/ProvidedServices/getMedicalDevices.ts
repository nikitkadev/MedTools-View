import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../../../shared/types/TargetDbType";
import type {
  GetMedicalDevicesResult,
  MedicalDeviceDto,
} from "../../model/types/ProvidedServices/GetMedicalDevicesResult";

export const getMedicalDevices = async (
  providedServiceUid: number,
  targetDb: TargetDbType,
): Promise<MedicalDeviceDto[]> => {
  const response = await apiClient.get<ResultResponse<GetMedicalDevicesResult>>(
    `/rcontrol/provided-services/${providedServiceUid}/medical-devices`,
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

  return response.data.value.medicalDevices;
};

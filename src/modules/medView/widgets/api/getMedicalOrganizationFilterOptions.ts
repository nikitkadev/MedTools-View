import apiClient from "../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../shared/types/ResultResponse";
import type { TargetDbType } from "../../../../shared/types/TargetDbType";
import type { FilterOption, Options } from "../model/types/FilterOptions";
import type { MedicalOrgsTargetSource } from "../model/types/MedicalOrgsTargetSource";

export const getMedicalOrganizationFilterOptions = async (
  endpoint: string,
  targetDb: TargetDbType,
  targetSource: MedicalOrgsTargetSource,
): Promise<FilterOption[]> => {
  const response = await apiClient.get<ResultResponse<Options>>(endpoint, {
    params: {
      targetDb: targetDb,
      medicalOrgsKeysFrom: targetSource,
    },
  });

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value?.options) {
    throw new Error("Отсутствуют параметры фильтрации");
  }

  return response.data.value.options;
};

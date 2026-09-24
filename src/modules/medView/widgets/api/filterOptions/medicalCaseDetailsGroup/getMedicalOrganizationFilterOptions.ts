import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { FilterOption, Options } from "../../../model/types/FilterOptions";
import type { MedicalOrgsTargetSource } from "../../../model/types/MedicalOrgsTargetSource";

export const getMedicalOrganizationFilterOptions = async (
  targetSource: MedicalOrgsTargetSource,
): Promise<FilterOption[]> => {
  const response = await apiClient.get<ResultResponse<Options>>(
    "/med-view/filter-options/medical-organizations",
    {
      params: {
        targetDb: "SMODB18",
        medicalOrgsKeysFrom: targetSource,
      },
    },
  );
  if (response.data.isFailure) {
    throw new Error("");
  }

  if (!response.data.value?.options) {
    throw new Error("");
  }

  return response.data.value.options;
};

import apiClient from "../../../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../../../shared/types/ResultResponse";
import type { FilterOption, Options } from "../../../model/types/FilterOptions";

export const getHospitalizationOutcomeFilterOptions = async (): Promise<
  FilterOption[]
> => {
  const response = await apiClient.get<ResultResponse<Options>>(
    "/med-view/filter-options/hospitalization-outcomes",
  );

  if (response.data.isFailure) {
    throw new Error("");
  }

  if (!response.data.value?.options) {
    throw new Error("");
  }

  return response.data.value.options;
};

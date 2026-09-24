import apiClient from "../../../../app/providers/apiClient";
import type { ResultResponse } from "../../../../shared/types/ResultResponse";
import type { Options, FilterOption } from "../model/types/FilterOptions";

export const getFilterOptions = async (
  endpoint: string,
): Promise<FilterOption[]> => {
  const response = await apiClient.get<ResultResponse<Options>>(endpoint);

  if (response.data.isFailure) {
    throw new Error(response.data.error);
  }

  if (!response.data.value?.options) {
    throw new Error("Отсутствуют параметры фильтрации");
  }

  return response.data.value.options;
};

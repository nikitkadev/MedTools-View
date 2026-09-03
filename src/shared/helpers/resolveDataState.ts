import type { DataState } from "../types/DataState";

interface ResolveDataStateParams {
  isEnabled: boolean;
  isLoading: boolean;
  isFetching?: boolean;
  isError: boolean;
  isSuccess: boolean;
  isEmpty: boolean;
}

export const resolveDataState = ({
  isEnabled,
  isLoading,
  isFetching,
  isError,
  isSuccess,
  isEmpty,
}: ResolveDataStateParams): DataState => {
  if (!isEnabled) return "waiting";
  if (isLoading) return "loading";
  if (isFetching) return "fetching";
  if (isError) return "error";
  if (isSuccess && isEmpty) return "empty";

  return "success";
};

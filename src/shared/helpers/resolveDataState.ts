import type { DataState } from "../types/DataState";

interface ResolveDataStateParams {
  isEnabled: boolean;
  isLoading: boolean;
  isError: boolean;
  isSuccess: boolean;
  isEmpty: boolean;
}

export const resolveDataState = ({
  isEnabled,
  isLoading,
  isError,
  isSuccess,
  isEmpty,
}: ResolveDataStateParams): DataState => {
  if (!isEnabled) return "waiting";
  if (isLoading) return "loading";
  if (isError) return "error";
  if (isSuccess && isEmpty) return "empty";

  return "success";
};

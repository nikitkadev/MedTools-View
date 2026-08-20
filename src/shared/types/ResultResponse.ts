export interface ResultResponse<T> {
  value?: T | null;
  isFailure: boolean;
  isSuccess: boolean;
  error: string;
  clientMessage: string;
}

export interface ResultResponse<T> {
    isSuccess: boolean;
    isFailure: boolean;
    error: string;

    value: T;
}
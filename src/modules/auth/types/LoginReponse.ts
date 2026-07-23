export interface LoginResponse {
    isSuccess: boolean,
    value: LoginResult
}

interface LoginResult {
    uid: number,
    accessToken: string;
    refreshToken: string;
    email: string;
    username: string;
    role: string;
}
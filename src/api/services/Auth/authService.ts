import apiClient from "../../aliClient"
import type { LoginResponse } from "./LoginReponse";

export const authService = {

    login: (email: string, password: string) => {

        return apiClient.post<LoginResponse>('/auth/login', {
            email,
            password
        });
        
    }

}
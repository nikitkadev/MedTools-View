import type { LoginResponse } from "./LoginReponse";
import apiClient from "../../aliClient"

export const authService = {

    login: (email: string, password: string) => {

        return apiClient.post<LoginResponse>('/auth/login', {
            email,
            password
        });
        
    }

}
import { create } from "zustand";

export interface AuthUser {
  uid: number;
  email: string;
  username: string;
  role: string;
}

interface AuthState {
  accessToken: string | null;
  user: AuthUser | null;
  isInitialized: boolean;

  setSession: (accessToken: string, user: AuthUser) => void;
  clearSession: () => void;
  setInitialized: (value: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  accessToken: null,
  user: null,
  isInitialized: false,

  setSession: (accessToken, user) =>
    set({
      accessToken: accessToken,
      user: user,
    }),

  clearSession: () =>
    set({
      accessToken: null,
      user: null,
    }),

  setInitialized: (value) =>
    set({
      isInitialized: value,
    }),
}));

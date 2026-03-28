'use client';

import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import type { AuthResponse, AuthTokens, User } from '@/types';

interface AuthState {
  user: User | null;
  tokens: AuthTokens | null;
  hydrated: boolean;
  setAuth: (payload: AuthResponse) => void;
  setUser: (user: User | null) => void;
  setTokensOnly: (tokens: AuthTokens | null) => void;
  clear: () => void;
  markHydrated: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      tokens: null,
      hydrated: false,
      setAuth: (payload) => {
        set({ user: payload.user, tokens: payload.tokens, hydrated: true });
      },
      setUser: (user) => {
        set({ user });
      },
      setTokensOnly: (tokens) => {
        set({ tokens, hydrated: true });
      },
      clear: () => {
        set({ user: null, tokens: null });
      },
      markHydrated: () => set({ hydrated: true }),
    }),
    {
      name: 'chatapp-auth',
      partialize: (state) => ({
        user: state.user,
        tokens: state.tokens,
      }),
      onRehydrateStorage: () => (state) => {
        state?.markHydrated();
      },
    },
  ),
);

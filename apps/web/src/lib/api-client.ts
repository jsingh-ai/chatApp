'use client';

import axios from 'axios';

import { useAuthStore } from '@/store/auth-store';
import type { AuthResponse } from '@/types';
import { getApiBaseUrl } from '@/lib/public-env';

const baseURL = getApiBaseUrl();

export const apiClient = axios.create({
  baseURL,
  withCredentials: false,
});

const refreshClient = axios.create({
  baseURL,
  withCredentials: false,
});

let refreshPromise: Promise<string | null> | null = null;

const unwrapResponseData = <T>(payload: { data: T } | T): T => {
  if (payload && typeof payload === 'object' && 'data' in payload) {
    return (payload as { data: T }).data;
  }
  return payload as T;
};

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().tokens?.accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url?.includes('/auth/login') &&
      !originalRequest.url?.includes('/auth/register')
    ) {
      originalRequest._retry = true;
      const newToken = await refreshAccessToken();
      if (newToken) {
        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiClient(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

async function refreshAccessToken() {
  if (refreshPromise) {
    return refreshPromise;
  }

  const store = useAuthStore.getState();
  const refreshToken = store.tokens?.refreshToken;

  if (!refreshToken) {
    store.clear();
    return null;
  }

  refreshPromise = refreshClient
    .post<{ data: AuthResponse } | AuthResponse>('/auth/refresh', {
      refreshToken,
    })
    .then((response) => {
      const auth = unwrapResponseData(response.data);
      store.setAuth(auth);
      return auth.tokens.accessToken;
    })
    .catch(() => {
      store.clear();
      return null;
    })
    .finally(() => {
      refreshPromise = null;
    });

  return refreshPromise;
}

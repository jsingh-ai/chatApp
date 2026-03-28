'use client';

const LOCAL_API_URL = 'http://localhost:4000/api';

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

const toAbsoluteUrl = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const normalized = trimTrailingSlash(value.trim());
  return normalized || null;
};

export const getApiBaseUrl = () => {
  const configuredUrl = toAbsoluteUrl(process.env.NEXT_PUBLIC_API_URL);
  if (configuredUrl) {
    return configuredUrl;
  }

  if (typeof window !== 'undefined') {
    return '/api';
  }

  return LOCAL_API_URL;
};

export const getWebsocketBaseUrl = () => {
  const configuredUrl = toAbsoluteUrl(process.env.NEXT_PUBLIC_WS_URL);
  if (configuredUrl) {
    return configuredUrl;
  }

  const apiBaseUrl = getApiBaseUrl();
  if (apiBaseUrl.startsWith('/')) {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return 'http://localhost:3000';
  }

  return apiBaseUrl.replace(/\/api\/?$/, '');
};

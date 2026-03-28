const LOCAL_API_URL = 'http://localhost:4000/api';
const LOCAL_APP_URL = 'http://localhost:3000';
const isProduction = process.env.NODE_ENV === 'production';

const trimTrailingSlash = (value: string) => value.replace(/\/+$/, '');

const toAbsoluteUrl = (value?: string | null) => {
  if (!value) {
    return null;
  }

  const normalized = trimTrailingSlash(value.trim());
  return normalized || null;
};

const requireProductionUrl = (name: string, value?: string | null) => {
  const configuredUrl = toAbsoluteUrl(value);
  if (configuredUrl) {
    return configuredUrl;
  }

  if (isProduction) {
    throw new Error(`${name} must be set in production`);
  }

  return null;
};

export const getAppBaseUrl = () =>
  requireProductionUrl('NEXT_PUBLIC_APP_URL', process.env.NEXT_PUBLIC_APP_URL) ??
  LOCAL_APP_URL;

export const getApiBaseUrl = () => {
  const configuredUrl = requireProductionUrl(
    'NEXT_PUBLIC_API_URL',
    process.env.NEXT_PUBLIC_API_URL,
  );
  if (configuredUrl) {
    return configuredUrl;
  }

  if (typeof window !== 'undefined') {
    return '/api';
  }

  return LOCAL_API_URL;
};

export const getWebsocketBaseUrl = () => {
  const configuredUrl = requireProductionUrl(
    'NEXT_PUBLIC_WS_URL',
    process.env.NEXT_PUBLIC_WS_URL,
  );
  if (configuredUrl) {
    return configuredUrl;
  }

  const apiBaseUrl = getApiBaseUrl();
  if (apiBaseUrl.startsWith('/')) {
    if (typeof window !== 'undefined') {
      return window.location.origin;
    }
    return LOCAL_APP_URL;
  }

  return apiBaseUrl.replace(/\/api\/?$/, '');
};

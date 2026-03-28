const LOCAL_FRONTEND_URL = 'http://localhost:3000';

const normalizeOrigin = (value: string) => value.trim().replace(/\/+$/, '');

const splitOrigins = (value?: string | null) =>
  (value ?? '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean)
    .map(normalizeOrigin);

export const getAllowedFrontendOrigins = () => {
  const origins = [
    ...splitOrigins(process.env.FRONTEND_URLS),
    ...splitOrigins(process.env.FRONTEND_URL),
  ];

  return origins.length ? Array.from(new Set(origins)) : [LOCAL_FRONTEND_URL];
};

export const isAllowedFrontendOrigin = (origin?: string | null) => {
  if (!origin) {
    return true;
  }

  return getAllowedFrontendOrigins().includes(normalizeOrigin(origin));
};

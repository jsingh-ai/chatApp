'use client';

import { useEffect } from 'react';

export const ServiceWorkerRegistrar = () => {
  useEffect(() => {
    if (
      process.env.NODE_ENV !== 'production' ||
      typeof window === 'undefined' ||
      !('serviceWorker' in navigator)
    ) {
      return;
    }

    if (
      window.location.protocol !== 'https:' &&
      window.location.hostname !== 'localhost'
    ) {
      return;
    }

    void navigator.serviceWorker.register('/sw.js');
  }, []);

  return null;
};

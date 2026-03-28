import type { MetadataRoute } from 'next';
import { getAppBaseUrl } from '@/lib/public-env';

const appUrl = getAppBaseUrl();

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'chatApp',
    short_name: 'chatApp',
    description: 'Realtime team chat for workspaces, channels, and invites.',
    start_url: '/app',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    background_color: '#020617',
    theme_color: '#0f172a',
    categories: ['business', 'productivity', 'communication'],
    id: appUrl,
    icons: [
      {
        src: '/icons/icon-192.svg',
        sizes: '192x192',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/icons/icon-512.svg',
        sizes: '512x512',
        type: 'image/svg+xml',
        purpose: 'maskable',
      },
      {
        src: '/icons/apple-touch-icon.svg',
        sizes: '180x180',
        type: 'image/svg+xml',
      },
    ],
  };
}

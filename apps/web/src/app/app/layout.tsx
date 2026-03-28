'use client';

import { ReactNode } from 'react';

import { ProtectedRoute } from '@/components/protected-route';
import { AppShell } from '@/components/app-shell/AppShell';

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <ProtectedRoute>
      <AppShell>{children}</AppShell>
    </ProtectedRoute>
  );
}

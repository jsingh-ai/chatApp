'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/store/auth-store';

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const accessToken = useAuthStore((state) => state.tokens?.accessToken);
  const user = useAuthStore((state) => state.user);
  const hydrated = useAuthStore((state) => state.hydrated);
  const hasRedirectedRef = useRef(false);

  useEffect(() => {
    if (!hydrated) {
      hasRedirectedRef.current = false;
      return;
    }

    if (!accessToken && !hasRedirectedRef.current) {
      hasRedirectedRef.current = true;
      router.replace('/login');
      return;
    }

    if (accessToken) {
      hasRedirectedRef.current = false;
    }
  }, [hydrated, accessToken, user, router]);

  if (!hydrated || !accessToken || !user) {
    return (
      <div className="flex h-screen items-center justify-center text-sm text-neutral-500">
        Verifying session...
      </div>
    );
  }

  return <>{children}</>;
};

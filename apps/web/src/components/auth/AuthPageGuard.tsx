'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { useAuthStore } from '@/store/auth-store';

export const AuthPageGuard = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const accessToken = useAuthStore((state) => state.tokens?.accessToken);
  const hydrated = useAuthStore((state) => state.hydrated);
  const redirectTo = searchParams.get('redirect') || '/app';

  useEffect(() => {
    if (hydrated && accessToken) {
      router.replace(redirectTo);
    }
  }, [hydrated, accessToken, redirectTo, router]);

  if (hydrated && accessToken) {
    return (
      <div className="flex min-h-screen items-center justify-center text-sm text-slate-400">
        Redirecting to your workspace...
      </div>
    );
  }

  return <>{children}</>;
};

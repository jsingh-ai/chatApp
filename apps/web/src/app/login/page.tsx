import { Suspense } from 'react';
import Link from 'next/link';

import { AuthForm } from '@/features/auth/components/AuthForm';
import { AuthPageGuard } from '@/components/auth/AuthPageGuard';

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <AuthPageGuard>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 px-4 py-16">
          <AuthForm mode="login" />
          <Link href="/forgot-password" className="text-sm text-slate-400 underline">
            Forgot your password?
          </Link>
        </div>
      </AuthPageGuard>
    </Suspense>
  );
}

import { Suspense } from 'react';

import { AuthForm } from '@/features/auth/components/AuthForm';
import { AuthPageGuard } from '@/components/auth/AuthPageGuard';

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <AuthPageGuard>
        <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16">
          <AuthForm mode="register" />
        </div>
      </AuthPageGuard>
    </Suspense>
  );
}

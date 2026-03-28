'use client';

import { FormEvent, Suspense, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import { getApiErrorMessage } from '@/lib/api-errors';
import { useResetPasswordMutation } from '@/services/queries';

const ResetPasswordPageContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get('token') ?? '';
  const resetPassword = useResetPasswordMutation();
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [status, setStatus] = useState<{
    tone: 'success' | 'error';
    message: string;
  } | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!token) {
      setStatus({ tone: 'error', message: 'Invalid reset link.' });
      return;
    }
    if (password !== confirm) {
      setStatus({ tone: 'error', message: 'Passwords do not match.' });
      return;
    }
    try {
      await resetPassword.mutateAsync({ token, password });
      setStatus({
        tone: 'success',
        message: 'Password updated. Redirecting to login…',
      });
      setTimeout(() => router.replace('/login'), 1200);
    } catch (error) {
      setStatus({
        tone: 'error',
        message: getApiErrorMessage(error, 'Unable to reset password. Please try again.'),
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-white"
      >
        <h1 className="text-2xl font-semibold">Reset password</h1>
        {!token && (
          <p className="text-sm text-rose-400">This reset link is invalid or missing.</p>
        )}
        <div>
          <label className="text-xs font-semibold text-slate-400">New password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
            minLength={8}
            required
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-400">Confirm password</label>
          <input
            type="password"
            value={confirm}
            onChange={(event) => setConfirm(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
            minLength={8}
            required
          />
        </div>
        {status && (
          <p
            className={
              status.tone === 'success'
                ? 'text-xs text-emerald-400'
                : 'text-xs text-rose-400'
            }
          >
            {status.message}
          </p>
        )}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-500 py-2 text-sm font-semibold text-white disabled:opacity-60"
          disabled={
            !token ||
            !password ||
            password.length < 8 ||
            confirm !== password ||
            resetPassword.isPending
          }
        >
          {resetPassword.isPending ? 'Updating…' : 'Update password'}
        </button>
      </form>
    </div>
  );
};

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950" />}>
      <ResetPasswordPageContent />
    </Suspense>
  );
}

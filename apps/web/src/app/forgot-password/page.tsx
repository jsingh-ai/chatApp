'use client';

import { FormEvent, useState } from 'react';

import { getApiErrorMessage } from '@/lib/api-errors';
import { useForgotPasswordMutation } from '@/services/queries';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<{
    tone: 'success' | 'error';
    message: string;
  } | null>(null);
  const forgotPassword = useForgotPasswordMutation();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(null);
    try {
      await forgotPassword.mutateAsync({ email });
      setStatus({
        tone: 'success',
        message:
          'If an account exists for that email, a password reset link has been sent.',
      });
      setEmail('');
    } catch (error) {
      setStatus({
        tone: 'error',
        message: getApiErrorMessage(
          error,
          'Unable to process request. Please try again.',
        ),
      });
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-4 py-16">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md space-y-4 rounded-2xl border border-slate-800 bg-slate-900/70 p-8 text-white"
      >
        <h1 className="text-2xl font-semibold">Forgot password</h1>
        <p className="text-sm text-slate-400">
          Enter your email and we will send you a reset link.
        </p>
        <div>
          <label className="text-xs font-semibold text-slate-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
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
          disabled={!email || forgotPassword.isPending}
        >
          {forgotPassword.isPending ? 'Sending…' : 'Send reset link'}
        </button>
      </form>
    </div>
  );
}

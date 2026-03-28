'use client';

import { FormEvent, useMemo, useState, useTransition } from 'react';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';

import { useLoginMutation, useRegisterMutation } from '@/services/queries';
import { getApiErrorMessage, getApiErrorStatus } from '@/lib/api-errors';
import { useAuthStore } from '@/store/auth-store';

type AuthMode = 'login' | 'register';

export const AuthForm = ({ mode }: { mode: AuthMode }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const setAuth = useAuthStore((state) => state.setAuth);
  const login = useLoginMutation();
  const register = useRegisterMutation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [isRouting, startRouting] = useTransition();
  const isSubmitting = login.isPending || register.isPending || isRouting;
  const redirectTo = searchParams.get('redirect') || '/app';

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setStatusMessage('Sending your request...');
    try {
      if (mode === 'login') {
        const data = await login.mutateAsync({ email, password });
        setAuth(data);
        setStatusMessage('Welcome back! Redirecting to your workspace...');
        startRouting(() => router.replace(redirectTo));
        return;
      }

      const data = await register.mutateAsync({
        email,
        password,
        displayName,
      });
      setAuth(data);
      setStatusMessage('Account created! Preparing your workspace...');
      startRouting(() => router.replace(redirectTo));
    } catch (err) {
      const message = extractAuthErrorMessage(err, mode);
      setStatusMessage(null);
      setError(message);
    }
  };

  const submitLabel = useMemo(() => {
    if (isSubmitting) {
      return mode === 'login' ? 'Signing in…' : 'Creating account…';
    }
    return mode === 'login' ? 'Sign in' : 'Create account';
  }, [isSubmitting, mode]);

  return (
    <div className="w-full max-w-md rounded-2xl border border-slate-800 bg-slate-950 p-8 shadow-2xl">
      <h1 className="text-2xl font-semibold text-white">
        {mode === 'login' ? 'Sign in to chatApp' : 'Create your chatApp account'}
      </h1>
      <p className="mt-2 text-sm text-slate-400">
        {mode === 'login'
          ? 'Enter your credentials to access your workspaces.'
          : 'Invite your team by creating an account for your organization.'}
      </p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        {mode === 'register' && (
          <div>
            <label className="text-xs font-semibold text-slate-400">Display Name</label>
            <input
              value={displayName}
              onChange={(event) => setDisplayName(event.target.value)}
              className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
        )}
        <div>
          <label className="text-xs font-semibold text-slate-400">Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
            required
          />
        </div>
        <div>
          <label className="text-xs font-semibold text-slate-400">Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-1 w-full rounded-md border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
            required
            minLength={8}
          />
        </div>
        {error && <p className="text-sm text-rose-400">{error}</p>}
        {statusMessage && !error && (
          <p className="text-sm text-emerald-400">{statusMessage}</p>
        )}
        <button
          type="submit"
          className="w-full rounded-md bg-indigo-500 py-2 text-sm font-semibold text-white disabled:opacity-60"
          disabled={
            login.isPending ||
            register.isPending ||
            isRouting ||
            !email ||
            !password ||
            (mode === 'register' && !displayName)
          }
        >
          {submitLabel}
        </button>
      </form>
      <p className="mt-4 text-center text-sm text-slate-400">
        {mode === 'login' ? (
          <>
            Need an account?{' '}
            <Link href="/register" className="text-indigo-400 underline">
              Register
            </Link>
          </>
        ) : (
          <>
            Already have an account?{' '}
            <Link href="/login" className="text-indigo-400 underline">
              Sign in
            </Link>
          </>
        )}
      </p>
    </div>
  );
};

const extractAuthErrorMessage = (error: unknown, mode: AuthMode) => {
  const status = getApiErrorStatus(error);
  if (status === 409 && mode === 'register') {
    return 'An account with this email already exists. Try logging in instead.';
  }
  if (status === 401 || status === 400) {
    return 'Invalid credentials. Please double-check your email and password.';
  }

  return getApiErrorMessage(error, 'Unable to complete request. Please try again.');
};

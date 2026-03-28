'use client';

import { useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { useAcceptInviteMutation } from '@/services/queries';
import { getApiErrorMessage } from '@/lib/api-errors';
import { useAuthStore } from '@/store/auth-store';

export default function InviteAcceptancePage() {
  const params = useParams<{ token: string }>();
  const router = useRouter();
  const token = params?.token;
  const tokens = useAuthStore((state) => state.tokens);
  const { mutateAsync, isPending, isSuccess, isError, error, reset } =
    useAcceptInviteMutation();

  useEffect(() => {
    if (token && tokens?.accessToken && !isSuccess && !isPending) {
      void mutateAsync(token);
    }
  }, [token, tokens, mutateAsync, isSuccess, isPending]);

  useEffect(() => {
    if (!token) {
      router.replace('/app');
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  if (!tokens?.accessToken) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-3 bg-slate-950 px-4 text-center text-slate-300">
        <h1 className="text-2xl font-semibold text-white">Sign in to accept invite</h1>
        <p className="text-sm text-slate-400">
          Log in, then revisit this page to join the workspace.
        </p>
        <button
          type="button"
          onClick={() =>
            router.push(`/login?redirect=${encodeURIComponent(`/invite/${token}`)}`)
          }
          className="rounded-md bg-indigo-500 px-6 py-2 text-sm font-semibold text-white"
        >
          Go to login
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-slate-950 px-4 text-center text-slate-200">
      <div className="rounded-xl border border-slate-800 bg-slate-900/70 px-6 py-8">
        <h1 className="text-2xl font-semibold text-white">Accepting invite...</h1>
        {isPending && (
          <p className="mt-2 text-sm text-slate-400">
            We are adding you to the workspace.
          </p>
        )}
        {isSuccess && (
          <>
            <p className="mt-2 text-sm text-emerald-400">
              Invite accepted! Head back to your workspaces.
            </p>
            <button
              type="button"
              className="mt-4 rounded-md bg-indigo-500 px-6 py-2 text-sm font-semibold text-white"
              onClick={() => router.replace('/app')}
            >
              Go to app
            </button>
          </>
        )}
        {isError && (
          <>
            <p className="mt-2 text-sm text-rose-400">
              {getApiErrorMessage(error, 'Unable to accept invite.')}
            </p>
            <button
              type="button"
              onClick={() => {
                reset();
                void mutateAsync(token);
              }}
              className="mt-4 rounded-md border border-slate-700 px-6 py-2 text-sm text-slate-200"
            >
              Try again
            </button>
          </>
        )}
      </div>
    </div>
  );
}

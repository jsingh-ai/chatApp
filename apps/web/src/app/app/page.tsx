'use client';

import { FormEvent, useState } from 'react';

import { getApiErrorMessage } from '@/lib/api-errors';
import { useCreateOrganizationMutation, useOrganizationsQuery } from '@/services/queries';
import { useAuthStore } from '@/store/auth-store';

export default function AppHomePage() {
  const { data, isLoading, isError, error } = useOrganizationsQuery();
  const createOrg = useCreateOrganizationMutation();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const currentUser = useAuthStore((state) => state.user);
  const canCreateOrg = currentUser?.role === 'SUPER_ADMIN';

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        Loading your workspaces...
      </div>
    );
  }

  if (!data?.length) {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      try {
        setFeedback('Creating your workspace...');
        await createOrg.mutateAsync({ name, description });
        setName('');
        setDescription('');
        setFeedback('Workspace created! Use the sidebar to start chatting.');
      } catch (submitError) {
        setFeedback(
          getApiErrorMessage(
            submitError,
            'Unable to create organization. Please try again.',
          ),
        );
      }
    };

    if (canCreateOrg) {
      return (
        <div className="flex h-full flex-col items-center justify-center gap-6 text-center text-slate-300">
          <div>
            <h2 className="text-2xl font-semibold text-white">Create your first team</h2>
            <p className="mt-2 max-w-md text-sm text-slate-400">
              Spin up an organization to unlock channels, invites, and message history.
              You can always add more later.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm space-y-3 rounded-lg border border-slate-800 bg-slate-900/70 p-4 text-left"
          >
            <div>
              <label className="text-xs font-semibold text-slate-400">Team name</label>
              <input
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                placeholder="Acme Corp"
                required
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-400">Description</label>
              <input
                value={description}
                onChange={(event) => setDescription(event.target.value)}
                className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                placeholder="Optional"
              />
            </div>
            {feedback && <p className="text-left text-xs text-slate-400">{feedback}</p>}
            <button
              type="submit"
              className="w-full rounded-md bg-indigo-500 py-2 text-sm font-semibold text-white disabled:opacity-60"
              disabled={!name || createOrg.isPending}
            >
              {createOrg.isPending ? 'Creating...' : 'Create workspace'}
            </button>
          </form>
        </div>
      );
    }

    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Waiting for an invite</h2>
        <p className="max-w-md text-sm text-slate-400">
          Ask a workspace admin to invite you. Once you accept an invite, your
          organizations will appear here.
        </p>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full items-center justify-center px-6 text-center text-slate-300">
        <div>
          <h2 className="text-2xl font-semibold text-white">Unable to load workspaces</h2>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            {getApiErrorMessage(error, 'Please refresh and try again.')}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center text-slate-300">
      <h2 className="text-2xl font-semibold text-white">Choose a team</h2>
      <p className="mt-2 text-sm text-slate-400">
        Select an organization from the left column to view its channels.
      </p>
    </div>
  );
}

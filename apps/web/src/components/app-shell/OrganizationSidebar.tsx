'use client';

import { FormEvent, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import { useOrganizationsQuery, useCreateOrganizationMutation } from '@/services/queries';
import { getApiErrorMessage } from '@/lib/api-errors';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth-store';

export const OrganizationSidebar = () => {
  const router = useRouter();
  const params = useParams<{ orgId?: string }>();
  const currentOrgId = params?.orgId;
  const { data, isLoading, isError, error } = useOrganizationsQuery();
  const [isCreating, setIsCreating] = useState(false);
  const [name, setName] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const createOrg = useCreateOrganizationMutation();
  const currentUser = useAuthStore((state) => state.user);
  const canCreateOrg = currentUser?.role === 'SUPER_ADMIN';

  const organizations = data ?? [];

  const getInitials = (name: string) =>
    name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!name.trim()) return;
    setFeedback(null);
    try {
      await createOrg.mutateAsync({ name });
      setName('');
      setIsCreating(false);
    } catch (submitError) {
      setFeedback(getApiErrorMessage(submitError, 'Unable to create workspace.'));
    }
  };

  return (
    <aside className="flex w-20 flex-col border-r border-slate-800 bg-slate-950 p-3">
      <div className="flex-1 space-y-3 overflow-y-auto">
        {isLoading && (
          <div className="h-12 w-12 animate-pulse rounded-2xl bg-slate-800" />
        )}
        {isError && (
          <div className="rounded-xl border border-rose-800/60 bg-rose-950/40 p-2 text-[11px] text-rose-300">
            {getApiErrorMessage(error, 'Unable to load workspaces.')}
          </div>
        )}
        {organizations.map((org) => (
          <button
            key={org.id}
            type="button"
            onClick={() => router.push(`/app/${org.id}`)}
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800 text-sm font-semibold transition hover:bg-slate-700',
              currentOrgId === org.id && 'ring-2 ring-slate-300',
            )}
          >
            {getInitials(org.name)}
          </button>
        ))}
      </div>
      {canCreateOrg && (
        <div className="mt-3">
          {isCreating ? (
            <form onSubmit={handleCreate} className="space-y-2">
              <input
                className="w-full rounded-md border border-slate-700 bg-slate-900 px-2 py-1 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
                placeholder="Team name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
              <div className="flex gap-1">
                <button
                  type="submit"
                  className="flex-1 rounded-md bg-slate-100 px-2 py-1 text-xs font-semibold text-slate-900"
                  disabled={createOrg.isPending}
                >
                  Save
                </button>
                <button
                  type="button"
                  className="rounded-md border border-slate-600 px-2 py-1 text-xs"
                  onClick={() => setIsCreating(false)}
                >
                  Cancel
                </button>
              </div>
              {feedback && <p className="text-[11px] text-rose-300">{feedback}</p>}
            </form>
          ) : (
            <button
              type="button"
              onClick={() => setIsCreating(true)}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-dashed border-slate-600 text-2xl font-light text-slate-400 transition hover:text-white"
            >
              +
            </button>
          )}
        </div>
      )}
    </aside>
  );
};

'use client';

import { FormEvent, useMemo, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';

import {
  useCreateInviteMutation,
  useOrganizationQuery,
  useOrganizationInvitesQuery,
  useOrganizationMembersQuery,
} from '@/services/queries';
import { usePresence } from '@/hooks/usePresence';
import { getApiErrorMessage } from '@/lib/api-errors';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth-store';

const roleOptions: Array<{ label: string; value: 'OWNER' | 'ADMIN' | 'MEMBER' }> = [
  { label: 'Member', value: 'MEMBER' },
  { label: 'Admin', value: 'ADMIN' },
  { label: 'Owner', value: 'OWNER' },
];

export default function OrganizationSettingsPage() {
  const params = useParams<{ orgId: string }>();
  const orgId = params?.orgId;
  const currentUser = useAuthStore((state) => state.user);
  const { data: organization } = useOrganizationQuery(orgId);
  const {
    data: members,
    isLoading: membersLoading,
    isError: membersError,
    error: membersQueryError,
  } = useOrganizationMembersQuery(orgId);
  const {
    data: invites,
    isLoading: invitesLoading,
    isError: invitesQueryError,
    error: invitesError,
  } = useOrganizationInvitesQuery(orgId);
  const createInvite = useCreateInviteMutation(orgId);
  const onlineSet = usePresence(orgId);

  const [email, setEmail] = useState('');
  const [role, setRole] = useState<'OWNER' | 'ADMIN' | 'MEMBER'>('MEMBER');
  const [feedback, setFeedback] = useState<string | null>(null);
  const membershipRole =
    organization?.members?.find((member) => member.userId === currentUser?.id)?.role ??
    null;
  const canManageWorkspace =
    currentUser?.role === 'SUPER_ADMIN' ||
    membershipRole === 'OWNER' ||
    membershipRole === 'ADMIN';

  const sortedMembers = useMemo(() => {
    return (members ?? [])
      .slice()
      .sort((a, b) => a.user.displayName.localeCompare(b.user.displayName));
  }, [members]);

  const handleInvite = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      setFeedback('Sending invite...');
      await createInvite.mutateAsync({ email, role });
      setEmail('');
      setRole('MEMBER');
      setFeedback('Invitation sent!');
    } catch (error: unknown) {
      setFeedback(getApiErrorMessage(error, 'Unable to send invite. Please try again.'));
    }
  };

  if (!orgId) {
    return (
      <div className="p-6 text-slate-400">
        Select an organization to manage members and invites.
      </div>
    );
  }

  return (
    <div className="h-full overflow-y-auto p-6 text-slate-100">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-white">Workspace settings</h1>
          <p className="text-sm text-slate-400">
            Manage members, roles, and invitations for this organization.
          </p>
        </div>
        <Link
          href={`/app/${orgId}`}
          className="rounded-md border border-slate-700 px-3 py-1.5 text-sm text-slate-300"
        >
          ← Back to chat
        </Link>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h2 className="text-lg font-semibold text-white">Members</h2>
          {membersLoading ? (
            <p className="mt-3 text-sm text-slate-400">Loading members...</p>
          ) : membersError ? (
            <p className="mt-3 text-sm text-rose-400">
              {getApiErrorMessage(membersQueryError, 'Unable to load members.')}
            </p>
          ) : (
            <ul className="mt-4 space-y-3">
              {sortedMembers.map((member) => (
                <li
                  key={member.id}
                  className="flex items-center justify-between rounded-md border border-slate-800 px-3 py-2"
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className={cn(
                          'h-2 w-2 rounded-full',
                          onlineSet.has(member.userId)
                            ? 'bg-emerald-400'
                            : 'bg-slate-600',
                        )}
                      />
                      <p className="text-sm font-semibold text-white">
                        {member.user.displayName}
                      </p>
                    </div>
                    <p className="text-xs text-slate-400">{member.user.email}</p>
                  </div>
                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs text-slate-300 capitalize">
                    {member.role.toLowerCase()}
                  </span>
                </li>
              ))}
              {!sortedMembers.length && (
                <p className="text-sm text-slate-400">No members yet.</p>
              )}
            </ul>
          )}
        </section>

        <section className="rounded-xl border border-slate-800 bg-slate-900/60 p-5">
          <h2 className="text-lg font-semibold text-white">Invite someone</h2>
          {canManageWorkspace ? (
            <form className="mt-4 space-y-3" onSubmit={handleInvite}>
              <div>
                <label className="text-xs font-semibold text-slate-400">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                  placeholder="teammate@company.com"
                  required
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-400">Role</label>
                <select
                  value={role}
                  onChange={(event) =>
                    setRole(event.target.value as 'OWNER' | 'ADMIN' | 'MEMBER')
                  }
                  className="mt-1 w-full rounded-md border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-white"
                >
                  {roleOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
              {feedback && (
                <p
                  className={
                    feedback === 'Invitation sent!'
                      ? 'text-xs text-emerald-400'
                      : 'text-xs text-rose-400'
                  }
                >
                  {feedback}
                </p>
              )}
              <button
                type="submit"
                className="w-full rounded-md bg-indigo-500 py-2 text-sm font-semibold text-white disabled:opacity-60"
                disabled={!email || createInvite.isPending}
              >
                {createInvite.isPending ? 'Sending invite...' : 'Send invite'}
              </button>
            </form>
          ) : (
            <p className="mt-4 text-sm text-slate-400">
              Admin access is required to send invites or manage workspace settings.
            </p>
          )}
        </section>
      </div>

      <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-5">
        <h2 className="text-lg font-semibold text-white">Pending invites</h2>
        {invitesLoading ? (
          <p className="mt-3 text-sm text-slate-400">Loading invites...</p>
        ) : !canManageWorkspace ? (
          <p className="mt-3 text-sm text-slate-400">
            Invite activity is visible to workspace admins only.
          </p>
        ) : invitesQueryError ? (
          <p className="mt-3 text-sm text-rose-400">
            {getApiErrorMessage(invitesError, 'Unable to load invites.')}
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {invites?.length ? (
              invites.map((invite) => (
                <li
                  key={invite.id}
                  className="flex items-center justify-between rounded-md border border-slate-800 px-3 py-2 text-sm text-slate-300"
                >
                  <div>
                    <p className="font-semibold text-white">{invite.email}</p>
                    <p className="text-xs text-slate-500">
                      Role: {invite.role.toLowerCase()} • Expires{' '}
                      {new Date(invite.expiresAt).toLocaleDateString()}
                    </p>
                  </div>
                  <span className="rounded-full border border-slate-700 px-2 py-0.5 text-xs uppercase">
                    {invite.status}
                  </span>
                </li>
              ))
            ) : (
              <p className="text-sm text-slate-400">No invites yet.</p>
            )}
          </ul>
        )}
      </section>
    </div>
  );
}

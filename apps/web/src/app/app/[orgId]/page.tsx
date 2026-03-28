'use client';

import { useChannelsQuery, useOrganizationQuery } from '@/services/queries';
import { getApiErrorMessage } from '@/lib/api-errors';
import { useParams } from 'next/navigation';
import { useAuthStore } from '@/store/auth-store';

export default function OrganizationPage() {
  const params = useParams<{ orgId: string }>();
  const { data: organization } = useOrganizationQuery(params.orgId);
  const { data, isLoading, isError, error } = useChannelsQuery(params.orgId);
  const currentUser = useAuthStore((state) => state.user);
  const membershipRole =
    organization?.members?.find((member) => member.userId === currentUser?.id)?.role ??
    null;
  const canManageChannels =
    currentUser?.role === 'SUPER_ADMIN' ||
    membershipRole === 'OWNER' ||
    membershipRole === 'ADMIN';

  if (isLoading) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        Loading channels...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex h-full flex-col items-center justify-center px-6 text-center text-slate-300">
        <h2 className="text-2xl font-semibold text-white">Unable to load channels</h2>
        <p className="mt-2 max-w-md text-sm text-slate-400">
          {getApiErrorMessage(error, 'Please refresh and try again.')}
        </p>
      </div>
    );
  }

  if (!data?.length) {
    return (
      <div className="flex h-full flex-col items-center justify-center text-center text-slate-300">
        <h2 className="text-2xl font-semibold text-white">
          {canManageChannels ? 'Create a channel' : 'No channels yet'}
        </h2>
        <p className="mt-2 max-w-md text-sm text-slate-400">
          {canManageChannels
            ? 'Use the channel form to start the first conversation for this team.'
            : 'A workspace admin can create the first channel for this team.'}
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col items-center justify-center text-slate-300">
      <p>Select a channel from the sidebar to start chatting.</p>
    </div>
  );
}

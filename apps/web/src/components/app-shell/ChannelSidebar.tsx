'use client';

import { FormEvent, useMemo, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';

import {
  useChannelsQuery,
  useCreateChannelMutation,
  useOrganizationQuery,
} from '@/services/queries';
import { getApiErrorMessage } from '@/lib/api-errors';
import { cn } from '@/lib/utils';
import { useAuthStore } from '@/store/auth-store';
import { formatRelativeTime } from '@/lib/time';

export const ChannelSidebar = () => {
  const params = useParams<{ orgId?: string; channelId?: string }>();
  const orgId = params?.orgId;
  const currentChannelId = params?.channelId;
  const router = useRouter();
  const {
    data: organization,
    isError: orgError,
    error: organizationError,
  } = useOrganizationQuery(orgId);
  const {
    data: channels,
    isLoading,
    isError: channelsError,
    error: channelError,
  } = useChannelsQuery(orgId);
  const createChannel = useCreateChannelMutation(orgId);
  const [channelName, setChannelName] = useState('');
  const [feedback, setFeedback] = useState<string | null>(null);
  const currentUser = useAuthStore((state) => state.user);

  const membershipRole = useMemo(() => {
    if (!organization || !currentUser) {
      return null;
    }
    return (
      organization.members?.find((member) => member.userId === currentUser.id)?.role ??
      null
    );
  }, [organization, currentUser]);

  const canManageChannels =
    currentUser?.role === 'SUPER_ADMIN' ||
    membershipRole === 'OWNER' ||
    membershipRole === 'ADMIN';

  const handleCreate = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!channelName.trim() || !orgId) return;
    setFeedback(null);
    try {
      await createChannel.mutateAsync({ name: channelName.trim() });
      setChannelName('');
      setFeedback('Channel created.');
    } catch (submitError) {
      setFeedback(getApiErrorMessage(submitError, 'Unable to create channel.'));
    }
  };

  if (!orgId) {
    return (
      <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-900 p-4 md:flex">
        <p className="text-sm text-slate-500">Select an organization</p>
      </aside>
    );
  }

  return (
    <aside className="hidden w-64 flex-col border-r border-slate-800 bg-slate-900 p-4 md:flex">
      <div>
        <p className="text-xs uppercase text-slate-500">Team</p>
        <p className="truncate text-lg font-semibold text-white">
          {organization?.name ?? 'Loading...'}
        </p>
      </div>
      <div className="mt-6 flex-1 space-y-2 overflow-y-auto">
        {isLoading && (
          <div className="space-y-2">
            <div className="h-4 w-32 animate-pulse rounded bg-slate-800" />
            <div className="h-4 w-40 animate-pulse rounded bg-slate-800" />
          </div>
        )}
        {(orgError || channelsError) && (
          <p className="rounded-md border border-rose-800/60 bg-rose-950/30 px-3 py-2 text-sm text-rose-300">
            {getApiErrorMessage(
              organizationError ?? channelError,
              'Unable to load channels.',
            )}
          </p>
        )}
        {channels?.map((channel) => (
          <button
            key={channel.id}
            type="button"
            onClick={() => router.push(`/app/${orgId}/channels/${channel.id}`)}
            className={cn(
              'flex w-full flex-col rounded-md px-3 py-2 text-left text-sm transition hover:bg-slate-800',
              currentChannelId === channel.id && 'bg-slate-800 text-white shadow-inner',
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-slate-200">#{channel.name}</span>
              {channel.lastMessage && (
                <span className="text-xs text-slate-500">
                  {formatRelativeTime(channel.lastMessage.createdAt)}
                </span>
              )}
            </div>
            <div className="mt-1 flex items-center justify-between gap-2 text-xs text-slate-500">
              <span className="truncate">
                {channel.lastMessage
                  ? `${channel.lastMessage.author.displayName}: ${channel.lastMessage.content}`
                  : 'No messages yet'}
              </span>
              {channel.unreadCount ? (
                <span className="ml-2 min-w-[1.5rem] rounded-full bg-indigo-500 px-2 py-0.5 text-center text-[10px] font-semibold text-white">
                  {channel.unreadCount}
                </span>
              ) : null}
            </div>
          </button>
        ))}
        {!channels?.length && (
          <p className="text-sm text-slate-500">
            {canManageChannels
              ? 'No channels yet. Create the first channel below.'
              : 'No channels are available yet. A workspace admin can create one.'}
          </p>
        )}
      </div>
      {canManageChannels && (
        <button
          type="button"
          onClick={() => router.push(`/app/${orgId}/settings`)}
          className="mb-3 w-full rounded-md border border-slate-700 px-3 py-2 text-sm text-slate-200 transition hover:bg-slate-800"
        >
          Workspace settings
        </button>
      )}
      {canManageChannels ? (
        <form onSubmit={handleCreate} className="space-y-2">
          <input
            placeholder="New channel name"
            value={channelName}
            onChange={(event) => setChannelName(event.target.value)}
            className="w-full rounded-md border border-slate-700 bg-slate-900 px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-slate-500"
          />
          <button
            type="submit"
            className="w-full rounded-md bg-slate-100 py-2 text-sm font-semibold text-slate-900 disabled:opacity-60"
            disabled={createChannel.isPending || !channelName.trim()}
          >
            {createChannel.isPending ? 'Creating…' : 'Create Channel'}
          </button>
          {feedback && (
            <p
              className={
                feedback === 'Channel created.'
                  ? 'text-xs text-emerald-400'
                  : 'text-xs text-rose-300'
              }
            >
              {feedback}
            </p>
          )}
        </form>
      ) : (
        <p className="text-xs text-slate-500">
          You don&apos;t have permission to create channels.
        </p>
      )}
    </aside>
  );
};

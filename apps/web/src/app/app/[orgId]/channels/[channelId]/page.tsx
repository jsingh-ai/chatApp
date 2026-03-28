'use client';

import { useMemo } from 'react';
import { useParams } from 'next/navigation';

import { ChannelHeader } from '@/features/messages/components/ChannelHeader';
import { MessageList } from '@/features/messages/components/MessageList';
import { MessageComposer } from '@/features/messages/components/MessageComposer';
import { useChannelsQuery, useOrganizationMembersQuery } from '@/services/queries';
import { getApiErrorMessage } from '@/lib/api-errors';

export default function ChannelPage() {
  const params = useParams<{ orgId: string; channelId: string }>();
  const {
    data: channels,
    isLoading: channelsLoading,
    isError: channelsError,
    error: channelsQueryError,
  } = useChannelsQuery(params.orgId);
  const { data: members } = useOrganizationMembersQuery(params.orgId);
  const channel = channels?.find((item) => item.id === params.channelId);
  const memberList = useMemo(() => members ?? [], [members]);

  if (channelsLoading) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        Loading channel...
      </div>
    );
  }

  if (channelsError) {
    return (
      <div className="flex h-full items-center justify-center px-6 text-center text-slate-400">
        {getApiErrorMessage(channelsQueryError, 'Unable to load this channel.')}
      </div>
    );
  }

  if (!channel) {
    return (
      <div className="flex h-full items-center justify-center text-slate-400">
        Channel not found.
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <ChannelHeader name={channel.name} description={channel.description} />
      <MessageList
        channelId={params.channelId}
        organizationId={params.orgId}
        members={memberList}
      />
      <MessageComposer channelId={params.channelId} />
    </div>
  );
}

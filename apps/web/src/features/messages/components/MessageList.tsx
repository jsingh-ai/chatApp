'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';

import {
  useMarkChannelReadMutation,
  useMessagesQuery,
  useSendMessageMutation,
} from '@/services/queries';
import {
  appendMessageToCache,
  flattenMessages,
  removeMessageFromCache,
} from '@/features/messages/lib/message-cache';
import { createClientMessageId } from '@/lib/utils';
import { getSocket } from '@/lib/socket';
import type { DetailedOrganizationMember, Message } from '@/types';
import { useTypingUsers } from '@/features/messages/hooks/useTypingUsers';
import { formatRelativeTime } from '@/lib/time';

interface MessageListProps {
  channelId: string;
  organizationId: string;
  members?: DetailedOrganizationMember[];
}

interface MessageGroup {
  groupId: string;
  author: Message['author'];
  timestamp: string;
  messages: Message[];
}

export const MessageList = ({ channelId, organizationId, members }: MessageListProps) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useMessagesQuery(channelId);
  const markRead = useMarkChannelReadMutation();
  const retrySend = useSendMessageMutation(channelId);
  const containerRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const queryClient = useQueryClient();
  const [isNearBottom, setIsNearBottom] = useState(true);
  const [loadingOlder, setLoadingOlder] = useState(false);
  const prevScrollHeight = useRef(0);
  const prevScrollTop = useRef(0);
  const lastMarkedMessageId = useRef<string | null>(null);

  const messages = useMemo(() => flattenMessages(data), [data]);

  const memberMap = useMemo(() => {
    const map = new Map<string, DetailedOrganizationMember>();
    members?.forEach((member) => map.set(member.userId, member));
    return map;
  }, [members]);

  const typingUserIds = useTypingUsers(channelId);
  const typingNames = typingUserIds
    .map((id) => memberMap.get(id)?.user.displayName ?? null)
    .filter(Boolean) as string[];

  const groupedMessages = useMemo<MessageGroup[]>(() => {
    const groups: MessageGroup[] = [];
    const threshold = 5 * 60 * 1000;
    messages.forEach((message) => {
      const lastGroup = groups[groups.length - 1];
      if (lastGroup) {
        const lastMessage = lastGroup.messages[lastGroup.messages.length - 1];
        const delta =
          new Date(message.createdAt).getTime() -
          new Date(lastMessage.createdAt).getTime();
        if (lastGroup.author.id === message.author.id && delta < threshold) {
          lastGroup.messages.push(message);
          return;
        }
      }
      groups.push({
        groupId: message.id,
        author: message.author,
        timestamp: message.createdAt,
        messages: [message],
      });
    });
    return groups;
  }, [messages]);

  useEffect(() => {
    if (isNearBottom) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [messages.length, isNearBottom]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleScroll = () => {
      const threshold = 120;
      const distance =
        container.scrollHeight - (container.scrollTop + container.clientHeight);
      setIsNearBottom(distance < threshold);
    };
    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetchingNextPage && loadingOlder) {
      const container = containerRef.current;
      if (container) {
        const diff = container.scrollHeight - prevScrollHeight.current;
        container.scrollTop = prevScrollTop.current + diff;
      }
      setTimeout(() => setLoadingOlder(false), 0);
    }
  }, [isFetchingNextPage, loadingOlder]);

  useEffect(() => {
    const latestMessageId = messages[messages.length - 1]?.id;
    if (
      latestMessageId &&
      isNearBottom &&
      lastMarkedMessageId.current !== latestMessageId &&
      !markRead.isPending
    ) {
      lastMarkedMessageId.current = latestMessageId;
      markRead.mutate({ channelId, organizationId });
    }
  }, [channelId, organizationId, isNearBottom, markRead, messages]);

  useEffect(() => {
    if (!channelId) {
      return;
    }
    const socket = getSocket();
    if (!socket) {
      return;
    }

    const joinRoom = () => {
      socket.emit('joinChannel', { channelId });
    };

    if (socket.connected) {
      joinRoom();
    } else {
      socket.once('connect', joinRoom);
    }

    const handleMessage = (message: Message) => {
      if (message.channelId !== channelId) {
        return;
      }
      queryClient.setQueryData(['channels', channelId, 'messages'], (old) =>
        appendMessageToCache(old, { ...message, status: 'sent' }),
      );
    };

    socket.on('message.created', handleMessage);

    return () => {
      socket.emit('leaveChannel', { channelId });
      socket.off('connect', joinRoom);
      socket.off('message.created', handleMessage);
    };
  }, [channelId, queryClient]);

  const loadOlder = () => {
    if (!hasNextPage || isFetchingNextPage) return;
    const container = containerRef.current;
    if (container) {
      prevScrollHeight.current = container.scrollHeight;
      prevScrollTop.current = container.scrollTop;
    }
    setLoadingOlder(true);
    void fetchNextPage();
  };

  const retryMessage = (message: Message) => {
    if (!message.content) return;
    queryClient.setQueryData(['channels', channelId, 'messages'], (old) =>
      removeMessageFromCache(old, (item) => item.optimisticId === message.optimisticId),
    );
    const retryId = createClientMessageId('retry');
    retrySend.mutate({ content: message.content, clientMessageId: retryId });
  };

  if (!channelId) {
    return null;
  }

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      <div ref={containerRef} className="flex flex-1 flex-col overflow-y-auto px-6 py-4">
        {hasNextPage && (
          <button
            type="button"
            className="mb-4 self-center rounded-full border border-slate-600 px-4 py-1 text-xs text-slate-300"
            onClick={loadOlder}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? 'Loading…' : 'Load older messages'}
          </button>
        )}
        <div className="space-y-4">
          {groupedMessages.map((group) => (
            <div key={group.groupId} className="space-y-1">
              <div className="flex items-baseline gap-2">
                <p className="text-sm font-semibold text-white">
                  {group.author.displayName}
                </p>
                <span className="text-xs text-slate-500">
                  {formatRelativeTime(group.timestamp)}
                </span>
              </div>
              <div className="space-y-1">
                {group.messages.map((message) => (
                  <div key={message.id} className="text-sm text-slate-200">
                    {message.content}
                    {message.status === 'pending' && (
                      <span className="ml-2 text-xs text-slate-500">Sending…</span>
                    )}
                    {message.status === 'failed' && (
                      <span className="ml-2 text-xs text-rose-400">
                        Failed.
                        <button
                          type="button"
                          onClick={() => retryMessage(message)}
                          className="ml-1 underline"
                        >
                          Retry
                        </button>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
          {!messages.length && <p className="text-sm text-slate-500">No messages yet.</p>}
        </div>
        <div ref={bottomRef} />
      </div>
      {typingNames.length > 0 && (
        <div className="px-6 py-2 text-xs text-slate-400">
          {formatTypingDisplay(typingNames)}
        </div>
      )}
    </div>
  );
};

const formatTypingDisplay = (names: string[]) => {
  if (names.length === 1) {
    return `${names[0]} is typing…`;
  }
  if (names.length === 2) {
    return `${names[0]} and ${names[1]} are typing…`;
  }
  return `${names[0]} and ${names.length - 1} others are typing…`;
};

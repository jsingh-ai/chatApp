import { useEffect, useState } from 'react';

import { getSocket } from '@/lib/socket';

interface TypingPayload {
  channelId: string;
  userIds: string[];
}

export const useTypingUsers = (channelId?: string) => {
  const [typingState, setTypingState] = useState<TypingPayload | null>(null);

  useEffect(() => {
    if (!channelId) {
      return;
    }
    const socket = getSocket();
    if (!socket) {
      return;
    }

    const handler = (payload: TypingPayload) => {
      if (payload.channelId === channelId) {
        setTypingState(payload);
      }
    };

    socket.on('typing.update', handler);
    return () => {
      socket.off('typing.update', handler);
    };
  }, [channelId]);

  return typingState && typingState.channelId === channelId ? typingState.userIds : [];
};

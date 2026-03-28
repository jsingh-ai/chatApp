import { useEffect, useMemo, useState } from 'react';

import { getSocket } from '@/lib/socket';

interface PresencePayload {
  organizationId: string;
  onlineUserIds: string[];
}

export const usePresence = (organizationId?: string) => {
  const [presenceState, setPresenceState] = useState<PresencePayload | null>(null);

  useEffect(() => {
    if (!organizationId) {
      return;
    }
    const socket = getSocket();
    if (!socket) {
      return;
    }
    const handler = (payload: PresencePayload) => {
      if (payload.organizationId === organizationId) {
        setPresenceState(payload);
      }
    };
    socket.on('presence.update', handler);
    return () => {
      socket.off('presence.update', handler);
    };
  }, [organizationId]);

  return useMemo(() => {
    const onlineIds =
      presenceState && presenceState.organizationId === organizationId
        ? presenceState.onlineUserIds
        : [];
    return new Set(onlineIds);
  }, [organizationId, presenceState]);
};

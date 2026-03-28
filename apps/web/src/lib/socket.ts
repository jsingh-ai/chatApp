import { io, Socket } from 'socket.io-client';
import { getWebsocketBaseUrl } from '@/lib/public-env';

const WS_BASE = getWebsocketBaseUrl();

let socket: Socket | null = null;

export const ensureSocket = (token: string): Socket => {
  if (socket && socket.connected) {
    return socket;
  }

  if (socket) {
    socket.disconnect();
  }

  socket = io(`${WS_BASE}/chat`, {
    auth: { token },
    transports: ['websocket'],
  });

  return socket;
};

export const getSocket = () => socket;

export const disconnectSocket = () => {
  if (socket) {
    socket.disconnect();
    socket = null;
  }
};

'use client';

import { ReactNode, useEffect, useState } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useAuthStore } from '@/store/auth-store';
import { useCurrentUserQuery } from '@/services/queries';
import { disconnectSocket, ensureSocket } from '@/lib/socket';

export const Providers = ({ children }: { children: ReactNode }) => {
  const [client] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            staleTime: 1000 * 30,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={client}>
      <AuthHydrator />
      <WebsocketManager />
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const AuthHydrator = () => {
  const tokens = useAuthStore((state) => state.tokens);
  const hydrated = useAuthStore((state) => state.hydrated);
  const setUser = useAuthStore((state) => state.setUser);
  const clear = useAuthStore((state) => state.clear);

  const shouldFetchProfile = hydrated && Boolean(tokens?.accessToken);

  const { data, isError } = useCurrentUserQuery(shouldFetchProfile);

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data, setUser]);

  useEffect(() => {
    if (shouldFetchProfile && isError) {
      clear();
    }
  }, [shouldFetchProfile, isError, clear]);

  return null;
};

const WebsocketManager = () => {
  const token = useAuthStore((state) => state.tokens?.accessToken);

  useEffect(() => {
    if (token) {
      ensureSocket(token);
    } else {
      disconnectSocket();
    }
  }, [token]);

  return null;
};

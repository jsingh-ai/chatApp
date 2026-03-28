import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';

import { authApi, channelApi, invitesApi, messageApi, organizationApi } from './api';
import {
  appendMessageToCache,
  mapMessageInCache,
} from '@/features/messages/lib/message-cache';
import { createClientMessageId } from '@/lib/utils';
import type { AuthResponse, Message } from '@/types';
import { useAuthStore } from '@/store/auth-store';

export const useOrganizationsQuery = () =>
  useQuery({
    queryKey: ['organizations'],
    queryFn: organizationApi.list,
  });

export const useOrganizationQuery = (orgId?: string) =>
  useQuery({
    queryKey: ['organization', orgId],
    queryFn: () => organizationApi.get(orgId!),
    enabled: Boolean(orgId),
  });

export const useChannelsQuery = (orgId?: string) =>
  useQuery({
    queryKey: ['organizations', orgId, 'channels'],
    queryFn: () => channelApi.list(orgId!),
    enabled: Boolean(orgId),
  });

export const useMessagesQuery = (channelId?: string) =>
  useInfiniteQuery({
    queryKey: ['channels', channelId, 'messages'],
    queryFn: ({ pageParam }) => messageApi.list(channelId!, pageParam ?? undefined),
    initialPageParam: null as string | null,
    getNextPageParam: (lastPage) => lastPage.nextCursor,
    enabled: Boolean(channelId),
  });

export const useCreateOrganizationMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: organizationApi.create,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organizations'] });
    },
  });
};

export const useCreateChannelMutation = (orgId?: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { name: string; description?: string }) =>
      channelApi.create(orgId!, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['organizations', orgId, 'channels'],
      });
    },
  });
};

export const useSendMessageMutation = (channelId?: string) => {
  const queryClient = useQueryClient();
  const currentUser = useAuthStore((state) => state.user);

  return useMutation({
    mutationFn: (payload: { content: string; clientMessageId?: string }) =>
      messageApi.create(channelId!, payload),
    onMutate: async (payload) => {
      if (!channelId || !currentUser) {
        return undefined;
      }
      const optimisticId = payload.clientMessageId ?? createClientMessageId('optimistic');
      const optimisticMessage: Message = {
        id: optimisticId,
        optimisticId,
        channelId,
        authorId: currentUser.id,
        content: payload.content,
        createdAt: new Date().toISOString(),
        author: currentUser,
        status: 'pending',
        clientMessageId: payload.clientMessageId ?? optimisticId,
      };

      queryClient.setQueryData(['channels', channelId, 'messages'], (old) =>
        appendMessageToCache(old, optimisticMessage),
      );

      return { optimisticId };
    },
    onError: (_error, _payload, context) => {
      if (!channelId || !context?.optimisticId) {
        return;
      }
      queryClient.setQueryData(['channels', channelId, 'messages'], (old) =>
        mapMessageInCache(
          old,
          (item) => item.optimisticId === context.optimisticId,
          (item) => ({ ...item, status: 'failed' }),
        ),
      );
    },
    onSuccess: (message, _payload, context) => {
      if (!channelId || !context?.optimisticId) {
        return;
      }
      queryClient.setQueryData(['channels', channelId, 'messages'], (old) =>
        mapMessageInCache(
          old,
          (item) => item.optimisticId === context.optimisticId,
          () => ({ ...message, status: 'sent' }),
        ),
      );
    },
  });
};

export const useLoginMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<AuthResponse, Error, { email: string; password: string }>({
    mutationFn: authApi.login,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['auth', 'me'] });
    },
  });
};

export const useRegisterMutation = () => {
  const queryClient = useQueryClient();
  return useMutation<
    AuthResponse,
    Error,
    { email: string; password: string; displayName: string }
  >({
    mutationFn: authApi.register,
    onSuccess: () => {
      queryClient.removeQueries({ queryKey: ['auth', 'me'] });
    },
  });
};

export const useCurrentUserQuery = (enabled: boolean) =>
  useQuery({
    queryKey: ['auth', 'me'],
    queryFn: authApi.me,
    enabled,
    retry: false,
  });

export const useOrganizationMembersQuery = (orgId?: string) =>
  useQuery({
    queryKey: ['organizations', orgId, 'members'],
    queryFn: () => organizationApi.members(orgId!),
    enabled: Boolean(orgId),
  });

export const useOrganizationInvitesQuery = (orgId?: string) =>
  useQuery({
    queryKey: ['organizations', orgId, 'invites'],
    queryFn: () => organizationApi.invites(orgId!),
    enabled: Boolean(orgId),
  });

export const useCreateInviteMutation = (orgId?: string) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (payload: { email: string; role: 'OWNER' | 'ADMIN' | 'MEMBER' }) =>
      organizationApi.createInvite(orgId!, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['organizations', orgId, 'invites'],
      });
    },
  });
};

export const useAcceptInviteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (token: string) => invitesApi.accept(token),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['organizations'] });
    },
  });
};

export const useMarkChannelReadMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (params: { channelId: string; organizationId: string }) =>
      channelApi.markRead(params.channelId),
    onSuccess: (_data, variables) => {
      queryClient.invalidateQueries({
        queryKey: ['organizations', variables.organizationId, 'channels'],
      });
      queryClient.invalidateQueries({ queryKey: ['organizations'] });
    },
  });
};

export const useForgotPasswordMutation = () =>
  useMutation({
    mutationFn: (payload: { email: string }) => authApi.forgotPassword(payload),
  });

export const useResetPasswordMutation = () =>
  useMutation({
    mutationFn: (payload: { token: string; password: string }) =>
      authApi.resetPassword(payload),
  });

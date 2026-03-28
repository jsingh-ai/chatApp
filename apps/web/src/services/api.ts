import { apiClient } from '@/lib/api-client';
import type {
  AuthResponse,
  Channel,
  DetailedOrganizationMember,
  Message,
  MessageListResponse,
  Organization,
  OrganizationInvite,
  User,
} from '@/types';

type ApiEnvelope<T> = { data: T; timestamp: string };

const unwrap = <T>(payload: ApiEnvelope<T> | T): T => {
  if (payload && typeof payload === 'object' && 'data' in payload) {
    return (payload as ApiEnvelope<T>).data;
  }
  return payload as T;
};

export const authApi = {
  login: (payload: { email: string; password: string }) =>
    apiClient
      .post<ApiEnvelope<AuthResponse>>('/auth/login', payload)
      .then((res) => unwrap(res.data)),
  register: (payload: { email: string; password: string; displayName: string }) =>
    apiClient
      .post<ApiEnvelope<AuthResponse>>('/auth/register', payload)
      .then((res) => unwrap(res.data)),
  me: () => apiClient.get<ApiEnvelope<User>>('/auth/me').then((res) => unwrap(res.data)),
  forgotPassword: (payload: { email: string }) =>
    apiClient.post<ApiEnvelope<{ status: string }>>('/auth/forgot-password', payload),
  resetPassword: (payload: { token: string; password: string }) =>
    apiClient.post<ApiEnvelope<{ status: string }>>('/auth/reset-password', payload),
};

export const organizationApi = {
  list: () =>
    apiClient
      .get<ApiEnvelope<Organization[]>>('/organizations')
      .then((res) => unwrap(res.data)),
  create: (payload: { name: string; description?: string }) =>
    apiClient
      .post<ApiEnvelope<Organization>>('/organizations', payload)
      .then((res) => unwrap(res.data)),
  get: (id: string) =>
    apiClient
      .get<ApiEnvelope<Organization>>(`/organizations/${id}`)
      .then((res) => unwrap(res.data)),
  members: (orgId: string) =>
    apiClient
      .get<ApiEnvelope<DetailedOrganizationMember[]>>(`/organizations/${orgId}/members`)
      .then((res) => unwrap(res.data)),
  invites: (orgId: string) =>
    apiClient
      .get<ApiEnvelope<OrganizationInvite[]>>(`/organizations/${orgId}/invites`)
      .then((res) => unwrap(res.data)),
  createInvite: (
    orgId: string,
    payload: { email: string; role: 'OWNER' | 'ADMIN' | 'MEMBER' },
  ) =>
    apiClient
      .post<ApiEnvelope<OrganizationInvite>>(`/organizations/${orgId}/invites`, payload)
      .then((res) => unwrap(res.data)),
};

export const channelApi = {
  list: (orgId: string) =>
    apiClient
      .get<ApiEnvelope<Channel[]>>(`/organizations/${orgId}/channels`)
      .then((res) => unwrap(res.data)),
  create: (orgId: string, payload: { name: string; description?: string }) =>
    apiClient
      .post<ApiEnvelope<Channel>>(`/organizations/${orgId}/channels`, payload)
      .then((res) => unwrap(res.data)),
  get: (channelId: string) =>
    apiClient
      .get<ApiEnvelope<Channel>>(`/channels/${channelId}`)
      .then((res) => unwrap(res.data)),
  markRead: (channelId: string) =>
    apiClient
      .post<ApiEnvelope<{ status: string }>>(`/channels/${channelId}/read`, {})
      .then((res) => unwrap(res.data)),
};

export const messageApi = {
  list: (channelId: string, cursor?: string | null, limit = 30) =>
    apiClient
      .get<ApiEnvelope<MessageListResponse>>(`/channels/${channelId}/messages`, {
        params: {
          cursor: cursor ?? undefined,
          limit,
        },
      })
      .then((res) => unwrap(res.data)),
  create: (channelId: string, payload: { content: string }) =>
    apiClient
      .post<ApiEnvelope<Message>>(`/channels/${channelId}/messages`, payload)
      .then((res) => unwrap(res.data)),
};

export const invitesApi = {
  accept: (token: string) =>
    apiClient
      .post<ApiEnvelope<{ organizationId: string }>>(`/invites/${token}/accept`)
      .then((res) => unwrap(res.data)),
};

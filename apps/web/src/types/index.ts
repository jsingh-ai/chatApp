export interface User {
  id: string;
  email: string;
  displayName: string;
  createdAt: string;
  updatedAt?: string;
  role: 'SUPER_ADMIN' | 'USER';
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthResponse {
  user: User;
  tokens: AuthTokens;
}

export interface OrganizationMember {
  id: string;
  userId: string;
  organizationId: string;
  role: 'OWNER' | 'ADMIN' | 'MEMBER';
  createdAt?: string;
  updatedAt?: string;
}

export interface DetailedOrganizationMember extends OrganizationMember {
  user: User;
}

export type OrganizationInviteStatus = 'PENDING' | 'ACCEPTED' | 'EXPIRED' | 'CANCELLED';

export interface OrganizationInvite {
  id: string;
  token: string;
  email: string;
  organizationId: string;
  invitedById: string;
  role: OrganizationMember['role'];
  status: OrganizationInviteStatus;
  expiresAt: string;
  createdAt: string;
}

export interface Channel {
  id: string;
  organizationId: string;
  name: string;
  description?: string | null;
  isPrivate: boolean;
  createdAt: string;
  updatedAt?: string;
  lastMessage?: Message | null;
  unreadCount?: number;
}

export interface Organization {
  id: string;
  name: string;
  description?: string | null;
  createdAt: string;
  channels: Channel[];
  members: OrganizationMember[];
}

export interface Message {
  id: string;
  content: string;
  channelId: string;
  authorId: string;
  createdAt: string;
  author: User;
  optimisticId?: string;
  status?: 'pending' | 'failed' | 'sent';
  clientMessageId?: string | null;
}

export interface MessageListResponse {
  items: Message[];
  nextCursor: string | null;
}

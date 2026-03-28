import { Message } from '@prisma/client';

export interface DetailedChannel {
  id: string;
  name: string;
  description: string | null;
  organizationId: string;
  isPrivate: boolean;
  createdAt: Date;
  updatedAt: Date;
  lastMessage:
    | (Message & { author: { id: string; displayName: string } })
    | null;
  unreadCount: number;
}

import type { InfiniteData } from '@tanstack/react-query';

import type { Message, MessageListResponse } from '@/types';

export type MessagePages = InfiniteData<MessageListResponse, unknown>;

const dedupeMessages = (messages: Message[]) => {
  const seenIds = new Set<string>();
  const seenClientIds = new Set<string>();

  return messages.filter((message) => {
    if (seenIds.has(message.id)) {
      return false;
    }

    if (message.clientMessageId && seenClientIds.has(message.clientMessageId)) {
      return false;
    }

    seenIds.add(message.id);
    if (message.clientMessageId) {
      seenClientIds.add(message.clientMessageId);
    }

    return true;
  });
};

export const appendMessageToCache = (old: unknown, message: Message) => {
  const pagesData = old as MessagePages | undefined;
  if (!pagesData) {
    return {
      pages: [{ items: [message], nextCursor: null }],
      pageParams: [null],
    } satisfies MessagePages;
  }

  const pages = [...pagesData.pages];
  const lastPageIndex = pages.length - 1;
  const lastPage = pages[lastPageIndex] ?? { items: [], nextCursor: null };
  const filteredItems = lastPage.items.filter((item) => {
    if (item.id === message.id) {
      return false;
    }
    if (message.clientMessageId && item.optimisticId === message.clientMessageId) {
      return false;
    }
    if (message.clientMessageId && item.clientMessageId === message.clientMessageId) {
      return false;
    }
    return true;
  });

  pages[lastPageIndex] = {
    ...lastPage,
    items: dedupeMessages([...filteredItems, message]),
  };

  return { ...pagesData, pages };
};

export const mapMessageInCache = (
  old: unknown,
  predicate: (message: Message) => boolean,
  transform: (message: Message) => Message,
) => {
  const pagesData = old as MessagePages | undefined;
  if (!pagesData) {
    return old;
  }

  const pages = pagesData.pages.map((page) => ({
    ...page,
    items: page.items.map((message) =>
      predicate(message) ? transform(message) : message,
    ),
  }));

  return { ...pagesData, pages };
};

export const removeMessageFromCache = (
  old: unknown,
  predicate: (message: Message) => boolean,
) => {
  const pagesData = old as MessagePages | undefined;
  if (!pagesData) {
    return old;
  }

  const pages = pagesData.pages.map((page) => ({
    ...page,
    items: page.items.filter((message) => !predicate(message)),
  }));

  return { ...pagesData, pages };
};

export const flattenMessages = (pages?: unknown) =>
  dedupeMessages(
    (pages as MessagePages | undefined)?.pages.flatMap((page) => page.items) ?? [],
  );

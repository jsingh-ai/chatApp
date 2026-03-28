import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

let nextClientMessageId = 0;

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const createClientMessageId = (prefix = 'client') => {
  nextClientMessageId += 1;
  return `${prefix}-${nextClientMessageId}`;
};

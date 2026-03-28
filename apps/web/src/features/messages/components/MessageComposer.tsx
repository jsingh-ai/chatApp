'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';

import { createClientMessageId } from '@/lib/utils';
import { useSendMessageMutation } from '@/services/queries';
import { getSocket } from '@/lib/socket';

export const MessageComposer = ({ channelId }: { channelId: string }) => {
  const [message, setMessage] = useState('');
  const sendMessage = useSendMessageMutation(channelId);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);
  const typingActive = useRef(false);

  const emitTyping = (type: 'start' | 'stop') => {
    const socket = getSocket();
    if (!socket || !channelId) {
      return;
    }
    socket.emit(`typing:${type}`, { channelId });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!message.trim()) return;
    const clientMessageId = createClientMessageId();
    await sendMessage.mutateAsync({ content: message, clientMessageId });
    setMessage('');
    if (typingActive.current) {
      typingActive.current = false;
      emitTyping('stop');
    }
  };

  const handleTypingStart = () => {
    if (!typingActive.current && message.trim().length > 0) {
      typingActive.current = true;
      emitTyping('start');
    }
    if (typingTimeout.current) {
      clearTimeout(typingTimeout.current);
    }
    typingTimeout.current = setTimeout(() => {
      if (typingActive.current) {
        typingActive.current = false;
        emitTyping('stop');
      }
    }, 2500);
  };

  useEffect(() => {
    return () => {
      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }
      if (typingActive.current) {
        emitTyping('stop');
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channelId]);

  return (
    <form onSubmit={handleSubmit} className="border-t border-slate-800 bg-slate-900 p-4">
      <div className="flex gap-2">
        <input
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
            handleTypingStart();
          }}
          placeholder="Write a message..."
          className="flex-1 rounded-md border border-slate-700 bg-slate-950 px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-slate-500"
        />
        <button
          type="submit"
          className="rounded-md bg-indigo-500 px-4 py-3 text-sm font-semibold text-white disabled:opacity-60"
          disabled={sendMessage.isPending || !message.trim()}
        >
          {sendMessage.isPending ? 'Sending…' : 'Send'}
        </button>
      </div>
    </form>
  );
};

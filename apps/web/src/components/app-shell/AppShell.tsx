'use client';

import { ReactNode } from 'react';

import { OrganizationSidebar } from './OrganizationSidebar';
import { ChannelSidebar } from './ChannelSidebar';

export const AppShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen bg-slate-950 text-slate-100">
      <OrganizationSidebar />
      <ChannelSidebar />
      <div className="flex flex-1 flex-col border-l border-slate-800 bg-slate-900">
        {children}
      </div>
    </div>
  );
};

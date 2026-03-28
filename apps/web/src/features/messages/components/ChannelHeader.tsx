'use client';

export const ChannelHeader = ({
  name,
  description,
}: {
  name?: string;
  description?: string | null;
}) => {
  return (
    <header className="border-b border-slate-800 bg-slate-900 px-6 py-4">
      <h1 className="text-lg font-semibold text-white">
        {name ? `#${name}` : 'Channel'}
      </h1>
      {description ? (
        <p className="text-sm text-slate-400">{description}</p>
      ) : (
        <p className="text-sm text-slate-500">Start the conversation with your team.</p>
      )}
    </header>
  );
};

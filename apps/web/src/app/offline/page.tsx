export default function OfflinePage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
      <div className="max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-8 text-center shadow-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
          Offline
        </p>
        <h1 className="mt-4 text-3xl font-semibold text-white">
          chatApp is temporarily offline
        </h1>
        <p className="mt-3 text-sm text-slate-400">
          Your network connection dropped. Reconnect to keep chatting, and reopen the app
          when service returns.
        </p>
      </div>
    </main>
  );
}

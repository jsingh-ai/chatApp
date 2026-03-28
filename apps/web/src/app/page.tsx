import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-6 py-16 text-center">
      <p className="text-sm uppercase tracking-widest text-indigo-400">chatApp</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold text-white md:text-5xl">
        A focused space for teams to organize discussions and keep history searchable.
      </h1>
      <p className="mt-6 max-w-2xl text-base text-slate-400">
        Authenticate securely, create organizations, spin up channels, and keep every
        conversation ready for AI-powered summaries.
      </p>
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        <Link
          href="/register"
          className="rounded-full bg-indigo-500 px-8 py-3 text-sm font-semibold text-white"
        >
          Get Started
        </Link>
        <Link
          href="/login"
          className="rounded-full border border-slate-600 px-8 py-3 text-sm font-semibold text-white"
        >
          Sign In
        </Link>
      </div>
    </main>
  );
}

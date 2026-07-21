import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      <section className="py-20 text-center">
        <p className="mb-4 text-cyan-400 text-sm uppercase tracking-widest">NBA • NFL • MLB Props</p>
        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
          Smarter player props with
          <span className="text-cyan-400"> transparent edge</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-slate-300">
          qualityProps delivers data-backed picks, confidence ratings, and public tracking so you can bet with process.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Link href="/signup" className="rounded-md bg-cyan-500 px-5 py-3 font-semibold text-slate-950">
            Get Started
          </Link>
          <Link href="/picks" className="rounded-md border border-slate-700 px-5 py-3">
            View Picks
          </Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3 pb-12">
        {[
          ["Model-backed picks", "Each pick includes a confidence score and rationale."],
          ["Transparent tracking", "Daily and monthly results updated in one public dashboard."],
          ["Bankroll-first process", "Units and risk are standardized for consistent sizing."],
        ].map(([title, desc]) => (
          <div key={title} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h3 className="font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-slate-300">{desc}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

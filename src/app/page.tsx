import Link from "next/link";

const pillars = [
  {
    title: "Model-backed picks",
    desc: "Every recommendation includes edge context, confidence grading, and market notes.",
  },
  {
    title: "Transparent tracking",
    desc: "Results are publicly logged with win rate, ROI, and unit movement.",
  },
  {
    title: "Bankroll-first approach",
    desc: "Clear unit sizing guidance designed for long-term discipline.",
  },
];

const samplePicks = [
  { sport: "NBA", player: "J. Tatum", market: "Points Over 27.5", odds: "-110", conf: "A" },
  { sport: "NFL", player: "T. Hill", market: "Receptions Over 6.5", odds: "+102", conf: "B+" },
  { sport: "MLB", player: "M. Betts", market: "Hits Under 1.5", odds: "-120", conf: "B" },
];

const testimonials = [
  {
    quote: "The confidence grades help me filter noise and bet with a plan.",
    name: "Jordan R.",
  },
  {
    quote: "Best part is the transparency — results are right there, no hiding.",
    name: "Alex M.",
  },
  {
    quote: "Clean UI, clear data, and no hype. Exactly what I wanted.",
    name: "Chris D.",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-slate-800/80">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="container-shell relative py-16 md:py-24">
          <p className="mb-4 inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">
            NBA • NFL • MLB Props
          </p>
          <h1 className="max-w-4xl text-4xl font-black leading-tight md:text-6xl">
            Smarter player props with
            <span className="text-cyan-400"> transparent edge</span>
          </h1>
          <p className="mt-6 max-w-2xl text-slate-300 md:text-lg">
            qualityProps combines matchup context, line movement, and performance trends to publish
            actionable picks with disciplined unit guidance.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              Get Started
            </Link>
            <Link
              href="/picks"
              className="rounded-lg border border-slate-700 px-5 py-3 font-medium text-slate-100 transition hover:border-slate-500 hover:bg-slate-900"
            >
              View Today&apos;s Picks
            </Link>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              ["57.8%", "Win Rate"],
              ["+11.4%", "ROI"],
              ["+42.7u", "Net Units"],
            ].map(([value, label]) => (
              <div key={label} className="glass-card p-4">
                <p className="text-2xl font-bold text-cyan-300">{value}</p>
                <p className="mt-1 text-sm text-slate-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-shell py-14 md:py-20">
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map((item) => (
            <div key={item.title} className="glass-card p-6">
              <h2 className="text-lg font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-slate-300">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-shell py-4 md:py-8">
        <div className="glass-card overflow-hidden">
          <div className="border-b border-slate-800 p-5">
            <h2 className="text-xl font-semibold">Sample Picks Snapshot</h2>
            <p className="mt-1 text-sm text-slate-400">What a typical slate looks like in your dashboard.</p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-slate-900/70 text-slate-300">
                <tr>
                  <th className="p-3 text-left font-medium">Sport</th>
                  <th className="p-3 text-left font-medium">Player</th>
                  <th className="p-3 text-left font-medium">Market</th>
                  <th className="p-3 text-center font-medium">Odds</th>
                  <th className="p-3 text-center font-medium">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {samplePicks.map((pick) => (
                  <tr key={pick.player + pick.market} className="border-t border-slate-800/80">
                    <td className="p-3">{pick.sport}</td>
                    <td className="p-3">{pick.player}</td>
                    <td className="p-3">{pick.market}</td>
                    <td className="p-3 text-center">{pick.odds}</td>
                    <td className="p-3 text-center">
                      <span className="rounded-md border border-cyan-400/30 bg-cyan-500/10 px-2 py-1 text-xs font-semibold text-cyan-300">
                        {pick.conf}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="container-shell py-14 md:py-20">
        <div className="mb-6">
          <h2 className="section-title">What members are saying</h2>
          <p className="section-subtitle">Built for serious prop bettors who care about process over hype.</p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote key={t.name} className="glass-card p-6">
              <p className="text-slate-200">“{t.quote}”</p>
              <footer className="mt-4 text-sm text-slate-400">— {t.name}</footer>
            </blockquote>
          ))}
        </div>
      </section>

      <section className="container-shell pb-20">
        <div className="glass-card bg-gradient-to-r from-slate-900 to-cyan-950/40 p-8 md:p-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-bold md:text-3xl">Ready to bet props with structure?</h2>
              <p className="mt-2 max-w-xl text-slate-300">
                Join qualityProps and get daily, model-informed picks with transparent tracking and clear unit guidance.
              </p>
            </div>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center rounded-lg bg-cyan-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

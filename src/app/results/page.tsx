export const metadata = {
  title: "Results",
  description: "Track win rate, ROI, and unit growth over time at qualityProps.",
};

export default function ResultsPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Results</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {[
          ["Win Rate", "57.8%"],
          ["ROI", "+11.4%"],
          ["Units", "+42.7u"],
        ].map(([k, v]) => (
          <div key={k} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <p className="text-slate-400 text-sm">{k}</p>
            <p className="mt-2 text-3xl font-bold text-cyan-400">{v}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export const metadata = {
  title: "Picks",
  description: "Today's qualityProps picks with confidence and odds context.",
};

const picks = [
  { sport: "NBA", player: "J. Tatum", market: "Points Over 27.5", odds: "-110", conf: "A", status: "Open" },
  { sport: "NFL", player: "T. Hill", market: "Receptions Over 6.5", odds: "+102", conf: "B+", status: "Won" },
  { sport: "MLB", player: "M. Betts", market: "Hits Under 1.5", odds: "-120", conf: "B", status: "Lost" },
  { sport: "NBA", player: "S. Curry", market: "3PM Over 4.5", odds: "+115", conf: "A-", status: "Open" },
];

const statusColor: Record<string, string> = {
  Open: "border-amber-400/30 bg-amber-500/10 text-amber-300",
  Won: "border-emerald-400/30 bg-emerald-500/10 text-emerald-300",
  Lost: "border-rose-400/30 bg-rose-500/10 text-rose-300",
};

export default function PicksPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="section-title">Picks Board</h1>
          <p className="section-subtitle">Daily props with confidence grades and clean tracking.</p>
        </div>
        <div className="text-sm text-slate-400">Updated: Today, 9:30 AM ET</div>
      </div>

      <div className="glass-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-sm">
            <thead className="bg-slate-900/70 text-slate-300">
              <tr>
                <th className="p-3 text-left font-medium">Sport</th>
                <th className="p-3 text-left font-medium">Player</th>
                <th className="p-3 text-left font-medium">Market</th>
                <th className="p-3 text-center font-medium">Odds</th>
                <th className="p-3 text-center font-medium">Confidence</th>
                <th className="p-3 text-center font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {picks.map((pick) => (
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
                  <td className="p-3 text-center">
                    <span className={`rounded-md border px-2 py-1 text-xs font-semibold ${statusColor[pick.status]}`}>
                      {pick.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

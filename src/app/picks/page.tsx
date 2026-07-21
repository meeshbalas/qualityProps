export const metadata = {
  title: "Picks",
  description: "Today's qualityProps picks with confidence and odds context.",
};

const picks = [
  { player: "J. Tatum", market: "Points Over 27.5", odds: "-110", conf: "A", status: "Open" },
  { player: "T. Hill", market: "Receptions Over 6.5", odds: "+102", conf: "B+", status: "Won" },
  { player: "M. Betts", market: "Hits Under 1.5", odds: "-120", conf: "B", status: "Lost" },
];

export default function PicksPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Picks Board</h1>
      <div className="mt-8 overflow-hidden rounded-xl border border-slate-800">
        <table className="w-full text-sm">
          <thead className="bg-slate-900">
            <tr>
              <th className="p-3 text-left">Player</th><th className="p-3 text-left">Market</th><th className="p-3">Odds</th><th className="p-3">Confidence</th><th className="p-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {picks.map((p) => (
              <tr key={p.player + p.market} className="border-t border-slate-800">
                <td className="p-3">{p.player}</td><td className="p-3">{p.market}</td><td className="p-3 text-center">{p.odds}</td><td className="p-3 text-center">{p.conf}</td><td className="p-3 text-center">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

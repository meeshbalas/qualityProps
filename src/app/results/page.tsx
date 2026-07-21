export const metadata = {
  title: "Results",
  description: "Track win rate, ROI, and unit growth over time at qualityProps.",
};

const metrics = [
  ["Win Rate", "57.8%", "+2.3% this month"],
  ["ROI", "+11.4%", "+1.1% this week"],
  ["Net Units", "+42.7u", "+4.2u last 7 days"],
];

const monthRows = [
  ["January", "56.2%", "+8.1%", "+9.4u"],
  ["February", "58.7%", "+12.4%", "+14.2u"],
  ["March", "57.1%", "+10.3%", "+11.8u"],
];

export default function ResultsPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <h1 className="section-title">Results Dashboard</h1>
      <p className="section-subtitle">Transparent performance tracking across all posted plays.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {metrics.map(([label, value, note]) => (
          <div key={label} className="glass-card p-5">
            <p className="text-sm text-slate-400">{label}</p>
            <p className="mt-2 text-3xl font-black text-cyan-300">{value}</p>
            <p className="mt-2 text-xs text-slate-400">{note}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 glass-card overflow-hidden">
        <div className="border-b border-slate-800 p-5">
          <h2 className="text-lg font-semibold">Monthly Performance</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-sm">
            <thead className="bg-slate-900/70 text-slate-300">
              <tr>
                <th className="p-3 text-left font-medium">Month</th>
                <th className="p-3 text-center font-medium">Win Rate</th>
                <th className="p-3 text-center font-medium">ROI</th>
                <th className="p-3 text-center font-medium">Units</th>
              </tr>
            </thead>
            <tbody>
              {monthRows.map((row) => (
                <tr key={row[0]} className="border-t border-slate-800/80">
                  <td className="p-3">{row[0]}</td>
                  <td className="p-3 text-center">{row[1]}</td>
                  <td className="p-3 text-center">{row[2]}</td>
                  <td className="p-3 text-center">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export const metadata = {
  title: "Pricing",
  description: "Choose a qualityProps plan that fits your props betting workflow.",
};

export default function PricingPage() {
  const tiers = [
    { name: "Starter", price: "$19/mo", features: ["3 picks/week", "Basic dashboard", "Email alerts"] },
    { name: "Pro", price: "$49/mo", features: ["Daily picks", "Advanced filters", "Discord access"] },
    { name: "Elite", price: "$99/mo", features: ["All sports", "Early lines", "Priority support"] },
  ];
  return (
    <div className="mx-auto max-w-6xl px-4 py-16">
      <h1 className="text-4xl font-bold">Pricing</h1>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.name} className="rounded-xl border border-slate-800 bg-slate-900/50 p-6">
            <h2 className="text-xl font-semibold">{t.name}</h2>
            <p className="mt-2 text-3xl font-bold text-cyan-400">{t.price}</p>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {t.features.map((f) => <li key={f}>• {f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

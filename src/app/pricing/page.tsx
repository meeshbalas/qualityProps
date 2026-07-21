export const metadata = {
  title: "Pricing",
  description: "Choose a qualityProps plan that fits your props betting workflow.",
};

const tiers = [
  {
    name: "Starter",
    price: "$19/mo",
    subtitle: "Perfect for trying the workflow",
    features: ["3 picks/week", "Basic dashboard", "Email alerts"],
    cta: "Start Starter",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$49/mo",
    subtitle: "Best for consistent daily action",
    features: ["Daily picks", "Advanced filters", "Discord access"],
    cta: "Go Pro",
    highlight: true,
  },
  {
    name: "Elite",
    price: "$99/mo",
    subtitle: "For high-volume bettors",
    features: ["All sports", "Early lines", "Priority support"],
    cta: "Choose Elite",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <h1 className="section-title">Simple, transparent pricing</h1>
      <p className="section-subtitle">
        Start small, then scale up as your betting volume grows. Cancel anytime.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {tiers.map((tier) => (
          <article
            key={tier.name}
            className={`glass-card p-6 ${tier.highlight ? "ring-2 ring-cyan-400/60" : ""}`}
          >
            {tier.highlight ? (
              <p className="mb-3 inline-flex rounded-full border border-cyan-400/40 bg-cyan-500/10 px-2.5 py-1 text-xs font-semibold text-cyan-300">
                Most Popular
              </p>
            ) : null}
            <h2 className="text-xl font-semibold">{tier.name}</h2>
            <p className="mt-1 text-sm text-slate-400">{tier.subtitle}</p>
            <p className="mt-5 text-4xl font-black text-cyan-300">{tier.price}</p>
            <ul className="mt-5 space-y-2 text-sm text-slate-200">
              {tier.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span className="text-cyan-300">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button
              className={`mt-7 w-full rounded-lg px-4 py-2.5 font-semibold transition ${
                tier.highlight
                  ? "bg-cyan-500 text-slate-950 hover:bg-cyan-400"
                  : "border border-slate-700 text-slate-100 hover:bg-slate-900"
              }`}
            >
              {tier.cta}
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}

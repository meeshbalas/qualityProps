export const metadata = {
  title: "FAQ",
  description: "Common questions about qualityProps picks, process, and billing.",
};

const faqs = [
  ["How often are picks posted?", "Daily for active slates."],
  ["Are results tracked publicly?", "Yes, all settled picks are logged."],
  ["Do you guarantee wins?", "No. We focus on long-term edge and discipline."],
  ["What sports are covered?", "NBA, NFL, and MLB."],
  ["Can I cancel anytime?", "Yes, subscriptions can be canceled anytime."],
  ["Do you offer free picks?", "Occasionally via newsletter/social."],
  ["How do confidence grades work?", "A to C grades based on model edge and market context."],
  ["Is this gambling advice?", "No. It is informational analytics content."],
];

export default function FAQPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold">FAQ</h1>
      <div className="mt-8 space-y-4">
        {faqs.map(([q, a]) => (
          <div key={q} className="rounded-xl border border-slate-800 bg-slate-900/50 p-5">
            <h2 className="font-semibold">{q}</h2>
            <p className="mt-2 text-slate-300">{a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

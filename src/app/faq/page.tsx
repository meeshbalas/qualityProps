const faqs = [
  ["How often are picks posted?", "Daily for active slates, typically 1–3 hours before lock."],
  ["Are results tracked publicly?", "Yes. Settled picks are logged with outcomes and units."],
  ["Do you guarantee wins?", "No. There are no guarantees in betting; we focus on long-term process."],
  ["What sports are covered?", "NBA, NFL, and MLB."],
  ["Can I cancel anytime?", "Yes, plans can be canceled at any time from your account."],
  ["Do you offer free picks?", "Yes — occasional free plays are posted via newsletter/social."],
  ["How do confidence grades work?", "Grades reflect model edge, matchup quality, and market stability."],
  ["Is this gambling advice?", "No. It is informational analytics content only."],
];

export const metadata = {
  title: "FAQ",
  description: "Common questions about qualityProps picks, process, and membership.",
};

export default function FAQPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <h1 className="section-title">Frequently Asked Questions</h1>
      <p className="section-subtitle">Everything you need to know before joining qualityProps.</p>

      <div className="mt-8 space-y-3">
        {faqs.map(([q, a]) => (
          <details key={q} className="glass-card group p-5 open:border-cyan-400/50">
            <summary className="cursor-pointer list-none pr-6 font-semibold marker:content-none">
              <span className="inline-flex items-center gap-2">
                <span className="text-cyan-300 transition group-open:rotate-45">＋</span>
                {q}
              </span>
            </summary>
            <p className="mt-3 text-sm text-slate-300">{a}</p>
          </details>
        ))}
      </div>
    </div>
  );
}

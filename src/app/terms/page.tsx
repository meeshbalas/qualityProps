export const metadata = {
  title: "Terms of Service",
  description: "qualityProps terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <h1 className="section-title">Terms of Service</h1>
      <div className="mt-6 space-y-6 text-slate-300 glass-card p-6 md:p-8">
        <section>
          <h2 className="text-lg font-semibold text-white">Informational Use Only</h2>
          <p className="mt-2">
            qualityProps provides sports analytics content for informational purposes only. It is not financial or legal advice.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">No Guaranteed Outcomes</h2>
          <p className="mt-2">
            Betting outcomes are inherently uncertain. Past performance does not guarantee future results.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Account & Billing</h2>
          <p className="mt-2">
            Subscription terms, renewals, and cancellations are managed through your account settings.
          </p>
        </section>
      </div>
    </div>
  );
}

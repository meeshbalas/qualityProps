export const metadata = {
  title: "Privacy Policy",
  description: "How qualityProps handles user data and privacy.",
};

export default function PrivacyPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <h1 className="section-title">Privacy Policy</h1>
      <div className="mt-6 space-y-6 text-slate-300 glass-card p-6 md:p-8">
        <section>
          <h2 className="text-lg font-semibold text-white">Information We Collect</h2>
          <p className="mt-2">
            We may collect account information, usage analytics, and billing-related details to operate the service.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">How We Use Information</h2>
          <p className="mt-2">
            Data is used to deliver product features, manage subscriptions, improve performance, and provide support.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-white">Security & Retention</h2>
          <p className="mt-2">
            We apply reasonable safeguards and retain data only as long as needed to provide the service.
          </p>
        </section>
      </div>
    </div>
  );
}

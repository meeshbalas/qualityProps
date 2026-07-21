export const metadata = {
  title: "Contact",
  description: "Contact qualityProps for support, partnerships, and product questions.",
};

export default function ContactPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="grid gap-6 md:grid-cols-[1.1fr_1fr]">
        <section className="glass-card p-6 md:p-8">
          <h1 className="section-title">Contact Us</h1>
          <p className="mt-3 text-slate-300">
            Questions about plans, picks, or partnerships? Send us a message and we&apos;ll get back to you.
          </p>
          <div className="mt-8 space-y-3 text-sm text-slate-300">
            <p><span className="text-slate-400">Email:</span> support@qualityprops.com</p>
            <p><span className="text-slate-400">X/Twitter:</span> @qualityprops</p>
            <p><span className="text-slate-400">Response time:</span> Usually within 24 hours</p>
          </div>
        </section>

        <form className="glass-card p-6 md:p-8 space-y-4">
          <div>
            <label htmlFor="name" className="mb-1 block text-sm text-slate-300">Name</label>
            <input
              id="name"
              placeholder="Your name"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5 outline-none transition focus:border-cyan-400/70"
            />
          </div>
          <div>
            <label htmlFor="email" className="mb-1 block text-sm text-slate-300">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5 outline-none transition focus:border-cyan-400/70"
            />
          </div>
          <div>
            <label htmlFor="message" className="mb-1 block text-sm text-slate-300">Message</label>
            <textarea
              id="message"
              rows={6}
              placeholder="How can we help?"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5 outline-none transition focus:border-cyan-400/70"
            />
          </div>
          <button className="w-full rounded-lg bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}

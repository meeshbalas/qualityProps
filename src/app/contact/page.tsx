export const metadata = {
  title: "Contact",
  description: "Contact qualityProps for support, partnerships, and product questions.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-4xl font-bold">Contact</h1>
      <form className="mt-8 space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
        <div>
          <label htmlFor="name" className="block text-sm mb-1">Name</label>
          <input id="name" className="w-full rounded-md bg-slate-950 border border-slate-700 p-2" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm mb-1">Email</label>
          <input id="email" type="email" className="w-full rounded-md bg-slate-950 border border-slate-700 p-2" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm mb-1">Message</label>
          <textarea id="message" rows={5} className="w-full rounded-md bg-slate-950 border border-slate-700 p-2" />
        </div>
        <button className="rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Send Message</button>
      </form>
    </div>
  );
}

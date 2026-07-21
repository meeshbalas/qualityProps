export const metadata = {
  title: "Sign Up",
  description: "Create your qualityProps account.",
};

export default function SignupPage() {
  return (
    <div className="container-shell py-16 md:py-20">
      <div className="mx-auto max-w-md glass-card p-6 md:p-8">
        <h1 className="text-3xl font-bold">Create your account</h1>
        <p className="mt-2 text-sm text-slate-400">Get access to daily picks and transparent tracking.</p>

        <form className="mt-6 space-y-4">
          <div>
            <label htmlFor="full-name" className="mb-1 block text-sm text-slate-300">Full name</label>
            <input
              id="full-name"
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
            <label htmlFor="password" className="mb-1 block text-sm text-slate-300">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-700 bg-slate-950/80 px-3 py-2.5 outline-none transition focus:border-cyan-400/70"
            />
          </div>
          <button className="w-full rounded-lg bg-cyan-500 px-4 py-2.5 font-semibold text-slate-950 transition hover:bg-cyan-400">
            Get Started
          </button>
        </form>
      </div>
    </div>
  );
}

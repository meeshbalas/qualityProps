export const metadata = {
  title: "Sign Up",
  description: "Create your qualityProps account.",
};

export default function SignupPage() {
  return (
    <div className="mx-auto max-w-md px-4 py-16">
      <h1 className="text-3xl font-bold">Create account</h1>
      <form className="mt-6 space-y-4 rounded-xl border border-slate-800 bg-slate-900/50 p-6">
        <input placeholder="Full name" className="w-full rounded-md bg-slate-950 border border-slate-700 p-2" />
        <input placeholder="Email" className="w-full rounded-md bg-slate-950 border border-slate-700 p-2" />
        <input type="password" placeholder="Password" className="w-full rounded-md bg-slate-950 border border-slate-700 p-2" />
        <button className="w-full rounded-md bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Get Started</button>
      </form>
    </div>
  );
}

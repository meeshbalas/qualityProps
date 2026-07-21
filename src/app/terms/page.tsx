export const metadata = {
  title: "Terms of Service",
  description: "qualityProps terms and conditions.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-16">
      <h1 className="text-4xl font-bold">Terms of Service</h1>
      <div className="mt-6 space-y-4 text-slate-300">
        <p>These terms are placeholder legal text and should be reviewed by counsel before production use.</p>
        <h2 className="text-xl font-semibold text-white">Use of Service</h2>
        <p>qualityProps provides informational sports analytics content only.</p>
        <h2 className="text-xl font-semibold text-white">No Guarantee</h2>
        <p>No outcomes are guaranteed. Users accept all betting risk.</p>
      </div>
    </div>
  );
}

import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-slate-800/90">
      <div className="container-shell py-10 text-sm text-slate-400">
        <div className="grid gap-8 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="text-lg font-semibold text-slate-200">
              quality<span className="text-cyan-400">Props</span>
            </p>
            <p className="mt-2 max-w-sm text-slate-400">
              Data-driven player props with transparent tracking and disciplined bankroll framing.
            </p>
          </div>

          <div>
            <p className="font-semibold text-slate-200">Explore</p>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="/pricing">Pricing</Link>
              <Link href="/picks">Picks</Link>
              <Link href="/results">Results</Link>
            </div>
          </div>

          <div>
            <p className="font-semibold text-slate-200">Company</p>
            <div className="mt-2 flex flex-col gap-2">
              <Link href="/faq">FAQ</Link>
              <Link href="/contact">Contact</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/privacy">Privacy</Link>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-500">
          © {new Date().getFullYear()} qualityProps. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

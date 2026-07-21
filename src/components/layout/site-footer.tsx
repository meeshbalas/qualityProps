import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-800 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-400">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} qualityProps. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

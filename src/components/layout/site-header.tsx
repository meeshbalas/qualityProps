import Link from "next/link";

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/picks", label: "Picks" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          quality<span className="text-cyan-400">Props</span>
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-slate-300 hover:text-white">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex gap-2">
          <Link href="/login" className="rounded-md border border-slate-700 px-3 py-1.5 text-sm">
            Log in
          </Link>
          <Link href="/signup" className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-slate-950">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
}

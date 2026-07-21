"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/pricing", label: "Pricing" },
  { href: "/picks", label: "Picks" },
  { href: "/results", label: "Results" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <div className="container-shell">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-bold tracking-tight">
            quality<span className="text-cyan-400">Props</span>
          </Link>

          <nav className="hidden gap-6 md:flex">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="text-sm text-slate-300 transition hover:text-white">
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link href="/login" className="rounded-md border border-slate-700 px-3 py-1.5 text-sm hover:bg-slate-900">
              Log in
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-cyan-500 px-3 py-1.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-400"
            >
              Get Started
            </Link>
          </div>

          <button
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-slate-700 p-2 text-slate-200 md:hidden"
          >
            <span className="text-lg leading-none">{mobileOpen ? "✕" : "☰"}</span>
          </button>
        </div>

        {mobileOpen ? (
          <div className="md:hidden border-t border-slate-800 py-3">
            <nav className="flex flex-col gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md px-2 py-2 text-sm text-slate-200 hover:bg-slate-900"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2">
                <Link
                  href="/login"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md border border-slate-700 px-3 py-2 text-center text-sm"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-md bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-slate-950"
                >
                  Get Started
                </Link>
              </div>
            </nav>
          </div>
        ) : null}
      </div>
    </header>
  );
}

"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/cn";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

const nav = {
  primary: [{ href: "/about", label: "About" }],
  groups: [
    {
      label: "Ecosystem",
      items: [
        { href: "/capacity-ecosystem", label: "Capacity Ecosystem" },
        { href: "/mobility-sectors", label: "Mobility Sectors" },
        { href: "/network", label: "Network" },
      ],
    },
    {
      label: "Programs",
      items: [
        { href: "/strategic-programs", label: "Strategic Programs" },
        { href: "/active-requirements", label: "Execution Ready Facilities" },
      ],
    },
    {
      label: "Knowledge",
      items: [
        { href: "/resources", label: "Resources" },
        { href: "/insights", label: "Insights" },
      ],
    },
    {
      label: "Network",
      items: [
        { href: "https://wa.link/bspaba", label: "Join Network" },
        { href: "/login", label: "Login" },
      ],
    },
  ],
} as const;

function DesktopGroup({
  label,
  items,
}: {
  label: string;
  items: ReadonlyArray<{ href: string; label: string }>;
}) {
  return (
    <div className="group relative" tabIndex={-1}>
      <button
        type="button"
        className="inline-flex items-center gap-1 text-foreground/80 transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
      >
        {label}
        <span className="text-xs opacity-70">▾</span>
      </button>
      <div className="pointer-events-none absolute right-0 top-full w-64 pt-3 opacity-0 transition-opacity group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="translate-y-1 rounded-2xl border border-border bg-background p-2 shadow-lg transition-transform group-hover:translate-y-0 group-focus-within:translate-y-0">
          {items.map((i) => (
            <Link
              key={i.label}
              href={i.href}
              className="block rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40"
            >
              {i.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  const primaryItems = useMemo(() => nav.primary, []);
  const groupedItems = useMemo(() => nav.groups, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex max-w-7xl items-center justify-between gap-4 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.png" 
            alt="Balbird Industries" 
            width={40} 
            height={40} 
            className="h-10 w-auto"
          />
          <div className="flex flex-col">
            <span className="text-lg font-semibold tracking-tight">Balbird Industries</span>
            <span className="text-xs text-foreground/60">empowering industries</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-5 text-sm md:flex">
          {primaryItems.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-foreground/80 transition-colors hover:text-foreground"
            >
              {i.label}
            </Link>
          ))}
          {groupedItems.map((g) => (
            <DesktopGroup key={g.label} label={g.label} items={g.items} />
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ButtonLink href="/request-strategic-discussion" className="hidden md:inline-flex">
            Request Strategic Discussion
          </ButtonLink>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground/80 transition-colors hover:bg-muted md:hidden"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span className="text-lg leading-none">≡</span>
          </button>
        </div>
      </Container>

      <div
        className={cn(
          "border-t border-border bg-background md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <Container className="max-w-7xl py-4">
          <div className="flex flex-col gap-2">
            {primaryItems.map((i) => (
              <Link
                key={i.label}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
              >
                {i.label}
              </Link>
            ))}
            {groupedItems.map((g) => (
              <div key={g.label} className="mt-2">
                <div className="px-3 py-2 text-xs font-medium tracking-wide text-foreground/60">
                  {g.label}
                </div>
                <div className="flex flex-col gap-1">
                  {g.items.map((i) => (
                    <Link
                      key={i.label}
                      href={i.href}
                      onClick={() => setOpen(false)}
                      className="rounded-xl px-3 py-2 text-sm text-foreground/80 hover:bg-muted hover:text-foreground"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <ButtonLink
              href="/request-strategic-discussion"
              className="mt-2"
            >
              Request Strategic Discussion
            </ButtonLink>
          </div>
        </Container>
      </div>
    </header>
  );
}

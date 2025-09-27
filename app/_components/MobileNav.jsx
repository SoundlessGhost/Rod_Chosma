"use client";

import Link from "next/link";

import {
  Sheet,
  SheetTitle,
  SheetClose,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { Menu, ChevronRight, Handbag, HatGlasses } from "lucide-react";

const topLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Product" },
  {
    href: "/https://www.google.com/search?client=safari&sca_esv=fd496c6a494bc8db&hl=en-bd&cs=0&output=search&kgmid=/g/11mr20g365&q=Rod+Chosma&shndl=30&source=sh/x/loc/act/m1/3&kgs=9dab9cdcb53c5be8&shem=shrtsdl&utm_source=shrtsdl,sh/x/loc/act/m1/3",
    label: "About",
  },
  { href: "/catalog.pdf", label: "Catalog" },
];

const browseLinks = [{ href: "/help", label: "Customer Help" }];

const socialLinks = [
  { href: "https://www.facebook.com/rod.chosma.9", label: "Facebook" },
  { href: "https://www.instagram.com/rod_chosma/?__pwa=1", label: "Instagram" },
];

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open navigation"
          className="inline-flex cursor-pointer  items-center justify-center rounded-full border border-white/30 p-2 text-white/80 transition hover:border-white/60 hover:text-white"
          type="button"
        >
          <Menu className="size-4" />
        </button>
      </SheetTrigger>

      {/* header | body (scroll) | footer */}
      <SheetContent
        side="right"
        className="w-[92vw] max-w-sm p-0 h-[100dvh] grid grid-rows-[auto,1fr,auto]
                   bg-black/85 text-white backdrop-blur-md
                   border-l border-white/10 shadow-2xl"
      >
        {/* accessible header */}
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>Site sections</SheetDescription>
        </SheetHeader>

        {/* Brand */}
        <div className="px-5 py-4 border-b border-white/10 bg-black/70">
          <Link
            href="/"
            className="text-lg inline-flex items-center gap-2 font-bold tracking-[0.15em]
                       text-white hover:text-white/90 transition-colors"
          >
            <span className="w-8 h-8 rounded-lg bg-red-600 text-white flex items-center justify-center shadow-md">
              <HatGlasses size={18} />
            </span>
            RODCHOSMA
          </Link>
        </div>

        {/* Body */}
        <div className="overflow-y-auto">
          {/* top links — dense rows, glass look */}
          <nav aria-label="Categories" className="divide-y divide-white/10">
            {topLinks.map((l, i) => {
              const isCatalog = l.label === "Catalog"; // detect catalog link

              if (isCatalog) {
                return (
                  <a
                    key={i}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-5 py-3 text-[15px]
                       bg-white/0 hover:bg-white/10 transition rounded-none"
                  >
                    <span className="text-white">{l.label}</span>
                    <ChevronRight size={18} className="text-white/40" />
                  </a>
                );
              }

              return (
                <SheetClose asChild key={i}>
                  <Link
                    href={l.href}
                    className="flex items-center justify-between px-5 py-3 text-[15px]
                       bg-white/0 hover:bg-white/10 transition rounded-none"
                  >
                    <span className="text-white">{l.label}</span>
                    <ChevronRight size={18} className="text-white/40" />
                  </Link>
                </SheetClose>
              );
            })}
          </nav>

          {/* sections */}
          <div className="px-5 py-5 space-y-6">
            {/* BROWSE */}
            <section>
              <h4 className="text-xs font-semibold tracking-widest text-white/50 mb-2">
                BROWSE
              </h4>
              <ul className="space-y-1">
                {browseLinks.map((l, i) => (
                  <li key={i}>
                    <SheetClose asChild>
                      <Link
                        href={l.href}
                        className="inline-flex items-center py-1 text-[15px] text-white/90 hover:underline"
                      >
                        {l.label}
                      </Link>
                    </SheetClose>
                  </li>
                ))}
              </ul>
            </section>

            {/* WANT TO CHAT? */}
            <section>
              <h4 className="text-xs font-semibold tracking-widest text-white/50 mb-2">
                WANT TO CHAT?
              </h4>
              <div className="text-[15px] text-white/90">
                Call us{" "}
                <span className="text-red-500 font-medium hover:underline">
                  01713735888, 01717018185
                </span>
              </div>
            </section>

            {/* SOCIAL */}
            <section>
              <h4 className="text-xs font-semibold tracking-widest text-white/50 mb-2">
                SOCIAL
              </h4>
              <ul className="space-y-1">
                {socialLinks.map((l, i) => (
                  <li key={i}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center py-1 text-[15px] text-white/90 hover:underline"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="px-5 py-4 border-t border-white/10 bg-black/70 backdrop-blur-md">
          <SheetClose asChild>
            <Link
              href="/"
              className="inline-flex items-center justify-center w-full rounded-md
                         bg-red-600 px-5 py-2.5 text-white text-[15px] font-medium
                         hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500/30"
            >
              Go to shop <Handbag size={16} className="ml-2" strokeWidth={2} />
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

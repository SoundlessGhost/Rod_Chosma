"use client";

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
import Link from "next/link";

// --- menu data (চাইলে এখানে আইটেম বদলাও) ---
const topLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
  { href: "/blog", label: "Blog" },
];

const browseLinks = [{ href: "/help", label: "Customer Help" }];

const socialLinks = [
  { href: "https://facebook.com", label: "Facebook" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://instagram.com", label: "Instagram" },
];

export default function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="md:hidden cursor-pointer inline-flex items-center justify-center rounded-md border
                     border-gray-200 p-2 hover:bg-gray-50"
        >
          <Menu size={20} />
        </button>
      </SheetTrigger>

      {/* grid = header | body (scroll) | footer (fixed) */}
      <SheetContent
        side="right"
        className="w-[92vw] max-w-sm p-0 bg-white h-[100dvh] grid grid-rows-[auto,1fr,auto]"
      >
        {/* hidden accessible header */}
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>Site sections</SheetDescription>
        </SheetHeader>

        {/* Brand  */}
        <div className="px-5 py-4 border-b">
          <Link
            href="/"
            className="text-lg inline-flex items-center gap-2 font-bold tracking-[0.15em] 
               text-gray-900 hover:text-teal-700 transition-colors duration-200"
          >
            <span className="w-8 h-8 rounded-lg bg-teal-600 text-white flex items-center justify-center shadow-md">
              <HatGlasses size={18} />
            </span>
            RODCHOSMA
          </Link>
        </div>

        <div className="overflow-y-auto">
          {/* Dense list rows (first screenshot style) */}
          <nav aria-label="Categories" className="divide-y">
            {topLinks.map((l) => (
              <SheetClose asChild key={l.href}>
                <Link
                  href={l.href}
                  className={`flex items-center justify-between px-5 py-3 text-[15px]
                              hover:bg-gray-50 active:bg-gray-100 transition
                              ${l.highlight ? "bg-gray-100 font-medium" : ""}`}
                >
                  <span>{l.label}</span>
                  <ChevronRight size={18} className="text-gray-400" />
                </Link>
              </SheetClose>
            ))}
          </nav>

          {/* Sections like screenshot #3 */}
          <div className="px-5 py-5 space-y-6">
            {/* BROWSE */}
            <section>
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 mb-2">
                BROWSE
              </h4>
              <ul className="space-y-1">
                {browseLinks.map((l) => (
                  <li key={l.href}>
                    <SheetClose asChild>
                      <Link
                        href={l.href}
                        className="inline-flex items-center py-1 text-[15px] hover:underline"
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
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 mb-2">
                WANT TO CHAT?
              </h4>
              <div className="text-[15px]">
                Call us{" "}
                <span className="text-teal-700 font-medium hover:underline">
                  01794951003
                </span>
              </div>
            </section>

            {/* SOCIAL */}
            <section>
              <h4 className="text-xs font-semibold tracking-widest text-gray-400 mb-2">
                SOCIAL
              </h4>
              <ul className="space-y-1">
                {socialLinks.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex hover:underline items-center py-1 text-[15px]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        {/* FOOTER — fixed bottom CTA */}
        <div className="px-5 py-4 border-t bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70">
          <SheetClose asChild>
            <Link
              href="/products"
              className="inline-flex items-center justify-center w-full rounded-md
                         bg-teal-700 px-5 py-2.5 text-white text-[15px] font-medium
                         hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600/40"
            >
              Go to shop <Handbag size={16} className="ml-2" strokeWidth={2} />
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

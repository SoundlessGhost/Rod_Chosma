"use client";

import Link from "next/link";
import CartSheet from "./CartSheet";
import MobileNav from "./MobileNav";
import { HatGlasses } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-[17px] font-semibold tracking-[0.12em] 
             text-gray-900 hover:text-teal-700 transition-colors duration-200"
        >
          <HatGlasses className="text-teal-600" />
          RODCHOSMA
        </Link>

        {/* Desktop Nav (UPPERCASE for premium look) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold tracking-wide text-gray-700">
          <Link href="/products" className="hover:text-teal-700">
            PRODUCTS
          </Link>
          <Link href="/about" className="hover:text-teal-700">
            ABOUT
          </Link>
          <Link href="/support" className="hover:text-teal-700">
            SUPPORT
          </Link>
          <Link href="/blog" className="hover:text-teal-700">
            BLOG
          </Link>
        </nav>

        {/* Right: Cart + Mobile Nav */}
        <div className="flex items-center gap-3">
          <CartSheet />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

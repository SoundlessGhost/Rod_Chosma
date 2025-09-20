"use client";

import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import {
  ShoppingCart,
  Menu,
  X,
  Package,
  Info,
  LifeBuoy,
  Newspaper,
  ChevronRight,
  Handbag,
} from "lucide-react";
import Image from "next/image";

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left: Mobile menu trigger + Logo */}

        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-tight ">
          Rod<span className="text-emerald-700">chosma</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <Link href="/products" className="hover:text-teal-700">
            Products
          </Link>
          <Link href="/about" className="hover:text-teal-700">
            About
          </Link>
          <Link href="/support" className="hover:text-teal-700">
            Support
          </Link>
          <Link href="/blog" className="hover:text-teal-700">
            Blog
          </Link>
        </nav>

        {/* Right: Cart (both mobile & desktop) */}
        <div className="flex items-center gap-3">
          <CartSheet />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

/* ---------- Cart Sheet (Right) ---------- */
function CartSheet() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative p-2 text-gray-700 hover:text-teal-700"
        >
          <ShoppingCart size={24} />
          <span className="absolute -top-1 -right-1 text-[10px] bg-teal-700 text-white rounded-full w-4 h-4 flex items-center justify-center">
            0
          </span>
        </button>
      </SheetTrigger>

      <SheetContent side="right" className="w-[88vw] max-w-sm">
        <SheetHeader className="text-left">
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            Manage items in your shopping cart.
          </SheetDescription>
        </SheetHeader>

        {/* Empty cart body */}
        <div className="flex-1 flex flex-col items-center justify-center text-center py-10">
          <div className="w-24 h-24 mb-4 relative">
            <Image
              src="/empty-cart.png" // ✅ ফাইল রাখতে হবে /public/empty-cart.png
              alt="Empty cart"
              width={96}
              height={96}
              className="object-contain"
            />
          </div>

          <p className="text-gray-700 font-medium">
            Your cart is currently empty.
          </p>
          <p className="text-gray-400 text-sm mt-1 max-w-xs">
            You may check out all the available products and buy some in the
            shop.
          </p>

          <SheetClose asChild>
            <Link
              href="/products"
              className="mt-6 inline-flex items-center justify-center rounded-md bg-teal-700 px-5 py-2 text-white hover:bg-teal-800"
            >
              Return to shop
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
}

/* ---------- Mobile Nav (Left Sheet) ---------- */

function MobileRow({ href, label, icon: Icon = Package }) {
  return (
    <SheetClose asChild>
      <Link
        href={href}
        className="group flex items-center justify-between gap-3 rounded-xl px-4 py-3
                   focus:outline-none focus:ring-2 focus:ring-teal-600/40
                   hover:bg-gray-50 active:scale-[.99] transition"
        role="menuitem"
      >
        <span className="flex items-center gap-3">
          <span
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg
                           bg-gray-100 group-hover:bg-gray-200 transition"
          >
            <Icon size={18} />
          </span>
          <span className="text-[15px] font-medium">{label}</span>
        </span>

        <ChevronRight
          size={18}
          className="shrink-0 translate-x-0 transition group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </SheetClose>
  );
}

function MobileNav() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open menu"
          className="md:hidden inline-flex items-center justify-center rounded-md border
                     border-gray-200 p-2 hover:bg-gray-50"
        >
          <Menu size={20} />
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[92vw] max-w-sm p-0 bg-white backdrop-blur"
      >
        {/* ✅ Add this header for accessibility (hidden visually) */}
        <SheetHeader className="sr-only">
          <SheetTitle>Mobile Navigation</SheetTitle>
          <SheetDescription>Site sections</SheetDescription>
        </SheetHeader>

        {/* Top bar */}
        <div className="px-5 pt-5 pb-4 border-b">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-lg font-semibold text-teal-700">
              LOGO
            </Link>
          </div>
        </div>

        {/* Menu */}
        <nav className="px-3 py-2" role="menu" aria-label="Mobile">
          <div className="p-1 space-y-1">
            <MobileRow href="/products" label="Products" icon={Package} />
            <MobileRow href="/about" label="About" icon={Info} />
            <MobileRow href="/support" label="Support" icon={LifeBuoy} />
            <MobileRow href="/blog" label="Blog" icon={Newspaper} />
          </div>
        </nav>

        {/* Sticky footer CTA */}
        <SheetClose asChild>
          <Link
            href="/products"
            className="inline-flex items-center justify-center gap-2 rounded-md
               bg-teal-700 px-5 py-2 text-white text-[15px] font-medium
               hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600/40 w-fit mx-auto"
          >
            <Handbag size={18} strokeWidth={2} />
            Go to shop
          </Link>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import CartSheet from "../../components/CartSheet";

const utilityLinks = ["PRODUCT", "ABOUT", "Catalog", "Customer Care"];

const Navbar = () => {
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 text-white">
        {/* Navbar */}
        <div className="border-b border-white/10 bg-black backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.35em]">
            {/* Logo */}
            <Link
              href={"/"}
              className="flex items-center gap-3 text-sm tracking-[0.45em]"
            >
              <span className="font-facebook font-bold text-amber-400 inline-flex items-center">
                <span className="w-8 h-8 mr-2 flex items-center justify-center shadow-md">
                  <Image
                    src="/Brand/logo.png" // from public folder
                    alt="RodChosma Logo"
                    width={32}
                    height={32}
                    priority
                  />
                </span>
                RODCHOSMA
              </span>
            </Link>

            {/* Right utilities */}
            <div className="flex items-center justify-between gap-3">
              <div className="hidden md:flex items-center gap-4 text-[9px] text-white/70">
                {utilityLinks.map((item) => (
                  <Link
                    key={item}
                    className="transition-colors duration-200 hover:text-white"
                    href="#"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              {/* Mobile nav */}
              <div className="flex items-center">
                <div className="md:hidden">
                  <MobileNav />
                </div>
                <CartSheet />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer div: header height অনুযায়ী */}
      <div className="h-[96px]" />
    </>
  );
};

export default Navbar;

"use client";

import Link from "next/link";
import { HatGlasses } from "lucide-react";
import MobileNav from "./MobileNav";
import CartSheet from "../../components/CartSheet";

// const navLinks = ["PRODUCTS", "ABOUT"];
const utilityLinks = ["PRODUCTS", "ABOUT", "Store Locator", "Customer Care"];

const HeaderSection = () => {
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
              <span className="font-semibold inline-flex items-center text-white">
                <span className="w-8 h-8 rounded-lg text-white flex items-center justify-center shadow-md">
                  <HatGlasses size={18} />
                </span>
                RODCHOSMA
              </span>
            </Link>

            {/* Desktop nav */}
            {/* <div className="hidden flex-1 items-center justify-center gap-6 text-[9px] text-white/80 md:flex">
              {navLinks.map((item) => (
                <Link
                  key={item}
                  className="transition-colors duration-200 hover:text-white"
                  href="#"
                >
                  {item}
                </Link>
              ))}
            </div> */}

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

export default HeaderSection;

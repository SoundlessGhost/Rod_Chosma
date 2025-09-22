"use client";

import Link from "next/link";

import { HatGlasses, Menu } from "lucide-react";
import MobileNav from "./MobileNav";
import CartSheet from "./CartSheet";

const navLinks = ["PRODUCTS", "ABOUT", "SUPPORT", "BLOGS"];

const utilityLinks = ["Store Locator", "Customer Care"];

const HeaderSection = () => {
  return (
    <header
      className="text-white"
      // style={{
      //   backgroundImage: "url(/plan.jpg)",
      // }}
    >
      <div className="bg-[#b8211f]  px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] sm:text-xs">
        Meet the new AI glasses Advanced AI Enhanced capture More battery.
      </div>

      <div className="border-b border-white/10 bg-black backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.35em]">
          <Link
            href={"/"}
            className="flex items-center gap-3 text-sm tracking-[0.45em]"
          >
            <span className="font-semibold inline-flex justify-between items-center text-white">
              <span className="w-8 h-8 rounded-lg text-white flex items-center justify-center shadow-md">
                <HatGlasses size={18} />
              </span>
              RODCHOSMA
            </span>
          </Link>
          <div className="hidden flex-1 items-center justify-center gap-6 text-[9px] text-white/80 md:flex">
            {navLinks.map((item) => (
              <Link
                key={item}
                className="transition-colors duration-200 hover:text-white"
                href="#"
              >
                {item}
              </Link>
            ))}
          </div>
          <>
            <div className="hidden justify-end items-center gap-4 text-[9px] text-white/70 sm:flex">
              {utilityLinks.map((item) => (
                <Link
                  key={item}
                  className="transition-colors duration-200 hover:text-white"
                  href="#"
                >
                  {item}
                </Link>
              ))}
              {/* <button
              aria-label="Open navigation"
              className="inline-flex items-center justify-center rounded-full border border-white/30 p-2 text-white/80 transition hover:border-white/60 hover:text-white md:hidden"
              type="button"
            >
              <Menu className="size-4" />
            </button> */}
            </div>
            <div className="flex items-center justify-between">
              <div className="hidden sm:flex">
                <MobileNav />
              </div>
              <CartSheet />
            </div>
          </>
        </div>
      </div>
    </header>
  );
};

export default HeaderSection;

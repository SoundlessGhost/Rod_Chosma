"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";
import CartSheet from "../../components/CartSheet";

const utilityLinks = [
  { label: "Product", href: "/" },
  {
    label: "About",
    href: "https://www.google.com/search?q=rod+chosma+dhaka&oq=Rod+Chosma+Dhaka&gs_lcrp=EgZjaHJvbWUqDAgAECMYJxiABBiKBTIMCAAQIxgnGIAEGIoFMgcIARAAGIAEMgcIAhAAGO8FMgcIAxAAGO8FMgoIBBAAGKIEGIkFMgcIBRAAGO8FMgYIBhBFGD0yBggHEEUYPdIBBzU2NGowajmoAgawAgHxBdKiWsmuX9dK&sourceid=chrome&ie=UTF-8",
  },
  { label: "Catalog", href: "/catalog.pdf" },
  { label: "Care", href: "/contact" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 text-white">
        <div className="border-b border-white/10 bg-black backdrop-blur">
          <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.35em]">
            {/* Logo */}
            <Link
              href={"/"}
              className="flex items-center gap-3 text-sm tracking-[0.45em]"
            >
              <span className="font-bold tracking-[0.2em] text-xl font-facebook text-amber-400 inline-flex items-center">
                <span className="w-8 h-8 mr-2 flex items-center justify-center shadow-md">
                  <Image
                    src="/Brand/logo.png"
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
                {utilityLinks.map((item) => {
                  const isActive = pathname === item.href;

                  // এখন About আর Catalog দুইটাই নতুন ট্যাবে খোলার জন্য detect করছি
                  const openInNewTab =
                    item.label === "Catalog" ||
                    item.href.endsWith(".pdf") ||
                    item.label === "ABOUT";

                  const baseClass =
                    "transition-colors font-bold text-[12px] duration-200 " +
                    (isActive ? "text-amber-400" : "");

                  return openInNewTab ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={baseClass}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={baseClass}
                    >
                      {item.label}
                    </Link>
                  );
                })}
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

      {/* Spacer */}
      <div className="h-[60px]" />
    </>
  );
};

export default Navbar;

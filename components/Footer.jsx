// components/Footer.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram /*, Twitter, Youtube */ } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP: everything centered */}
        <div className="flex flex-col items-center text-center gap-6">
          {/* Brand with logo */}
          <div className="flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 shadow-sm">
              {/* আপনার লোগো: /public/logo.png */}
              <Image
                src="/Brand/logo.png"
                alt="RODCHOSMA Logo"
                width={22}
                height={22}
                priority
              />
            </span>
            <span className="text-2xl font-facebook font-bold text-amber-400 tracking-[0.2em] ">
              RODCHOSMA
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center justify-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit us on Facebook"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
              title="Facebook"
            >
              <Facebook size={18} className="text-white/80" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Visit us on Instagram"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
              title="Instagram"
            >
              <Instagram size={18} className="text-white/80" />
            </a>
          </div>

          {/* Support (centered) */}
          {/* <div>
            <h3 className="text-white font-semibold tracking-wide mb-3">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/customer-care"
                  className="hover:text-white transition"
                >
                  Care
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {year} RODCHOSMA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

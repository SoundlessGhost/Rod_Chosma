// components/Footer.tsx
"use client";

import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-black text-gray-300 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-10 md:py-12">
        {/* top row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Brand + Social */}
          <div className="space-y-4">
            <div className="text-2xl font-bold tracking-[0.2em] text-white">
              RODCHOSMA
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3">
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
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit us on X (Twitter)"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
                title="X (Twitter)"
              >
                <Twitter size={18} className="text-white/80" />
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
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Visit us on YouTube"
                className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 hover:border-white/30 hover:bg-white/5 transition"
                title="YouTube"
              >
                <Youtube size={18} className="text-white/80" />
              </a>
            </div>
          </div>

          {/* spacer on md to push support right nicely */}
          <div className="hidden md:block" />

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold tracking-wide mb-4">
              Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/store-locator"
                  className="hover:text-white transition"
                >
                  Store Locator
                </Link>
              </li>
              <li>
                <Link
                  href="/customer-care"
                  className="hover:text-white transition"
                >
                  Customer Care
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-10 border-t border-white/10 pt-6 text-center text-xs text-gray-500">
          © {year} RODCHOSMA. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

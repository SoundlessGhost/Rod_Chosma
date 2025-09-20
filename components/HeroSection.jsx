"use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative  pt-10 font min-h-screen bg-gradient-to-r from-cyan-50 to-cyan-100 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16 py-16 lg:py-24 grid lg:grid-cols-2 items-center gap-12">
        {/* Left: Text */}
        <div>
          <span className="uppercase text-sm tracking-wider text-gray-600">
            EYEWEAR
          </span>

          <h1 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-gray-900">
            Visual Insights: <br /> Exploring the World <br /> Through Goggles
          </h1>

          <p className="mt-5 text-gray-600 max-w-xl">
            "Visual Insights" provides an in-depth look at the innovative
            technologies and materials used in goggle construction,
            demonstrating how they have enhanced our ability to see and perceive
            the world in unique ways.
          </p>

          {/* CTA buttons */}
          <div className="mt-7 flex items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-teal-700 text-white px-5 py-3 rounded-md font-medium hover:bg-teal-800 transition"
            >
              Check More Products
              <span className="inline-block translate-y-[1px]">🛍️</span>
            </Link>
          </div>

          {/* Bottom features */}
          <div className="mt-12 grid sm:grid-cols-3 gap-8">
            <div>
              <p className="font-semibold text-gray-900">Finished products</p>
              <p className="text-gray-600 text-sm">
                products and gift wrapping
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Large and frequent</p>
              <p className="text-gray-600 text-sm">
                promotions with numerous discounts
              </p>
            </div>
            <div>
              <p className="font-semibold text-gray-900">Free shipping</p>
              <p className="text-gray-600 text-sm">on any order from $150</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

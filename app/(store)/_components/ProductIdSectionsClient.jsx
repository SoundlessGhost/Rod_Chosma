"use client";
import Image from "next/image";
import { useState } from "react";
import {
  Handbag,
  Minus,
  Plus,
  Check,
  Truck,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/_context/CartContext";

export default function ProductPage() {
  const router = useRouter();
  
  const { addToCart } = useCart();

  // Product data
  const product = {
    title: "Men's Summer Slip-On Breathable Mesh Sneakers",
    brand: "RODCHOSMA",
    price: 279,
    compareAt: 1680,
    images: [
      "/Eyeglass-1a.jpeg",
      "/Eyeglass-1a.jpeg",
      "/Eyeglass-1a.jpeg",
      "/Eyeglass-1a.jpeg",
    ],
    colors: ["Black", "Beige"],
    styles: ["Double Cup Holder", "Triple Cup Holder"],
  };

  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(product.colors[0]);
  const [style, setStyle] = useState(product.styles[0]);

  const fmt = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  });

  const decrement = () => setQty((q) => Math.max(1, q - 1));
  const increment = () => setQty((q) => q + 1);

  function handleAddToCart() {
    addToCart({
      ...product,
      quantity: qty,
      options: { color, style },
    });
  }

  function handleBuyNow() {
    handleAddToCart();
    router.push("/checkout");
  }

  const perks = [
    { label: "Fast delivery", icon: Truck },
    { label: "Secure checkout", icon: ShieldCheck },
    { label: "Hassle-free returns", icon: RefreshCcw },
  ];

  return (
    <section className="mt-12 md:mt-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Main product grid - details on left, gallery on right */}
        <div className="">
          {/* Left column - Gallery */}
          <div className="w-full ">
            <div className="sticky top-4">
              {/*TODO redesign product ID page */}
              {/* Main image */}
              <div className="relative w-full rounded-xl border border-gray-200 bg-gray-50 overflow-hidden">
                <div className="relative aspect-square">
                  {product.images[activeImage] ? (
                    <Image
                      src={product.images[activeImage]}
                      alt={product.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Thumbnail images */}
              {product.images.length > 1 && (
                <div className="mt-6 grid grid-cols-4 gap-4">
                  {product.images.map((src, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveImage(i)}
                      className={`relative aspect-square rounded-lg border-2 bg-white transition-all ${
                        i === activeImage
                          ? "border-teal-700 scale-105 shadow-md"
                          : "border-gray-200 hover:border-gray-400"
                      }`}
                    >
                      {src ? (
                        <Image
                          src={src}
                          alt={`${product.title} thumbnail ${i + 1}`}
                          fill
                          className="object-cover rounded-md"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center bg-gray-200 text-xs">
                          <span>Thumb {i + 1}</span>
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right column - Product details */}
          <div className="w-full ">
            <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-amber-600">
              {product.brand}
            </span>

            <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {/* Pricing */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {product.compareAt && (
                <span className="text-lg text-gray-500 line-through">
                  {fmt.format(product.compareAt)}
                </span>
              )}
              <span className="text-2xl font-bold text-gray-900">
                {fmt.format(product.price)}
              </span>
              {product.compareAt && product.compareAt > product.price && (
                <span className="rounded-md bg-red-100 px-2 py-1 text-sm font-medium text-red-700">
                  Sale
                </span>
              )}
            </div>

            <p className="mt-2 text-sm text-gray-500">
              Shipping calculated at checkout.
            </p>

            <div className="mt-8 space-y-6">
              {/* Color selection */}
              <div>
                <p className="mb-2 text-sm font-semibold text-gray-900">
                  Color
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => {
                    const selected = c === color;
                    return (
                      <button
                        key={c}
                        onClick={() => setColor(c)}
                        className={`inline-flex items-center gap-1 rounded-md border px-4 py-2 text-sm font-medium transition ${
                          selected
                            ? "border-teal-700 bg-teal-70 text-teal-700"
                            : "border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        {selected && <Check size={14} />}
                        {c}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Style selection */}
              <div>
                <p className="mb-2 text-sm font-semibold text-gray-900">
                  Style
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.styles.map((s) => {
                    const selected = s === style;
                    return (
                      <button
                        key={s}
                        onClick={() => setStyle(s)}
                        className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
                          selected
                            ? "border-teal-700 bg-teal-70 text-teal-700"
                            : "border-gray-300 text-gray-700 hover:border-gray-400"
                        }`}
                      >
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity selection */}
              <div>
                <p className="mb-2 text-sm font-semibold text-gray-900">
                  Quantity
                </p>
                <div className="inline-flex items-center gap-3 rounded-md border border-gray-300 px-3 py-2">
                  <button
                    onClick={decrement}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-800 transition hover:bg-gray-100"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-6 text-center text-sm font-medium text-gray-900">
                    {qty}
                  </span>
                  <button
                    onClick={increment}
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-800 transition hover:bg-gray-100"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-8 space-y-3">
              <button
                onClick={handleAddToCart}
                className="inline-flex w-full items-center justify-center rounded-md bg-teal-700 px-5 py-3 text-sm font-medium text-white cursor-pointer transition hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-700"
              >
                Add to cart
                <Handbag size={18} className="ml-2" strokeWidth={2} />
              </button>
              <button
                onClick={handleBuyNow}
                className="inline-flex w-full items-center justify-center rounded-md border border-gray-900 px-5 py-3 text-sm font-medium cursor-pointer transition bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-gray-900/30"
              >
                Buy it now
              </button>
            </div>

            {/* Perks */}
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {perks.map((perk) => {
                const Icon = perk.icon;
                return (
                  <div
                    key={perk.label}
                    className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700"
                  >
                    <Icon size={16} className="text-teal-700" />
                    <span>{perk.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

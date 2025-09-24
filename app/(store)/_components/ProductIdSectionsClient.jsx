"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Handbag,
  Minus,
  Plus,
  Check,
  Truck,
  ShieldCheck,
  RefreshCcw,
} from "lucide-react";
import { useCart } from "@/app/_context/CartContext";

// TODO when I add two card image not found

// --- helpers ---
function normalizeProduct(p) {
  if (!p) return null;
  const images = [
    p.image ?? null,
    ...(p.secondaryImages ?? []),
    ...(p.images ?? []),
  ].filter(Boolean);

  return {
    id: p.id,
    title: p.name ?? p.title ?? p?.category?.name ?? "Untitled Product",
    brand: p.brand ?? "RODCHOSMA",
    price: p.price ?? 0,
    compareAt: p.compareAt ?? null,
    images: images.length ? images : ["/placeholder.png"],
    lens: p.lens,
    shape: p.shape,
    badge: p.badge ?? null,
    sizes: p.sizes ?? ["XS", "S", "M", "L", "XL"],
    colors: p.colors ?? ["Black", "Beige"],
    styles: p.styles ?? ["Default"],
  };
}

export default function ProductPage() {
  const router = useRouter();
  const params = useParams();
  const { addToCart } = useCart();

  const id = useMemo(() => {
    const v = params?.id;
    return Array.isArray(v) ? v[0] : v;
  }, [params]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState(null);

  // UI state
  const [activeImage, setActiveImage] = useState(0);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [style, setStyle] = useState(null);

  const fmt = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  });

  useEffect(() => {
    if (!id) return;
    let cancelled = false;

    (async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`/api/products/${id}`, { cache: "no-store" });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body?.error || `HTTP ${res.status}`);
        }

        const payload = await res.json();
        if (!payload?.ok || !payload?.data) {
          throw new Error(payload?.error || "Invalid response");
        }

        const normalized = normalizeProduct(payload.data);
        if (!cancelled) {
          setProduct(normalized);
          setActiveImage(0);
          setColor(normalized.colors[0] ?? null);
          setSize(normalized.sizes[0] ?? null);
          setStyle(normalized.styles[0] ?? null);
        }
      } catch (e) {
        if (!cancelled) setError(e?.message || "Failed to load product");
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [id]);

  const decrement = () => setQty((q) => Math.max(1, q - 1));
  const increment = () => setQty((q) => q + 1);

  function handleAddToCart() {
    if (!product) return;
    addToCart({
      id: product.id,
      title: product.title,
      brand: product.brand,
      price: product.price,
      compareAt: product.compareAt,
      images: product.images,
      quantity: qty,
      options: { color, size, style },
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

  if (loading) {
    return (
      <section className="mt-12 md:mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-gray-600">Loading product…</p>
        </div>
      </section>
    );
  }

  if (error || !product) {
    return (
      <section className="mt-12 md:mt-20">
        <div className="container mx-auto px-4 lg:px-8">
          <p className="text-sm text-red-600">
            {error || "Product not found."}
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="mt-12 md:mt-20 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="block lg:flex items-center justify-evenly ">
          {/* Left: Gallery */}
          <div className="w-full">
            <div className=" top-4">
              <div className=" w-full ">
                <div className=" md:h-[70vh] w-full h-full md:w-[40vw]">
                  {product.images[activeImage] ? (
                    <Image
                      src={product.images[activeImage]}
                      alt={product.title}
                      height={600}
                      width={600}
                      // sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover rounded-md h-full w-full"
                      priority
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-gray-200">
                      <span className="text-gray-500">No image available</span>
                    </div>
                  )}
                </div>
              </div>

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

          {/* Right: Details */}
          <div className="w-[90%] mx-auto">
            {product.badge && (
              <span className="inline-flex items-center text-xs font-semibold uppercase tracking-widest text-amber-600">
                {product.badge}
              </span>
            )}

            <h1 className="mt-2 text-2xl md:text-3xl font-bold text-gray-900">
              {product.title}
            </h1>

            {/* Price */}
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {product.compareAt && product.compareAt > product.price && (
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
              {/* Color */}
              {product.colors.length > 0 && (
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
                              ? "border-teal-700 bg-teal-100 text-teal-700"
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
              )}

              {/* Size */}
              {product.sizes.length > 0 && (
                <div>
                  <p className="mb-2 text-sm font-semibold text-gray-900">
                    Size
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((s) => {
                      const selected = s === size;
                      return (
                        <button
                          key={s}
                          onClick={() => setSize(s)}
                          className={`rounded-md border px-4 py-2 text-sm font-medium transition ${
                            selected
                              ? "border-teal-700 bg-teal-100 text-teal-700"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Style */}
              {product.styles.length > 0 && (
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
                              ? "border-teal-700 bg-teal-100 text-teal-700"
                              : "border-gray-300 text-gray-700 hover:border-gray-400"
                          }`}
                        >
                          {s}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity */}
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

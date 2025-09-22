"use client";

import Image from "next/image";

import { useMemo } from "react";
import { Star } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/app/_context/CartContext";
import { Card, CardContent } from "@/components/ui/card";

const ACCENT = "#e95d4f"; // hero highlight color

const useCurrency = (currency = "USD", locale = "en-US") =>
  useMemo(
    () =>
      new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
        maximumFractionDigits: 0,
      }),
    [currency, locale]
  );

export default function ProductSectionsClient({ sections }) {
  const router = useRouter();
  const fmt = useCurrency("USD");

  const { addToCart } = useCart();

  return (
    <section className="relative py-24 bg-[#0f1210] text-white">
      {/* subtle vignette to echo hero gradients */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/30" />

      <div className="container relative mx-auto px-4">
        {sections.map((section, i) => (
          <div key={i} className="mb-20">
            {/* Section header */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center gap-3 mb-4">
                <span className="rounded-full border border-white/20 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70">
                  ROD | CHOSMA
                </span>
                <span className="hidden h-px w-40 bg-white/10 sm:block" />
              </div>

              <h2 className="text-3xl sm:text-4xl font-semibold uppercase tracking-[0.2em]">
                {section.title}
              </h2>
              <p className="mt-3 text-sm sm:text-base text-white/70">
                {section.title === "Best Sellers"
                  ? "Our most loved sunglasses, chosen by thousands of satisfied customers worldwide."
                  : "Fresh designs that define the future of eyewear fashion and functionality."}
              </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              {section.products.map((p) => (
                <Card
                  key={p.id}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5/50 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/10"
                >
                  <CardContent className="p-0">
                    {/* Image */}
                    <div
                      onClick={() => router.push(`/products/${p.id}`)}
                      className="relative h-52 w-full overflow-hidden cursor-pointer"
                    >
                      <Image
                        src={p.image}
                        alt={p.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 25vw"
                        priority={false}
                      />
                      {p.badge && (
                        <span
                          className="absolute left-3 top-3 rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.25em] text-white shadow"
                          style={{ backgroundColor: `${ACCENT}` }}
                        >
                          {p.badge}
                        </span>
                      )}
                      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    {/* Body */}
                    <div className="p-4">
                      <h3 className="mb-2 line-clamp-1 text-lg font-semibold text-white">
                        {p.name}
                      </h3>

                      {/* Rating */}
                      <div className="mb-3 flex items-center">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => {
                            const filled = i < Math.floor(p.rating || 0);
                            return (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${
                                  filled ? "text-yellow-400" : "text-white/25"
                                }`}
                                {...(filled ? { fill: "currentColor" } : {})}
                              />
                            );
                          })}
                        </div>
                        <span className="ml-2 text-xs text-white/60">
                          {p.rating} ({p.reviews})
                        </span>
                      </div>

                      {/* Price + CTA */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-baseline space-x-2">
                          <span
                            className="text-xl font-bold"
                            style={{ color: ACCENT }}
                          >
                            {fmt.format(p.price)}
                          </span>
                          {p.originalPrice && (
                            <span className="text-sm text-white/40 line-through">
                              {fmt.format(p.originalPrice)}
                            </span>
                          )}
                        </div>

                        <Button
                          size="sm"
                          onClick={() => addToCart(p)}
                          className="cursor-pointer rounded-full border border-white/30 bg-transparent px-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-white transition hover:border-white hover:bg-white/10"
                        >
                          Add to Cart
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* View All */}
            <div className="my-12 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() =>
                  router.push(
                    `/products?section=${encodeURIComponent(section.title)}`
                  )
                }
                className="cursor-pointer rounded-full border border-white/30 bg-transparent px-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white/10"
              >
                View All {section.title}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

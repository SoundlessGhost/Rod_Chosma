"use client";

import Link from "next/link";
import Image from "next/image";

import { Star, ShoppingCart } from "lucide-react";
import { useCart } from "@/app/_context/CartContext";

const fmt = new Intl.NumberFormat("en-BD", {
  style: "currency",
  currency: "BDT",
  maximumFractionDigits: 0,
});

export default function HomeProductCard({ product, position }) {
  const { addToCart } = useCart();
  const p = product;
  const onSale = p.mrp && p.mrp > p.price;
  const href = `/products/${p.id}`;

  return (
    <article
      className="group rounded-xl overflow-hidden transition
                    border border-slate-200 bg-white shadow-sm hover:shadow-md
                    dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]
                    hover:-translate-y-0.5 duration-300"
    >
      <meta itemProp="position" content={String(position)} />

      <div className="relative aspect-[4/3] overflow-hidden">
        {onSale && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-red-600 text-white text-xs px-2.5 py-1">
            Sale
          </span>
        )}

        <Link href={href} className="absolute inset-0" prefetch>
          <Image
            src={p.image || "/placeholder.png"}
            alt={`${p.name} sunglasses`}
            fill
            className="object-cover transition-transform duration-500 ease-out
                 group-hover:scale-105 will-change-transform"
            priority={position <= 4}
            placeholder="empty"
            sizes="(min-width:1280px) 300px, (min-width:1024px) 25vw, 50vw"
          />
        </Link>
      </div>

      <div className="p-4">
        {/* name */}
        <Link
          href={href}
          className="line-clamp-1 text-[15px] font-medium text-slate-900 dark:text-white"
          itemProp="name"
        >
          {p.name}
        </Link>

        {/* price */}
        <div
          className="mt-2 flex items-baseline gap-2"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span className="text-lg font-semibold text-red-600 dark:text-red-500">
            {fmt.format(p.price)}
          </span>
          <meta itemProp="priceCurrency" content="BDT" />
          <meta itemProp="price" content={String(p.price)} />
          <link itemProp="availability" href="https://schema.org/InStock" />
        </div>

        {/* CTA */}
        <button
          onClick={() =>
            addToCart({
              id: p.id,
              name: p.name,
              price: p.price,
              image: p.image,
              quantity: 1,
            })
          }
          className="mt-3 cursor-pointer inline-flex w-full items-center justify-center gap-2 rounded-md
                     px-3 py-2 text-[13px] font-medium transition
                     border border-slate-200 bg-slate-900 text-white hover:bg-slate-800
                     dark:border-white/15 dark:bg-white/5 dark:text-white dark:hover:bg-white/10"
          aria-label={`Add ${p.name} to cart`}
        >
          <ShoppingCart size={16} />
          Add to cart
        </button>
      </div>
    </article>
  );
}

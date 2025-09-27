"use client";

import Link from "next/link";
import Image from "next/image";

import { ShoppingCart } from "lucide-react";
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
  const hoverImg = p.secondaryImages?.[0]; // প্রথমটাকেই ধরুন
  const inStock = p.inStock !== false; // truthy হলে ইনস্টক

  const alt = p.alt ?? `${p.name}`; // হার্ডকোড 'sunglasses' বাদ

  return (
    <article
      className="group rounded-xl overflow-hidden transition
                 border border-slate-200 bg-white shadow-sm hover:shadow-md
                 dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.06]
                 hover:-translate-y-0.5 duration-300"
      itemScope
      itemType="https://schema.org"
    >
      {/* Product meta */}
      <meta itemProp="name" content={p.name} />
      {p.image && <link itemProp="image" href={p.image} />}
      <link itemProp="url" href={href} />

      <div className="relative aspect-[4/3] overflow-hidden">
        {(p.badge || onSale) && (
          <div
            className="absolute left-3 top-3 z-10 flex gap-2"
            aria-hidden="true"
          >
            {p.badge && (
              <span className="rounded-full bg-slate-900 text-white text-[11px] px-2.5 py-1 dark:bg-white/20 backdrop-blur">
                {p.badge}
              </span>
            )}
            {onSale && (
              <span className="rounded-full bg-red-600 text-white text-[11px] px-2.5 py-1">
                Sale
              </span>
            )}
          </div>
        )}

        <Link href={href} className="absolute inset-0">
          <Image
            src={p.image || "/placeholder.png"}
            alt={alt}
            fill
            className={`object-cover transition-transform duration-500 ease-out
                        group-hover:scale-105 will-change-transform
                        ${hoverImg ? "opacity-100 group-hover:opacity-0" : ""}`}
            priority={position <= 2} // কেবল উপরের সারিতে
            sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw"
          />

          {hoverImg && (
            <Image
              src={hoverImg}
              alt={`${p.name} alternate view`}
              fill
              className="object-cover opacity-0 transition-opacity duration-500 ease-out group-hover:opacity-100"
              sizes="(min-width:1280px) 25vw, (min-width:1024px) 33vw, 50vw"
              loading="lazy"
            />
          )}
        </Link>
      </div>

      <div className="p-4">
        <Link
          href={href}
          className="line-clamp-1 text-[15px] font-medium text-slate-900 dark:text-white"
          itemProp="name"
        >
          {p.name}
        </Link>

        {(p.shape || p.lens) && (
          <p className="mt-1 text-[12px] text-slate-500 dark:text-slate-400">
            {[p.shape, p.lens].filter(Boolean).join(" • ")}
          </p>
        )}

        {p.sizes?.length ? (
          <div className="mt-2 flex flex-wrap gap-1.5">
            {p.sizes.slice(0, 4).map((s) => (
              <span
                key={s}
                className="px-2 py-0.5 text-[11px] rounded border border-slate-200 text-slate-600
                           dark:border-white/10 dark:text-slate-300"
              >
                {s}
              </span>
            ))}
            {p.sizes.length > 4 && (
              <span className="px-2 py-0.5 text-[11px] rounded bg-slate-50 border border-slate-200 text-slate-600 dark:bg-white/5 dark:border-white/10">
                +{p.sizes.length - 4}
              </span>
            )}
          </div>
        ) : null}

        {/* Offer schema */}
        <div
          className="mt-2 flex items-baseline gap-2"
          itemProp="offers"
          itemScope
          itemType="https://schema.org/Offer"
        >
          <span className="text-lg font-semibold text-red-600 dark:text-red-500">
            {fmt.format(p.price)}
          </span>
          {onSale && (
            <span className="text-sm text-slate-400 line-through">
              {fmt.format(p.mrp)}
            </span>
          )}
          <meta itemProp="priceCurrency" content="BDT" />
          <meta itemProp="price" content={String(Number(p.price || 0))} />
          <link
            itemProp="availability"
            href={
              inStock
                ? "https://schema.org/InStock"
                : "https://schema.org/OutOfStock"
            }
          />
          <link itemProp="url" href={href} />
          {p.condition && (
            <link
              itemProp="itemCondition"
              href={`https://schema.org/${p.condition}`}
            />
          )}
        </div>

        <button
          type="button"
          onClick={() =>
            addToCart({
              id: String(p.id),
              name: p.name,
              price: p.price,
              image: p.image,
              quantity: 1,
            })
          }
          className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-md
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

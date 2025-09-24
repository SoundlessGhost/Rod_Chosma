// app/page.jsx
export const runtime = "nodejs";
export const revalidate = 300; // ISR
export const dynamic = "force-static";

import { unstable_cache } from "next/cache";

import prisma from "@/lib/prisma";
import HomeProducts from "./_components/HomeProducts";

import Testimonial06 from "@/components/testimonial-06/testimonial-06";
import Image from "next/image";

const productSelect = {
  id: true,
  name: true,
  sizes: true,
  badge: true,
  image: true,
  price: true,
  lens: true,
  shape: true,
  createdAt: true,
  secondaryImages: true,
};

function serialize(p) {
  return {
    ...p,
    price: p.price != null ? Number(p.price) : null,
    createdAt: p.createdAt?.toISOString?.() ?? p.createdAt,
  };
}

// Cached loader (ISR TTL = 300s)
const getHomeSections = unstable_cache(
  async () => {
    // বেশি কিছু আনছি যাতে ফিল্টারের পরে ৮টা নিশ্চিত থাকে
    const [bestSellers, newArrivalsRaw] = await Promise.all([
      prisma.product.findMany({
        select: productSelect,
        orderBy: [{ createdAt: "desc" }],
      }),
      prisma.product.findMany({
        select: productSelect,
        orderBy: { createdAt: "desc" },
      }),
    ]);

    // New Arrivals থেকে Best-এর আইটেমগুলো বাদ
    const bestIds = new Set(bestSellers.map((p) => p.id));
    const newArrivalsFiltered = newArrivalsRaw.filter(
      (p) => !bestIds.has(p.id)
    );

    // শুধু ৮টা করে পাঠাই
    const best = bestSellers.map(serialize);
    const news = newArrivalsFiltered.map(serialize);

    return [
      { id: "best", title: "Best Sellers", products: best },
      { id: "new", title: "New Arrivals", products: news },
    ];
  },
  ["home-sections"],
  { revalidate: 300 }
);

export const metadata = {
  title: "RODCHOSMA — Explore Best Sellers & New Arrivals",
  description: "Discover AI-enhanced eyewear on our fast home page.",
  alternates: { canonical: "/" },
};

export default async function HomePage() {
  const sections = await getHomeSections();

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sections.flatMap((s) =>
      s.products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `/products/${p.slug || p.id}`,
        name: p.name,
      }))
    ),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      <div className="my-12 text-center">
        {/* Logo instead of text badge */}
        <div className="inline-flex items-center justify-center mb-4">
          <Image
            src="/Brand/logo-1.png"
            alt="RODCHOSMA Logo"
            width={80}
            height={80}
            priority
            className="mx-auto h-12 w-auto"
          />
        </div>

        <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight">
          Discover Your Perfect Style
        </h2>
        <p className="mt-2 text-sm italic text-gray-600">
          Discover our most loved sunglasses, carefully crafted for comfort and
          style, and trusted by thousands of satisfied customers around the
          world.
        </p>
      </div>

      <HomeProducts sections={sections} />
      <Testimonial06 />
    </>
  );
}

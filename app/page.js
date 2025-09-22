// app/page.jsx
export const runtime = "nodejs";
export const revalidate = 300; // ISR
export const dynamic = "force-static";

import { unstable_cache } from "next/cache";

import prisma from "@/lib/prisma";
import HomeProducts from "./_components/HomeProducts";
import HomeHeroSection from "@/app/_components/HomeHeroSection";

const productSelect = {
  id: true,
  slug: true,
  name: true,
  image: true,
  price: true,
  rating: true,
  reviews: true,
  createdAt: true,
  originalPrice: true,
};

function serialize(p) {
  return {
    ...p,
    price: p.price != null ? Number(p.price) : null,
    mrp: p.originalPrice != null ? Number(p.originalPrice) : null,
    rating: p.rating != null ? Number(p.rating) : null,
    createdAt: p.createdAt?.toISOString?.() ?? p.createdAt,
  };
}

// Cached loader (ISR TTL = 300s)
const getHomeSections = unstable_cache(
  async () => {
    // বেশি কিছু আনছি যাতে ফিল্টারের পরে ৮টা নিশ্চিত থাকে
    const [bestSellers, newArrivalsRaw] = await Promise.all([
      prisma.product.findMany({
        take: 8,
        select: productSelect,
        orderBy: [
          { reviews: "desc" },
          { rating: "desc" },
          { createdAt: "desc" },
        ],
      }),
      prisma.product.findMany({
        take: 20, // পরে ডুপ্লিকেট বাদ দেব, তাই একটু বেশি নিলাম
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
    const best = bestSellers.slice(0, 8).map(serialize);
    const news = newArrivalsFiltered.slice(0, 8).map(serialize);

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
      <HomeHeroSection />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />

      <HomeProducts sections={sections} />
    </>
  );
}

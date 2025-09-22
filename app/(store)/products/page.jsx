// app/products/page.js
export const runtime = "nodejs";

import prisma from "@/lib/prisma";
import ProductSectionsClient from "../_components/ProductSectionsClient";

export const revalidate = 300;

function serializeProduct(p) {
  return {
    ...p,
    rating: p.rating != null ? Number(p.rating) : null, // Decimal -> number
    createdAt: p.createdAt?.toISOString?.() ?? p.createdAt,
  };
}

export async function generateMetadata() {
  return {
    title: "All Products | RODCHOSMA",
    description:
      "Explore our best sellers and new arrivals of AI-enhanced eyewear.",
    openGraph: {
      title: "All Products | RODCHOSMA",
      description: "Best sellers & new arrivals of eyewear.",
      url: "/products",
      type: "website",
    },
  };
}

export default async function ProductsPage() {
  const categories = await prisma.category.findMany({
    orderBy: { title: "asc" },
    include: {
      products: {
        take: 8,
        orderBy: { createdAt: "desc" },
      },
    },
  });

  const sections = categories.map((c) => ({
    title: c.title,
    products: c.products.map(serializeProduct),
  }));

  // JSON-LD (safe; only plain strings/numbers used)
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: sections.flatMap((s) =>
      s.products.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: `/products/${p.slug ?? p.id}`,
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
      <ProductSectionsClient sections={sections} />
    </>
  );
}

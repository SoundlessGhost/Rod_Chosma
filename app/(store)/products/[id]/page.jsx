// app/products/[id]/page.js
import { headers } from "next/headers";
import { notFound } from "next/navigation";

import ProductIdSectionsClient from "../../_components/ProductIdSectionsClient";

// ✅ utility: absolute URL
function absoluteUrl(path = "") {
  const h = headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}${path}`;
}

// ✅ server data fetch
async function getProduct(id) {
  const base = absoluteUrl();
  const res = await fetch(`${base}/api/products/${id}`, { cache: "no-store" });

  // 🔑 Handle 404 separately
  if (res.status === 404) return null;
  if (!res.ok) throw new Error("Failed to load product");

  const json = await res.json();
  return json.data;
}

export default async function ProductIdPage({ params }) {
  const { id } = params;

  const product = await getProduct(id);

  if (!product) return notFound(); // ✅ shows app/not-found.js

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <ProductIdSectionsClient product={product} />
      </div>
    </div>
  );
}

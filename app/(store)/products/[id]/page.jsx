import { headers } from "next/headers";

import ProductIdSectionsClient from "../../_components/ProductIdSectionsClient";

// ✅ utility: absolute URL
async function absoluteUrl(path = "") {
  const h = await headers();
  const host = h.get("x-forwarded-host") ?? h.get("host");
  const proto = h.get("x-forwarded-proto") ?? "http";
  return `${proto}://${host}${path}`;
}

// ✅ server data fetch
async function getProduct(id) {
  const base = await absoluteUrl();
  const res = await fetch(`${base}/api/products/${id}`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to load product");
  const json = await res.json();
  return json.data;
}

export default async function ProductIdPage({ params }) {
  const { id } = params;
  const product = await getProduct(id);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-10">
        <ProductIdSectionsClient product={product} />
      </div>
    </div>
  );
}

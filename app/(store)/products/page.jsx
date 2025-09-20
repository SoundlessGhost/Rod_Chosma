import ProductSectionsClient from "../_components/ProductSectionsClient";

async function fetchSections() {
  // 1) categories
  const catRes = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ""}/api/categories`,
    { cache: "no-store" }
  );
  const catJson = await catRes.json();
  const categories = (catJson.ok ? catJson.data : []) || [];

  // 2) per category products
  const promises = categories.map(async (c) => {
    const url = `${
      process.env.NEXT_PUBLIC_BASE_URL || ""
    }/api/products?category=${encodeURIComponent(
      c.title
    )}&page=1&pageSize=8&sort=newest`;
    const r = await fetch(url, { cache: "no-store" });
    const j = await r.json();
    return { title: c.title, products: (j.ok ? j.data : []) || [] };
  });

  return await Promise.all(promises);
}

export default async function ProductPage() {
  const sections = await fetchSections();
  return <ProductSectionsClient sections={sections} />;
}

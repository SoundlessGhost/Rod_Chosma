import HomeProductCard from "./HomeProductCard";
import Script from "next/script";

export default function HomeProducts({ sections }) {
  // optional: JSON-LD ItemList (SEO শক্ত)
  const itemLists = sections.map((s) => ({
    "@type": "ItemList",
    name: s.title ?? undefined,
    itemListElement: s.products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      url: `/products/${p.id}`,
    })),
  }));

  return (
    <section
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      {/* JSON-LD for multiple lists */}
      <Script
        id="home-itemlists"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemLists) }}
      />

      {sections.map((s) => (
        <div key={s.id} className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {s.products.map((p, i) => (
              // প্রতিটি আইটেমকে itemListElement হিসাবে wrap
              <div
                key={p.id}
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                <meta itemProp="position" content={String(i + 1)} />
                <HomeProductCard product={p} position={i + 1} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

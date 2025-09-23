import HomeProductCard from "./HomeProductCard";

export default function HomeProducts({ sections }) {
  return (
    <section
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10"
      itemScope
      itemType="https://schema.org/ItemList"
    >
      
      {sections.map((s) => (
        <div key={s.id} className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {s.products.map((p, i) => (
              <HomeProductCard key={p.id} product={p} position={i + 1} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}

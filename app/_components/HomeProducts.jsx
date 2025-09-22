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
          <header className="mb-6 text-center">
            <h1 className="sr-only">RODCHOSMA — Products</h1>
            <p className="text-[11px] tracking-[0.35em] text-white/60 uppercase">
              ROD | CHOSMA
            </p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-[0.08em] text-white">
              {s.title}
            </h2>
            <p className="mt-2 text-sm text-white/60">
              Our most loved sunglasses, chosen by thousands of satisfied
              customers.
            </p>
          </header>

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

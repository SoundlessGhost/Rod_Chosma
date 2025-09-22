// app/not-found.js
import Link from "next/link";
import Image from "next/image";

const ACCENT = "#e95d4f";

export default function NotFound() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-[#0f1210] text-white">
      {/* Background image + overlays (same feel as hero) */}
      <div aria-hidden="true" className="absolute inset-0">
        <Image
          alt="Wood desk with glasses"
          src="https://images.unsplash.com/photo-1582478134397-2b32c067e22d?w=1600&auto=format&fit=crop&q=60"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050706] via-[#050706]/90 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
      </div>

      <div className="relative mx-auto flex min-h-screen w-full flex-col justify-center px-6 py-16 sm:px-10 md:px-12 lg:max-w-6xl lg:py-24">
        {/* Top chip */}
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-white/30 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 backdrop-blur-sm">
            ROD | CHOSMA
          </span>
          <span className="hidden h-px flex-1 bg-white/20 sm:block" />
        </div>

        <div className="mt-6 space-y-6">
          {/* 404 label */}
          <p
            className="inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white"
            style={{ backgroundColor: ACCENT }}
          >
            404 — Not Found
          </p>

          {/* Heading */}
          <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] sm:text-4xl lg:text-5xl">
            The page you’re looking for
            <br className="hidden sm:block" /> isn’t in our field of view.
          </h1>

          {/* Subtext */}
          <p className="text-sm leading-relaxed text-white/80 sm:text-base max-w-xl">
            It may have moved or no longer exists. Explore our products or head
            back home to keep discovering the world through goggles.
          </p>

          {/* CTAs */}
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/products"
              className="h-12 inline-flex items-center justify-center rounded-full bg-white px-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-white/90"
            >
              Browse Products
            </Link>
            <Link
              href="/"
              className="h-12 inline-flex items-center justify-center rounded-full border border-white/60 bg-transparent px-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-white transition hover:border-white hover:bg-white/10"
            >
              Return Home
            </Link>
          </div>

          {/* Feature hints (mini-cards like hero) */}
          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            {[
              {
                title: "Hands-free capture",
                desc: "Snap photos and record immersive video with voice-activated precision.",
              },
              {
                title: "AI-enhanced vision",
                desc: "Translate, identify, and share in real time with a glance toward the world.",
              },
              {
                title: "Power that lasts",
                desc: "Push further with all-day battery engineered for your best stories.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                  {f.title}
                </p>
                <p className="mt-2 text-sm text-white/70">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

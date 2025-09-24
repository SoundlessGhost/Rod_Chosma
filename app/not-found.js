import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-950">
      <div className="mx-auto max-w-3xl px-6 py-16 flex items-center justify-center">
        <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200/60 dark:border-slate-700/60 bg-white/70 dark:bg-slate-900/50 backdrop-blur shadow-xl">
          {/* soft glow */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-56 w-56 rounded-full bg-amber-300/30 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -right-24 h-56 w-56 rounded-full bg-amber-400/20 blur-3xl" />

          <div className="relative p-8 md:p-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full shadow-md bg-white dark:bg-slate-800">
                <Image
                  src="/Brangd/logo.png"
                  alt="RodChosma Logo"
                  width={24}
                  height={24}
                  priority
                />
              </span>
              <span className="font-semibold text-amber-500 tracking-wide">
                RODCHOSMA
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-extrabold leading-tight">
              404 — Page not found
            </h1>

            <p className="mt-3 text-slate-600 dark:text-slate-300">
              Oops! The page you are looking for does not exist or has been
              moved.
            </p>

            {/* actions */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium bg-slate-900 text-white dark:bg-white dark:text-slate-900 hover:opacity-90 transition"
              >
                ← Go Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 font-medium border border-slate-300 dark:border-slate-700 hover:bg-white/60 dark:hover:bg-slate-800/60 transition"
              >
                Contact Support
              </Link>
              <Link
                href="/"
                className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700"
              >
                Try the homepage →
              </Link>
            </div>

            {/* quick suggestions */}
            <div className="mt-8 text-sm text-slate-500 dark:text-slate-400">
              Quick links:{" "}
              <Link
                href="/products"
                className="underline underline-offset-4 hover:text-slate-700 dark:hover:text-slate-200"
              >
                Products
              </Link>
              {" · "}
              <Link
                href="/about"
                className="underline underline-offset-4 hover:text-slate-700 dark:hover:text-slate-200"
              >
                About
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

// app/not-found.tsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[80vh] grid place-items-center px-6">
      <section className="w-full max-w-3xl rounded-2xl border border-slate-200/70 dark:border-white/10 p-8 sm:p-12 bg-white dark:bg-white/5 shadow-sm">
        <div className="grid md:grid-cols-[1.2fr_1fr] items-center gap-8">
          {/* Text */}
          <div>
            <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400">
              404
            </p>
            <h1 className="mt-1 text-2xl sm:text-3xl font-semibold text-slate-900 dark:text-white">
              Looks like you’re lost
            </h1>
            <p className="mt-2 text-slate-600 dark:text-slate-300">
              The page you’re looking for isn’t available. Try going back to the
              homepage.
            </p>

            <div className="mt-6 flex gap-3">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 text-white px-4 py-2 text-sm font-medium hover:bg-emerald-700 transition"
              >
                Go to Home
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-slate-200 dark:border-white/15 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-white/10 transition"
              >
                Browse Products
              </Link>
            </div>
          </div>

          {/* Illustration */}
          <div className="relative mx-auto w-full max-w-[380px]">
            <div className="aspect-[4/3] rounded-xl bg-gradient-to-b from-emerald-50 to-white dark:from-white/10 dark:to-white/5 border border-slate-200/70 dark:border-white/10 overflow-hidden grid place-items-center">
              <div className="relative">
                {/* floating stones */}
                <span className="absolute -left-16 bottom-6 h-3 w-10 rounded-full bg-slate-200/80 dark:bg-white/20 blur-[1px] animate-float-slow" />
                <span className="absolute -right-16 bottom-10 h-3 w-12 rounded-full bg-slate-200/80 dark:bg-white/20 blur-[1px] animate-float" />

                {/* the star (mascot) */}
                <svg
                  className="w-40 h-40 animate-bob will-change-transform"
                  viewBox="0 0 200 200"
                  aria-hidden="true"
                >
                  {/* soft shadow */}
                  <ellipse
                    cx="100"
                    cy="160"
                    rx="48"
                    ry="10"
                    className="fill-slate-300/40 dark:fill-white/10 animate-pulse-slow"
                  />
                  {/* body */}
                  <path
                    d="M100 20l22 44 49 7-36 34 9 49-44-23-44 23 9-49-36-34 49-7z"
                    className="fill-emerald-400 dark:fill-emerald-500 stroke-emerald-600/30"
                    strokeWidth="2"
                  />
                  {/* face */}
                  <circle
                    cx="85"
                    cy="95"
                    r="6"
                    className="fill-slate-900 dark:fill-white origin-center animate-blink"
                  />
                  <circle
                    cx="115"
                    cy="95"
                    r="6"
                    className="fill-slate-900 dark:fill-white origin-center animate-blink delay-150"
                  />
                  <path
                    d="M86 115q14 10 28 0"
                    className="fill-none stroke-slate-900 dark:stroke-white"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>

                {/* 404 text floating */}
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex gap-1 text-4xl font-extrabold text-slate-900/80 dark:text-white/80 tracking-wider animate-tilt">
                  <span>4</span>
                  <span>0</span>
                  <span>4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

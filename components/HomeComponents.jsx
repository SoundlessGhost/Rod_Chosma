"use client";

import React from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BatteryCharging, Camera, Sparkles } from "lucide-react";

const featureHighlights = [
  {
    icon: Camera,
    title: "Hands-free capture",
    description:
      "Snap photos and record immersive video with voice-activated precision.",
  },
  {
    icon: Sparkles,
    title: "AI-enhanced vision",
    description:
      "Translate, identify, and share in real time with a glance toward the world.",
  },
  {
    icon: BatteryCharging,
    title: "Power that lasts",
    description:
      "Push further with all-day battery engineered for your most vivid stories.",
  },
];

export default function HomeComponents() {
  const router = useRouter(); // ✅ initialize

  return (
    <>
      <section className="relative isolate min-h-[90vh] overflow-hidden bg-[#0f1210] text-white">
        <div aria-hidden="true" className="absolute inset-0">
          <img
            alt="Model wearing smart glasses"
            className="size-full object-cover object-center"
            src="https://images.unsplash.com/photo-1582478134397-2b32c067e22d?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d29vZCUyMGV5ZWdsYXNzZXN8ZW58MHx8MHx8fDA%3D"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#050706] via-[#050706]/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/40" />
        </div>

        <div className="relative flex min-h-[90vh] flex-col">
          {/* <div className="bg-[#b8211f] px-4 py-2 text-center text-[10px] font-semibold uppercase tracking-[0.35em] sm:text-xs">
            Meet the new AI glasses. Advanced AI. Enhanced capture. More
            battery.
          </div> */}

          {/* <div className="border-b border-white/10 bg-black/10 backdrop-blur">
            <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-4 text-[10px] font-semibold uppercase tracking-[0.35em]">
              <div className="flex items-center gap-3 text-sm tracking-[0.45em]">
                <span className="font-semibold text-white">Ray·Ban</span>
                <span className="h-4 w-px bg-white/30" />
                <span className="text-white/70">Meta</span>
              </div>
              <div className="hidden flex-1 items-center justify-center gap-6 text-[9px] text-white/80 md:flex">
                {navLinks.map((item) => (
                  <Link
                    key={item}
                    className="transition-colors duration-200 hover:text-white"
                    href="#"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <div className="hidden items-center gap-4 text-[9px] text-white/70 sm:flex">
                {utilityLinks.map((item) => (
                  <Link
                    key={item}
                    className="transition-colors duration-200 hover:text-white"
                    href="#"
                  >
                    {item}
                  </Link>
                ))}
              </div>
              <button
                aria-label="Open navigation"
                className="inline-flex items-center justify-center rounded-full border border-white/30 p-2 text-white/80 transition hover:border-white/60 hover:text-white md:hidden"
                type="button"
              >
                <Menu className="size-4" />
              </button>
            </div>
          </div> */}

          <div className="relative mx-auto flex w-full flex-1 flex-col justify-center px-6 py-16 sm:px-10 md:px-12 lg:max-w-6xl lg:py-24">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="max-w-xl space-y-6"
              initial={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="flex items-center gap-3">
                <span className="rounded-full border border-white/30 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.35em] text-white/70 backdrop-blur-sm">
                  ROD | CHOSMA
                </span>
                <span className="hidden h-px flex-1 bg-white/20 sm:block" />
              </div>

              <h1 className="text-3xl font-semibold uppercase tracking-[0.2em] sm:text-4xl lg:text-5xl">
                Exploring the World Through Goggles
              </h1>

              <p className="text-base font-semibold uppercase tracking-[0.35em] text-[#e95d4f] sm:text-lg">
                Advanced AI Enhanced capture More battery.
              </p>

              <p className="text-sm leading-relaxed text-white/80 sm:text-base">
                Step into the future with statement frames that merge iconic
                style and intelligent performance. Capture your world, translate
                what you see, and share instantly without ever taking your
                glasses off.
              </p>

              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button
                  onClick={() => router.push("/products")}
                  className="h-12 cursor-pointer rounded-full bg-white px-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-black transition hover:bg-white/90"
                >
                  Shop Now
                </Button>
                <Button
                  className="h-12 cursor-pointer rounded-full border border-white/60 bg-transparent px-8 text-[10px] font-semibold uppercase tracking-[0.35em] text-white hover:text-white transition hover:border-white hover:bg-white/10"
                  variant="outline"
                >
                  Discover More
                </Button>
              </div>
            </motion.div>

            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="mt-12 grid gap-4 sm:grid-cols-3"
              initial={{ opacity: 0, y: 30 }}
              transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            >
              {featureHighlights.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur"
                >
                  <Icon className="mt-1 size-6 text-[#e95d4f]" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em]">
                      {title}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* <div
        className="lg:bg-cover h-[100vh] text-center absolute top-0 flex flex-col p-8 justify-center items-center"
        style={{
          backgroundImage: "url(/plan.jpg)",
        }}
      >
        <motion.div
          whileInView={{ y: 0, opacity: 1 }}
          initial={{ y: 100, opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="space-y-6"
        >
          <h1 className="lg:text-5xl mt-16 text-3xl font-bold">
            Find Love, Build Dreams! Your Journey Begins With Alliance !
          </h1>
          <p className=" italic">
            Embark on a wonderful journey at Alliance, where you can explore the
            beauty of relationships as you navigate through a space that
            celebrates the simplicity and warmth of genuine connections.
          </p>
          <Link href={"/about"}>
            <Button className="font-bold mt-4">Learn More</Button>
          </Link>
        </motion.div>
      </div> */}
    </>
  );
}

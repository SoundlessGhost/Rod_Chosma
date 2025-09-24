"use client";

import React from "react";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { BatteryCharging, Camera, HatGlasses, Sparkles } from "lucide-react";

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

export default function HomeHeroSection() {
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
    </>
  );
}

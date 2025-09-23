// components/ProductShowcaseHalf.jsx
"use client";
import { useEffect, useMemo, useState } from "react";

export default function ProductShowcaseHalf() {
  const [activeColor, setActiveColor] = useState("Black");
  const [activeStyle, setActiveStyle] = useState("Double Cup Holder");
  const [qty, setQty] = useState(1);

  // countdown
  const deadline = useMemo(() => {
    const d = new Date();
    d.setHours(d.getHours() + 16);
    d.setMinutes(d.getMinutes() + 23);
    d.setSeconds(d.getSeconds() + 15);
    return d.getTime();
  }, []);
  const [remaining, setRemaining] = useState(deadline - Date.now());
  useEffect(() => {
    const t = setInterval(
      () => setRemaining(Math.max(0, deadline - Date.now())),
      1000
    );
    return () => clearInterval(t);
  }, [deadline]);

  const parts = useMemo(() => {
    let ms = remaining;
    const d = Math.floor(ms / 86400000);
    ms -= d * 86400000;
    const h = Math.floor(ms / 3600000);
    ms -= h * 3600000;
    const m = Math.floor(ms / 60000);
    ms -= m * 60000;
    const s = Math.floor(ms / 1000);
    return { d, h, m, s };
  }, [remaining]);

  return (
    <section className="py-10">
      {/* পুরো পেজ জুড়ে না গিয়ে সুন্দরভাবে সেন্টার করা */}
      <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
        {/* ঠিক ৫০/৫০ split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT 50% — Image fills full column height/width */}
          <div className="w-full h-full">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-lg lg:min-h-[620px]">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=2000&auto=format&fit=crop"
                alt="Car Armrest"
                className="h-full w-full object-cover"
              />
            </div>

            {/* ছোট থাম্ব রেল (ঐচ্ছিক) */}
            <div className="mt-4 flex gap-3">
              <img
                src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=400&auto=format&fit=crop"
                alt="thumb"
                className="h-16 w-20 rounded-xl object-cover border border-gray-200"
              />
            </div>
          </div>

          {/* RIGHT 50% — All text/content takes full half */}
          <div className="w-full">
            <span className="inline-block rounded-full bg-black text-white px-3 py-1 text-xs font-medium">
              ELITEBAZ
            </span>

            <h1 className="mt-4 text-4xl font-semibold leading-tight text-zinc-900">
              Car Armrest Box Multi-functional Tissue Holder
            </h1>

            <p className="mt-2 text-sm text-zinc-500">
              Shipping calculated at checkout.
            </p>

            {/* Price row */}
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl font-bold text-indigo-600">
                Tk 1,008 BDT
              </span>
              <span className="text-zinc-400 line-through">Tk 1,120 BDT</span>
              <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded-full">
                Sale
              </span>
            </div>

            {/* Color */}
            <div className="mt-6">
              <p className="text-sm font-medium text-zinc-700">Color</p>
              <div className="mt-2 flex gap-2">
                {["Black", "Beige"].map((c) => (
                  <button
                    key={c}
                    onClick={() => setActiveColor(c)}
                    className={`px-4 py-1.5 rounded-full border text-sm transition ${
                      activeColor === c
                        ? "bg-black text-white border-black"
                        : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Style */}
            <div className="mt-6">
              <p className="text-sm font-medium text-zinc-700">Style</p>
              <div className="mt-2 flex gap-2">
                {["Double Cup Holder", "Triple Cup Holder"].map((s) => (
                  <button
                    key={s}
                    onClick={() => setActiveStyle(s)}
                    className={`px-4 py-1.5 rounded-full border text-sm transition ${
                      activeStyle === s
                        ? "bg-indigo-600 text-white border-indigo-600"
                        : "bg-white text-zinc-700 border-zinc-300 hover:bg-zinc-50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="mt-6">
              <p className="text-sm font-medium text-zinc-700">Quantity</p>
              <div className="mt-2 inline-flex items-center border rounded-lg overflow-hidden">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="px-4 py-2 hover:bg-zinc-100"
                >
                  –
                </button>
                <span className="px-5 tabular-nums">{qty}</span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="px-4 py-2 hover:bg-zinc-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Countdown */}
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-medium text-amber-700 flex items-center gap-1">
                ⏳ Sale ends in:
              </p>
              <div className="mt-2 flex gap-6">
                <Time value={parts.d} label="Days" />
                <Time value={parts.h} label="Hours" />
                <Time value={parts.m} label="Mins" />
                <Time value={parts.s} label="Secs" />
              </div>
            </div>

            {/* CTAs */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button className="w-full rounded-lg bg-zinc-900 py-3 text-white hover:bg-zinc-800">
                Add to cart
              </button>
              <button className="w-full rounded-lg border border-zinc-300 py-3 hover:bg-zinc-100">
                Buy it now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Time({ value, label }) {
  return (
    <div className="text-center">
      <div className="rounded-md border bg-white px-3 py-2 text-lg font-semibold tabular-nums">
        {String(value).padStart(2, "0")}
      </div>
      <p className="mt-1 text-xs text-zinc-500">{label}</p>
    </div>
  );
}

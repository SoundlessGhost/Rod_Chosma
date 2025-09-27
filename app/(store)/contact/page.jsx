"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const formRef = useRef(null);
  const [state, setState] = useState("idle"); // idle | sending | success | error
  const [message, setMessage] = useState("");

  const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
  const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!formRef.current) return;

    setState("sending");
    setMessage("");

    try {
      // sendForm form element দিয়েই ভেরিয়েবলগুলো ম্যাপ করে নেয়
      const res = await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current,
        {
          publicKey: PUBLIC_KEY,
        }
      );

      if (res.status !== 200) throw new Error("EmailJS failed");
      setState("success");
      setMessage("Thanks! We received your message.");
      formRef.current.reset();
    } catch (err) {
      console.error(err);
      setState("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-neutral-950 via-neutral-900 to-black text-white">
      <div className="mx-auto max-w-4xl px-6 py-14">
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-bold">Contact</h1>
          <p className="mt-2 text-white/70">
            We usually reply within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="md:col-span-3">
            <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur p-6">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                {/* honeypot (spam trap) */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="space-y-2">
                  <Label htmlFor="from_name" className="text-white/90">
                    Name <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="from_name"
                    name="from_name"
                    required
                    placeholder="Your full name"
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reply_to" className="text-white/90">
                    Email <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="reply_to"
                    name="reply_to"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white/90">
                    Phone number <span className="text-red-400">*</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="01XXXXXXXXX"
                    className="bg-white/10 border-white/10 text-white placeholder:text-white/40"
                    pattern="^\+?\d{7,15}$"
                    title="Use digits only, optionally starting with +"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white/90">
                    Comment <span className="text-red-400">*</span>
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    placeholder="Write your message..."
                    className="resize-y bg-white/10 border-white/10 text-white placeholder:text-white/40"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={state === "sending"}
                  className="w-full md:w-auto bg-amber-500 hover:bg-amber-600 text-black font-semibold"
                >
                  {state === "sending" ? "Sending..." : "Send"}
                </Button>

                {message && (
                  <p
                    className={`text-sm mt-2 ${
                      state === "error" ? "text-red-400" : "text-green-400"
                    }`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* Right info */}
          <div className="md:col-span-2">
            <div className="rounded-xl border border-white/10 bg-white/0 p-6">
              <h2 className="font-semibold tracking-tight mb-3">
                Customer Service
              </h2>
              <p className="text-sm text-white/75 leading-relaxed">
                We love to hear from you about our customer service, merchandise
                or website. We aim to reply within 24 hours.
              </p>
              <div className="mt-4 text-sm">
                <div>
                  Email:{" "}
                  <a
                    href="mailto:info@rodchosma.com"
                    className="underline decoration-white/30 hover:text-amber-400"
                  >
                    info@rodchosma.com
                  </a>
                </div>
                <div className="mt-1">
                  Address: House # Ka, 51 Darogabadi Mor, Dhaka 1212, Bangladesh
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 text-center text-xs text-white/50">
          We’ll never share your information. Privacy first.
        </div>
      </div>
    </div>
  );
}

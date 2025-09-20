"use client";

import Link from "next/link";
import Image from "next/image";


import { useState } from "react";
import { Handbag, Minus, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "@/app/_context/CartContext";

export default function ProductIdSectionsClient({ product }) {
  const { addToCart } = useCart();
  const router = useRouter();
  const [qty, setQty] = useState(1);

  const decrement = "";
  const increment = "";

  const fmt = new Intl.NumberFormat("en-BD", {
    style: "currency",
    currency: "BDT",
    maximumFractionDigits: 0,
  });

  function handleAddToCart() {
    addToCart({ ...product, quantity: qty });
  }

  function handleBuyNow() {
    handleAddToCart();
    router.push("/checkout");
  }

  return (
    <div>
      <div className="flex items-center justify-between ">
        <div>
          <div className="relative w-[606px] h-[606px]">
            <Image
              src="/eyeglass-2.jpeg"
              alt="7"
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="606px"
            />
          </div>

          {/* <Image
            src={"/eyeglass-2.jpeg"}
            alt={"7"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
          <Image
            src={"/eyeglass-2.jpeg"}
            alt={"7"}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          /> */}
        </div>
        <div>
          <p
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] 
             text-gray-900"
          >
            RODCHOSMA
          </p>
          <p>Men's Summer Slip-On Breathable Mesh Sneakers</p>
          <p> Sale priceTk 1,236 BDT</p>
          <p>
            {" "}
            Size <br />S M L XL
          </p>
          <div className="inline-flex items-center gap-2">
            <button
              onClick={() => decrement(item.id)}
              className="w-6 h-6 border rounded flex items-center justify-center"
            >
              <Minus size={12} />
            </button>
            <span className="w-6 text-center text-sm">{"item.quantity"}</span>
            <button
              onClick={() => increment(item.id)}
              className="w-6 h-6 border rounded flex items-center justify-center"
            >
              <Plus size={12} />
            </button>
          </div>
          <Link
            href="/products"
            className="inline-flex items-center justify-center w-full rounded-md
                         bg-teal-700 px-5 py-2.5 text-white text-[15px] font-medium
                         hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600/40"
          >
            Checkout <Handbag size={16} className="ml-2" strokeWidth={2} />
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center justify-center w-full rounded-md
                                   bg-teal-700 px-5 py-2.5 text-white text-[15px] font-medium
                                   hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-600/40"
          >
            Buy it Now <Handbag size={16} className="ml-2" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}

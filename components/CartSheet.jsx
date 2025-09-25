"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Sheet,
  SheetTitle,
  SheetClose,
  SheetHeader,
  SheetContent,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";
import { useCart } from "@/app/_context/CartContext";
import { ShoppingCart, Trash2, Plus, Minus } from "lucide-react";

const fmt = new Intl.NumberFormat("en-BD", {
  style: "currency",
  currency: "BDT",
  maximumFractionDigits: 0,
});

export default function CartSheet() {
  const { cart, increment, decrement, removeFromCart } = useCart();
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  console.log(cart);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative inline-flex cursor-pointer ml-2 items-center justify-center rounded-full border border-white/30 p-2 text-white/80 transition hover:border-white/60 hover:text-white"
          type="button"
        >
          <ShoppingCart className="size-4" />
          {cart.length > 0 && (
            <span className="absolute -top-1.5 -right-1.5 text-[10px] bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center shadow-md">
              {cart.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[88vw] max-w-sm p-0 h-[100dvh] flex flex-col bg-black/80 backdrop-blur-md text-white shadow-xl border-l border-white/10"
      >
        {/* A11y: DialogTitle সবসময় থাকবে */}
        <SheetHeader className="sr-only">
          <SheetTitle>Shopping cart</SheetTitle>
          <SheetDescription>
            Manage items in your shopping cart.
          </SheetDescription>
        </SheetHeader>

        {/* Visual header (optional) */}
        {cart.length > 0 && (
          <div className="px-4 py-3 border-b border-white/10 bg-black/80 backdrop-blur-sm">
            <div className="text-left space-y-1">
              <h2 className="text-lg font-semibold tracking-wide text-white">
                Your Cart
              </h2>
              <p className="text-xs text-white/60">
                Manage items in your shopping cart.
              </p>
            </div>
          </div>
        )}

        {/* Body */}
        {cart.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <Image
              src="/empty-cart.png"
              alt="Empty cart"
              width={96}
              height={96}
              className="mb-4 object-contain opacity-80"
            />
            <p className="text-white font-medium">
              Your cart is currently empty.
            </p>
            <p className="text-white/50 text-sm mt-1 max-w-xs">
              You may check out all the available products and buy some in the
              shop.
            </p>
            <SheetClose asChild>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-red-600 px-5 py-2 text-white hover:bg-red-700 transition"
              >
                Return to shop
              </Link>
            </SheetClose>
          </div>
        ) : (
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {cart.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 bg-white/5 hover:bg-white/10 transition rounded-lg p-3"
              >
                <SheetClose asChild>
                  <Link
                    href={`/products/${item.id}`}
                    className="relative w-14 h-14 rounded overflow-hidden shrink-0 border border-white/10"
                  >
                    <Image
                      src={item.image || "/placeholder.png"}
                      alt={item.name || "Product image"}
                      fill
                      className="object-cover"
                    />
                  </Link>
                </SheetClose>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-sm font-medium text-white">
                      {item.name || "Product  name"}
                    </h4>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-white/40 hover:text-red-500 transition"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>

                  <div className="mt-2 flex items-center justify-between">
                    <div className="inline-flex items-center gap-2">
                      <button
                        onClick={() => decrement(item.id)}
                        className="w-6 h-6 border border-white/20 rounded flex items-center justify-center text-white/70 hover:text-white"
                      >
                        <Minus size={12} />
                      </button>
                      <span className="w-6 text-center text-sm text-white">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increment(item.id)}
                        className="w-6 h-6 border border-white/20 rounded flex items-center justify-center text-white/70 hover:text-white"
                      >
                        <Plus size={12} />
                      </button>
                    </div>

                    <div className="text-xs text-white/60">
                      {item.quantity} × {fmt.format(item.price)}
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        )}

        {/* Footer */}
        {cart.length > 0 && (
          <div className="px-4 py-3 border-t border-white/10 bg-black/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-white/60">Subtotal:</span>
              <span className="text-base font-semibold text-white">
                {fmt.format(subtotal)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <SheetClose asChild>
                <Link
                  href="/cart"
                  className="inline-flex items-center justify-center rounded-md border border-white/20 px-3 py-2 text-xs font-medium text-white hover:bg-white/10 transition"
                >
                  View cart
                </Link>
              </SheetClose>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-md bg-red-600 px-3 py-2 text-xs font-medium text-white hover:bg-red-700 transition"
              >
                Checkout
              </Link>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

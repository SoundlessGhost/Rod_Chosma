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

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          aria-label="Open cart"
          className="relative p-2 cursor-pointer text-gray-700 hover:text-teal-700"
        >
          <ShoppingCart size={24} />
          {cart.length > 0 && (
            <span className="absolute -top-1 -right-1 text-[10px] bg-teal-700 text-white rounded-full w-4 h-4 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-[88vw] max-w-sm p-0 h-[100dvh] flex flex-col"
      >
        {/* Header */}
        {cart.length === 0 ? (
          ""
        ) : (
          <div className="px-4 py-3 border-b">
            <SheetHeader className="text-left space-y-1">
              <SheetTitle>Your Cart</SheetTitle>
              <SheetDescription>
                Manage items in your shopping cart.
              </SheetDescription>
            </SheetHeader>
          </div>
        )}

        {/* Body */}
        {cart.length === 0 ? (
          // Empty view vertically centered
          <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
            <Image
              src="/empty-cart.png"
              alt="Empty cart"
              width={96}
              height={96}
              className="mb-4 object-contain"
            />
            <p className="text-gray-700 font-medium">
              Your cart is currently empty.
            </p>
            <p className="text-gray-400 text-sm mt-1 max-w-xs">
              You may check out all the available products and buy some in the
              shop.
            </p>
            <SheetClose asChild>
              <Link
                href="/products"
                className="mt-6 inline-flex items-center justify-center rounded-md bg-teal-700 px-5 py-2 text-white hover:bg-teal-800"
              >
                Return to shop
              </Link>
            </SheetClose>
          </div>
        ) : (
          // Products list (always starts from top)
          <div className="flex-1  overflow-y-auto px-4 py-3">
            <ul className="space-y-3">
              {cart.map((item) => (
                <li
                  key={item.id}
                  className="flex hover:bg-gray-50 p-2 rounded-lg gap-3"
                >
                  {/* thumb */}
                  <SheetClose asChild>
                    <Link
                      href={`/products/${item.id}`}
                      className="relative w-14 h-14 rounded-sm overflow-hidden shrink-0"
                    >
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </Link>
                  </SheetClose>
                  {/* details */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-medium leading-snug">
                        {item.name}
                      </h4>

                      {/* TODO প্রোডাক্ট এর উপর ক্লিক করলে যেন স্পেসিফিক পেজে নিয়ে যায় */}
                      {/* TODO Failed to load product */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400  cursor-pointer hover:text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>

                    <div className="mt-1.5 flex items-center justify-between">
                      {/* qty controls */}
                      <div className="inline-flex items-center gap-2">
                        <button
                          onClick={() => decrement(item.id)}
                          className="w-6 h-6 border rounded flex items-center justify-center"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-6 text-center text-sm">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => increment(item.id)}
                          className="w-6 h-6 border rounded flex items-center justify-center"
                        >
                          <Plus size={12} />
                        </button>
                      </div>

                      <div className="text-xs text-muted-foreground">
                        {item.quantity} × {fmt.format(item.price)}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer */}
        {cart.length === 0 ? (
          ""
        ) : (
          <div className="px-4 py-3 border-t bg-background/80 backdrop-blur-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Subtotal:</span>
              <span className="text-base font-semibold">
                {fmt.format(subtotal)}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <SheetClose asChild>
                <Link
                  href="/cart"
                  className="inline-flex items-center justify-center rounded-md border px-3 py-2 text-xs font-medium hover:bg-muted"
                >
                  View cart
                </Link>
              </SheetClose>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-md bg-teal-700 px-3 py-2 text-xs font-medium text-white hover:bg-teal-800"
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

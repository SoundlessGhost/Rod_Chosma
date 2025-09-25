import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(_req, ctx) {
  try {
    const { id } = await ctx.params;

    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true },
    });

    if (!product) {
      return NextResponse.json(
        { ok: false, error: "Not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({ ok: true, data: product });
  } catch (err) {
    console.error("GET /api/products/[id] error:", err);
    return NextResponse.json(
      { ok: false, error: err.message || "Unexpected error" },
      { status: 500 }
    );
  }
}

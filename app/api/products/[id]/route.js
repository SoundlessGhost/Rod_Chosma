// app/api/products/[id]/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export const runtime = "nodejs"; // Prisma requires Node runtime
export const dynamic = "force-dynamic"; // avoid caching in dev

export async function GET(_req, { params }) {
  try {
    const id = parseInt(params.id, 10);
    if (isNaN(id)) {
      return NextResponse.json(
        { ok: false, error: "Invalid ID" },
        { status: 400 }
      );
    }

    const product = await prisma.product.findUnique({
      where: { id },
      include: { category: true }, // this matches your schema
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
    // return the actual Prisma error message so you see what’s wrong
    return NextResponse.json(
      { ok: false, error: err.message || "Unexpected error" },
      { status: 500 }
    );
  }
}

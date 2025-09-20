import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      select: {
        id: true,
        title: true,
        _count: { select: { products: true } },
      },
      orderBy: { id: "asc" },
    });

    return NextResponse.json({ ok: true, data: categories });
  } catch (error) {
    console.error("GET /api/categories error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch categories" },
      { status: 500 }
    );
  }
}

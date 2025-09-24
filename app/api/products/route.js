import prisma from "@/lib/prisma";

import { NextResponse } from "next/server";

export async function GET(req) {
  try {
    const { searchParams } = new URL(req.url);

    const page = parseInt(searchParams.get("page") || "1", 10);
    const pageSize = parseInt(searchParams.get("pageSize") || "12", 10);

    const products = await prisma.product.findMany({
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: { createdAt: "desc" },
      select: {
        id: true,
        name: true,
        price: true,
        image: true,
        secondaryImages: true,
        lens: true,
        shape: true,
        badge: true,
        sizes: true,
        category: { select: { id: true, title: true } },
      },
    });

    const total = await prisma.product.count();

    return NextResponse.json({
      ok: true,
      data: products,
      page,
      pageSize,
      total,
      totalPages: Math.ceil(total / pageSize),
    });
  } catch (error) {
    console.error("GET /api/products error:", error);
    return NextResponse.json(
      { ok: false, error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET all suppliers
export async function GET() {
  try {
    const suppliers = await prisma.supplier.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(suppliers);
  } catch (error) {
    console.error("GET /suppliers error:", error);
    return NextResponse.json(
      { error: "Failed to fetch suppliers" },
      { status: 500 }
    );
  }
}

// POST new supplier
export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (
      !data.name ||
      !data.email ||
      !data.company ||
      !data.product ||
      !data.price
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const supplier = await prisma.supplier.create({
      data: {
        name: data.name,
        email: data.email,
        company: data.company,
        product: data.product,
        price: data.price,
        description: data.description ?? "",
        image: data.image ?? null,
      },
    });

    return NextResponse.json(supplier, { status: 201 });
  } catch (error) {
    console.error("POST /suppliers error:", error);
    return NextResponse.json(
      { error: "Failed to create supplier" },
      { status: 500 }
    );
  }
}

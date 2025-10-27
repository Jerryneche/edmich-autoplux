import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Approve supplier
export async function PATCH(
  req: NextRequest,
  context: { params: Promise<{ id: string }> }
) {
  const { id } = await context.params;
  const { approved } = await req.json();

  const supplier = await prisma.supplier.update({
    where: { id: Number(id) },
    data: { approved },
  });

  return NextResponse.json(supplier);
}

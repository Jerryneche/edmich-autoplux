import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Approve supplier
export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  const { approved } = await req.json();
  const supplier = await prisma.supplier.update({
    where: { id: Number(params.id) },
    data: { approved },
  });
  return NextResponse.json(supplier);
}

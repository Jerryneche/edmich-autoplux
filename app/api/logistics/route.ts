import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const requests = await prisma.logisticsRequest.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(requests);
  } catch (error) {
    console.error("GET /logistics error:", error);
    return NextResponse.json(
      { error: "Failed to fetch logistics requests" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();

    if (
      !data.name ||
      !data.email ||
      !data.phone ||
      !data.pickup ||
      !data.dropoff ||
      !data.vehicle ||
      !data.deliveryDate
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const request = await prisma.logisticsRequest.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        pickup: data.pickup,
        dropoff: data.dropoff,
        vehicle: data.vehicle,
        deliveryDate: new Date(data.deliveryDate), // ✅ ensure DateTime
        notes: data.notes ?? "",
      },
    });

    return NextResponse.json(request, { status: 201 });
  } catch (error) {
    console.error("POST /logistics error:", error);
    return NextResponse.json(
      { error: "Failed to create logistics request" },
      { status: 500 }
    );
  }
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      orderBy: { createdAt: "desc" },
    });
    return NextResponse.json(bookings);
  } catch (error) {
    console.error("GET /bookings error:", error);
    return NextResponse.json(
      { error: "Failed to fetch bookings" },
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
      !data.carModel ||
      !data.service ||
      !data.appointmentDate
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const booking = await prisma.booking.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        carModel: data.carModel,
        service: data.service,
        appointmentDate: new Date(data.appointmentDate), // ✅ ensure DateTime
        notes: data.notes ?? "",
      },
    });

    return NextResponse.json(booking, { status: 201 });
  } catch (error) {
    console.error("POST /bookings error:", error);
    return NextResponse.json(
      { error: "Failed to create booking" },
      { status: 500 }
    );
  }
}

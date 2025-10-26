import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function main() {
  // --- Suppliers ---
  await prisma.supplier.createMany({
    data: [
      {
        name: "John Doe",
        email: "supplier1@example.com",
        company: "Auto Parts Ltd",
        product: "Brake Pads",
        price: "₦15,000",
        description: "High-quality brake pads for Toyota models",
        approved: true,
      },
      {
        name: "Jane Smith",
        email: "supplier2@example.com",
        company: "Quality Motors",
        product: "Engine Oil",
        price: "₦8,500",
        description: "Premium synthetic oil for all vehicles",
        approved: false,
      },
      {
        name: "Mike Johnson",
        email: "supplier3@example.com",
        company: "Tyre World",
        product: "Car Tyres",
        price: "₦45,000",
        description: "Durable tyres for SUVs and sedans",
        approved: true,
      },
    ],
  });

  // --- Bookings ---
  await prisma.booking.createMany({
    data: [
      {
        name: "Michael Johnson",
        email: "mike@example.com",
        phone: "08012345678",
        carModel: "Toyota Corolla",
        service: "Brake repair",
        appointmentDate: new Date("2025-11-01T10:00:00Z"),
        notes: "Customer requests OEM parts only",
      },
      {
        name: "Sarah Williams",
        email: "sarah@example.com",
        phone: "08098765432",
        carModel: "Honda Civic",
        service: "Engine diagnostics",
        appointmentDate: new Date("2025-11-02T14:00:00Z"),
      },
    ],
  });

  // --- Logistics Requests ---
  await prisma.logisticsRequest.createMany({
    data: [
      {
        name: "David Brown",
        email: "david@example.com",
        phone: "08123456789",
        pickup: "Lagos",
        dropoff: "Abuja",
        vehicle: "Truck",
        deliveryDate: new Date("2025-11-05T09:00:00Z"),
        notes: "Fragile parts, handle with care",
      },
      {
        name: "Emily Davis",
        email: "emily@example.com",
        phone: "08198765432",
        pickup: "Port Harcourt",
        dropoff: "Enugu",
        vehicle: "Van",
        deliveryDate: new Date("2025-11-06T12:00:00Z"),
      },
    ],
  });

  console.log(
    "✅ Database seeded successfully with suppliers, bookings, and logistics requests!"
  );
}

if (require.main === module) {
  main()
    .catch((e) => {
      console.error("❌ Seeding failed:", e);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

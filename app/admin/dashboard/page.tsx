"use client";

import { useEffect, useState } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

type Supplier = {
  id: number;
  name: string;
  email: string;
  company: string;
  product: string;
  price: string;
  approved: boolean;
};

type Booking = {
  id: number;
  name: string;
  email: string;
  phone: string;
  carModel: string;
  service: string;
  appointmentDate: string;
};

type LogisticsRequest = {
  id: number;
  name: string;
  email: string;
  phone: string;
  pickup: string;
  dropoff: string;
  vehicle: string;
  deliveryDate: string;
};

export default function AdminDashboard() {
  const [suppliers, setSuppliers] = useState<Supplier[]>([]);
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [logistics, setLogistics] = useState<LogisticsRequest[]>([]);

  useEffect(() => {
    fetch("/api/suppliers")
      .then((res) => res.json())
      .then(setSuppliers);
    fetch("/api/bookings")
      .then((res) => res.json())
      .then(setBookings);
    fetch("/api/logistics")
      .then((res) => res.json())
      .then(setLogistics);
  }, []);

  const toggleApproval = async (id: number, approved: boolean) => {
    await fetch(`/api/suppliers/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ approved: !approved }),
    });
    setSuppliers(
      suppliers.map((s) => (s.id === id ? { ...s, approved: !approved } : s))
    );
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <section className="pt-24 max-w-7xl mx-auto px-6">
        <h1 className="text-3xl font-semibold">Admin Dashboard</h1>

        {/* Suppliers */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Suppliers</h2>
          <div className="mt-4 space-y-4">
            {suppliers.map((s) => (
              <div
                key={s.id}
                className="border border-white/10 rounded p-4 flex justify-between items-center"
              >
                <div>
                  <p className="font-medium">
                    {s.company} — {s.product}
                  </p>
                  <p className="text-sm text-neutral-400">{s.email}</p>
                </div>
                <button
                  onClick={() => toggleApproval(s.id, s.approved)}
                  className={`px-4 py-2 rounded text-sm font-medium ${
                    s.approved ? "bg-red-600" : "bg-green-600"
                  }`}
                >
                  {s.approved ? "Revoke" : "Approve"}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Bookings */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Bookings</h2>
          <div className="mt-4 space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="border border-white/10 rounded p-4">
                <p className="font-medium">
                  {b.name} — {b.service}
                </p>
                <p className="text-sm text-neutral-400">
                  {b.carModel} | {b.appointmentDate}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Logistics */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">Logistics Requests</h2>
          <div className="mt-4 space-y-4">
            {logistics.map((l) => (
              <div key={l.id} className="border border-white/10 rounded p-4">
                <p className="font-medium">
                  {l.name} — {l.vehicle}
                </p>
                <p className="text-sm text-neutral-400">
                  {l.pickup} → {l.dropoff} | {l.deliveryDate}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

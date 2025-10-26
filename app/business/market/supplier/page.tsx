"use client";

import { useState } from "react";
import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

export default function SupplierOnboardingPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    product: "",
    price: "",
    description: "",
    image: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/suppliers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert("Supplier registered successfully! Awaiting approval.");
      setForm({
        name: "",
        email: "",
        company: "",
        product: "",
        price: "",
        description: "",
        image: "",
      });
    } else {
      alert("Error registering supplier.");
    }
  };

  return (
    <main className="bg-black min-h-screen text-white">
      <Header />
      <section className="pt-24 max-w-3xl mx-auto px-6">
        <h1 className="text-3xl font-semibold">Supplier Onboarding</h1>
        <p className="mt-2 text-neutral-400">
          List your products on Autoplux Market.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            required
          />
          <input
            name="company"
            placeholder="Company Name"
            value={form.company}
            onChange={handleChange}
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            required
          />
          <input
            name="product"
            placeholder="Product Name"
            value={form.product}
            onChange={handleChange}
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            required
          />
          <input
            name="price"
            placeholder="Price (₦)"
            value={form.price}
            onChange={handleChange}
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            required
          />
          <textarea
            name="description"
            placeholder="Product Description"
            value={form.description}
            onChange={handleChange}
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            rows={4}
            required
          />
          <button
            type="submit"
            className="w-full bg-white text-black py-3 rounded font-medium"
          >
            Register Supplier
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}

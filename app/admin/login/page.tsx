"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const [form, setForm] = useState({ username: "", password: "" });
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Call API to validate credentials
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <main className="flex items-center justify-center min-h-screen bg-black text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-neutral-900 p-8 rounded-lg w-full max-w-sm space-y-4"
      >
        <h1 className="text-2xl font-semibold text-center">Admin Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
          className="w-full px-4 py-2 rounded bg-black border border-white/10"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          className="w-full px-4 py-2 rounded bg-black border border-white/10"
          required
        />
        <button
          type="submit"
          className="w-full bg-white text-black py-2 rounded font-medium"
        >
          Login
        </button>
        <h2>Or</h2>
        <button
          onClick={() => signIn("google")}
          className="bg-white text-black px-6 py-2 rounded"
        >
          Sign in with Google
        </button>
      </form>
    </main>
  );
}

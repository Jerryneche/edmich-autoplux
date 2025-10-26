import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
export default function LoginPage() {
  return (
    <main>
      <Header />
      <section className="pt-24 max-w-md mx-auto px-6">
        <h1 className="text-2xl font-semibold">Login</h1>
        <form className="mt-6 space-y-4">
          <input
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            placeholder="Email"
          />
          <input
            type="password"
            className="w-full bg-black border border-white/10 rounded px-4 py-3"
            placeholder="Password"
          />
          <button className="w-full bg-white text-black py-3 rounded">
            Sign in
          </button>
        </form>
      </section>
      <Footer />
    </main>
  );
}

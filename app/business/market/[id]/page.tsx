import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Image from "next/image";

// Mock product data (later we’ll fetch from DB or API)
const products = [
  {
    id: 1,
    name: "Turbocharger",
    image: "/pturbocharger.jpg",
    price: "₦150,000",
    supplier: "Lagos Auto Supplies",
    description:
      "High-performance turbocharger designed for durability and efficiency. Perfect for boosting engine power.",
  },
  {
    id: 2,
    name: "Brake Pads",
    image: "/pbreakpad.jpg",
    price: "₦25,000",
    supplier: "Kano Motors",
    description:
      "Premium brake pads with long-lasting performance and safety assurance.",
  },
  {
    id: 3,
    name: "Car Battery",
    image: "/pbattery.jpg",
    price: "₦45,000",
    supplier: "Abuja Auto Traders",
    description:
      "Reliable 12V car battery with extended lifespan and warranty coverage.",
  },
  {
    id: 4,
    name: "Car Rim",
    image: "/shopG1.jpg",
    price: "₦57,000",
    supplier: "Abass Auto Dealer",
    description:
      "Reliable 18 wheel car rim  with extended lifespan and warranty coverage.",
  },
  {
    id: 5,
    name: "Engine Compressor",
    image: "/shopG16.jpg",
    price: "₦80,000",
    supplier: "kano Auto Traders",
    description:
      "Reliable toyota compressor with extended lifespan and warranty coverage.",
  },
  {
    id: 6,
    name: "Engine",
    image: "/shopG31.jpg",
    price: "₦900,000",
    supplier: "Obi and co",
    description:
      "Reliable car engine with extended lifespan and warranty coverage.",
  },
  {
    id: 7,
    name: "Engine Kick Starter",
    image: "/shopG12.jpg",
    price: "₦30,000",
    supplier: "Abuja Auto Traders",
    description:
      "Reliable engine kick with extended lifespan and warranty coverage.",
  },
  {
    id: 8,
    name: "Car plug",
    image: "/shopG25.jpg",
    price: "₦5,000",
    supplier: "Abutex global",
    description:
      "Reliable car plug with extended lifespan and warranty coverage.",
  },
  {
    id: 9,
    name: "Drive Shaft",
    image: "/shopG29.jpg",
    price: "₦62,000",
    supplier: "Afam ventures",
    description:
      "Reliable car drive shaft with extended lifespan and warranty coverage.",
  },
  {
    id: 10,
    name: "Low arm",
    image: "/shopG11.jpg",
    price: "₦30,000",
    supplier: "Abuja Auto Traders",
    description:
      "Reliable low arm with extended lifespan and warranty coverage.",
  },
  {
    id: 11,
    name: "Engine timing set",
    image: "/shopG30.jpg",
    price: "₦22,000",
    supplier: "Abuja Auto Traders",
    description:
      "Reliable timimng belt and components with extended lifespan and warranty coverage.",
  },

  {
    id: 12,
    name: "shock spring",
    image: "/shopG21.jpg",
    price: "₦8,000",
    supplier: "Abuja Auto Traders",
    description:
      "Reliable shock absorber spring with extended lifespan and warranty coverage.",
  },
];

export default function ProductDetails({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === Number(params.id));

  if (!product) {
    return (
      <main>
        <Header />
        <section className="pt-24 min-h-screen flex items-center justify-center text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main>
      <Header />
      <section className="relative h-screen w-full">
        {/* Hero background */}
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/10" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-end pb-24 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold">{product.name}</h1>
          <p className="mt-3 text-neutral-300 max-w-2xl">
            {product.description}
          </p>
          <p className="mt-2 text-lg font-medium text-white">{product.price}</p>
          <p className="text-sm text-neutral-400">
            Supplier: {product.supplier}
          </p>

          <div className="mt-8 flex flex-col md:flex-row gap-4">
            <button className="bg-white text-black px-8 py-3 rounded-md text-sm font-medium">
              Buy Now
            </button>
            <button className="bg-black/60 border border-white/20 text-white px-8 py-3 rounded-md text-sm font-medium">
              Contact Supplier
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}

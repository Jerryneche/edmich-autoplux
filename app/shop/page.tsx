import Image from "next/image";
import { headers } from "next/headers";
import Header from "../components/Header";
import Footer from "../components/Footer";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  ShoppingCartIcon,
  StarIcon,
  CheckBadgeIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";

// Placeholder products for when API fails

interface Product {
  id: string;
  name: string;
  image: string;
  verified: string;
  category: string;
  reviews: string;
  rating: string;
  price: string;
  product: string;
  company: string;
  // add other fields
}
const PLACEHOLDER_PRODUCTS = [
  {
    id: "1",
    name: "Premium Brake Pads",
    company: "AutoParts Pro",
    price: "₦15,000",
    category: "Brakes",
    rating: 4.8,
    reviews: 124,
    verified: true,
    image: "/brake-pads.jpg",
  },
  {
    id: "2",
    name: "Engine Oil Filter",
    company: "Quality Motors",
    price: "₦8,500",
    category: "Filters",
    rating: 4.9,
    reviews: 89,
    verified: true,
    image: "/oil-filter.jpg",
  },
  {
    id: "3",
    name: "Air Filter Set",
    company: "Parts Express",
    price: "₦12,000",
    category: "Filters",
    rating: 4.7,
    reviews: 56,
    verified: true,
    image: "/air-filter.jpg",
  },
  {
    id: "4",
    name: "Spark Plugs (Set of 4)",
    company: "AutoParts Pro",
    price: "₦18,000",
    category: "Engine",
    rating: 4.9,
    reviews: 203,
    verified: true,
    image: "/spark-plugs.jpg",
  },
  {
    id: "5",
    name: "Headlight Assembly",
    company: "Lightning Parts",
    price: "₦45,000",
    category: "Lighting",
    rating: 4.6,
    reviews: 67,
    verified: true,
    image: "/head-light.jpg",
  },
  {
    id: "6",
    name: "Wiper Blades",
    company: "ClearView Auto",
    price: "₦6,500",
    category: "Accessories",
    rating: 4.5,
    reviews: 142,
    verified: true,
    image: "/wiper-blades.jpg",
  },
];

async function getSuppliers() {
  try {
    const headersList = await headers();
    const host = headersList.get("host");
    const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

    const res = await fetch(`${protocol}://${host}/api/suppliers`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.warn("API failed, using placeholder data");
      return PLACEHOLDER_PRODUCTS;
    }

    const data = await res.json();
    return data.length > 0 ? data : PLACEHOLDER_PRODUCTS;
  } catch (error) {
    console.warn("API error, using placeholder data:", error);
    return PLACEHOLDER_PRODUCTS;
  }
}

export default async function ShopPage() {
  const products = await getSuppliers();

  return (
    <main className="bg-gradient-to-b from-white via-neutral-50 to-white min-h-screen">
      <Header />

      {/* Hero Banner */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 opacity-50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/40 rounded-full blur-3xl"></div>

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 mb-6">
            <SparklesIcon className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-blue-700">
              10,000+ Genuine Parts
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-neutral-900 mb-6">
            Find the Perfect{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Auto Parts
            </span>
          </h1>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Browse verified suppliers offering genuine parts at competitive
            prices
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-3xl mx-auto">
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-neutral-400" />
              <input
                type="text"
                placeholder="Search for brake pads, filters, engine parts..."
                className="w-full pl-12 pr-4 py-4 bg-white border-2 border-neutral-200 rounded-xl text-neutral-900 placeholder-neutral-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-100 transition-all"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg transition-all">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Products */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-4 py-2 bg-white border-2 border-neutral-200 rounded-xl text-neutral-700 font-medium hover:border-blue-300 transition-all">
              <FunnelIcon className="h-4 w-4" />
              Filters
            </button>
            <div className="hidden md:flex gap-2">
              {["All", "Brakes", "Filters", "Engine", "Lighting"].map((cat) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-lg font-medium transition-all ${
                    cat === "All"
                      ? "bg-blue-600 text-white"
                      : "bg-white border border-neutral-200 text-neutral-700 hover:border-blue-300"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm text-neutral-600">
              {products.length} Products
            </span>
            <select className="px-4 py-2 bg-white border-2 border-neutral-200 rounded-xl text-neutral-700 font-medium focus:border-blue-500 focus:outline-none">
              <option>Sort by: Recommended</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Top Rated</option>
              <option>Proximity</option>
            </select>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product: Product) => (
            <div key={product.id} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>

              <div className="relative bg-white border-2 border-neutral-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-xl transition-all">
                {/* Image Placeholder */}
                <div className="relative w-full aspect-w-4 aspect-h-3 bg-gradient-to-br from-neutral-100 to-neutral-200 flex items-center justify-center">
                  {product.image ? (
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={200}
                      className="object-cover"
                    />
                  ) : (
                    <ShoppingCartIcon className="h-16 w-16 text-neutral-300" />
                  )}

                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    {product.verified && (
                      <div className="flex items-center gap-1 px-2 py-1 bg-green-500 rounded-lg">
                        <CheckBadgeIcon className="h-3 w-3 text-white" />
                        <span className="text-xs font-semibold text-white">
                          Verified
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Favorite Button */}
                  <button className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
                    <HeartIcon className="h-4 w-4 text-neutral-300 hover:text-red-500 transition-colors" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category */}
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {product.category || "Auto Parts"}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-neutral-900 mt-2 mb-1 group-hover:text-blue-600 transition-colors">
                    {product.name || product.product || "Premium Auto Part"}
                  </h3>

                  {/* Company */}
                  <p className="text-sm text-neutral-600 mb-3">
                    {product.company || "Verified Supplier"}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-4">
                    <StarIcon className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-semibold text-neutral-900">
                      {product.rating || "4.8"}
                    </span>
                    <span className="text-sm text-neutral-500">
                      ({product.reviews || "100"}+ reviews)
                    </span>
                  </div>

                  {/* Price and CTA */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                    <div>
                      <p className="text-xs text-neutral-500">Price</p>
                      <p className="text-2xl font-bold text-blue-600">
                        {product.price || "₦10,000"}
                      </p>
                    </div>
                    <button className="px-5 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition-all">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-white border-2 border-neutral-200 rounded-xl text-neutral-700 font-semibold hover:border-blue-300 hover:shadow-lg transition-all">
            Load More Products
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

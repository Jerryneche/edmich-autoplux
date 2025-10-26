import Image from "next/image";
import Link from "next/link";

type Product = {
  id: number;
  name: string;
  image?: string;
  price: string;
  supplier: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="border border-white/10 rounded-lg p-4 bg-black/40 hover:bg-white/5 transition text-white">
      <Image
        src={product.image || "/parts/default.jpg"}
        alt={product.name}
        width={400}
        height={300}
        className="rounded-md object-cover"
      />
      <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
      <p className="text-neutral-400 text-sm">Supplier: {product.supplier}</p>
      <p className="mt-1 font-medium">{product.price}</p>
      <div className="mt-4 flex gap-3">
        <Link
          href={`/business/market/${product.id}`}
          className="bg-white text-black px-4 py-2 rounded text-sm"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}

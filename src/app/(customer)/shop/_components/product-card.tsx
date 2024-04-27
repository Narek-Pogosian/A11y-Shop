import { type Product } from "@/server/db/schema";
import { Skeleton } from "@/components/ui/skeleton";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <div className="aspect-video overflow-hidden rounded">
        {product.image ? (
          <img src={product.image} alt={product.name} />
        ) : (
          <div className="h-full w-full bg-accent"></div>
        )}
      </div>
      <h2 className="py-2">
        <Link href="/shop">{product.name}</Link>
      </h2>
    </article>
  );
}

export function ProductCardSkeleton() {
  return <Skeleton className="aspect-video" />;
}

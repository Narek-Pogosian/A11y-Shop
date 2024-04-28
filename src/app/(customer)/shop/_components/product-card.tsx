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
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.altText ?? ""}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full bg-accent"></div>
        )}
      </div>
      <h2>
        <Link href="/">{product.name}</Link>
      </h2>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div>
      <Skeleton className="aspect-video" />
    </div>
  );
}

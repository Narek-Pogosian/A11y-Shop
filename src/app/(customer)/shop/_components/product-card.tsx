import { type Product } from "@/server/db/schema";
import { ShoppingBag } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { currency } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card relative rounded">
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
      <div className="flex items-center justify-between px-1 pb-1 pt-2">
        <div className="flex flex-col font-semibold">
          <h2>
            <Link
              href="/"
              className="text-lg outline-none after:absolute after:inset-0"
            >
              {product.name}
            </Link>
          </h2>
          <span className="text-sm text-muted-foreground">
            {currency(product.price)}
          </span>
        </div>
        <Button size="icon" className="relative">
          <span className="sr-only">Add to Cart</span>
          <ShoppingBag className="size-6" />
        </Button>
      </div>
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

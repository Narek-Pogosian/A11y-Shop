import { type Product } from "@/server/db/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ShoppingBag } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article>
      <div className="relative rounded ring-ring focus-within:ring-2 focus-within:[&_a]:outline-none">
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
        <h2 className="pt-2 text-lg font-semibold">
          <Link href="/" className="after:absolute after:inset-0 focus:ring-0">
            {product.name}
          </Link>
        </h2>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <p className="font-medium text-muted-foreground">
            <span className="sr-only">Price is </span> {product.price}
          </p>
        </div>
        <Button size="icon">
          <ShoppingBag className="h-6 w-6" />
          <span className="sr-only">Add one {product.name} to cart</span>
        </Button>
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return <Skeleton className="aspect-video" />;
}

import { type Product } from "@/server/db/schema";
import { Skeleton } from "@/components/ui/skeleton";
import { currency } from "@/lib/utils";
import AddToCart from "../../_components/add-to-cart";
import Link from "next/link";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="product-card relative rounded">
      <div className="aspect-[3/2] overflow-hidden rounded">
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
      <div className="flex items-center justify-between pb-1 pt-2">
        <div className="flex flex-col font-semibold">
          <h2>
            <Link
              href={`/shop/${product.slug}`}
              scroll={false}
              className="text-lg outline-none after:absolute after:inset-0"
            >
              {product.name}
            </Link>
          </h2>
          <span className="text-sm text-muted-foreground">
            {currency(parseFloat(product.price))}
          </span>
        </div>
        <AddToCart product={product} />
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <>
      <Skeleton className="aspect-[3/2]" />
      <div className="flex items-center justify-between pb-1 pt-2">
        <div className="flex flex-col pt-1 font-semibold">
          <Skeleton className="mb-1.5 h-5 w-28" />
          <Skeleton className="h-4 w-12" />
        </div>
        <Skeleton className="h-10 w-10" />
      </div>
    </>
  );
}

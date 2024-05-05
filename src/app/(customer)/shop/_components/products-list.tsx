import { getProducts } from "@/server/data-access/queries";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { unstable_noStore as noStore } from "next/cache";
import { productsSearchParamsSchema } from "@/lib/validations/products-searchparams";

interface ProductsListProps {
  searchParams: PageProps["searchParams"];
}

export async function ProductsList({ searchParams }: ProductsListProps) {
  noStore();

  const { error } = productsSearchParamsSchema.safeParse(searchParams);

  const keysWithErrors = Object.keys(error?.flatten().fieldErrors ?? {});
  keysWithErrors.forEach((key) => {
    delete searchParams[key];
  });

  const products = await getProducts(searchParams);

  return (
    <ul className="grid grow gap-4 xs:grid-cols-2 md:grid-cols-3 lg:gap-10 xl:grid-cols-4">
      {products.map((product) => (
        <li key={product.id}>
          <ProductCard product={product} />
        </li>
      ))}
    </ul>
  );
}

export function ProductsListSkeleton() {
  const products = new Array(20).fill(null);

  return (
    <ul className="grid grow gap-4 xs:grid-cols-2 md:grid-cols-3 lg:gap-10 xl:grid-cols-4">
      {products.map((_, index) => (
        <li key={index}>
          <ProductCardSkeleton />
        </li>
      ))}
    </ul>
  );
}

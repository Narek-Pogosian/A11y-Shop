import { getProducts } from "@/server/data-access/queries";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { unstable_noStore as noStore } from "next/cache";
import { productsSearchParamsSchema } from "@/lib/validations/products-searchparams";
import { PAGE_SIZE } from "@/lib/constants/config";
import Pagination from "./pagination";

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
    <>
      <ul
        className="grid grow gap-4 xs:grid-cols-2 md:grid-cols-3 lg:gap-10 xl:grid-cols-4"
        id="product-list"
        tabIndex={-1}
      >
        {products.map((product) => (
          <li key={product.id}>
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <Pagination
        hasNext={products.length === PAGE_SIZE}
        hasPrevious={Number(searchParams.page) > 1}
        currentPage={
          typeof searchParams.page === "string" ? searchParams.page : 1
        }
      />
    </>
  );
}

export function ProductsListSkeleton() {
  const products = new Array(PAGE_SIZE).fill(null);

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

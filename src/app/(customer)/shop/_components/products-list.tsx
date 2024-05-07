import { getProducts } from "@/server/data-access/queries";
import { ProductCard, ProductCardSkeleton } from "./product-card";
import { unstable_noStore as noStore } from "next/cache";
import { PAGE_SIZE } from "@/config";
import { type ProductsSearchParams } from "@/lib/validations/products-searchparams";
import Pagination from "./pagination";

interface ProductsListProps {
  searchParams: ProductsSearchParams;
}

export async function ProductsList({ searchParams }: ProductsListProps) {
  noStore();

  const products = await getProducts(searchParams);

  if (products.length === 0) {
    return (
      <div className="pt-12 text-center text-lg font-bold">No products</div>
    );
  }

  return (
    <>
      <ul
        className="grid grow gap-8 xs:grid-cols-2 md:grid-cols-3 lg:gap-10 xl:grid-cols-4"
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
    <ul className="grid grow gap-8 xs:grid-cols-2 md:grid-cols-3 lg:gap-10 xl:grid-cols-4">
      {products.map((_, index) => (
        <li key={index}>
          <ProductCardSkeleton />
        </li>
      ))}
    </ul>
  );
}

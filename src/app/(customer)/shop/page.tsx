import { Suspense } from "react";
import {
  ProductsListSkeleton,
  ProductsList,
} from "./_components/products-list";
import PageTitle from "@/components/page-title";

function ShopPage({ searchParams }: PageProps) {
  return (
    <>
      <PageTitle>Shop</PageTitle>

      <Suspense
        fallback={
          <ProductsListSkeleton key={Object.values(searchParams).join("")} />
        }
      >
        <ProductsList searchParams={searchParams} />
      </Suspense>
    </>
  );
}

export default ShopPage;

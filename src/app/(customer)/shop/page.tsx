import { Suspense } from "react";
import {
  ProductsListSkeleton,
  ProductsList,
} from "./_components/products-list";
import PageTitle from "@/components/page-title";

export const dynamic = "force-dynamic";

function ShopPage({ searchParams }: PageProps) {
  return (
    <>
      <PageTitle>Shop</PageTitle>

      <Suspense fallback={<ProductsListSkeleton />}>
        <ProductsList searchParams={searchParams} />
      </Suspense>
    </>
  );
}

export default ShopPage;

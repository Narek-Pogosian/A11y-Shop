import { Suspense } from "react";
import {
  ProductsListSkeleton,
  ProductsList,
} from "./_components/products-list";
import PageTitle from "@/components/page-title";
import Filters from "./_components/filters";

function ShopPage({ searchParams }: PageProps) {
  return (
    <div className="flex h-full flex-col">
      <PageTitle>Shop</PageTitle>
      <Filters />
      <Suspense
        fallback={<ProductsListSkeleton />}
        key={Object.values(searchParams).join()}
      >
        <ProductsList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

export default ShopPage;

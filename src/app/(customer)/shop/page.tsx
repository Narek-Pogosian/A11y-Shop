import { Suspense } from "react";
import {
  ProductsListSkeleton,
  ProductsList,
} from "./_components/products-list";
import PageTitle from "@/components/page-title";
import Filters from "./_components/filters";
import { productsSearchParamsSchema } from "@/lib/validations/products-searchparams";

function ShopPage({ searchParams }: PageProps) {
  const { error } = productsSearchParamsSchema.safeParse(searchParams);

  const keysWithErrors = Object.keys(error?.flatten().fieldErrors ?? {});
  keysWithErrors.forEach((key) => {
    delete searchParams[key];
  });

  return (
    <div className="flex h-full flex-col">
      <PageTitle>Shop</PageTitle>
      <Filters searchParams={searchParams} />
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

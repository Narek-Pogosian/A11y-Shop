import { Suspense } from "react";
import {
  ProductsListSkeleton,
  ProductsList,
} from "./_components/products-list";
import PageTitle from "@/components/page-title";
import Filters from "./_components/filters";
import {
  type ProductsSearchParams,
  productsSearchParamsSchema,
} from "@/lib/validations/products-searchparams";
import { redirect } from "next/navigation";

function objectToParamsString(params: ProductsSearchParams) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
}

function ShopPage({ searchParams }: PageProps) {
  const { error } = productsSearchParamsSchema.safeParse(searchParams);

  const keysWithErrors = Object.keys(error?.flatten().fieldErrors ?? {});
  if (keysWithErrors.length > 0) {
    keysWithErrors.forEach((key) => {
      delete searchParams[key];
    });

    throw redirect(`/shop?${objectToParamsString(searchParams)}`);
  }

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

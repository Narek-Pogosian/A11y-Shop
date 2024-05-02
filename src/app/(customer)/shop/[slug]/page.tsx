import PageTitle from "@/components/page-title";
import { getProductBySlug } from "@/server/data-access/queries";
import { notFound } from "next/navigation";
import ProductCounter from "../_components/product-counter";
import { currency } from "@/lib/utils";

async function ProductPage({ params }: PageProps<"slug">) {
  const product = await getProductBySlug(params.slug);

  if (!product) notFound();

  return (
    <>
      <PageTitle>{product.name}</PageTitle>
      <div className="grid gap-8 sm:grid-cols-2">
        <div>
          <p className="sr-only">
            Price is {currency(parseFloat(product.price))}
          </p>
          <p aria-hidden className="mb-2 text-xl font-bold">
            {currency(parseFloat(product.price))}
          </p>
          <p className="mb-8 max-w-lg text-muted-foreground">
            {product.description}
          </p>
          <ProductCounter product={product} />
        </div>
        {product.image && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={product.image}
            alt={product.altText ?? ""}
            className="rounded"
          />
        )}
      </div>
    </>
  );
}

export default ProductPage;

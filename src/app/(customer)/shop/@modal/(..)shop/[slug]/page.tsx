import ProductModal from "../../_components/product-modal";
import ProductContent from "../../_components/product-content";
import { Suspense } from "react";

async function ProductModalPage({ params }: PageProps<"slug">) {
  return (
    <ProductModal>
      <Suspense fallback={<div>Loading..</div>}>
        <ProductContent slug={params.slug} />
      </Suspense>
    </ProductModal>
  );
}

export default ProductModalPage;

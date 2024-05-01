import { getProductBySlug } from "@/server/data-access/queries";
import ProductCounter from "../../_components/product-counter";

interface ProductContentProps {
  slug: string;
}

async function ProductContent({ slug }: ProductContentProps) {
  const product = await getProductBySlug(slug);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2 className="mb-2 text-xl font-bold">{product.name}</h2>
      <p className="mb-6 font-medium text-muted-foreground">
        {product.description}
      </p>
      <ProductCounter product={product} />
    </div>
  );
}

export default ProductContent;

import { getProductBySlug } from "@/server/data-access/queries";

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
      <p className="font-medium text-muted-foreground">{product.description}</p>

      <div className="mt-8 font-bold text-red-600">
        TODO: Counter and add to cart
      </div>
    </div>
  );
}

export default ProductContent;

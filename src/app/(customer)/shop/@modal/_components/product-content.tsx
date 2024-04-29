import { getProductBySlug } from "@/server/data-access/queries";

interface ProductContentProps {
  slug: string;
}

async function ProductContent({ slug }: ProductContentProps) {
  const product = await getProductBySlug(slug);

  return <p>{product?.description}</p>;
}

export default ProductContent;

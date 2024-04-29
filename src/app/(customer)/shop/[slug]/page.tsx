function ProductPage({ params }: PageProps<"slug">) {
  return <div>{params.slug}</div>;
}

export default ProductPage;

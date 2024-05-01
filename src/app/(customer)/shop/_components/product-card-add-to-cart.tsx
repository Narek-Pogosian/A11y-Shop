"use client";

import { type Product } from "@/server/db/schema";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";

interface ProductCardAddProps {
  product: Product;
}

function ProductCardAddToCart({ product }: ProductCardAddProps) {
  const { addToCart } = useCart();
  return (
    <Button
      size="icon"
      className="relative"
      onClick={() => addToCart({ product, quantity: 1, productId: product.id })}
    >
      <ShoppingBag className="size-6" aria-hidden />
      <span className="sr-only">Add to cart.</span>
    </Button>
  );
}

export default ProductCardAddToCart;

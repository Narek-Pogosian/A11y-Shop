"use client";

import { type Product } from "@/server/db/schema";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { announce } from "@react-aria/live-announcer";

interface ProductCardAddProps {
  product: Product;
}

function ProductCardAddToCart({ product }: ProductCardAddProps) {
  const { addToCart } = useCart();

  function handleAddToCart() {
    addToCart({ product, quantity: 1, productId: product.id });
    announce(`Added one ${product.name} to cart`, "assertive");
  }

  return (
    <Button size="icon" className="relative size-8" onClick={handleAddToCart}>
      <ShoppingBag className="size-5" aria-hidden />
      <span className="sr-only">Add to cart.</span>
    </Button>
  );
}

export default ProductCardAddToCart;

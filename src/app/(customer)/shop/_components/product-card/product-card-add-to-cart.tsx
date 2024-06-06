"use client";

import { Check, ShoppingCart } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { announce } from "@react-aria/live-announcer";
import { useState } from "react";
import { type Product } from "@/server/schema/products";

interface ProductCardAddProps {
  product: Product;
}

function ProductCardAddToCart({ product }: ProductCardAddProps) {
  const [hasAdded, setHasAdded] = useState(false);
  const { addToCart } = useCart();

  function handleAddToCart() {
    if (!hasAdded) {
      addToCart({ product, quantity: 1, productId: product.id });
      announce(`Added one ${product.name} to cart`, "assertive");

      setHasAdded(true);
      setTimeout(() => {
        setHasAdded(false);
      }, 600);
    }
  }

  return (
    <Button
      size="icon"
      className="relative size-9"
      onClick={handleAddToCart}
      aria-disabled={hasAdded}
    >
      {!hasAdded ? (
        <ShoppingCart className="size-5" aria-hidden strokeWidth={3} />
      ) : (
        <Check className="size-5" aria-hidden strokeWidth={3} />
      )}
      <span className="sr-only">Add to cart.</span>
    </Button>
  );
}

export default ProductCardAddToCart;

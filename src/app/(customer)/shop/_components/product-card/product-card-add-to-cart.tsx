"use client";

import { type Product } from "@/server/db/schema";
import { Check, ShoppingBag } from "lucide-react";
import { useCart } from "@/hooks/use-cart";
import { Button } from "@/components/ui/button";
import { announce } from "@react-aria/live-announcer";
import { useState } from "react";

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
    }

    setHasAdded(true);
    setTimeout(() => {
      setHasAdded(false);
    }, 800);
  }

  return (
    <Button
      size="icon"
      className="relative size-9"
      onClick={handleAddToCart}
      aria-disabled={hasAdded}
    >
      {!hasAdded ? (
        <ShoppingBag className="size-6" aria-hidden />
      ) : (
        <Check className="size-6" aria-hidden />
      )}
      <span className="sr-only">Add to cart.</span>
    </Button>
  );
}

export default ProductCardAddToCart;

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
    setHasAdded(true);
    addToCart({ product, quantity: 1, productId: product.id });
    announce(`Added one ${product.name} to cart`, "assertive");
    setTimeout(() => {
      setHasAdded(false);
    }, 800);
  }

  return (
    <Button
      size="icon"
      className="relative size-8 disabled:opacity-100"
      onClick={handleAddToCart}
      disabled={hasAdded}
    >
      {!hasAdded ? (
        <ShoppingBag className="size-5" aria-hidden />
      ) : (
        <Check className="size-5" aria-hidden />
      )}
      <span className="sr-only">Add to cart.</span>
    </Button>
  );
}

export default ProductCardAddToCart;

"use client";

import { type Product } from "@/server/db/schema";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";

interface AddToCartProps {
  product: Product;
  quantity?: number;
}

function AddToCart({ product, quantity = 1 }: AddToCartProps) {
  const { addToCart } = useCart();

  return (
    <Button
      size="icon"
      className="relative"
      onClick={() => addToCart({ product, quantity, productId: product.id })}
    >
      <ShoppingBag className="size-6" aria-hidden />
      <span className="sr-only">Add to cart.</span>
    </Button>
  );
}

export default AddToCart;

"use client";

import { type Product } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import { ShoppingBag } from "lucide-react";

interface AddToCartProps {
  product: Product;
  quantity?: number;
}

function AddToCart({ product, quantity = 1 }: AddToCartProps) {
  return (
    <Button>
      <ShoppingBag className="size-6" aria-hidden />
      <span className="sr-only">Add to cart.</span>
    </Button>
  );
}

export default AddToCart;

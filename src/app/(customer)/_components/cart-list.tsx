"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useCart } from "@/hooks/use-cart";

function CartList() {
  const { cartItems } = useCart();

  return (
    <ScrollArea className="h-full pr-3">
      {cartItems.map((item) => (
        <div key={item.productId}>{item.product.name}</div>
      ))}
    </ScrollArea>
  );
}

export default CartList;

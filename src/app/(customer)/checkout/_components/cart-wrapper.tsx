"use client";

import CartInfo from "../../_components/cart/cart-info";
import CartItem from "../../_components/cart/cart-item";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ScrollArea } from "@/components/ui/scroll-area";

function CartWrapper() {
  const isMounted = useIsMounted();
  const router = useRouter();
  const { cartItems } = useCart();

  useEffect(() => {
    if (cartItems.length === 0) {
      router.replace("/");
    }
  }, [cartItems, router]);

  if (!isMounted) {
    return null;
  }

  function handleSkipToForm() {
    const form = document.querySelector("#checkout-form");
    if (form) {
      form.querySelector("input")?.focus();
    }
  }

  return (
    <>
      <Button
        className="absolute right-4 top-4 scale-0 focus:scale-100"
        size="sm"
        onClick={handleSkipToForm}
      >
        Skip to form
      </Button>
      <ScrollArea>
        <ul className="max-h-[350px] min-w-60 space-y-6 pr-3">
          {cartItems.map((item) => (
            <CartItem key={item.productId} cartItem={item} />
          ))}
        </ul>
      </ScrollArea>
      <CartInfo />
    </>
  );
}

export default CartWrapper;

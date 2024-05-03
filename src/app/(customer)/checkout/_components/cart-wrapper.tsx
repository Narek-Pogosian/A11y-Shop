"use client";

import { useIsMounted } from "@/hooks/use-is-mounted";
import CartList from "../../_components/cart-list";
import CartInfo from "../../_components/cart-info";
import { Button } from "@/components/ui/button";

function CartWrapper() {
  const isMounted = useIsMounted();

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
      <CartList />
      <CartInfo />
    </>
  );
}

export default CartWrapper;

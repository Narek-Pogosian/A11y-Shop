"use client";

import { useIsMounted } from "@/hooks/use-is-mounted";
import CartList from "../../_components/cart-list";
import CartInfo from "../../_components/cart-info";

function CartWrapper() {
  const isMounted = useIsMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CartList />
      <CartInfo />
    </>
  );
}

export default CartWrapper;

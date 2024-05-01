"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { ShoppingBag } from "lucide-react";
import CartList from "./cart-list";
import { useRef } from "react";
import { currency, getTotalCartPrice } from "@/lib/utils";

function CartDrawer() {
  const { cartItems } = useCart();
  const isMounted = useIsMounted();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  function handleOpenFocus(e: Event) {
    if (!firstLinkRef.current) return;

    e.preventDefault();
    firstLinkRef.current?.focus();
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <ShoppingBag className="size-6" aria-hidden />
          <span className="sr-only">View your shopping cart.</span>
          {isMounted && cartItems.length > 0 && (
            <span
              className="absolute right-0 top-0 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
              aria-hidden
            >
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col" onOpenAutoFocus={handleOpenFocus}>
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <CartList firstLinkRef={firstLinkRef} />
            <div>
              <div className="space-y-2 py-6">
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">Shipment:</p>
                  <p className="text-lg font-medium">{currency(0)}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-lg font-bold">Total:</p>
                  <p className="text-lg font-medium">
                    {getTotalCartPrice(cartItems)}
                  </p>
                </div>
              </div>
              <Button className="w-full">Proceed to checkout</Button>
            </div>
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center">
            <p className="mb-4 text-xl font-semibold">Your cart is empty</p>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;

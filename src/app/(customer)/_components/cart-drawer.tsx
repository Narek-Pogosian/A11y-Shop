"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/hooks/use-cart";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { ShoppingBag } from "lucide-react";
import CartList from "./cart-list";

function CartDrawer() {
  const { cartItems } = useCart();
  const isMounted = useIsMounted();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <ShoppingBag className="size-6" aria-hidden />
          <span className="sr-only">View your shopping cart.</span>
          {isMounted && cartItems.length > 0 && (
            <span
              className="absolute right-0 top-0 inline-flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs text-primary-foreground"
              aria-hidden
            >
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
          <SheetDescription>Manage your cart items.</SheetDescription>
        </SheetHeader>
        <CartList />
        <div>
          <Button className="w-full">Procced to checkout</Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;

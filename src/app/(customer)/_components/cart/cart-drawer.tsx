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
import { useEffect, useRef, useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePathname } from "next/navigation";
import CartInfo from "./cart-info";
import CartItem from "./cart-item";
import Link from "next/link";

function CartDrawer() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useCart();

  const pathname = usePathname();
  const isMounted = useIsMounted();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  function handleOpenFocus(e: Event) {
    if (!firstLinkRef.current) return;

    e.preventDefault();
    firstLinkRef.current?.focus();
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="relative">
          <ShoppingBag className="size-6" aria-hidden />
          <span className="sr-only">View your shopping cart.</span>
          {isMounted && cartItems.length > 0 && (
            <span
              className="absolute right-0 top-0 inline-flex h-5 min-w-5 items-center justify-center rounded-full bg-brand-500 text-xs text-brand-foreground"
              aria-hidden
            >
              {cartItems.length}
            </span>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent
        className="flex flex-col px-2 py-6 sm:px-6"
        onOpenAutoFocus={handleOpenFocus}
      >
        <SheetHeader>
          <SheetTitle>Your Cart</SheetTitle>
        </SheetHeader>
        {cartItems.length > 0 ? (
          <>
            <ScrollArea className="h-full pr-3">
              <ul className="min-w-80 space-y-8">
                {cartItems.map((item, index) => (
                  <CartItem
                    key={item.productId}
                    ref={index === 0 ? firstLinkRef : undefined}
                    cartItem={item}
                  />
                ))}
              </ul>
            </ScrollArea>
            <>
              <CartInfo />
              <Button variant="secondary" asChild className="w-full">
                <Link href="/checkout">Proceed to checkout</Link>
              </Button>
            </>
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

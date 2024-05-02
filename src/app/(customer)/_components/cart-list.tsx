"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { currency } from "@/lib/utils";
import { Trash } from "lucide-react";
import { announce } from "@react-aria/live-announcer";
import Link from "next/link";
import Counter from "@/components/counter";

interface CartListProps {
  firstLinkRef: React.RefObject<HTMLAnchorElement>;
}

function CartList({ firstLinkRef }: CartListProps) {
  const { cartItems, deleteFromCart, decrementCartItem, incrementCartItem } =
    useCart();

  function handleRemoveProductFromCart(productId: number) {
    deleteFromCart(productId);
    announce("Product removed from cart", "polite");
  }

  return (
    <ScrollArea className="h-full pr-3">
      <ul className="space-y-6">
        {cartItems.map((item, index) => (
          <li key={item.productId} className="flex gap-4">
            {item.product.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.product.image ?? ""}
                width={130}
                height={90}
                alt={item.product.altText ?? ""}
                className="rounded"
                aria-hidden
              />
            ) : (
              <div
                className="h-[80px] w-[120px] rounded bg-accent"
                aria-hidden
              ></div>
            )}
            <div className="flex w-full flex-col pr-1 pt-1">
              <div className="flex w-full justify-between">
                <Link
                  href={`/shop/${item.product.slug}`}
                  className="text-lg font-semibold"
                  ref={index === 0 ? firstLinkRef : undefined}
                >
                  {item.product.name}
                </Link>
                <Button
                  variant="destructive"
                  size="icon"
                  className="size-8"
                  onClick={() => handleRemoveProductFromCart(item.productId)}
                >
                  <Trash className="size-5" aria-hidden />
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="mt-auto flex w-full items-center justify-between">
                <div className="font-medium text-muted-foreground">
                  <p className="sr-only">
                    Price is{" "}
                    {currency(parseFloat(item.product.price) * item.quantity)}
                  </p>
                  <p aria-hidden>
                    {currency(parseFloat(item.product.price) * item.quantity)}
                  </p>
                </div>

                <Counter
                  count={item.quantity}
                  decrement={() => decrementCartItem(item.productId)}
                  increment={() => incrementCartItem(item.productId)}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}

export default CartList;

"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { currency } from "@/lib/utils";
import { Trash } from "lucide-react";
import Link from "next/link";

interface CartListProps {
  firstLinkRef: React.RefObject<HTMLAnchorElement>;
}

function CartList({ firstLinkRef }: CartListProps) {
  const { cartItems, deleteFromCart } = useCart();

  return (
    <ScrollArea className="h-full pr-3">
      <ul className="space-y-6">
        {cartItems.map((item, index) => (
          <li key={item.productId} className="flex gap-4">
            {item.product.image ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={item.product.image ?? ""}
                width={120}
                height={80}
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
                  className="size-9"
                  onClick={() => deleteFromCart(item.productId)}
                >
                  <Trash className="size-5" />{" "}
                  <span className="sr-only">Remove</span>
                </Button>
              </div>

              <div className="mt-auto flex w-full justify-between">
                <div className="font-medium text-muted-foreground">
                  <span className="sr-only">Price: </span>
                  <span>
                    {currency(parseFloat(item.product.price) * item.quantity)}
                  </span>
                </div>

                <div>Counter {item.quantity}</div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </ScrollArea>
  );
}

export default CartList;

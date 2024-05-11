"use client";

import { useCart } from "@/hooks/use-cart";
import { formatCurrency, getTotalCartPrice } from "@/lib/utils";

function CartInfo() {
  const { cartItems } = useCart();

  return (
    <div className="mt-4 space-y-2 border-t py-6">
      <p className="flex items-center justify-between">
        <span className="text-lg font-bold">Shipment:</span>
        <span className="text-lg font-medium">{formatCurrency(0)}</span>
      </p>
      <div className="flex items-center justify-between">
        <span className="text-lg font-bold">Total:</span>
        <span className="text-lg font-medium">
          {getTotalCartPrice(cartItems)}
        </span>
      </div>
    </div>
  );
}

export default CartInfo;

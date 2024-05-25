"use client";

import { useCart } from "@/hooks/use-cart";
import { formatCurrency, getTotalCartPrice } from "@/lib/utils";

function CartInfo() {
  const { cartItems } = useCart();

  return (
    <div className="mt-4 space-y-2 border-t pb-4 pt-6">
      <p className="flex items-center">
        <span className="w-28 font-bold">Shipment:</span>
        <span className="font-medium">{formatCurrency(0)}</span>
      </p>
      <div className="flex items-center">
        <span className="w-28 font-bold">Total:</span>
        <span className="font-medium">{getTotalCartPrice(cartItems)}</span>
      </div>
    </div>
  );
}

export default CartInfo;

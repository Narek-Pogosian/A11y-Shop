import { useCart } from "@/hooks/use-cart";
import { currency, getTotalCartPrice } from "@/lib/utils";

function CartInfo() {
  const { cartItems } = useCart();

  return (
    <div className="space-y-2 py-6">
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Shipment:</p>
        <p className="text-lg font-medium">{currency(0)}</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-lg font-bold">Total:</p>
        <p className="text-lg font-medium">{getTotalCartPrice(cartItems)}</p>
      </div>
    </div>
  );
}

export default CartInfo;

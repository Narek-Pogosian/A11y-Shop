import { type CartItemType } from "@/context/cart-context/cart.types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function currency(price: number | string) {
  if (typeof price === "string") {
    price = parseFloat(price);
    if (isNaN(price)) return "0.00";
  }

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

export function getTotalCartPrice(cartItems: CartItemType[]) {
  const total = cartItems.reduce((total, item) => {
    return total + parseFloat(item.product.price) * item.quantity;
  }, 0);

  return currency(total);
}

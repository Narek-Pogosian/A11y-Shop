import { CartContext } from "@/context/cart-context";
import { useContext } from "react";

export const useCart = () => {
  const cartContext = useContext(CartContext);

  if (!cartContext)
    throw new Error("useCartContext must be inside a CartContextProvider");

  return cartContext;
};
